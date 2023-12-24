# Namaste React - Episode 2

Welcome to the second episode of my React learning journey! In this episode, I explore the basics of React and set up a simple project using npm, react, react-dom, and the parcel bundler. This repository serves as a demonstration of the concepts covered in the episode.

## Project Structure

### Files

- **index.html**: The main HTML file of the project, where the React app is mounted.
- **app.js**: The JavaScript file where the React code is written and bundled using Parcel.

### Dependencies

- **react and react-dom**: Core libraries for building user interfaces in React.
- **parcel**: A fast, zero-configuration web application bundler.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/BNDPraveen/namaste-react.git

   ```

2. Navigate to the project directory:

   ```bash
   cd namaste-react

   ```

3. Install dependencies:

   ```bash
   npm install

   ```

4. Run the project using Parcel:

   ```bash
   npx parcel index.html

   ```

5. Open your browser:
   Open your browser and go to http://localhost:1234 to view the React app.

## Learning Highlights

- Installation of React and ReactDOM using npm.
- Setting up a simple React component using createElement.
- Integrating React with the HTML file and mounting the app using ReactDOM.createRoot.
- Utilizing Parcel as a zero-config bundler for the project.

## Why parcel

- Creates Dev Build
- Creates Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in c++
- Caching - Faster Build
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling
- Diagnostics
- Error Handling
- HTTPS
- Tree Spaking - remove unused code
- Different dev and prod bundles

## Babel

- jsx => Babel-transpiles it to React.createElement => ReactElement-JS object => HTML Element(render)

- Babel is a JavaScript compiler that allows you to write code using the latest ECMAScript features. It plays a crucial role in the React ecosystem by transpiling JSX (JavaScript XML) syntax into standard JavaScript code.
