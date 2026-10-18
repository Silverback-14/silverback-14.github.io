import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const socials = [
    { name: 'GitHub', href: 'https://github.com/silverback-14', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/ananthram-v', icon: Linkedin },
    { name: 'Email', href: 'mailto:ananthram1411@gmail.com', icon: Mail },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=2013&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-[0.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/95 to-void/80" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="section-label">Contact</span>
          <h2 className="section-title">
            Let's build something<br />
            <span className="text-gradient-glow">extraordinary</span><span className="text-white">.</span>
          </h2>
          <p className="font-body text-white/40 text-lg max-w-lg mx-auto">
            Have a project in mind, need an AI that works while you sleep, or just want to chat? I'm all ears.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-dark"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-dark"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="input-dark resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-glow w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Sending...' : 'Send message'}
              </button>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 flex flex-col justify-center"
          >
            <div className="glass-card p-7">
              <h3 className="font-display font-bold text-lg text-white mb-2">Quick connect</h3>
              <div className="flex items-center gap-1.5 text-white/30 text-xs font-mono mb-3">
                <MapPin className="w-3 h-3" />
                Bangalore, India
              </div>
              <p className="font-body text-white/30 text-sm mb-6">
                Response time: usually within 24 hours.
              </p>

              <div className="space-y-3">
                {socials.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target={name !== 'Email' ? '_blank' : undefined}
                    rel={name !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/3 border border-white/5 hover:border-glow-purple/20 hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-white/40 group-hover:text-glow-purple transition-colors" />
                      </div>
                      <span className="font-body text-sm text-white/60 group-hover:text-white/80 transition-colors">
                        {name}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-glow-purple transition-colors" />
                  </a>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/5">
                <p className="font-mono text-xs text-white/20 text-center">
                  ananthram1411@gmail.com
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
