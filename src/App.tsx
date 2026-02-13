import { useNavigate } from 'react-router-dom';
import './App.css'
import LightPillar from './components/LightPillar';
import SplitText from "./components/SplitText";
import { Heart } from 'lucide-react';

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
          className="mt-8 px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md flex items-center justify-center space-x-2"
          onClick={() => navigate('/surprise')}
        >
          <Heart className="text-white" size={20} />
          <span>Will you be my valentine?</span>
        </button>
  </div>
</div>
  )
}

export default App
