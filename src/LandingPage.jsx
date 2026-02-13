import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Star, 
  ShieldCheck, 
  Zap, 
  Menu, 
  X,
  Sparkles,
  Droplets,
  Wrench,
  ChefHat,
  Shirt,
  Thermometer,
  Bug,
  Hammer,
  PaintBucket,
  Car,
  Shovel,
  SprayCan,
  Scissors,
  User,
  Heart,
  Activity,
  Dog,
  Monitor
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utility ---
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- Data ---
const SERVICES_DATA = [
  { id: 1, title: "Home Cleaning", icon: <Sparkles />, image: "https://media.istockphoto.com/id/904149352/photo/housework-is-not-just-for-women.jpg?s=612x612&w=0&k=20&c=gwrP7vCBfF74p1qCiy8cbk72la6gnwK0f4WRCNnoX4M=" },
  { id: 2, title: "Cooking", icon: <ChefHat />, image: "https://cdn6.dissolve.com/p/D2027_13_068/D2027_13_068_1200.jpg" },
  { id: 3, title: "Plumbing", icon: <Wrench />, image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=800&auto=format&fit=crop" },
  { id: 4, title: "Electrician", icon: <Zap />, image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop" },
  { id: 5, title: "Laundry", icon: <Shirt />, image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=800&auto=format&fit=crop" },
  { id: 6, title: "AC Repair", icon: <Thermometer />, image: "https://techsquadteam.com/assets/profile/blogimages/f00ab4df455700aeb2ff86da0cb79fe2.png" },
  { id: 7, title: "Pest Control", icon: <Bug />, image: "https://techsquadteam.com/assets/profile/blogimages/2d6d0e31d02d7fc9cd2fb2310f49153c.jpg" },
  { id: 8, title: "Carpentry", icon: <Hammer />, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcbuQUBE0usg4B_53zKvc3JZhwmh5eX56VhQ&s" },
  { id: 9, title: "Painting", icon: <PaintBucket />, image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop" },
  { id: 10, title: "Car Cleaning", icon: <Car />, image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop" },
  { id: 11, title: "Gardening", icon: <Shovel />, image: "https://images.stockcake.com/public/7/1/2/712dc36f-1d57-4903-b473-9c1967ba463e_large/gardener-planting-seeds-stockcake.jpg" },
  { id: 12, title: "Disinfection", icon: <SprayCan />, image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?q=80&w=800&auto=format&fit=crop" },
  { id: 13, title: "Home Salon", icon: <Scissors />, image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=800&auto=format&fit=crop" },
  { id: 14, title: "Men's Haircut", icon: <User />, image: "https://media.post.rvohealth.io/wp-content/uploads/2020/05/Male_Hair_Mirror_732x549-thumbnail-732x549.jpg" },
  { id: 15, title: "Massage Therapy", icon: <Heart />, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop" },
  { id: 16, title: "Appliance Repair", icon: <Monitor />, image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=800&auto=format&fit=crop" },
  { id: 17, title: "Driver on Demand", icon: <Car />, image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop" },
  { id: 18, title: "Elderly Care", icon: <Activity />, image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop" },
  { id: 19, title: "Physiotherapy", icon: <Activity />, image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop" },
  { id: 20, title: "Pet Grooming", icon: <Dog />, image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800&auto=format&fit=crop" },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-[#FAF9F6]/90 backdrop-blur-md border-gray-200 py-3 shadow-sm" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
           <img src="/logo.png" alt="Rapid Home" className="w-[90px] h-[90px] object-contain -mt-3 -ml-3" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">How it Works</a>
          <a href="#services" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Services</a>
          <a href="#features" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Why Us</a>
          <button 
            onClick={() => navigate('/book')}
            className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            Book Instantly
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-black hover:bg-gray-100 rounded-full transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FAF9F6] border-b border-gray-200 overflow-hidden absolute top-full left-0 right-0 shadow-xl"
          >
            <div className="flex flex-col p-6 gap-6">
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-gray-800 font-medium text-lg">How it Works</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-gray-800 font-medium text-lg">Services</a>
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-gray-800 font-medium text-lg">Why Us</a>
              <button 
                onClick={() => navigate('/book')}
                className="bg-black text-white w-full py-4 rounded-xl font-bold text-lg shadow-md"
              >
                Book Instantly
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
    const { scrollY } = useScroll();
    const navigate = useNavigate();
    
    // Parallax & Fan Effect on Scroll
    const yCenter = useTransform(scrollY, [0, 400], [0, 100]);
    
    // Left Card Animations
    const rotateLeft = useTransform(scrollY, [0, 300], [0, -12]);
    const xLeft = useTransform(scrollY, [0, 300], [0, -220]);
    // Right Card Animations
    const rotateRight = useTransform(scrollY, [0, 300], [0, 12]);
    const xRight = useTransform(scrollY, [0, 300], [0, 220]);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-[#FAF9F6]">
      {/* Dynamic Background Image Layer */}
      <div className="absolute inset-0 z-0 opacity-10">
         <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#FAF9F6]/80 to-[#FAF9F6]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-8"
                >
                    <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Available in your area</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-black text-black tracking-tight leading-[1.05] mb-8"
                >
                    Book Trusted <br/> Home Services <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-black">in Seconds</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg leading-relaxed font-medium"
                >
                    Rapid Home helps you instantly book verified house-help services like cleaning, plumbing, cooking, and more — with <span className="text-black font-semibold">confirmation in seconds.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <button 
                        onClick={() => navigate('/book')}
                        className="w-full sm:w-auto px-10 py-5 bg-black text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95"
                    >
                    Book Instantly
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button 
                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full sm:w-auto px-10 py-5 bg-white text-black border border-gray-200 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
                    >
                    View Services
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-gray-500"
                >
                    <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-black" />
                        <span>Verified Professionals</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-black" />
                        <span>15-min Arrival</span>
                    </div>
                </motion.div>
            </div>

            {/* Hero Image Stack Animation */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative hidden lg:flex items-center justify-center h-[500px]"
            >
                {/* Left Card (Happy Customers) */}
                <motion.div 
                    style={{ x: xLeft, rotate: rotateLeft }}
                    className="absolute z-10 w-72 h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform origin-bottom-right"
                >
                     <img 
                        src="https://cdn6.dissolve.com/p/D2027_13_068/D2027_13_068_1200.jpg" 
                        className="w-full h-full object-cover" 
                        alt="Happy Customers"
                    />
                     <div className="absolute inset-0 bg-black/10"></div>
                </motion.div>

                {/* Right Card (Another Service) */}
                <motion.div 
                    style={{ x: xRight, rotate: rotateRight }}
                    className="absolute z-10 w-72 h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform origin-bottom-left"
                >
                     <img 
                        src="https://media.post.rvohealth.io/wp-content/uploads/2020/05/Male_Hair_Mirror_732x549-thumbnail-732x549.jpg" 
                        className="w-full h-full object-cover" 
                        alt="Service"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                </motion.div>

                {/* Center Main Card */}
                <motion.div 
                    style={{ y: yCenter }}
                    className="relative z-20 w-80 h-[480px] rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white"
                >
                     <img 
                        src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop" 
                        className="w-full h-full object-cover" 
                        alt="Home Cleaning"
                    />
                    
                    {/* Floating Badge */}
                    <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl flex items-center gap-4 shadow-lg">
                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white shrink-0">
                            <Zap className="w-6 h-6 fill-current" />
                        </div>
                        <div>
                            <div className="font-bold text-black leading-tight">Fast Service</div>
                            <div className="text-xs text-gray-500 font-medium">Booked in 60s</div>
                        </div>
                    </div>
                </motion.div>
                
                {/* Decorative - blurred background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-gray-200/40 to-transparent rounded-full blur-3xl -z-10" />
            </motion.div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: <Sparkles className="w-8 h-8 text-black" />,
      title: "Choose Service",
      description: "Select the exact help you need, from deep cleaning to quick repairs."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-black" />,
      title: "Confirm Instantly",
      description: "See upfront pricing and get tailored confirmation in seconds."
    },
    {
      icon: <Zap className="w-8 h-8 text-black" />,
      title: "Arrival in 15 Mins",
      description: "Our verified professional arrives at your doorstep ready to work."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white rounded-t-[3rem] -mt-12 relative z-20 shadow-[0_-10px_60px_rgba(0,0,0,0.03)] overflow-hidden">
      {/* Background decoration */}
      <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop"
          className="absolute top-0 right-0 w-1/3 h-full object-cover opacity-[0.03] pointer-events-none"
          alt="Office"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-20 text-center">
          <span className="text-black font-bold tracking-wider uppercase text-sm mb-2 block">Simple Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">How It Works</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Three simple steps to a cleaner, better home.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[3.5rem] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 border-t border-dashed border-gray-300 z-0"></div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-28 h-28 bg-white border border-gray-100 rounded-[2rem] flex items-center justify-center shadow-xl mb-8 group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 rotate-3 group-hover:rotate-0">
                <div className="w-20 h-20 bg-[#FAF9F6] rounded-[1.5rem] flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  {React.cloneElement(step.icon, { className: "w-8 h-8 transition-colors duration-300" })}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed px-4 font-medium">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ id, icon, title, image, delay, onClick }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay }}
    onClick={() => onClick({ id, title, image, icon })}
    className="group relative h-80 rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
  >
    <img 
      src={image} 
      alt={title} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
    
    <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
      <ArrowRight className="w-4 h-4 -rotate-45" />
    </div>

    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-3 text-white border border-white/10 shadow-lg">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-1 leading-tight">{title}</h3>
      <div className="flex items-center gap-2 text-white/90 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity delay-75">
        <span>Book {title}</span>
      </div>
    </div>
  </motion.div>
);

const ServiceModal = ({ service, onClose }) => {
  const navigate = useNavigate();
  if (!service) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-[2rem] overflow-hidden max-w-lg w-full shadow-2xl relative"
      >
        <div className="h-64 overflow-hidden relative">
            <img src={service.image} className="w-full h-full object-cover" alt={service.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all"
            >
                <X className="w-5 h-5" />
            </button>
            <div className="absolute bottom-6 left-6 text-white">
                 <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-3 border border-white/10">
                    {service.icon}
                </div>
                <h3 className="text-3xl font-bold">{service.title}</h3>
            </div>
        </div>
        
        <div className="p-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Instant Booking Available</h4>
            <p className="text-gray-600 mb-8">
                Our verified {service.title} professionals are ready to help. Book now and get service within 15 minutes.
            </p>
            
            <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-500">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Background Checked Professionals</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Transparent Pricing</span>
                </div>
            </div>

            <button 
                onClick={() => navigate('/book')}
                className="w-full mt-8 py-4 bg-black text-white rounded-xl font-bold text-lg shadow-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
                Book {service.title} Now
                <ArrowRight className="w-5 h-5" />
            </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Services = ({ onSelectService }) => {
    // Show all services initially (limit if needed but user requested 20 to be filled)
    const [visibleCount, setVisibleCount] = useState(20); 

    const visibleServices = SERVICES_DATA.slice(0, visibleCount);

  return (
    <section id="services" className="py-20 md:py-32 bg-[#FAF9F6]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg max-w-xl font-medium">Professionally trained experts for every corner of your home.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleServices.map((s, idx) => (
            <ServiceCard 
                key={s.id} 
                {...s} 
                delay={0} 
                onClick={onSelectService} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    "Instant Booking Confirmation",
    "Service Arrival Within 15 Minutes",
    "Verified & Trusted Helpers",
    "Transparent Pricing",
    "No Hidden Charges",
    "Cash or Online Payment"
  ];

  return (
    <section id="features" className="py-24 bg-black text-white rounded-[3rem] mx-2 md:mx-4 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-900/20 rounded-full blur-[80px] pointer-events-none" />
      
      {/* Background Image Overlay */}
      <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay pointer-events-none"
            alt="Feature Background"
        />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">Why Rapid Home is <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">Different</span></h2>
            <div className="space-y-6">
              {features.map((feat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-default"
                >
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    <CheckCircle className="w-5 h-5 text-black" />
                  </div>
                  <span className="text-xl font-medium text-gray-200">{feat}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative mt-12 lg:mt-0">
             <motion.div 
               initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
               whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7 }}
               className="aspect-[4/5] bg-gradient-to-br from-[#1a1a1a] to-black rounded-[2.5rem] p-8 border border-gray-800 relative overflow-hidden shadow-2xl"
             >
               <div className="absolute top-0 right-0 p-8 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
               <div className="relative z-10">
                 <div className="flex justify-between items-start mb-12">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
                        <ShieldCheck className="text-white w-7 h-7 fill-current" />
                    </div>
                    <div className="px-4 py-1.5 bg-green-500/20 text-green-400 text-xs font-bold uppercase rounded-full border border-green-500/30">
                        Verified
                    </div>
                 </div>
                 
                 <h3 className="text-3xl font-bold mb-2">Maximum Trust</h3>
                 <p className="text-gray-400 mb-12 text-lg leading-relaxed">Every professional goes through a rigorous 5-step background check and skills assessment.</p>
                 
                 <div className="space-y-5">
                   <div className="bg-white/5 p-5 rounded-2xl flex items-center gap-5 border border-white/5">
                     <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                         <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Pro" />
                     </div>
                     <div>
                       <div className="text-white font-bold">James D.</div>
                       <div className="text-gray-400 text-sm">Plumbing Expert</div>
                     </div>
                     <div className="ml-auto flex items-center gap-1 bg-yellow-500/10 px-2 py-1 rounded-lg">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-yellow-500 font-bold text-sm">5.0</span>
                     </div>
                   </div>
                   <div className="bg-white/5 p-5 rounded-2xl flex items-center gap-5 border border-white/5">
                     <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                         <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="Pro" />
                     </div>
                     <div>
                       <div className="text-white font-bold">Sarah M.</div>
                       <div className="text-gray-400 text-sm">Home Cleaning</div>
                     </div>
                     <div className="ml-auto flex items-center gap-1 bg-yellow-500/10 px-2 py-1 rounded-lg">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-yellow-500 font-bold text-sm">4.9</span>
                     </div>
                   </div>
                 </div>
                 
                 <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center">
                    <div>
                        <div className="text-3xl font-bold">4.96/5</div>
                        <div className="text-gray-500 text-sm">Average Rating</div>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-bold">50k+</div>
                        <div className="text-gray-500 text-sm">Happy Customers</div>
                    </div>
                 </div>
               </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-32 md:py-40 bg-[#FAF9F6] text-center relative overflow-hidden">
        {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-black/5 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-black/5 rounded-full blur-xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-7xl font-bold text-black mb-8 tracking-tight">Need Help Urgently? <br/> Book Now.</h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">Get reliable home services instantly without waiting or complicated steps.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-12 py-5 bg-black text-white rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300">
                Get Started
            </button>
            <button className="px-12 py-5 bg-white text-black border border-gray-200 rounded-full font-bold text-xl hover:bg-gray-50 transition-all duration-300">
                Contact Sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
               <img src="/logo.png" alt="Rapid Home" className="w-[90px] h-[90px] object-contain -ml-3" />
            </div>
            <p className="text-gray-500 max-w-sm text-lg leading-relaxed">
              Fast. Reliable. Instant Home Services. Delivered to your doorstep in minutes.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-black mb-8 text-lg">Company</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-black mb-8 text-lg">Support</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Safety Information</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Cancellation Options</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Report Issue</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400 font-medium">© 2026 Rapid Home Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-black hover:text-white transition-all cursor-pointer">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-black hover:text-white transition-all cursor-pointer">
                <span className="sr-only">Instagram</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (selectedService) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
  }, [selectedService]);

  return (
    <main className="min-h-screen bg-[#FAF9F6] selection:bg-black selection:text-white font-sans">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Services onSelectService={setSelectedService} />
      <Features />
      <CTA />
      <Footer />
      
      <AnimatePresence>
        {selectedService && (
            <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
