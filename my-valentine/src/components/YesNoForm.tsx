import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Heart } from 'lucide-react';

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-red-100 p-8 animate-fade-in">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-10 max-w-md w-full text-center border border-pink-200">
        <div className="flex items-center justify-center mb-8">
          <Heart className="text-red-500 mr-3 animate-pulse" size={32} />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
            Will you be my Valentine?
          </h1>
          <Heart className="text-red-500 ml-3 animate-pulse" size={32} />
        </div>

        <div className="space-y-6">
          <button
            onClick={() => handleSubmit('Yes')}
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
          >
            <Heart className="text-white" size={20} />
            <span>{isSubmitting ? 'Submitting...' : 'Yes, I will! 💕'}</span>
          </button>

          <button
            onClick={() => handleSubmit('No')}
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
          >
            <Heart className="text-white" size={20} />
            <span>{isSubmitting ? 'Submitting...' : 'Maybe next time 💔'}</span>
          </button>
        </div>

        {response && (
          <div className="mt-8 p-4 bg-pink-50 rounded-lg border border-pink-200">
            <p className="text-gray-700 font-medium">
              You answered: <span className="font-bold text-pink-600">{response}</span>
            </p>
          </div>
        )}

        <button 
          className= "mt-8 px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
          onClick={() => navigate('/valentines-surprises')}
        >
           Return Home
        </button>
      </div>
    </div>
  );
};

export default YesNoForm;
