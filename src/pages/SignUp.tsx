import React, { useState, useEffect, useRef } from 'react';
import StepperComponent from '../components/StepperComponent.tsx';
import PaymentForm from '../components/PaymentForm.tsx';
import FinalScreen from '../components/FinalScreen.tsx';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar.tsx';

const SignUp: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [scale, setScale] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleResize = () => {
    if (containerRef.current) {
      const containerHeight = containerRef.current.scrollHeight;
      const windowHeight = window.innerHeight;
      if (containerHeight > windowHeight) {
        const newScale = windowHeight / containerHeight;
        setScale(Math.min(newScale, 1)); 
      } else {
        setScale(1);
      }
    }
  };

  useEffect(() => {
    handleResize();
    const onResize = () => handleResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      handleResize();
    }, 50); 
  }, [step]); 

  const renderContent = (): React.ReactNode => {
    if (step < 3) {
      return <StepperComponent step={step} setStep={setStep} />;
    } else if (step === 3) {
      return <PaymentForm setStep={setStep} />;
    } else {
      return <FinalScreen />;
    }
  };

  return (
    <div
      className="main_container"
      ref={containerRef}
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'top center',
        height: 'auto',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      <Navbar />
      <Box sx={{ maxWidth: step >= 0 && step <= 2 ? '800px' : '100%', margin: '0px auto' }}>
        <img
          src="/images/back.svg"
          alt="back button"
          className="navbar_back_btn"
          onClick={() => setStep(step - 1)}
        />
        {step === 0 && (
          <h1 style={{ textAlign: 'center' }} className="signup_main_heading">
            Create your Chatty Stack Agent 100% Risk Free
          </h1>
        )}
        {step === 1 && (
          <div style={{ textAlign: 'center' }}>
            <h1 className="signup_main_heading">Choose your Agent’s Voice</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque hendrerit quisque
              pellentesque vivamus enim viverra purus libero.
            </p>
          </div>
        )}
        {step === 2 && (
          <div style={{ textAlign: 'center' }}>
            <h1 className="signup_main_heading">Complete Your Agent Creation</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque hendrerit quisque
              pellentesque vivamus enim viverra purus libero.
            </p>
          </div>
        )}
        {renderContent()}
      </Box>
    </div>
  );
};

export default SignUp;
