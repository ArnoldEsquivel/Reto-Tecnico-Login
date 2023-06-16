The project is created in a monorepo to facilitate handling both back and front.
The npm dependency nom-run-all is used to run both services in the same terminal.

Project Installation:

Clone this repository:
  - git clone https://github.com/ArnoldEsquivel/Reto-Tecnico-Login.git

Install dependencies:
  - Back
    - npm i
    
   - Front
     - cd /client/
     - npm i

Once the back and front dependencies are installed, we run the project in the development environment:
  - npm run dev


Respuestas de las preguntas tecnicas:
  - JavaScript Language:
    - a.What is the difference between null and undefined in JavaScript?
        - Null is a type of value that is intentionally declared to indicate that something is empty, but declared, and undefined refers to the fact that the declaration of the object or function is not recognized

     - b.Explain the concept of closures in JavaScript with an example.
        - Is when a child function has access to the values of a parent function, very similar to encapsulation

      - c.What is the event loop in JavaScript and how does it work?
        - Handles asynchronous tasks using a stack and queue, as the tasks complete they are executed without blocking the main code
    
    Node.js Framework:
      - a.What is Node.js and what are its main features?
        - Node.js is a server-side JavaScript execution environment that runs on Google's V8 engine. Its main features are: handling of events and asynchronous operations, access to the file system, creation of web servers and APIs.

       - b.Explain the concept of asynchronous programming in Node.js.
         -  Allows code to run non-blocking, which means that operations can be performed in the background while the program continues to execute
        
       - c.How does Node.js handle concurrent requests efficiently?
         -  Uses asynchronous, non-blocking operations, allowing multiple requests to be processed simultaneously without significant delays
    
    React Framework:
      - a.What is React.js and why is it popular for building user interfaces?
          - It is a Javascript library that simplifies the use of reactive components, in addition to being used to create SPA's, part of what has made it very popular.
        
       - b.Explain the concept of virtual DOM and its advantages.
         - The Virtual DOM is an in-memory representation of the DOM element structure, which allows for efficient and fast updates in the user interface.
    
       - c.How does React handle component lifecycle events?
          - React handles component lifecycle events using predefined methods, such as componentDidMount or useEffect, componentDidUpdate or useState, and componentWillUnmount, to execute specific actions at different stages of a component's lifecycle.
