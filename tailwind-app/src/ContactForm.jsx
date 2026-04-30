import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 60000); // 1 хвилина
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-slate-900 border border-slate-700 p-8 rounded-2xl w-full max-w-md shadow-2xl text-white relative">
        <h3 className="text-2xl font-bold text-blue-400 mb-2">Зворотній</h3>
        <p className="text-slate-400 text-sm mb-5">Залиште ваші контакти для співпраці.</p>
        
        <form action="https://formspree.io/f/xdapypbg" method="POST" className="flex flex-col gap-4">
          <input type="text" name="name" placeholder="Ваше ім'я" required 
            className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none" />
          <input type="email" name="email" placeholder="Ваш Email" required 
            className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none" />
          <input type="tel" name="phone" placeholder="Номер телефону" required 
            className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none" />
          <textarea name="message" placeholder="Ваше повідомлення" rows="3" required 
            className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
          
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition shadow-lg">
            Відправити
          </button>
          <button type="button" onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white text-sm mt-2 transition">
            Закрити
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;