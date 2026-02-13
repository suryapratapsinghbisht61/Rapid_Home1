import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BookingPage from './components/BookingPage';
import ProcessingPage from './components/ProcessingPage';
import SuccessPage from './components/SuccessPage';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleConfirm = (details) => {
    setBookingDetails(details);
    setCurrentPage(2);
  };

  const handleProcessingComplete = () => {
    setCurrentPage(3);
  };

  const handleReset = () => {
    setBookingDetails(null);
    setCurrentPage(1);
  };

  return (
    <div className="bg-background min-h-screen flex justify-center bg-gray-50">
      <div className="w-full max-w-5xl bg-background min-h-screen overflow-hidden relative shadow-2xl rounded-xl my-8 border border-gray-100">
      <AnimatePresence mode="wait">
        {currentPage === 1 && (
          <motion.div
            key="page1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 overflow-y-auto"
          >
            <BookingPage onConfirm={handleConfirm} />
          </motion.div>
        )}
        {currentPage === 2 && (
          <motion.div
            key="page2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <ProcessingPage onComplete={handleProcessingComplete} />
          </motion.div>
        )}
        {currentPage === 3 && (
          <motion.div
            key="page3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 overflow-y-auto"
          >
            <SuccessPage bookingDetails={bookingDetails} onReset={handleReset} />
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
