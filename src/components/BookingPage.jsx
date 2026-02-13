import { useState } from 'react';
import { 
  Search, Sparkles, ChefHat, Wrench, Zap, Shirt, CheckCircle2, QrCode, 
  Thermometer, Bug, Hammer, PaintBucket, Car, Shovel, SprayCan, Scissors, 
  User, Heart, Monitor, Activity, Dog, ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { id: 'cleaning', name: 'Home Cleaning', icon: Sparkles, price: 1499 },
  { id: 'cooking', name: 'Cooking', icon: ChefHat, price: 999 },
  { id: 'plumbing', name: 'Plumbing', icon: Wrench, price: 499 },
  { id: 'electrician', name: 'Electrician', icon: Zap, price: 999 },
  { id: 'laundry', name: 'Laundry', icon: Shirt, price: 1199 },
  { id: 'acrepair', name: 'AC Repair', icon: Thermometer, price: 999 },
  { id: 'pestcontrol', name: 'Pest Control', icon: Bug, price: 499 },
  { id: 'carpentry', name: 'Carpentry', icon: Hammer, price: 2999 },
  { id: 'painting', name: 'Painting', icon: PaintBucket, price: 4999 },
  { id: 'carcleaning', name: 'Car Cleaning', icon: Car, price: 699 },
  { id: 'gardening', name: 'Gardening', icon: Shovel, price: 599 },
  { id: 'disinfection', name: 'Disinfection', icon: SprayCan, price: 999 },
  { id: 'homesalon', name: 'Home Salon', icon: Scissors, price: 1499 },
  { id: 'menshaircut', name: "Men's Haircut", icon: User, price: 299 },
  { id: 'massagetherapy', name: 'Massage Therapy', icon: Heart, price: 2499 },
  { id: 'appliancerepair', name: 'Appliance Repair', icon: Monitor, price: 999 },
  { id: 'driverondemand', name: 'Driver on Demand', icon: Car, price: 1799 },
  { id: 'elderlycare', name: 'Elderly Care', icon: Activity, price: 2999 },
  { id: 'physiotherapy', name: 'Physiotherapy', icon: Activity, price: 4499 },
  { id: 'petgrooming', name: 'Pet Grooming', icon: Dog, price: 1899 },
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
    <div className="min-h-screen bg-background pb-24 px-4 pt-8 font-sans text-primary max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-10 flex flex-col items-center text-center gap-2 relative">
        <Link to="/" className="absolute left-0 top-0 p-2 text-primary hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft className="h-6 w-6" />
        </Link>
        <div className="flex justify-center mb-1">
           <img src="/logo.png" alt="Rapid Home" className="w-[90px] h-[90px] object-contain" />
        </div>
        <p className="text-secondary text-base md:text-lg font-medium">Instant home services, delivered in minutes.</p>
      </header>

      <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
        {/* LEFT COLUMN: Search & Services */}
        <div className="md:col-span-8 lg:col-span-9">
            {/* Search */}
            <div className="relative mb-8 max-w-xl mx-auto md:mx-0">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary h-5 w-5" />
                <input 
                type="text"
                placeholder="What help do you need today?"
                className="w-full rounded-2xl border-2 border-transparent bg-white py-4 pl-12 pr-4 shadow-sm text-primary placeholder-secondary focus:border-accent/30 focus:ring-0 outline-none transition-all text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Service Selection */}
            <div className="mb-12">
                <h2 className="mb-6 text-xl font-bold text-primary flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-accent" />
                    Select Service
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {filteredServices.map((service) => {
                    const Icon = service.icon;
                    const isSelected = selectedService?.id === service.id;
                    return (
                    <button
                        key={service.id}
                        onClick={() => setSelectedService(service)}
                        className={`flex flex-col items-center justify-center rounded-2xl p-6 transition-all duration-300 border ${
                        isSelected 
                            ? 'bg-accent text-white shadow-xl scale-105 border-accent' 
                            : 'bg-white text-secondary hover:shadow-lg hover:scale-105 border-transparent hover:border-gray-100'
                        }`}
                    >
                        <div className={`mb-3 p-3 rounded-xl ${isSelected ? 'bg-white/20' : 'bg-gray-50'}`}>
                            <Icon className={`h-8 w-8 ${isSelected ? 'stroke-[2px]' : 'stroke-[1.5px]'}`} />
                        </div>
                        <span className="text-sm font-bold text-center leading-tight">{service.name}</span>
                    </button>
                    );
                })}
                </div>
                {filteredServices.length === 0 && (
                    <div className="text-center py-12 text-gray-400">
                        <p>No services found matching "{searchTerm}"</p>
                    </div>
                )}
            </div>
        </div>

        {/* RIGHT COLUMN: Details & Summary (Sticky on Desktop) */}
        <div className="md:col-span-4 lg:col-span-3">
            <div className="sticky top-6 space-y-6">
                
                {/* Configuration Panel */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100/50">
                     {/* Time Selection */}
                    <div className="mb-8">
                        <h2 className="mb-4 text-base font-bold text-primary">When?</h2>
                        <div className="flex flex-col gap-3">
                        <button
                            onClick={() => setTimeOption('now')}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all border ${
                            timeOption === 'now'
                                ? 'bg-accent/10 text-accent border-accent/20'
                                : 'bg-gray-50 text-gray-500 border-transparent hover:bg-gray-100'
                            }`}
                        >
                            <Zap className="w-4 h-4" />
                            Now (Instant)
                        </button>
                        <button
                            onClick={() => setTimeOption('later')}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all border ${
                            timeOption === 'later'
                                ? 'bg-accent/10 text-accent border-accent/20'
                                : 'bg-gray-50 text-gray-500 border-transparent hover:bg-gray-100'
                            }`}
                        >
                            <Search className="w-4 h-4" />
                            Schedule
                        </button>
                        </div>

                        {timeOption === 'later' && (
                        <div className="mt-3 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                            <input 
                            type="date" 
                            className="w-full rounded-xl border border-gray-200 bg-white p-3 text-sm text-primary shadow-sm focus:ring-1 focus:ring-accent outline-none"
                            onChange={(e) => setScheduleDate(e.target.value)}
                            />
                            <input 
                            type="time" 
                            className="w-full rounded-xl border border-gray-200 bg-white p-3 text-sm text-primary shadow-sm focus:ring-1 focus:ring-accent outline-none"
                            onChange={(e) => setScheduleTime(e.target.value)}
                            />
                        </div>
                        )}
                    </div>

                    {/* Payment Method */}
                    <div>
                        <h2 className="mb-4 text-base font-bold text-primary">Payment</h2>
                        <div className="flex gap-2 mb-4">
                        <button
                            onClick={() => setPaymentMethod('cash')}
                            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                            paymentMethod === 'cash' 
                                ? 'bg-black text-white' 
                                : 'bg-gray-100 text-gray-500'
                            }`}
                        >
                            Cash
                        </button>
                        <button
                            onClick={() => setPaymentMethod('online')}
                            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                            paymentMethod === 'online' 
                                ? 'bg-black text-white' 
                                : 'bg-gray-100 text-gray-500'
                            }`}
                        >
                            Online
                        </button>
                        </div>

                         {/* QR Section */}
                        {paymentMethod === 'online' && (
                        <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-center justify-center border border-gray-200 animate-in zoom-in-95">
                            {!isPaid ? (
                            <>
                                <div className="bg-white p-2 rounded-lg mb-3 shadow-sm">
                                <QrCode className="h-20 w-20 text-black" />
                                </div>
                                <button 
                                onClick={() => setIsPaid(true)}
                                className="w-full rounded-lg bg-green-500 py-2 text-xs font-bold text-white hover:bg-green-600 transition-colors"
                                >
                                Confirm Payment
                                </button>
                            </>
                            ) : (
                            <div className="flex items-center gap-2 text-green-600 py-2 animate-in fade-in">
                                <CheckCircle2 className="h-5 w-5" />
                                <span className="font-bold text-xs">Paid Successfully</span>
                            </div>
                            )}
                        </div>
                        )}
                    </div>
                </div>

                {/* Summary & Action */}
                <div className="bg-black text-white rounded-3xl p-6 shadow-xl shadow-black/10">
                    <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                        <span>Invoice</span>
                        <div className="h-px bg-white/20 flex-1"></div>
                    </h3>
                    
                    <div className="space-y-4 mb-8 text-white/80 text-sm">
                        <div className="flex justify-between">
                            <span>Service</span>
                            <span className="font-bold text-white">{selectedService?.name || 'Please Select'}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Time</span>
                            <span className="font-bold text-white text-right max-w-[120px] truncate">
                                {timeOption === 'now' ? 'Instant' : (scheduleDate ? `${scheduleDate}` : 'Pending')}
                            </span>
                        </div>
                        <div className="flex justify-between">
                             <span>Total</span>
                             <span className="font-bold text-white">
                                {selectedService ? `₹${selectedService.price}` : '₹0'}
                             </span>
                        </div>
                    </div>

                    <button
                        onClick={handleConfirm}
                        disabled={!selectedService || (paymentMethod === 'online' && !isPaid)}
                        className={`w-full rounded-xl py-4 text-base font-bold tracking-wide transition-all ${
                            !selectedService || (paymentMethod === 'online' && !isPaid)
                            ? 'bg-white/20 text-white/50 cursor-not-allowed'
                            : 'bg-white text-black hover:scale-[1.02] active:scale-[0.98]'
                        }`}
                        >
                        CONTINUE
                    </button>
                    {!selectedService && (
                        <p className="text-center text-xs text-white/40 mt-3">Select a service to proceed</p>
                    )}
                </div>

            </div>
        </div>

      </div>
    </div>
  );
}
