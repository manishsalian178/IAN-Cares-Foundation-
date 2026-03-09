import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, ArrowRight, Image as ImageIcon, Trash2, Tag, Calendar, Edit2, X } from 'lucide-react';
import axios from 'axios';

const GalleryAdmin = () => {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        image: null,
    });
    const [galleryItems, setGalleryItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        fetchGallery();
    }, []);

    const fetchGallery = async () => {
        try {
            const response = await axios.get('https://ian-cares-backend.vercel.app/api/gallery');
            setGalleryItems(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching gallery:', error);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const data = new FormData();
        data.append('title', formData.title);
        data.append('category', formData.category);
        if (formData.image) {
            data.append('image', formData.image);
        }

        try {
            const token = localStorage.getItem('adminToken');
            if (editingId) {
                await axios.put(`https://ian-cares-backend.vercel.app/api/gallery/${editingId}`, data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`
                    }
                });
                alert('Gallery item updated successfully!');
            } else {
                await axios.post('https://ian-cares-backend.vercel.app/api/gallery', data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`
                    }
                });
                alert('Gallery item saved successfully!');
            }
            // Reset form and reload
            handleCancel();
            fetchGallery();
        } catch (error) {
            console.error('Error saving gallery:', error);
            alert('Error saving gallery item: ' + (error.response?.data?.error || error.message));
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleEdit = (item) => {
        setEditingId(item._id);
        setFormData({
            title: item.title,
            category: item.category,
            image: null,
        });
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleCancel = () => {
        setEditingId(null);
        setFormData({ title: '', category: '', image: null });
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this gallery item?')) return;

        try {
            const token = localStorage.getItem('adminToken');
            await axios.delete(`https://ian-cares-backend.vercel.app/api/gallery/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setGalleryItems(prev => prev.filter(item => item._id !== id));
            alert('Item deleted successfully');
        } catch (error) {
            console.error('Error deleting item:', error);
            alert('Error deleting item: ' + (error.response?.data?.error || error.message));
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
                            <ImageIcon size={24} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-[#1A6B96]">Manage Gallery</h1>
                            <p className="text-slate-500">Update foundation photos and success stories</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Form Section */}
                        <div ref={formRef} className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-8 border-white h-fit sticky top-32">
                            <h2 className="text-xl font-bold text-[#1A6B96] mb-6 flex items-center gap-2">
                                {editingId ? <Edit2 size={20} /> : <Upload size={20} />} {editingId ? 'Edit Photo' : 'Add New Photo'}
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-[#1A6B96] uppercase tracking-wider">
                                        {editingId ? 'Update Photo (Optional)' : 'Upload Photo'}
                                    </label>

                                    {editingId && !formData.image && galleryItems.find(item => item._id === editingId)?.image && (
                                        <div className="mb-4">
                                            <p className="text-xs font-bold text-slate-400 mb-2 uppercase">Current Photo:</p>
                                            <div className="w-full h-40 rounded-2xl overflow-hidden bg-slate-100 border-2 border-slate-200">
                                                <img
                                                    src={galleryItems.find(item => item._id === editingId).image.startsWith('http') ? galleryItems.find(item => item._id === editingId).image : `https://ian-cares-backend.vercel.app${galleryItems.find(item => item._id === editingId).image}`}
                                                    alt="Current"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {formData.image && (
                                        <div className="mb-4">
                                            <p className="text-xs font-bold text-[#FDB913] mb-2 uppercase">New Photo Selected:</p>
                                            <div className="w-full h-40 rounded-2xl overflow-hidden bg-slate-100 border-2 border-[#FDB913]/30">
                                                <img
                                                    src={URL.createObjectURL(formData.image)}
                                                    alt="Preview"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <label className="flex flex-col items-center justify-center w-full h-40 rounded-2xl bg-slate-50 border border-dashed border-slate-300 hover:border-[#FDB913] hover:bg-slate-100 transition-all cursor-pointer group">
                                        <div className="flex flex-col items-center gap-2 text-slate-500 group-hover:text-[#FDB913]">
                                            <Upload size={24} />
                                            <span className="text-sm font-bold text-center px-4">{formData.image ? formData.image.name : 'Drop image here or click to browse'}</span>
                                        </div>
                                        <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" required={!editingId} />
                                    </label>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-[#1A6B96] uppercase tracking-wider">
                                        Category
                                    </label>
                                    <input
                                        type="text"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleInputChange}
                                        placeholder="e.g. Events, Projects, Success"
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-[#1A6B96]/20 transition-all text-slate-900 font-medium"
                                        required
                                    />
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-[#1A6B96] uppercase tracking-wider">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleInputChange}
                                            placeholder="Enter item title"
                                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-[#1A6B96]/20 transition-all text-slate-900 font-medium"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="pt-4 flex justify-end gap-3">
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
                                            <>{editingId ? 'Update Item' : 'Add to Gallery'} <ArrowRight size={20} /></>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* List Section */}
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold text-[#1A6B96] flex items-center gap-2">
                                <ImageIcon size={20} /> Existing Items ({galleryItems.length})
                            </h2>

                            {loading ? (
                                <div className="bg-white rounded-3xl p-12 text-center shadow-lg border-4 border-white">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1A6B96] mx-auto"></div>
                                    <p className="mt-4 text-slate-500 font-medium">Loading gallery items...</p>
                                </div>
                            ) : galleryItems.length === 0 ? (
                                <div className="bg-white rounded-3xl p-12 text-center shadow-lg border-4 border-white">
                                    <ImageIcon size={48} className="mx-auto text-slate-300 mb-4" />
                                    <p className="text-slate-500 font-medium">No gallery items found. Add your first item!</p>
                                </div>
                            ) : (
                                <div className="grid gap-4">
                                    <AnimatePresence>
                                        {galleryItems.map((item) => (
                                            <motion.div
                                                key={item._id}
                                                layout
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                className={`bg-white rounded-2xl p-4 shadow-md border-2 transition-all flex gap-4 items-center group ${editingId === item._id ? 'border-[#1A6B96] ring-2 ring-[#1A6B96]/10' : 'border-white'}`}
                                            >
                                                <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                                                    <img
                                                        src={item.image.startsWith('http') ? item.image : `https://ian-cares-backend.vercel.app${item.image}`}
                                                        alt={item.title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                </div>
                                                <div className="flex-grow min-w-0">
                                                    <h3 className="font-bold text-[#1A6B96] truncate">{item.title}</h3>
                                                    <div className="flex items-center gap-3 mt-1">
                                                        <span className="flex items-center gap-1 text-xs font-bold text-slate-400 uppercase tracking-widest">
                                                            <Tag size={12} /> {item.category}
                                                        </span>
                                                        <span className="flex items-center gap-1 text-xs font-bold text-slate-400 uppercase tracking-widest">
                                                            <Calendar size={12} /> {new Date(item.createdAt).toLocaleDateString()}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => handleEdit(item)}
                                                        className="w-10 h-10 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center hover:bg-[#1A6B96] hover:text-white transition-all transform hover:scale-110 active:scale-95"
                                                        title="Edit Item"
                                                    >
                                                        <Edit2 size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(item._id)}
                                                        className="w-10 h-10 bg-rose-50 text-rose-500 rounded-xl flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all transform hover:scale-110 active:scale-95"
                                                        title="Delete Item"
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

export default GalleryAdmin;
