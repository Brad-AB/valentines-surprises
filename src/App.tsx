import { useNavigate } from 'react-router-dom';
import './App.css'
import LightPillar from './components/LightPillar';
import SplitText from "./components/SplitText";

function App() {
  const navigate = useNavigate();
  
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
    bottomColor="#ff1ac6"
    intensity={1}
    rotationSpeed={0.5}
    glowAmount={0.002}
    pillarWidth={3}
    pillarHeight={0.4}
    noiseIntensity={0.5}
    pillarRotation={25}
    interactive={false}
    mixBlendMode="screen"
    quality="high"
    />
    <div className="flex flex-col items-center relative z-10">
    <SplitText
      text="Valentines Day"
      className="text-6xl font-semibold text-center text-white font-serif"
      delay={320}
      duration={2}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
      textAlign="center"
      />
        <button 
          className= "mt-8 px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
          onClick={() => navigate('/surprise')}
        >
           Will you be my valentine?
        </button>
  </div>
</div>
  )
}

export default App
