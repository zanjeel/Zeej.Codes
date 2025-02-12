import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Eye, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { components } from '../data/components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const CategoryPage = () => {
  const { id } = useParams();
  const categoryComponents = components.filter(
    (component) => component.category === id
  );

  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<{ name: string; email: string; message: string }>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<{ visible: boolean; success: boolean; message: string }>({
    visible: false,
    success: false,
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_7e1fwg7",
        "template_qnfqr2p",
        {
          from_name: form.name,
          to_name: "Zanjeel",
          from_email: form.email,
          to_email: "zanjeel123@gmail.com",
          message: form.message,
        },
        "kqQOE6NdiMFHanr5l"
      )
      .then(() => {
        setLoading(false);
        setFeedback({
          visible: true,
          success: true,
          message: "Thanks for your message. I will get back to you as soon as possible.",
        });
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        console.error("EmailJS Error:", error);
        setFeedback({
          visible: true,
          success: false,
          message: "Something went wrong. Please try again later.",
        });
      });
  };

  const closeFeedback = () => {
    setFeedback({ visible: false, success: false, message: "" });
  };

  if (id === 'contact') {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-800 rounded-lg p-8">
          <h1 className="text-3xl font-bold text-white mb-4">Contact Us</h1>
          <p  className=" text-gray-400 mb-5">Want New Components, Loaders, templates or just need help? Have any suggestions or improvements? Just write to us. We reply, always.</p>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                <span>Name</span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  placeholder="Your name"
                />
              </label>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                <span>Email</span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  placeholder="your@email.com"
                />
              </label>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                <span>Message</span>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  placeholder="Your message..."
                />
              </label>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* Feedback Modal */}
        {feedback.visible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-xl shadow-lg w-80">
              <h3 className={`text-lg font-bold ${feedback.success ? "text-green-600" : "text-red-600"}`}>
                {feedback.success ? "Success !" : "Error"}
              </h3>
              <p className="mt-4 font-semibold">{feedback.message}</p>
              <button
                onClick={closeFeedback}
                className="mt-6 w-full py-2 arrow-gradient bg-blue-700 hover:bg-blue-500 text-white rounded-[40px]"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          {id?.charAt(0).toUpperCase() + id?.slice(1)}
        </h1>
        <p className="text-gray-400 text-lg">
          Browse our collection of {id}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryComponents.map((component) => (
          <div
            key={component.id}
            className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-400 transition-colors"
          >
            <div className="p-6 h-96 bg-gray-900">
              <div
                className="preview-container"
                dangerouslySetInnerHTML={{
                  __html: `<style>${component.css}</style>${component.html}`,
                }}
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{component.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{component.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Eye className="w-4 h-4" />
                  <span>{component.views.toLocaleString()}</span>
                </div>

                <Link
                  to={`/component/${component.id}`}
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md transition-colors"
                >
                  <Code2 className="w-4 h-4" />
                  <span>Get Code</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
