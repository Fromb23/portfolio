import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Loader, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import FormFields from './FormField';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [touchedFields, setTouchedFields] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const formRef = useRef();

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: "Email",
      content: "rombo.f2@gmail.com",
      link: "mailto:rombo.f2@gmail.com"
    },
    {
      icon: <Phone size={20} />,
      title: "Phone",
      content: "+254 758 652 334",
      link: "tel:+254758652334"
    },
    {
      icon: <MapPin size={20} />,
      title: "Location",
      content: "Nairobi, Kenya",
      link: "https://maps.google.com/?q=Nairobi,Kenya"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      url: "https://github.com/Fromb23",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/rombo-francis-40aa82207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn"
    },
    {
      icon: <Twitter size={20} />,
      url: "https://x.com/its_rombo",
      label: "Twitter"
    }
  ];

  const ContactInfoItem = ({ icon, title, content, link }) => (
    <a
      href={link}
      target={link.startsWith('http') ? '_blank' : '_self'}
      rel={link.startsWith('http') ? 'noopener noreferrer' : ''}
      className="flex items-start space-x-4 group p-4 rounded-lg hover:bg-accent/5 transition-all duration-300"
    >
      <div className="bg-accent text-on-accent p-3 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-primary group-hover:text-accent transition-colors">{title}</h4>
        <p className="text-secondary group-hover:text-primary transition-colors">{content}</p>
      </div>
    </a>
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear any previous submit status when user starts typing
    if (submitStatus) setSubmitStatus(null);
  };
  const handleBlur = (e) => {
    setTouchedFields({
      ...touchedFields,
      [e.target.name]: true,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log('Sending message with data:', formData);

      await emailjs.send(
        'service_5ln06bf',
        'template_86q6nhq',
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        '6CCKZSPlDsCVI3ZQy'
      );
      setSubmitStatus('success');
      // Auto-clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Failed to send message:', error);
      setSubmitStatus('error');

      // Auto-clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center animate-fadeIn">
            <Mail className="mr-3 text-accent" size={32} />
            Get In Touch
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Ready to start your next project? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center animate-fadeIn">
              <Send className="mr-2 text-accent" size={24} />
              Let's Connect
            </h3>

            <div className="space-y-2 bg-card p-6 rounded-xl shadow-theme">
              {contactInfo.map((info, index) => (
                <ContactInfoItem key={index} {...info} />
              ))}
            </div>

            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-on-accent p-3 rounded-lg hover:bg-accent/80 transition-all duration-300 hover:scale-110 transform"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl shadow-theme hover:shadow-theme-lg transition-all duration-300">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <FormFields
                formData={formData}
                touchedFields={touchedFields}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />

              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 p-4 bg-green-100 text-green-800 rounded-lg animate-fadeIn">
                  <CheckCircle size={20} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 p-4 bg-red-100 text-red-800 rounded-lg animate-fadeIn">
                  <AlertCircle size={20} />
                  <span>Failed to send message. Please try again or contact me directly.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full button-primary py-3 rounded-lg font-medium hover:scale-105 transition-transform duration-300 flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <Loader size={20} className="animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;