import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, ArrowRight, MapPin, Trash2, Calendar, User, Edit2, X } from 'lucide-react';
import axios from 'axios';

const JourneyAdmin = () => {
    const [formData, setFormData] = useState({
        name: '',
        shortDescription: '',
        content: '',
        videoUrl: '',
        image: null,
        video: null
    });
    const [journeys, setJourneys] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        fetchJourneys();
    }, []);

    const fetchJourneys = async () => {
        try {
            const response = await axios.get('https://ian-cares-backend.vercel.app/api/journey');
            setJourneys(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching journeys:', error);
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({ ...prev, image: e.target.files[0] }));
        }
    };

    const handleVideoChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({ ...prev, video: e.target.files[0] }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const data = new FormData();
        data.append('name', formData.name);
        data.append('shortDescription', formData.shortDescription);
        data.append('content', formData.content);
        data.append('videoUrl', formData.videoUrl);
        if (formData.image) {
            data.append('image', formData.image);
        }
        if (formData.video) {
            data.append('video', formData.video);
        }

        try {
            const token = localStorage.getItem('adminToken');
            if (editingId) {
                await axios.put(`https://ian-cares-backend.vercel.app/api/journey/${editingId}`, data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`
                    }
                });
                alert('Journey entry updated successfully!');
            } else {
                await axios.post('https://ian-cares-backend.vercel.app/api/journey', data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`
                    }
                });
                alert('Journey entry saved successfully!');
            }
            // Reset form and reload
            handleCancel();
            fetchJourneys();
        } catch (error) {
            console.error('Error saving journey:', error);
            alert('Error saving journey entry: ' + (error.response?.data?.error || error.message));
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleEdit = (journey) => {
        setEditingId(journey._id);
        setFormData({
            name: journey.name,
            shortDescription: journey.shortDescription,
            content: journey.content,
            videoUrl: journey.videoUrl || '',
            image: null,
            video: null
        });
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleCancel = () => {
        setEditingId(null);
        setFormData({ name: '', shortDescription: '', content: '', videoUrl: '', image: null, video: null });
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this journey entry?')) return;

        try {
            const token = localStorage.getItem('adminToken');
            await axios.delete(`https://ian-cares-backend.vercel.app/api/journey/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setJourneys(prev => prev.filter(journey => journey._id !== id));
            alert('Journey entry deleted successfully');
        } catch (error) {
            console.error('Error deleting journey:', error);
            alert('Error deleting journey entry: ' + (error.response?.data?.error || error.message));
        }
    };

    return (
        <div className="min-h-screen font-sans text-slate-800 bg-[#E8F6FD] pt-32 pb-20 px-6">
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 blur-3xl bg-[#FDB913]/30 rounded-full translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 bg-white text-[#1A6B96] rounded-xl flex items-center justify-center shadow-sm">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-[#1A6B96]">Manage Journey</h1>
                            <p className="text-slate-500">Document transformation stories and milestones</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Form Section */}
                        <div ref={formRef} className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-8 border-white h-fit sticky top-32">
                            <h2 className="text-xl font-bold text-[#1A6B96] mb-6 flex items-center gap-2">
                                {editingId ? <Edit2 size={20} /> : <MapPin size={20} />} {editingId ? 'Edit Journey' : 'New Journey'}
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-[#1A6B96] uppercase tracking-wider">
                                        Beneficiary Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Full name of the person"
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-[#1A6B96]/20 transition-all text-slate-900 font-medium"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-[#1A6B96] uppercase tracking-wider">
                                        {editingId ? 'Update Journey Image (Optional)' : 'Journey Image'}
                                    </label>

                                    {editingId && !formData.image && journeys.find(j => j._id === editingId)?.image && (
                                        <div className="mb-4">
                                            <p className="text-xs font-bold text-slate-400 mb-2 uppercase">Current Image:</p>
                                            <div className="w-full h-40 rounded-2xl overflow-hidden bg-slate-100 border-2 border-slate-200">
                                                <img
                                                    src={journeys.find(j => j._id === editingId).image.startsWith('http') ? journeys.find(j => j._id === editingId).image : `https://ian-cares-backend.vercel.app${journeys.find(j => j._id === editingId).image}`}
                                                    alt="Current"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {formData.image && (
                                        <div className="mb-4">
                                            <p className="text-xs font-bold text-[#FDB913] mb-2 uppercase">New Image Selected:</p>
                                            <div className="w-full h-40 rounded-2xl overflow-hidden bg-slate-100 border-2 border-[#FDB913]/30">
                                                <img
                                                    src={URL.createObjectURL(formData.image)}
                                                    alt="Preview"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <label className="flex items-center justify-center w-full h-[58px] px-6 rounded-2xl bg-slate-50 border border-dashed border-slate-300 hover:border-[#FDB913] hover:bg-slate-100 transition-all cursor-pointer group">
                                        <div className="flex items-center gap-2 text-slate-500 group-hover:text-[#FDB913]">
                                            <Upload size={20} />
                                            <span className="text-sm font-medium">{formData.image ? formData.image.name : 'Upload portrait/action photo'}</span>
                                        </div>
                                        <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" required={!editingId} />
                                    </label>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-[#1A6B96] uppercase tracking-wider">
                                        Short Description
                                    </label>
                                    <input
                                        type="text"
                                        name="shortDescription"
                                        value={formData.shortDescription}
                                        onChange={handleInputChange}
                                        placeholder="e.g. 'From despair to digital literacy'"
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-[#1A6B96]/20 transition-all text-slate-900 font-medium"
                                        required
                                    />
                                </div>

                                <div className="space-y-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-[#1A6B96] uppercase tracking-wider">
                                            Video Upload (Local File)
                                        </label>
                                        <label className="flex items-center justify-center w-full h-[58px] px-6 rounded-2xl bg-white border border-dashed border-slate-300 hover:border-[#FDB913] hover:bg-slate-50 transition-all cursor-pointer group">
                                            <div className="flex items-center gap-2 text-slate-500 group-hover:text-[#FDB913]">
                                                <Upload size={20} />
                                                <span className="text-sm font-medium">{formData.video ? formData.video.name : 'Choose video file'}</span>
                                            </div>
                                            <input type="file" className="hidden" onChange={handleVideoChange} accept="video/*" />
                                        </label>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-slate-200"></div>
                                        </div>
                                        <div className="relative flex justify-center text-xs uppercase">
                                            <span className="bg-slate-50 px-2 text-slate-400 font-bold">Or Embed</span>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-[#1A6B96] uppercase tracking-wider">
                                            Any Video URL (Any Platform)
                                        </label>
                                        <input
                                            type="text"
                                            name="videoUrl"
                                            value={formData.videoUrl}
                                            onChange={handleInputChange}
                                            disabled={!!formData.video}
                                            placeholder={formData.video ? "File selected (Link disabled)" : "Add Link"}
                                            className={`w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 focus:outline-none focus:ring-2 focus:ring-[#1A6B96]/20 transition-all text-slate-900 font-medium ${formData.video ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-[#1A6B96] uppercase tracking-wider">
                                        Transformation Story
                                    </label>
                                    <phone-textarea
                                        name="content"
                                        rows="5"
                                        value={formData.content}
                                        onChange={handleInputChange}
                                        placeholder="Describe their transformation journey in detail..."
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-[#1A6B96]/20 transition-all text-slate-900 font-medium resize-none text-sm block"
                                        required
                                        style={{ minHeight: '120px' }}
                                    >
                                        <textarea
                                            name="content"
                                            rows="5"
                                            value={formData.content}
                                            onChange={handleInputChange}
                                            className="w-full h-full bg-transparent border-none focus:ring-0 resize-none"
                                            required
                                        ></textarea>
                                    </phone-textarea>
                                </div>

                                <div className="pt-2 flex justify-end gap-3">
                                    {editingId && (
                                        <button
                                            type="button"
                                            onClick={handleCancel}
                                            className="bg-slate-100 text-slate-600 px-8 py-3 rounded-full font-bold hover:bg-slate-200 transition-all flex items-center gap-2"
                                        >
                                            <X size={20} /> Cancel
                                        </button>
                                    )}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`bg-[#1A6B96] text-white px-8 py-3 rounded-full font-bold shadow-xl hover:bg-[#155a82] transition-all flex items-center gap-2 transform hover:scale-105 active:scale-95 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                                Saving...
                                            </>
                                        ) : (
                                            <>{editingId ? 'Update Journey' : 'Save Journey'} <ArrowRight size={20} /></>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* List Section */}
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold text-[#1A6B96] flex items-center gap-2">
                                <MapPin size={20} /> Existing Journeys ({journeys.length})
                            </h2>

                            {loading ? (
                                <div className="bg-white rounded-3xl p-12 text-center shadow-lg border-4 border-white">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1A6B96] mx-auto"></div>
                                    <p className="mt-4 text-slate-500 font-medium">Loading journeys...</p>
                                </div>
                            ) : journeys.length === 0 ? (
                                <div className="bg-white rounded-3xl p-12 text-center shadow-lg border-4 border-white">
                                    <MapPin size={48} className="mx-auto text-slate-300 mb-4" />
                                    <p className="text-slate-500 font-medium">No journey entries found.</p>
                                </div>
                            ) : (
                                <div className="grid gap-4">
                                    <AnimatePresence>
                                        {journeys.map((journey) => (
                                            <motion.div
                                                key={journey._id}
                                                layout
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                className={`bg-white rounded-2xl p-4 shadow-md border-2 transition-all flex gap-4 items-center group ${editingId === journey._id ? 'border-[#1A6B96] ring-2 ring-[#1A6B96]/10' : 'border-white'}`}
                                            >
                                                <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                                                    {journey.image ? (
                                                        <img
                                                            src={journey.image.startsWith('http') ? journey.image : `https://ian-cares-backend.vercel.app${journey.image}`}
                                                            alt={journey.name}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center text-slate-300">
                                                            <User size={32} />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex-grow min-w-0">
                                                    <h3 className="font-bold text-[#1A6B96] truncate">{journey.name}</h3>
                                                    <p className="text-xs text-slate-500 truncate">{journey.shortDescription}</p>
                                                    <div className="flex items-center gap-3 mt-1">
                                                        <span className="flex items-center gap-1 text-xs font-bold text-slate-400 uppercase tracking-widest">
                                                            <Calendar size={12} /> {new Date(journey.createdAt).toLocaleDateString()}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => handleEdit(journey)}
                                                        className="w-10 h-10 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center hover:bg-[#1A6B96] hover:text-white transition-all transform hover:scale-110 active:scale-95"
                                                        title="Edit Journey"
                                                    >
                                                        <Edit2 size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(journey._id)}
                                                        className="w-10 h-10 bg-rose-50 text-rose-500 rounded-xl flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all transform hover:scale-110 active:scale-95"
                                                        title="Delete Journey"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default JourneyAdmin;
