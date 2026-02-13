
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
    X,
    MessageCircle,
    UserCheck,
    Check
} from 'lucide-react';

export default function LoginPage() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (provider) => {
        setIsLoading(true);
        // Add a small delay to simulate loading visually
        setTimeout(() => {
            login(provider);
            // After context updates, navigate back
            navigate('/');
        }, 800);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center font-sans tracking-wide">
            
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden relative">
                
                {/* Close Button */}
                <button 
                    onClick={() => navigate('/')} 
                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <X className="h-6 w-6 text-gray-400" />
                </button>

                {/* Header */}
                <div className="p-8 pb-4 text-center">
                    <div className="flex justify-center mb-6">
                        <img src="/logo.png" alt="Rapid Home" className="w-[120px] h-[120px] object-contain -my-4" />
                    </div>
                    <h1 className="text-3xl font-extrabold text-black mb-2">Welcome Back</h1>
                    <p className="text-gray-500 text-sm">Please sign in to continue</p>
                </div>

                {/* Social Login Buttons */}
                <div className="px-8 pb-8 space-y-4">
                    
                    {/* Google */}
                    <button 
                        onClick={() => handleLogin('google')}
                        disabled={isLoading}
                        className="w-full flex items-center justify-center gap-3 bg-white text-gray-700 font-bold py-3.5 px-4 rounded-xl border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                    >
                         {isLoading ? (
                            <div className="absolute inset-0 bg-white/60 flex items-center justify-center z-10">
                                <div className="animate-spin rounded-full h-5 w-5 border-2 border-gray-300 border-t-black"></div>
                            </div>
                        ) : null}
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                            alt="Google" 
                            className="w-5 h-5"
                        />
                        <span>Continue with Google</span>
                    </button>

                    {/* Facebook */}
                    <button 
                        onClick={() => handleLogin('facebook')}
                        disabled={isLoading}
                        className="w-full flex items-center justify-center gap-3 bg-[#1877F2] text-white font-bold py-3.5 px-4 rounded-xl hover:bg-[#166fe5] transition-all shadow-md active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                    >
                        {isLoading ? (
                             <div className="absolute inset-0 bg-black/10 flex items-center justify-center z-10">
                                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/40 border-t-white"></div>
                            </div>
                        ) : null}
                         <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.791 1.057-2.791 2.378v1.594h4.414l-.559 3.667h-3.856v7.98h-4.996z"></path>
                         </svg>
                        <span>Continue with Facebook</span>
                    </button>

                    {/* Twitter / X */}
                    <button 
                        onClick={() => handleLogin('twitter')}
                        disabled={isLoading}
                        className="w-full flex items-center justify-center gap-3 bg-black text-white font-bold py-3.5 px-4 rounded-xl hover:bg-gray-900 transition-all shadow-md active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                    >
                         {isLoading ? (
                             <div className="absolute inset-0 bg-white/10 flex items-center justify-center z-10">
                                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/40 border-t-white"></div>
                            </div>
                        ) : null}
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                        </svg>
                        <span>Continue with X (Twitter)</span>
                    </button>

                    <div className="flex items-center gap-4 my-6">
                        <div className="h-px bg-gray-200 flex-1"></div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">or</span>
                        <div className="h-px bg-gray-200 flex-1"></div>
                    </div>

                    <p className="text-center text-xs text-gray-400 mt-6">
                        By continuing, you simply agree to our Terms of Service & Privacy Policy for this demo app.
                    </p>

                </div>
            </div>
        </div>
    );
}
