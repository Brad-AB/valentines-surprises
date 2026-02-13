import './App.css'
import LightPillar from './components/LightPillar';
import SplitText from "./components/SplitText";

function App() {
  return (
<div className="flex flex-col items-center justify-center min-h-screen"
style={{ 
    position: 'fixed', 
    top: 0, 
    left: 0,
    width: '100%', 
    height: '100vh'
  }}>
  <LightPillar
    topColor="#ff00a2"
    bottomColor="#e407dd"
    intensity={1}
    rotationSpeed={0.3}
    glowAmount={0.002}
    pillarWidth={3}
    pillarHeight={0.4}
    noiseIntensity={0.5}
    pillarRotation={25}
    interactive={true}
    mixBlendMode="screen"
    quality="high"
    />
    
</div>
  )
}

export default App
