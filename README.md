Full-Stack To-Do List Web App
A simple full-stack To-Do List web app built with React for the front-end and Node.js/Express for the back-end, using MongoDB for data storage. This app allows users to add, update, and delete tasks, as well as authenticate with JWT tokens for secure access to the dashboard.

Features
User Authentication: JWT-based authentication to protect the dashboard.
Add, Edit, Delete Tasks: Manage tasks with options to add, edit, and delete them.
Responsive Design: Built with Tailwind CSS for a responsive UI.
Real-time Updates: Use of React to dynamically update the UI when tasks are added, modified, or removed.
Secure Endpoints: RESTful APIs secured with JWT tokens.
Tech Stack
Front-End
React.js: The core library for building the user interface.
Next.js: React framework for server-side rendering and routing.
Tailwind CSS: Utility-first CSS framework for fast UI design.
Axios: HTTP client to make requests to the back-end.
React Toastify: For notifications on user actions.
JS Cookie: To manage cookies for authentication.
Back-End
Node.js: JavaScript runtime for the server.
Express.js: Web framework for handling API requests.
MongoDB: NoSQL database for storing tasks and user data.
Mongoose: ODM for MongoDB to interact with the database.
JWT (JSON Web Tokens): For user authentication.
Bcrypt: For hashing passwords.
Cookie-Parser: Middleware to parse cookies.
Nodemailer: To send emails (e.g., for password recovery or task notifications).
Cors: For cross-origin requests.