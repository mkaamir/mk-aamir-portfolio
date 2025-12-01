import { Mail, Phone, MapPin, Linkedin, Github, Facebook, Twitter, Instagram } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.subject && formData.message) {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/mkaamir786', color: '#0A66C2' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/mkaamir', color: '#333333' },
    { name: 'Instagram', icon: Instagram, url: 'https://stackoverflow.com', color: '#F48024' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com', color: '#1877F2' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com', color: '#1DA1F2' },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Contact Me</h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out to me
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex gap-4">
                <div className="p-3 bg-yellow-400 bg-opacity-10 rounded-lg h-fit">
                  <Mail className="text-yellow-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-gray-400">mkaamir786@gmail.com</p>
                  <p className="text-gray-500 text-sm">I'll reply within 24 hours</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="p-3 bg-yellow-400 bg-opacity-10 rounded-lg h-fit">
                  <Phone className="text-yellow-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <p className="text-gray-400">+92 (304) 833-8506</p>
                  <p className="text-gray-500 text-sm">Available 24/7</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="p-3 bg-yellow-400 bg-opacity-10 rounded-lg h-fit">
                  <MapPin className="text-yellow-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <p className="text-gray-400">Quetta Balochistan, Pakistan</p>
                  <p className="text-gray-500 text-sm">Based in Pakistan, available worldwide</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h4 className="text-white font-semibold mb-6">Follow Me</h4>
              <div className="flex gap-4 flex-wrap">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-yellow-400 bg-opacity-10 hover:bg-opacity-20 border border-yellow-400 border-opacity-30 hover:border-opacity-100 text-yellow-400 hover:text-yellow-500 transition flex items-center justify-center"
                      title={social.name}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-slate-900 p-8 rounded-lg border border-yellow-400 border-opacity-20">
              <div className="mb-6">
                <label className="block text-white font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-slate-800 border border-yellow-400 border-opacity-30 rounded text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
                />
              </div>

              <div className="mb-6">
                <label className="block text-white font-semibold mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-slate-800 border border-yellow-400 border-opacity-30 rounded text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
                />
              </div>

              <div className="mb-6">
                <label className="block text-white font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 bg-slate-800 border border-yellow-400 border-opacity-30 rounded text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
                />
              </div>

              <div className="mb-8">
                <label className="block text-white font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-800 border border-yellow-400 border-opacity-30 rounded text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition resize-none"
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full px-8 py-3 bg-yellow-400 !text-slate-950 font-semibold rounded hover:bg-yellow-500 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}