const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/register', (req, res) => {

    User.findOne({ email: req.body.email })
        .then((user) => {
            if (user) {
                return res.send({
                    status: 400,
                    success: false,
                    message: 'El correo ya esta registrado'
                })
            } else {
                User.create(req.body)
                    .then((user) => {
                        return res.send({
                            status: 200,
                            success: true,
                            message: 'Usuario registrado exitosamente',
                            user
                        })
                    })
                    .catch((err) => {
                        res.send({
                            status: 500,
                            success: false,
                            message: 'Error al ingresar datos, por favor intentalo de nuevo mas tarde'
                        })
                    })
            }
        })
        .catch((err) => {
            console.log(err);
            res.send({
                status: 500,
                success: false,
                message: 'Error al ingresar datos, por favor intentalo de nuevo mas tarde'
            })
        })
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email, password })
        .select('id')
        .then((user) => {
            if (user) {
                return res.send({
                    status: 200,
                    success: true,
                    message: 'Usuario encontrado',
                    user
                })
            } else {
                return res.send({
                    status: 404,
                    success: false,
                    message: 'Correo o contraseña incorrectos'
                })
            }
        })
        .catch((err) => {
            console.log(err);
            res.send({
                status: 500,
                success: false,
                message: 'Error al ingresar datos, por favor intentalo de nuevo mas tarde'
            })
        })
});

router.get('/my_profile/:id', (req, res) => {
    const { id } = req.params;

    User.findById(id)
        .select('name email')
        .then((user) => {
            if (user) {
                return res.send({
                    status: 200,
                    success: true,
                    message: 'Usuario encontrado',
                    user
                })
            } else {
                return res.send({
                    status: 404,
                    success: false,
                    message: 'Usuario no encontrado'
                })
            }
        })
        .catch((err) => {
            console.log(err);
            res.send({
                status: 500,
                success: false,
                message: 'Error al ingresar datos, por favor intentalo de nuevo mas tarde'
            })
        })
});

module.exports = router;