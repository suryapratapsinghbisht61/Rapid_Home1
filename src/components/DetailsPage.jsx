import { useState } from 'react';
import { ArrowLeft, User, Phone, MapPin, Building, Home } from 'lucide-react';

export default function DetailsPage({ onBack, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    pincode: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address || !formData.city) {
      alert('Please fill in all required fields');
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-background px-4 pt-8 pb-24 font-sans text-primary max-w-xl mx-auto animate-in slide-in-from-right duration-500">
      {/* Header */}
      <header className="mb-8 flex items-center gap-4 relative">
        <button 
          onClick={onBack}
          className="p-2 text-primary hover:bg-gray-100 rounded-full transition-colors"
        >
            <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-2xl font-bold">Your Details</h1>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-6">
            {/* Contact Info */}
            <section className="space-y-4">
                <h2 className="text-lg font-semibold flex items-center gap-2 text-accent">
                    <User className="h-5 w-5" />
                    Contact Info
                </h2>
                <div className="space-y-3">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <input 
                                type="text" 
                                required
                                placeholder="John Doe"
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <input 
                                type="tel" 
                                required
                                placeholder="+91 98765 43210"
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <hr className="border-gray-100" />

            {/* Address Info */}
            <section className="space-y-4">
                <h2 className="text-lg font-semibold flex items-center gap-2 text-accent">
                    <MapPin className="h-5 w-5" />
                    Location
                </h2>
                <div className="space-y-3">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Flat / House No / Building</label>
                        <div className="relative">
                            <Home className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <input 
                                type="text" 
                                required
                                placeholder="Flat 101, Galaxy Apts"
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                value={formData.address}
                                onChange={(e) => setFormData({...formData, address: e.target.value})}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                            <div className="relative">
                                <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input 
                                    type="text" 
                                    required
                                    placeholder="New Delhi"
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                    value={formData.city}
                                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input 
                                    type="text" 
                                    required
                                    placeholder="110001"
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                    value={formData.pincode}
                                    onChange={(e) => setFormData({...formData, pincode: e.target.value})}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <button 
            type="submit"
            className="w-full bg-black text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:bg-gray-800 transition-all active:scale-95 flex items-center justify-center gap-2"
        >
            Confirm & Send
        </button>

      </form>
    </div>
  );
}
