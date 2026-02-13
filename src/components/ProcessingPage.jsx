/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

export default function ProcessingPage({ onComplete }) {
  // Simulate processing time
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // 3 seconds delay
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-primary px-4">
      <div className="relative mb-8">
        {/* Pulse effect */}
        <div className="absolute inset-0 animate-ping rounded-full bg-accent/5 opacity-75 duration-1000"></div>
        <div className="absolute inset-0 animate-ping rounded-full bg-accent/10 opacity-50 delay-75 duration-1000"></div>
        
        {/* Centered Loader */}
        <div className="relative z-10 flex items-center justify-center rounded-full bg-white p-8 shadow-2xl ring-1 ring-black/5">
          <Loader2 className="h-10 w-10 animate-spin text-accent" strokeWidth={2.5} />
        </div>
      </div>
      
      <h2 className="text-xl font-semibold tracking-tight text-primary text-center">
        Confirming payment and booking...
      </h2>
      <p className="mt-2 text-sm text-secondary text-center max-w-[200px]">
        Please wait, do not close the app.
      </p>
    </div>
  );
}
