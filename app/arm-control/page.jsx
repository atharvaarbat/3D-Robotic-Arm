'use client'
import { Suspense, useRef, useState } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera, OrthographicCamera, Stage, AccumulativeShadows, RandomizedLight, Environment, Center, PresentationControls, MeshReflectorMaterial, Float } from '@react-three/drei'
import { Color, RectAreaLight } from "three";
import { Model } from "./Arm";
import { radialDist } from "./Utlities";




function Three() {
    const ref = useRef()
    const [targetPosition, setTargetPosition] = useState([0, 0, 0]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setTargetPosition((prevPosition) => {
//       const newPosition = [...prevPosition];
//       newPosition[name] = parseFloat(value);
//       return newPosition;
//     });
//   };
    // const { nodes, materials } = useGLTF('/untitled.gltf')
    const [controls, setControls] = useState({
        base1: 0,
        base2: 0,
        base3: 0,
        base4: 0,
        base5: 0,
        base6: 0,
        radius: 0,
    })
    function handleInputChange(e) {
        const { name, value } = e.target;
        setControls(prevControls => ({ ...prevControls, [name]: value }));
    }
    function handelRadiusChange(e) {
        const { theta, gamma, mid} = radialDist(e.target.value)
        setControls(prevControls => ({ ...prevControls, base2: theta + 5.44, base3: mid, base5: gamma + 4.03, radius: e.target.value }));
        console.log(theta, gamma)
    }
    return (
        <div className="relative grid grid-cols-1 md:grid-cols-2 h-screen bg-black text-white">

            



            <Canvas camera={{ fov: 18 }}
                style={{ height: '100%', width: '100%' }}
                frameloop="demand">
                <color attach='background' args={['#101010']} />

                <OrthographicCamera far={0} near={1} />
                <Suspense fallback={'ss'}>
                    <ambientLight intensity={2} />
                    <ambientLight intensity={0.1} />
                    <directionalLight color="white" position={[0, 0, 5]} />
                    <spotLight intensity={10} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />

                    <Stage environment={null} >
                        <Center top>
                            {/* <Float speed={2}
                                rotationIntensity={0}
                                floatIntensity={1}
                                floatingRange={[0.5, 1]}
                            > */}
                            {/* <Model/> */}
                            <>

                                <Model aeroshell={true} controls={controls} targetPosition={targetPosition} />
                            </>
                            {/* </Float> */}
                        </Center>

                    </Stage>



                    <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                </Suspense>
                <AccumulativeShadows>
                    <RandomizedLight position={[2, 5, 5]} />

                </AccumulativeShadows>

                {/* <Environment preset="city" background blur={2} /> */}
            </Canvas>
            <div className="flex flex-col space-y-2">
                <p className="text-white text-lg ">
                    You can rotate, orbit and pan the camera.
                </p>
                <div className="flex items-center gap-4">
                    <label htmlFor="base1" className="text-white">base1</label>
                    <input 
                        type="range" 
                        id="base1" 
                        name="base1" 
                        min={0} 
                        max={6.28} 
                        step={0.01} 
                        value={controls.base1} 
                        onChange={handleInputChange} 
                        className="w-full max-w-xl bg-gray-700 appearance-none h-2 p-1 rounded-lg" 
                    />
                    <span className="text-white">{controls.base1}</span>
                </div>
                <div className="flex items-center gap-4">
                    <label htmlFor="base2" className="text-white">base2</label>
                    <input 
                        type="range" 
                        id="base2" 
                        name="base2" 
                        min={4.44} 
                        max={8.1} 
                        step={0.01} 
                        value={controls.base2} 
                        onChange={handleInputChange} 
                        className="w-full max-w-xl bg-gray-700 appearance-none h-2 p-1 rounded-lg" 
                    />
                    <span className="text-white">{controls.base2}</span>
                </div>
                <div className="flex items-center gap-4">
                    <label htmlFor="base3" className="text-white">base3</label>
                    <input 
                        type="range" 
                        id="base3" 
                        name="base3" 
                        min={2} 
                        max={7.35} 
                        step={0.01} 
                        value={controls.base3} 
                        onChange={handleInputChange} 
                        className="w-full max-w-xl bg-gray-700 appearance-none h-2 p-1 rounded-lg" 
                    />
                    <span className="text-white">{controls.base3}</span>
                </div>
                <div className="flex items-center gap-4">
                    <label htmlFor="base4" className="text-white">base4</label>
                    <input 
                        type="range" 
                        id="base4" 
                        name="base4" 
                        min={0} 
                        max={6.28} 
                        step={0.01} 
                        value={controls.base4} 
                        onChange={handleInputChange} 
                        className="w-full max-w-xl bg-gray-700 appearance-none h-2 p-1 rounded-lg" 
                    />
                    <span className="text-white">{controls.base4}</span>
                </div>
                <div className="flex items-center gap-4">
                    <label htmlFor="base5" className="text-white">base5</label>
                    <input 
                        type="range" 
                        id="base5" 
                        name="base5" 
                        min={3.75} 
                        max={9} 
                        step={0.01} 
                        value={controls.base5} 
                        onChange={handleInputChange} 
                        className="w-full max-w-xl bg-gray-700 appearance-none h-2 p-1 rounded-lg" 
                    />
                    <span className="text-white">{controls.base5}</span>
                </div>
                <div className="flex items-center gap-4">
                    <label htmlFor="base6" className="text-white">base6</label>
                    <input 
                        type="range" 
                        id="base6" 
                        name="base6" 
                        min={0} 
                        max={6.28} 
                        step={0.01} 
                        value={controls.base6} 
                        onChange={handleInputChange} 
                        className="w-full max-w-xl bg-gray-700 appearance-none h-2 p-1 rounded-lg" 
                    />
                    <span className="text-white">{controls.base6}</span>
                </div>
                {
                JSON.stringify(controls)
            }
            <div className="flex items-center p-4 gap-4">
                Radial distance from center to tip
            <input type='range' className="text-black" min={-0.82} max={0.82} step={0.01} onChange={(e)=> handelRadiusChange(e)} />
            <p>{(Number(controls.radius) + 0.82)}</p>
            </div>
            {
                
            }
            </div>
            
           
            
        </div>
    
        )
}

export default Three






useGLTF.preload('/Three24.glb')