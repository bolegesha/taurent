"use client";

import { useState } from "react";

interface ContactFormProps {
  locale: string;
  messages: {
    contact: {
      name: string;
      email: string;
      message: string;
      send: string;
    };
  };
}

export default function ContactForm({ locale, messages }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6 shadow-md">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-center">
          {locale === 'en' ? 'Thank you for your message!' : 'Спасибо за ваше сообщение!'}
        </h2>
        <p className="text-center text-gray-500">
          {locale === 'en' 
            ? 'We will get back to you as soon as possible.'
            : 'Мы свяжемся с вами в ближайшее время.'}
        </p>
        <button
          className="mt-4 rounded-full bg-primary px-6 py-2 text-sm font-medium text-white"
          onClick={() => setIsSubmitted(false)}
        >
          {locale === 'en' ? 'Send another message' : 'Отправить еще сообщение'}
        </button>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 rounded-lg bg-white p-6 shadow-md">
      <h2 className="text-2xl font-semibold">
        {locale === 'en' ? 'Send us a message' : 'Отправьте нам сообщение'}
      </h2>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium">
          {messages.contact.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium">
          {messages.contact.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          {messages.contact.message}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90 disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <svg className="mr-2 inline h-4 w-4 animate-spin" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            {locale === 'en' ? 'Sending...' : 'Отправка...'}
          </>
        ) : (
          messages.contact.send
        )}
      </button>
    </form>
  );
} 