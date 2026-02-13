import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Heart } from 'lucide-react';
import LightPillar from './LightPillar';
import SplitText from './SplitText';

const YesNoForm: React.FC = () => {
  const [response, setResponse] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (answer: string) => {
    setResponse(answer);
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = 'service_3sjsj3m';
      const templateId = 'template_2k1uvgl';
      const publicKey = 'U6tb1QLxwRYgT5vpf';

      const templateParams = {
        to_email: 'bradallenbecker@gmail.com', // Replace with your email
        message: `Response: ${answer}`,
        timestamp: new Date().toLocaleString(),
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      alert('Thank you for your response! Your answer has been sent.');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error submitting your response. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh' }}>
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
      
      <div className="flex flex-col items-center relative z-10 p-8">
        <div className="flex items-center justify-center mb-8">
          <Heart className="text-red-500 mr-3 animate-pulse" size={32} />
          <SplitText
            text="Will you be my Valentine?"
            className="text-4xl font-bold text-center text-white font-serif"
            delay={100}
            duration={1.5}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <Heart className="text-red-500 ml-3 animate-pulse" size={32} />
        </div>

        <div className="space-y-6 mt-8">
          <button
            onClick={() => handleSubmit('Yes')}
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#ff00a2] to-[#ff1ac6] hover:from-[#ff00a2] hover:to-[#ff1ac6] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 shadow-md"
          >
            <Heart className="text-white" size={20} />
            <span>{isSubmitting ? 'Submitting...' : 'Yes, I will! 💕'}</span>
          </button>

          <button
            onClick={() => handleSubmit('No')}
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 shadow-md"
          >
            <Heart className="text-white" size={20} />
            <span>{isSubmitting ? 'Submitting...' : 'Maybe next time 💔'}</span>
          </button>
        </div>

        {response && (
          <div className="mt-8 p-4 bg-pink-50/90 rounded-lg border border-pink-200 backdrop-blur-sm">
            <p className="text-white font-medium">
              You answered: <span className="font-bold text-pink-200">{response}</span>
            </p>
          </div>
        )}

        <button 
          className="mt-8 px-8 py-4 bg-gradient-to-r from-[#ff00a2] to-[#ff1ac6] hover:from-[#ff00a2] hover:to-[#ff1ac6] text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md flex items-center justify-center space-x-2"
          onClick={() => navigate('/valentines-surprises')}
        >
          <Heart className="text-white" size={20} />
          <span>Return Home</span>
        </button>
      </div>
    </div>
  );
};

export default YesNoForm;
