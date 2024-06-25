# Three.js Interactive Arm Control Project

This project is a 3D interactive application built with React, `@react-three/fiber`, and `@react-three/drei` to render and control a 3D model of an arm. Users can manipulate various joints and the radial distance of the arm's tip from the center through a set of sliders.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [Page.jsx](#pagejsx)
  - [Utilities.js](#utilitiesjs)
- [Features](#features)
- [How It Works](#how-it-works)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/threejs-arm-control.git
    cd threejs-arm-control
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm run dev
    ```

## Usage

After starting the development server, open your browser and navigate to `http://localhost:3000`. You will see the 3D arm model, which you can control using the sliders on the right side of the screen.

## Components

### Page.jsx

`Page.jsx` is the main component that sets up the 3D scene and handles user interactions.

- **Three.js Setup**: The scene is rendered using the `Canvas` component from `@react-three/fiber`. Various Drei components such as `Stage`, `OrbitControls`, and `AccumulativeShadows` are used to enhance the 3D environment.
- **State Management**: The component maintains the state for the arm controls using React's `useState` hook. The state includes positions for different bases (`base1` to `base6`) and the radius.
- **Event Handlers**: The `handleInputChange` function updates the control values when sliders are moved. The `handelRadiusChange` function calculates new positions for certain bases based on the radial distance using the `radialDist` function from `Utilities.js`.

### Utilities.js

`Utilities.js` contains utility functions used within the project.

- **radialDist**: This function calculates angles (`theta` and `gamma`) and a mid-value based on the input radius. These values are used to adjust the arm's joints dynamically.

```js
export function radialDist(r){
    let x = Number(r);
    let y = 0.824839;
    let z = 0.722161;
    let half = x / 2;
    let alpha = Math.asin(half / y);
    let beta = Math.asin(half / z);

    return {
        theta: 1.5708 - alpha,
        gamma: 1.5708 - beta,
        mid: alpha + beta
    };
}
```

## Features

- **Interactive 3D Model**: Users can view and interact with a 3D arm model.
- **Control Panel**: A set of sliders allows users to manipulate the arm's joints and its radial distance from the center.
- **Dynamic Updates**: The arm's position updates in real-time as the sliders are adjusted.

## How It Works

1. **Rendering the Scene**:
   - The `Canvas` component sets up the 3D rendering context.
   - `Stage` and `Center` components position the 3D model in the scene.
   - `OrbitControls` allows users to rotate, zoom, and pan around the scene.

2. **Handling User Input**:
   - Sliders are used to update the state variables (`base1` to `base6` and `radius`).
   - `handleInputChange` updates the corresponding state based on slider input.
   - `handelRadiusChange` uses the `radialDist` function to calculate angles and mid-values, updating the arm's position accordingly.

3. **Utility Calculations**:
   - The `radialDist` function computes the necessary angles for adjusting the arm based on the input radius, ensuring smooth and accurate transformations.


---

This project demonstrates the integration of React with Three.js for creating interactive 3D applications, providing a hands-on experience with real-time 3D rendering and user interaction. Enjoy exploring and modifying the arm model!
