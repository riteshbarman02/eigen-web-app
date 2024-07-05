# Poisson's Ratio Visualization

This project demonstrates a simple visualization of Poisson's Ratio using Two.js. Poisson's Ratio is a measure of the deformation in materials when subjected to stress. The project provides interactive sliders to adjust parameters and visualize the effects on a graphical representation.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [HTML Structure](#html-structure)
- [CSS Styling](#css-styling)
- [JavaScript Logic](#javascript-logic)
- [License](#license)

## Overview

This project uses HTML, CSS, and JavaScript to create an interactive webpage that allows users to explore the concept of Poisson's Ratio. Two.js is utilized for graphical rendering, and sliders are provided to adjust material properties.

## Prerequisites

- Web browser with JavaScript enabled.
- Internet connection to load external libraries (Two.js).

## Installation

1. Clone or download the project repository.
2. Open the `index.html` file in a web browser.

## Usage

1. Open the webpage in a web browser.
2. Adjust the sliders to modify the material properties (μ and P).
3. Observe the graphical representation to visualize the effects of Poisson's Ratio.

## HTML Structure

The `index.html` file defines the structure of the webpage, including the title, stylesheet link, viewport configuration, and script reference. The content is organized into a container with sliders for user interaction.

## CSS Styling

The `main.css` file provides styles for the webpage, including container styles, canvas styles, input styles, and responsive design for different screen sizes.

## JavaScript Logic

The `main.js` file contains the logic for the project. Key functionalities include:

## Variables

### `ob2`
Represents the HTML element with the ID "canvas_1".

### `slider_y1`, `slider_y2`
Constants representing slider y-coordinates.

### `ax`, `bx`, `by`, `ay`
Define initial coordinates for the lines.

### `two`
Two.js instance for rendering graphics.

### `domian`
An instance of the `eigenLine` class representing a line with perpendicular bar ends using Two.js.

### `points1`
An array of Two.js `Anchor` points defining the vertices of a shape.

### `graph1`
An instance of the `Graph` class used to create a graph based on the given points.

### `statement`
A Two.js text element displaying a statement about Poisson's ratio variations.

### `mue`, `load`
HTML input elements for sliders.

### `mueval`, `loadval`
Variables to store slider values.

### `initialValue`
Initial value for sliders.

## Functions

### Slider Functionality

#### `mue.oninput`
Event listener for the `mue` slider. Updates `mueval` and `loadval` based on user input and triggers a Two.js update.

#### `load.oninput`
Event listener for the `load` slider. Updates points based on slider values, adjusting the position of the shape dynamically.

---

Feel free to adjust the level of detail and add more information as needed for your documentation. This Markdown document provides a brief overview of the variables and functions in our JavaScript code.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to explore, modify, and contribute to enhance the understanding of Poisson's Ratio through this visualization.
