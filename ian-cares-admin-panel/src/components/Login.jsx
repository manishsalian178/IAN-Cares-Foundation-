import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, User, Loader2, ArrowRight } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('https://ian-cares-backend.vercel.app/api/auth/login', {
                username,
                password
            });
            localStorage.setItem('adminToken', response.data.token);
            localStorage.setItem('adminUsername', response.data.username);
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.error || 'Login failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#E8F6FD] px-6">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FDB913]/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#1A6B96]/10 rounded-full blur-3xl animate-pulse"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-[#1A6B96]/20 border border-slate-100"
            >
                <div className="text-center mb-10">
                    <img src="https://res.cloudinary.com/dzzhtglaj/image/upload/q_auto/f_auto/v1772446233/ian_cares_foundation/logo.png" alt="Logo" className="h-20 mx-auto mb-6" />
                    <h1 className="text-3xl font-bold text-[#1A6B96] mb-2">Admin Portal</h1>
                    <p className="text-slate-500 font-medium">Please sign in to continue</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 uppercase tracking-widest mb-3 ml-1">Username</label>
                        <div className="relative">
                            <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1A6B96] transition-colors" size={20} />
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full pl-14 pr-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-[#1A6B96] focus:bg-white transition-all outline-none font-medium"
                                placeholder="Enter username"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 uppercase tracking-widest mb-3 ml-1">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1A6B96] transition-colors" size={20} />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-14 pr-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-[#1A6B96] focus:bg-white transition-all outline-none font-medium"
                                placeholder="Enter password"
                                required
                            />
                        </div>
                    </div>

                    {error && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-red-50 text-red-500 p-4 rounded-xl text-sm font-bold text-center"
                        >
                            {error}
                        </motion.div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#1A6B96] text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-900/20 hover:bg-[#155a82] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70 mt-4"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="animate-spin" size={20} />
                                Verifying...
                            </>
                        ) : (
                            <>
                                Sign In <ArrowRight size={20} />
                            </>
                        )}
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-slate-400 text-sm">
                        &copy; 2024 Ian Cares Foundation. All rights reserved.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
