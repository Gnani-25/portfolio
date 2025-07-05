import React, { useState, useRef } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rasmalgnaneshwar001@gmail.com',
      href: 'mailto:rasmalgnaneshwar001@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9347560270',
      href: 'tel:+919347560270'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://linkedin.com/in/gnaneshwar-r-a9aa5228b'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my code',
      href: 'https://github.com/Gnani-25'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // EmailJS configuration
    const serviceId = 'service_fyisatm'; // Replace with your EmailJS service ID
    const templateId = 'template_whmsrog'; // Replace with your EmailJS template ID
    const publicKey = '579maFbvbUQkkYV_o'; // Replace with your EmailJS public key

    emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Email send failed:', error.text);
        setError('Failed to send message. Please try again or contact me directly via email.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your project or tutoring needs.
            I'm always excited to work on challenging problems and help others grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you're looking for web development services, custom software solutions,
                or programming tutoring, I'm here to help. With my strong academic background
                and hands-on experience, I can bring your ideas to life or help you master
                programming concepts.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-all duration-300 hover:scale-[1.02] group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <contact.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{contact.label}</h4>
                    <p className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="bg-gray-900/50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <MapPin className="text-cyan-400 mr-3" size={24} />
                <h4 className="text-xl font-semibold text-white">Based in India</h4>
              </div>
              <p className="text-gray-400">
                Currently studying at Vardhaman College of Engineering while conducting
                research at IIT Ropar. Available for remote collaboration worldwide.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle size={64} className="text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-gray-400">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <AlertCircle size={64} className="text-red-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Message Failed</h4>
                <p className="text-gray-400 mb-4">{error}</p>
                <button
                  onClick={() => setError('')}
                  className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none resize-none transition-colors duration-300"
                    placeholder="Tell me more about your project or what you'd like to learn..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 mb-4">
            © 2024 Rasmal Gnaneshwar. Crafted with passion for programming and innovation.
          </p>
          <p className="text-gray-500 text-sm">
            Currently pursuing B.Tech CSE at Vardhaman College of Engineering | Research Intern at IIT Ropar
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
