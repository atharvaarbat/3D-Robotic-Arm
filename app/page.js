import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Robotic Arm Three.js - Interactive Arm Control</h1>
          <p>Made with ❤️ by Atharva Arbat</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p>This project is a 3D interactive application built with React, @react-three/fiber, and @react-three/drei. It allows users to manipulate various joints and the radial distance of a 3D arm model using a set of sliders.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="list-disc list-inside">
            <li>Interactive 3D model of an arm</li>
            <li>Control panel with sliders for adjusting joint positions</li>
            <li>Real-time updates of the 3D model</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Installation</h2>
          <pre className="bg-gray-800 p-4 rounded">
            <code>
              {`git clone https://github.com/atharvaarbat/3D-Robotic-Arm.git
cd 3D-Robotic-Arm
npm install
npm run dev`}
            </code>
          </pre>
        </section>

        <section className="mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Started</h2>
          <a href="/arm-control" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Project
          </a>
        </section>
      </main>

      <footer className="bg-gray-800 p-4 text-center">
        <p>&copy; 2024 Three.js Interactive Arm Control. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
