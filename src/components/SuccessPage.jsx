/* eslint-disable react/prop-types */
import { Check, MessageCircle, ArrowRight, Share2 } from 'lucide-react';

export default function SuccessPage({ bookingDetails, onReset }) {
  const { service, time, payment, name, phone, address, city, pincode } = bookingDetails || {
    service: { name: 'Service' }, 
    time: 'Now', 
    payment: 'Online',
    name: '',
    address: '',
    city: ''
  };

  const bookingId = `RH-${Math.floor(10000 + Math.random() * 90000)}`;

  const messageText = `Your Rapid Home booking is confirmed.
Booking ID: ${bookingId}
Name: ${name}
Service: ${service.name}
Time: ${time}
Address: ${address}, ${city} ${pincode ? pincode : ''}
Payment: ${payment === 'online' ? 'Paid' : 'Cash'}
Helper will arrive within 15 minutes.`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Rapid Home Booking',
          text: messageText,
        });
      } catch (err) {
        console.log('Share failed:', err);
      }
    } else {
      // Fallback to WhatsApp if Web Share API is not available
      window.open(`https://wa.me/?text=${encodeURIComponent(messageText)}`, '_blank');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-primary px-4 pt-8 pb-8 font-sans animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Success Header */}
      <div className="flex flex-col items-center mb-8 text-center animate-in zoom-in duration-500 delay-150">
        <div className="h-20 w-20 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg mb-6 ring-4 ring-green-100">
          <Check className="h-10 w-10 stroke-[3px]" />
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-accent mb-2">
          Booking Confirmed!
        </h1>
        <p className="text-secondary text-sm">Your helper is on the way.</p>
      </div>

      {/* Booking Details Card */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-8 w-full max-w-sm mx-auto animate-in slide-in-from-bottom-8 duration-700 delay-200">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center pb-4 border-b border-dashed border-gray-100">
            <span className="text-sm text-secondary font-medium">Booking ID</span>
            <span className="text-lg font-black text-accent tracking-wide">{bookingId}</span>
          </div>

          <div className="grid grid-cols-2 gap-y-4 text-sm">
            <div>
              <p className="text-xs text-secondary mb-1">Service Type</p>
              <p className="font-semibold text-primary">{service.name}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-secondary mb-1">Arrival Estimate</p>
              <p className="font-semibold text-primary">15 minutes</p>
            </div>
            <div>
              <p className="text-xs text-secondary mb-1">Time</p>
              <p className="font-semibold text-primary">{time}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-secondary mb-1">Payment Status</p>
              <p className={`font-bold ${payment === 'online' ? 'text-green-600' : 'text-amber-600'}`}>
                {payment === 'online' ? 'Received' : 'Pending (Cash)'}
              </p>
            </div>
            <div className="col-span-2 pt-2 border-t border-gray-50">
                <p className="text-xs text-secondary mb-1">Location</p>
                <p className="font-medium text-gray-800 truncate">{address}, {city}</p>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Section */}
      <div className="w-full max-w-sm mx-auto mb-8 animate-in slide-in-from-bottom-10 duration-700 delay-300">
        <div className="flex items-center gap-2 mb-3 px-2">
           <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
           <span className="text-xs font-semibold text-green-700 uppercase tracking-wider">Ready to Send</span>
        </div>
        
        {/* Bubble */}
        <div className="relative bg-[#DCF8C6] p-4 rounded-2xl rounded-tl-none shadow-sm border border-green-100 mb-3 hover:bg-[#d4f5ba] transition-colors cursor-pointer"
             onClick={() => window.open(`https://wa.me/918449659345?text=${encodeURIComponent(messageText)}`, '_blank')}
        >
          <p className="text-sm text-gray-800 leading-relaxed font-medium whitespace-pre-wrap">
            {messageText}
          </p>
          <span className="absolute bottom-2 right-3 text-[10px] text-gray-500 flex items-center gap-1">
            Tap to Send <Check className="h-3 w-3 inline text-gray-400" />
          </span>
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-center gap-2 text-xs text-secondary">
          <MessageCircle className="h-4 w-4 text-green-600 fill-current/20" />
          <a href={`https://wa.me/918449659345?text=${encodeURIComponent(messageText)}`} 
             target="_blank" 
             rel="noopener noreferrer"
             className="underline hover:text-green-700"
          >
            Click here if message didn&apos;t open automatically
          </a>
        </div>
      </div>

      {/* Share & Final CTA */}
      <div className="mt-auto w-full max-w-sm mx-auto animate-in fade-in duration-1000 delay-500 flex flex-col gap-3">
        <button
          onClick={handleShare}
          className="w-full rounded-2xl border-2 border-dashed border-gray-300 bg-transparent text-secondary py-3 text-sm font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all flex items-center justify-center gap-2"
        >
          <Share2 className="h-4 w-4" />
          Share with Friend
        </button>

        <button
          onClick={onReset}
          className="group w-full rounded-2xl bg-accent text-white py-4 text-base font-bold shadow-lg hover:bg-black transition-all flex items-center justify-center gap-2 active:scale-95"
        >
          Book Another Service
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

    </div>
  );
}
