import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Save, Loader2 } from 'lucide-react';
import axios from 'axios';

const LiveTouchAdmin = () => {
    const [livesTouched, setLivesTouched] = useState('');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const response = await axios.get('https://ian-cares-backend.vercel.app/api/settings');
                setLivesTouched(response.data.livesTouched);
            } catch (error) {
                console.error('Error fetching settings:', error);
                setMessage({ type: 'error', text: 'Failed to load settings' });
            } finally {
                setLoading(false);
            }
        };
        fetchSettings();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        setMessage({ type: '', text: '' });

        try {
            const token = localStorage.getItem('adminToken');
            await axios.post('https://ian-cares-backend.vercel.app/api/settings', { livesTouched }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setMessage({ type: 'success', text: 'Settings updated successfully!' });
        } catch (error) {
            console.error('Error updating settings:', error);
            setMessage({ type: 'error', text: 'Failed to update settings' });
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-12 h-12 text-[#1A6B96] animate-spin" />
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20 px-6 min-h-screen bg-slate-50">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/60 border border-slate-100"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-[#1A6B96]/10 rounded-2xl flex items-center justify-center text-[#1A6B96]">
                            <Globe size={24} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900">Live Touch Settings</h1>
                            <p className="text-slate-500">Manage the global "Lives Touched" counter for the landing page.</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">
                                Lives Touched Count
                            </label>
                            <input
                                type="text"
                                value={livesTouched}
                                onChange={(e) => setLivesTouched(e.target.value)}
                                className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 focus:border-[#1A6B96] focus:ring-0 transition-all text-xl font-bold text-[#1A6B96]"
                                placeholder="e.g. 2,10,000+"
                                required
                            />
                            <p className="mt-2 text-slate-400 text-sm italic">
                                This value will be displayed with a "+" sign if you don't include it.
                            </p>
                        </div>

                        {message.text && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className={`p-4 rounded-2xl text-center font-bold ${message.type === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                                    }`}
                            >
                                {message.text}
                            </motion.div>
                        )}

                        <button
                            type="submit"
                            disabled={saving}
                            className="w-full bg-[#1A6B96] text-white py-5 rounded-2xl font-bold text-xl shadow-xl shadow-blue-900/20 hover:bg-[#155a82] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                        >
                            {saving ? (
                                <>
                                    <Loader2 className="animate-spin" />
                                    Saving Changes...
                                </>
                            ) : (
                                <>
                                    <Save size={24} />
                                    Update Landing Page
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default LiveTouchAdmin;
