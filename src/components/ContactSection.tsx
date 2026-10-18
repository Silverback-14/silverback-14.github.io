
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      {/* Corner light effect */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-corner-light-premium opacity-30 z-0 animate-light-flash"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="section-heading-premium relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-lg mb-6 text-slate-700">
              Have a project in mind or just want to chat? Feel free to reach out.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-900 placeholder-slate-500"
                />
                <div className="absolute inset-0 rounded-md bg-white/5 opacity-0 group-hover:opacity-100 blur-sm transition-opacity -z-10"></div>
              </div>
              
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-900 placeholder-slate-500"
                />
                <div className="absolute inset-0 rounded-md bg-white/5 opacity-0 group-hover:opacity-100 blur-sm transition-opacity -z-10"></div>
              </div>
              
              <div className="relative group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none text-slate-900 placeholder-slate-500"
                ></textarea>
                <div className="absolute inset-0 rounded-md bg-white/5 opacity-0 group-hover:opacity-100 blur-sm transition-opacity -z-10"></div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="cta-button-premium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="self-center"
          >
            <div className="glow-card p-8 flex flex-col items-center relative overflow-hidden group">
              {/* Inner highlight effect */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
              <div className="absolute -top-[150px] -right-[150px] w-[300px] h-[300px] bg-blue-100/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-xl font-bold italic mb-6 text-slate-800">Connect with me</h3>
              
              <div className="flex space-x-6 mb-6">
                <a 
                  href="https://github.com/silverback-14" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 border border-slate-200 rounded-full hover:border-blue-400 transition-all hover:scale-110 group relative"
                  style={{
                    boxShadow: '0 2px 10px rgba(59, 130, 246, 0.1)'
                  }}
                >
                  <Github className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
                </a>            
                <a 
                  href="https://linkedin.com/in/ananthram-v" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 border border-slate-200 rounded-full hover:border-blue-400 transition-all hover:scale-110 group relative"
                  style={{
                    boxShadow: '0 2px 10px rgba(59, 130, 246, 0.1)'
                  }}
                >
                  <Linkedin className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
                </a>
              </div>
              
              <div className="text-center relative z-10">
                <p className="text-slate-600 mb-1">Or email me at:</p>
                <a 
                  href="mailto:ananthram1411@gmail.com" 
                  className="text-blue-600 hover:underline hover:text-blue-700 transition-colors relative group"
                >
                  ananthram1411@gmail.com
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
