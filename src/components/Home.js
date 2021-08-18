import React from 'react' 
import { Canvas } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei';


function Box() {
    return (
        <mesh>
            <boxBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color="hotpink" />        
        </mesh>
    )
}

function Home() {
    return (
        <div style={{ position: "relative", width: 500, height: 500 }}>
            <Canvas>
                <OrbitControls />
                <Box />
            </Canvas>
        </div>
        
    )
    
}

export default Home;