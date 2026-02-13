/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Search, Sparkles, ChefHat, Wrench, Zap, Shirt, CheckCircle2, QrCode } from 'lucide-react';

const services = [
  { id: 'cleaning', name: 'Cleaning', icon: Sparkles },
  { id: 'cooking', name: 'Cooking', icon: ChefHat },
  { id: 'plumbing', name: 'Plumbing', icon: Wrench },
  { id: 'electrician', name: 'Electrician', icon: Zap },
  { id: 'laundry', name: 'Laundry', icon: Shirt },
];

export default function BookingPage({ onConfirm }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [timeOption, setTimeOption] = useState('now'); // 'now' or 'later'
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash'); // 'cash' or 'online'
  const [isPaid, setIsPaid] = useState(false);

  // Filter services
  const filteredServices = services.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleConfirm = () => {
    if (!selectedService) return alert('Please select a service');
    if (timeOption === 'later' && (!scheduleDate || !scheduleTime)) return alert('Please select date and time');
    if (paymentMethod === 'online' && !isPaid) return alert('Please complete payment first');
    
    onConfirm({
      service: selectedService,
      time: timeOption === 'now' ? 'Now (Instant)' : `${scheduleDate} at ${scheduleTime}`,
      payment: paymentMethod
    });
  };

  return (
    <div className="min-h-screen bg-background pb-24 px-4 pt-6 font-sans text-primary">
      {/* Header */}
      <header className="mb-6 flex flex-col gap-1">
        <div className="flex items-center gap-2">
           <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center">
             <Zap className="h-5 w-5 text-white fill-current" />
           </div>
           <h1 className="text-2xl font-bold tracking-tight text-accent">Rapid Home</h1>
        </div>
        <p className="text-secondary text-sm font-medium">Instant home services within 15 minutes</p>
      </header>

      {/* Search */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary h-5 w-5" />
        <input 
          type="text"
          placeholder="Search service (Clean home, Cooking...)"
          className="w-full rounded-2xl border-none bg-white py-4 pl-12 pr-4 shadow-sm text-primary placeholder-secondary focus:ring-2 focus:ring-accent/10 outline-none transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Service Selection */}
      <div className="mb-8">
        <h2 className="mb-4 text-lg font-semibold text-primary">Select Service</h2>
        <div className="grid grid-cols-3 gap-3">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            const isSelected = selectedService?.id === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`flex flex-col items-center justify-center rounded-2xl p-4 transition-all duration-300 ${
                  isSelected 
                    ? 'bg-accent text-white shadow-lg scale-105' 
                    : 'bg-white text-secondary hover:shadow-md hover:scale-105'
                }`}
              >
                <Icon className={`mb-2 h-7 w-7 ${isSelected ? 'stroke-[2px]' : 'stroke-[1.5px]'}`} />
                <span className="text-xs font-medium">{service.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Selection */}
      <div className="mb-8">
        <h2 className="mb-4 text-lg font-semibold text-primary">When do you need it?</h2>
        <div className="flex gap-3 mb-4">
          <button
            onClick={() => setTimeOption('now')}
            className={`flex-1 rounded-xl py-3 text-sm font-medium transition-all ${
              timeOption === 'now'
                ? 'bg-accent text-white shadow-md'
                : 'bg-white text-secondary border border-transparent hover:border-gray-200'
            }`}
          >
            Now (Instant)
          </button>
          <button
            onClick={() => setTimeOption('later')}
            className={`flex-1 rounded-xl py-3 text-sm font-medium transition-all ${
              timeOption === 'later'
                ? 'bg-accent text-white shadow-md'
                : 'bg-white text-secondary border border-transparent hover:border-gray-200'
            }`}
          >
            Schedule for Later
          </button>
        </div>

        {timeOption === 'later' && (
          <div className="flex gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
            <input 
              type="date" 
              className="flex-1 rounded-xl border-none bg-white p-3 text-sm text-primary shadow-sm focus:ring-1 focus:ring-accent"
              onChange={(e) => setScheduleDate(e.target.value)}
            />
            <input 
              type="time" 
              className="w-32 rounded-xl border-none bg-white p-3 text-sm text-primary shadow-sm focus:ring-1 focus:ring-accent"
              onChange={(e) => setScheduleTime(e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Payment Method */}
      <div className="mb-8">
        <h2 className="mb-4 text-lg font-semibold text-primary">Payment Method</h2>
        <div className="flex gap-3 mb-4">
           {/* Cash Option */}
           <button
             onClick={() => setPaymentMethod('cash')}
             className={`flex-1 flex flex-col items-start p-4 rounded-2xl border transition-all ${
               paymentMethod === 'cash' 
                 ? 'border-accent bg-white/50 ring-1 ring-accent' 
                 : 'border-transparent bg-white'
             }`}
           >
             <span className="font-semibold text-sm mb-1">Cash on Service</span>
             <span className="text-xs text-secondary">Pay after service</span>
           </button>

           {/* Online Option */}
           <button
             onClick={() => setPaymentMethod('online')}
             className={`flex-1 flex flex-col items-start p-4 rounded-2xl border transition-all ${
               paymentMethod === 'online' 
                 ? 'border-accent bg-white/50 ring-1 ring-accent' 
                 : 'border-transparent bg-white'
             }`}
           >
             <span className="font-semibold text-sm mb-1">Online Payment</span>
             <span className="text-xs text-secondary">Pay via QR</span>
           </button>
        </div>

        {/* QR Section */}
        {paymentMethod === 'online' && (
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm animate-in zoom-in-95 duration-300 border border-gray-100">
            {!isPaid ? (
              <>
                <div className="bg-gray-100 p-4 rounded-xl mb-4">
                  <QrCode className="h-32 w-32 text-primary" />
                </div>
                <p className="text-sm font-medium text-primary mb-4">Scan QR to complete payment</p>
                <button 
                  onClick={() => setIsPaid(true)}
                  className="w-full rounded-xl bg-gray-900 py-3 text-sm font-bold text-white hover:bg-black transition-colors"
                >
                  I Have Paid
                </button>
              </>
            ) : (
              <div className="flex flex-col items-center text-green-600 py-4 animate-in fade-in zoom-in">
                <CheckCircle2 className="h-12 w-12 mb-2" />
                <span className="font-bold text-sm">Payment Received</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Booking Summary */}
      {selectedService && (
        <div className="mb-24 bg-white rounded-2xl p-5 shadow-sm border border-gray-50/50">
          <h3 className="hidden">Summary</h3> {/* Use hidden header for semantics if needed */}
          <div className="flex justify-between items-center mb-2">
            <span className="text-secondary text-sm">Service</span>
            <span className="font-semibold text-primary">{selectedService.name}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
             <span className="text-secondary text-sm">Time</span>
             <span className="font-semibold text-primary truncate max-w-[60%] text-right">
               {timeOption === 'now' ? 'Now (Instant)' : `${scheduleDate || '---'} ${scheduleTime || ''}`}
             </span>
          </div>
          <div className="flex justify-between items-center mb-2">
             <span className="text-secondary text-sm">Payment</span>
             <span className="font-semibold text-primary">
               {paymentMethod === 'cash' ? 'Cash' : 'Online'}
             </span>
          </div>
          <div className="mt-4 pt-4 border-t border-dashed border-gray-200 flex justify-between items-center">
             <span className="text-sm font-medium text-primary">Estimated Arrival</span>
             <span className="text-sm font-bold text-green-600">Within 15 mins</span>
          </div>
        </div>
      )}

      {/* Primary Action Button - Fixed at bottom or inline? 
          "Large black button" - User usually expects sticky bottom on mobile apps 
          or just below summary. I'll put it fixed bottom for "Premium App Feel".
      */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background via-background to-transparent pb-8">
        <button
          onClick={handleConfirm}
          disabled={!selectedService || (paymentMethod === 'online' && !isPaid)}
          className={`w-full rounded-2xl py-4 text-base font-bold tracking-wide shadow-lg transition-all ${
            !selectedService || (paymentMethod === 'online' && !isPaid)
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-accent text-white hover:bg-black hover:shadow-xl active:scale-95'
          }`}
        >
          CONFIRM BOOKING
        </button>
      </div>
    </div>
  );
}
