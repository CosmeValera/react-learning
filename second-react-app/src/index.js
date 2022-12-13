import React from "react";
import ReactDOM from "react-dom";
import 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap';
// import "style.css";
import App from "./App";

// /**
// Challenge: Project setup
// Create a components` folder
// Create the following components in separate files inside
// the components folder. In each one, just render an `hl`
// with the name of the component (e.g. return <h1>Navbar goes herek/h1>):
// Navbar
// Main
// Create an App component outside the components folder (sibling to
// the index.js file)
// Have App render the Navbar and Main components
// Import and render the App component inside of index.js using ReactDOM
// - At this point you should have your "Navbar goes here" etc. showing up
// in the mini-browser.
// Go to Google fonts and get the "Inter" font with weights 400, 600, and 700.
// Put the links to those fonts ABOVE the style.css link in index.html (Use
// the `<link/>` elements instead of the @import or npm options for getting
// the fonts. You may need to do some extra research to figure out how this
// works if you haven't done it before)
// */



ReactDOM.render(<App />, document.querySelector("#root"));