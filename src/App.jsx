import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  Brain,
  Users,
  Phone,
  MapPin,
  Mail,
  Menu,
  X,
  Sun,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Mission', href: '#mission' },
    { name: 'Spirituality', href: '#spirituality' },
    { name: 'Journey', href: '#journey' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: 'De-addiction Strategy',
      description: 'Focusing on long-term sobriety and relapse prevention through a guided, supportive environment.'
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: 'Mental Health Support',
      description: 'Counseling for depression and anxiety focused on restoring balance and building emotional resilience.'
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Youth Empowerment',
      description: 'Workshops focused on unlocking full potential and discovering internal purpose for young adults.'
    }
  ];

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-[#E8F6FD]">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Ian Cares Foundation Logo"
              className="h-12 w-auto object-contain"
            />
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-[#1A6B96]' : 'text-slate-900'}`}>
              IAN CARES
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium hover:text-[#1A6B96] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+918750075006"
              className="bg-[#FDB913] text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:bg-[#e5a811] transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Phone size={18} />
              Book Help
            </a>
          </div>

          <button
            className="md:hidden text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[40] flex flex-col justify-center items-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-bold text-[#1A6B96]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+918750075006"
              className="bg-[#FDB913] text-white px-10 py-4 rounded-full font-bold text-xl"
            >
              Contact Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 blur-3xl bg-[#FDB913]/30 rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-[#1A6B96]/10 text-[#1A6B96] px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 inline-block">
              Dedicated to Recovery
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-[#1A6B96] leading-[1.1] mb-8">
              Healing Minds <br /> with Heart
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
              Since 2017, we have walked beside individuals struggling with alcohol, drugs, and depression to give them a truly deserved 'second chance'.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#mission" className="bg-[#1A6B96] text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-[#155a82] transition-all flex items-center gap-2">
                Our Mission <ArrowRight size={20} />
              </a>
              <a href="tel:+918750075006" className="bg-white text-[#1A6B96] border-2 border-[#1A6B96] px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
                <Phone size={20} /> Call Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2520&auto=format&fit=crop"
                alt="Healing Journey"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 w-64 h-64 bg-[#FDB913]/20 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Method */}
      <section id="mission" className="py-24 bg-white/50 px-6 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A6B96] mb-6">Why Choose Ian Cares Foundation?</h2>
            <div className="w-24 h-1.5 bg-[#FDB913] mx-auto rounded-full"></div>
            <p className="mt-8 text-xl text-slate-600 max-w-3xl mx-auto">
              Recovery is more than a clinical process — it's a family-centered community approach where every step is a guided journey toward light.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Peer Support', desc: 'Connecting with those who understand the struggle deeply.' },
              { title: 'Holistic Focus', desc: 'Restoring mind, body, and spirit in unison.' },
              { title: 'Family Values', desc: 'Rebuilding the broken bridges to your loved ones.' }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
              >
                <div className="w-12 h-12 bg-[#FDB913]/20 rounded-xl flex items-center justify-center text-[#FDB913] mb-6">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[#1A6B96] mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spirituality - Sarva Dharma Sangama */}
      <section id="spirituality" className="py-24 px-6 bg-gradient-to-br from-[#1A6B96] to-[#0f4664] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          {/* Symbolism placeholder icons */}
          <Sun className="absolute top-10 left-10 w-32 h-32" />
          <Users className="absolute bottom-10 right-10 w-48 h-48" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#FDB913] font-bold tracking-widest uppercase text-sm mb-4 inline-block">Spiritual Foundation</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Sarva Dharma Sangama</h2>
            <p className="text-xl text-blue-100 leading-relaxed mb-10">
              Our spiritual foundation welcomes all faiths, creating a safe harbour for inner harmony. We believe that spiritual strength is the cornerstone of holistic healing and restoring the broken self.
            </p>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-lg">
                <div className="w-8 h-8 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center">
                  <Sparkles size={18} />
                </div>
                Inclusivity beyond religion
              </li>
              <li className="flex items-center gap-4 text-lg">
                <div className="w-8 h-8 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center">
                  <Sparkles size={18} />
                </div>
                Meditation & Daily Mindfulness
              </li>
              <li className="flex items-center gap-4 text-lg">
                <div className="w-8 h-8 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center">
                  <Sparkles size={18} />
                </div>
                Universal Love & Service
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full border-[20px] border-white/10 flex items-center justify-center p-8 animate-pulse">
              <div className="w-full h-full rounded-full bg-[#FDB913] flex items-center justify-center text-[#1A6B96] shadow-2xl shadow-[#FDB913]/30">
                <Sun size={120} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey of Change - Ramesh's Story */}
      <section id="journey" className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A6B96] mb-4">Journey of Change</h2>
            <p className="text-slate-500 font-medium">Real stories of restoration and dignity</p>
          </div>

          <div className="grid md:grid-cols-2 gap-0 rounded-[40px] overflow-hidden shadow-3xl bg-white border border-slate-100">
            <div className="p-12 bg-slate-100 flex flex-col justify-center">
              <div className="text-slate-400 font-bold mb-4 uppercase tracking-widest text-xs">The Darkness (Before)</div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6">Starting at Rock Bottom</h3>
              <p className="text-slate-600 italic leading-relaxed text-lg">
                "Ramesh lived a life lost to chronic addiction. He was completely isolated from his family, facing profound emotional distress and wandering through the shadows without a sense of self."
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-slate-300"></div>
                <div>
                  <div className="font-bold">Ramesh</div>
                  <div className="text-xs text-slate-400 lowercase">Year 0</div>
                </div>
              </div>
            </div>

            <div className="p-12 bg-[#1A6B96] text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Heart size={120} />
              </div>
              <div className="text-[#FDB913] font-bold mb-4 uppercase tracking-widest text-xs font-bold">The Light (After)</div>
              <h3 className="text-3xl font-bold mb-6">Living with Purpose</h3>
              <p className="text-blue-50 leading-relaxed text-lg">
                "Today, Ramesh is a beacon of hope. As a mentor for young adults, he lives a life defined by sobriety, dignity, and purpose. He is no longer defined by his past, but by the hearts he heals."
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FDB913] flex items-center justify-center text-[#1A6B96]">
                  <CheckCircle2 />
                </div>
                <div>
                  <div className="font-bold">Mentor Ramesh</div>
                  <div className="text-xs text-[#FDB913] font-bold">Today</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Expansion */}
      <section id="services" className="py-24 px-6 bg-[#E8F6FD]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A6B96] mb-6">Supporting Your Path</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Expert care that focuses on long-term results and internal purpose, rather than just clinical numbers.
              </p>
            </div>
            <a href="tel:+918750075006" className="text-[#1A6B96] font-bold flex items-center gap-2 hover:underline">
              View All Services <ArrowRight size={20} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-10 shadow-xl shadow-blue-900/5 group hover:bg-[#1A6B96] transition-all duration-500"
              >
                <div className="w-16 h-16 bg-[#1A6B96]/5 text-[#1A6B96] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FDB913] group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1A6B96] mb-4 group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-blue-50 transition-colors">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <section id="contact" className="pt-24 pb-12 px-6 bg-slate-900 text-white rounded-t-[50px]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <img
                src="/images/logo.png"
                alt="Ian Cares Foundation Logo"
                className="h-16 w-auto object-contain"
              />
              <span className="text-3xl font-bold tracking-tight text-white">IAN CARES</span>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              A peer-supported rehabilitation community dedicated to restorative healing and long-term sobriety. We walk with you toward a second chance.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-[#FDB913] group-hover:bg-[#FDB913] group-hover:text-white transition-all">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="text-slate-400 text-sm">Emergency Support</div>
                  <div className="font-bold text-xl">+91 87500 75006</div>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-[#FDB913] group-hover:bg-[#FDB913] group-hover:text-white transition-all">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="text-slate-400 text-sm">Office Enquiries</div>
                  <div className="font-bold text-xl">+91 97402 96297</div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 grid sm:grid-cols-2 gap-12 bg-slate-800/50 p-12 rounded-[40px] border border-slate-700">
            <div>
              <h4 className="text-[#FDB913] font-bold mb-6 text-lg uppercase tracking-widest">Our Home</h4>
              <div className="flex items-start gap-4">
                <MapPin className="text-[#FDB913] mt-1 shrink-0" />
                <address className="not-italic text-slate-300 text-lg leading-relaxed">
                  Quila, Kinnigoli Town Panchayat,<br />
                  Dakshina Kannada Dist.,<br />
                  Karnataka, 574150
                </address>
              </div>
            </div>
            <div>
              <h4 className="text-[#FDB913] font-bold mb-6 text-lg uppercase tracking-widest">Write To Us</h4>
              <div className="flex items-center gap-4">
                <Mail className="text-[#FDB913] shrink-0" />
                <span className="text-slate-300 text-lg">help@iancares.foundation</span>
              </div>
              <div className="mt-8">
                <button className="w-full bg-[#1A6B96] text-white py-4 rounded-2xl font-bold hover:bg-[#155a82] transition-all">
                  Send a Message
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Ian Cares Foundation. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
