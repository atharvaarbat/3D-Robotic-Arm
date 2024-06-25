'use client'
import React from 'react'
import { Suspense, useRef, useState } from "react";
import { useGLTF } from '@react-three/drei'

export function Model({
    controls,
    targetPosition
}) {


    const { nodes, materials } = useGLTF('/arm.glb')

    return (
        <group dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube019.geometry}
                material={materials.Weiss_Körnung}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube019_1.geometry}
                material={materials['Steel_brushed01.001']}
            />
            <group position={[0.031, 0.043, -0.184]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube024.geometry}
                    material={materials.Grau_plastic}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube024_1.geometry}
                    material={materials.Brass}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube024_2.geometry}
                    material={materials['Steel_brushed01.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube024_3.geometry}
                    material={materials.Orange}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube024_4.geometry}
                    material={materials.Blau}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube024_5.geometry}
                    material={materials.Grün}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Link0NBolt.geometry}
                material={materials['Steel_brushed01.001']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Link1N.geometry}
                material={materials.Base0}
                position={[0, 0.216, 0]}
                rotation={[0, controls.base1, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Link2N.geometry}
                    material={materials.ARM0}
                    position={[-0.167, 0.164, 0]}
                    rotation={[controls.base2, 0, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Link3N.geometry}
                        material={materials.BASE2}
                        position={[0.021, 0.819, 0]}
                        rotation={[controls.base3, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Link4N.geometry}
                            material={materials.ARM1}
                            position={[0.146, 0, 0.148]}
                            rotation={[0, 0, controls.base4]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Link5N.geometry}
                                material={materials.BASE3}
                                position={[-0.097, 0, 0.732]}
                                rotation={[controls.base5, 0, 0]}
                            >
                                <group position={[0.096, -0.001, 0.088]} rotation={[0, 0, controls.base6]}>
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Circle019.geometry}
                                        material={materials.Weiss_Körnung}
                                    />
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Circle019_1.geometry}
                                        material={materials['Steel_brushed01.001']}
                                    />
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Circle019_2.geometry}
                                        material={materials['Steel_brushed01.002']}
                                    />
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Circle019_3.geometry}
                                        material={materials.Kontakt}
                                    />
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Circle019_4.geometry}
                                        material={materials['Material.001']}
                                    />
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Circle019_5.geometry}
                                        material={materials.Orange}
                                    />
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Circle019_6.geometry}
                                        material={materials.Blau}
                                    />
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Circle019_7.geometry}
                                        material={materials.Grün}
                                    />
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes['Claw-brecket'].geometry}
                                        material={materials['Allu-Mat.Dunkel']}
                                        position={[0.001, 0.002, 0.108]}>
                                        <mesh
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Cabel.geometry}
                                            material={materials['Platik-Scwarz.Kabel.001']}
                                            position={[0, -0.044, 0.11]}
                                        />
                                        <mesh
                                            castShadow
                                            receiveShadow
                                            geometry={nodes['Claw-Brecket-Bolt'].geometry}
                                            material={materials['Stahl.002']}
                                            position={[0, 0, -0.011]}
                                        />
                                        <group position={[0, 0, 0.139]}>
                                            <mesh
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Gripper002.geometry}
                                                material={materials['Allu-Mat.002']}
                                            />
                                            <mesh
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Gripper002_1.geometry}
                                                material={materials['Allu-Mat.ON-robot']}
                                            />
                                            <mesh
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Gripper002_2.geometry}
                                                material={materials['Gumi-Schwarz.002']}
                                            />
                                            <group position={[0, 0.034, 0.039]}>
                                                <mesh
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Circle010.geometry}
                                                    material={materials['Allu-Mat.002']}
                                                />
                                                <mesh
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Circle010_1.geometry}
                                                    material={materials['Gumi-Schwarz.002']}
                                                />
                                                <mesh
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Circle010_2.geometry}
                                                    material={materials.Messing}
                                                />
                                                <mesh
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Circle010_3.geometry}
                                                    material={materials['Stahl.002']}
                                                />
                                                <group position={[0, -0.005, 0.125]}>
                                                    <mesh
                                                        castShadow
                                                        receiveShadow
                                                        geometry={nodes.Circle008.geometry}
                                                        material={materials['Allu-Mat.002']}
                                                    />
                                                    <mesh
                                                        castShadow
                                                        receiveShadow
                                                        geometry={nodes.Circle008_1.geometry}
                                                        material={materials['Gumi-Schwarz.002']}
                                                    />
                                                </group>
                                            </group>
                                            <group position={[0, 0.015, 0.077]}>
                                                <mesh
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Circle004.geometry}
                                                    material={materials['Allu-Mat.002']}
                                                />
                                                <mesh
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Circle004_1.geometry}
                                                    material={materials.Messing}
                                                />
                                                <mesh
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Circle004_2.geometry}
                                                    material={materials['Stahl.002']}
                                                />
                                            </group>
                                            <group position={[0, -0.034, 0.039]}>
                                                <mesh
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Circle003.geometry}
                                                    material={materials['Allu-Mat.002']}
                                                />
                                                <mesh
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Circle003_1.geometry}
                                                    material={materials['Gumi-Schwarz.002']}
                                                />
                                                <mesh
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Circle003_2.geometry}
                                                    material={materials.Messing}
                                                />
                                                <mesh
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Circle003_3.geometry}
                                                    material={materials['Stahl.002']}
                                                />
                                                <group position={[0, 0.005, 0.125]}>
                                                    <mesh
                                                        castShadow
                                                        receiveShadow
                                                        geometry={nodes.Circle002.geometry}
                                                        material={materials['Allu-Mat.002']}
                                                    />
                                                    <mesh
                                                        castShadow
                                                        receiveShadow
                                                        geometry={nodes.Circle002_1.geometry}
                                                        material={materials['Gumi-Schwarz.002']}
                                                    />
                                                </group>
                                            </group>
                                            <group position={[0, -0.015, 0.077]}>
                                                <mesh
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Circle006.geometry}
                                                    material={materials['Allu-Mat.002']}
                                                />
                                                <mesh
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Circle006_1.geometry}
                                                    material={materials.Messing}
                                                />
                                                <mesh
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Circle006_2.geometry}
                                                    material={materials['Stahl.002']}
                                                />
                                            </group>
                                        </group>
                                        <group position={[0, 0.034, 0.177]}>
                                            <mesh
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Cylinder011.geometry}
                                                material={materials.Stahl}
                                            />
                                            <mesh
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Cylinder011_1.geometry}
                                                material={materials['ABB-red']}
                                            />
                                            <mesh
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Cylinder011_2.geometry}
                                                material={materials['ABB-Green']}
                                            />
                                        </group>
                                        <mesh
                                            castShadow
                                            receiveShadow
                                            geometry={nodes['wrist-Bolt'].geometry}
                                            material={materials['Stahl.002']}
                                            position={[0, 0.001, -0.006]}
                                        />
                                    </mesh>
                                    <group position={[-0.041, 0.071, 0.066]} rotation={[-1.628, -0.522, 1.517]}>
                                        <mesh
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Cylinder009.geometry}
                                            material={materials['Metal.006']}
                                        />
                                        <mesh
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Cylinder009_1.geometry}
                                            material={materials['Gold.002']}
                                        />
                                        <mesh
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Cylinder009_2.geometry}
                                            material={materials.Grünpastic}
                                        />
                                        <mesh
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Cylinder009_3.geometry}
                                            material={materials['Platik-Scwarz.Kabel.001']}
                                        />
                                    </group>
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes['Plug-Cap001'].geometry}
                                        material={materials['Steel_brushed01.002']}
                                        position={[-0.063, 0.039, 0.067]}
                                        rotation={[-Math.PI / 2, -0.542, 0]}
                                    />
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes['Plug-Cap005'].geometry}
                                        material={materials['Steel_brushed01.002']}
                                        position={[-0.033, 0.058, 0.067]}
                                        rotation={[-Math.PI / 2, -0.531, 0]}
                                    />
                                </group>
                            </mesh>
                        </mesh>
                    </mesh>
                </mesh>
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube020.geometry}
                material={materials.Steel_brushed01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube020_1.geometry}
                material={materials['Steel_brushed01.001']}
            />
        </group>
    )
}

useGLTF.preload('/arm.glb')