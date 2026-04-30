import React, { useState, useEffect } from 'react';
import Reviews from './Reviews';
import ContactForm from './ContactForm';

function App() {
  const [theme, setTheme] = useState('dark');
  const [sysInfo, setSysInfo] = useState('');

  useEffect(() => {
    // 1. Автоматична тема за часом (07:00 - 21:00)
    const hours = new Date().getHours();
    setTheme((hours >= 7 && hours < 21) ? 'light' : 'dark');

    // 2. Системна інформація в LocalStorage
    const info = `Browser: ${navigator.userAgent.split(') ')[1]} | OS: ${navigator.platform}`;
    localStorage.setItem('userSystemInfo', info);
    setSysInfo(localStorage.getItem('userSystemInfo'));
  }, []);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  // Дані для навичок
  const skills = ["React", "JavaScript", "Tailwind CSS", "Node.js", "Python", "Cybersecurity", "Git", "Android Dev"];

  return (
    <div className={`min-h-screen py-10 px-4 transition-all duration-500 ${
      theme === 'light' ? 'bg-slate-50 text-slate-900' : 'bg-slate-950 text-white'
    }`}>
      
      <main className={`max-w-4xl mx-auto backdrop-blur-lg p-8 rounded-3xl shadow-2xl border transition-all ${
        theme === 'light' ? 'bg-white/90 border-slate-200' : 'bg-slate-900/80 border-slate-700'
      }`}>

        {/* Кнопка перемикання теми */}
        <div className="flex justify-end mb-6">
          <button 
            onClick={toggleTheme} 
            className="group relative flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full text-xs font-bold transition-all shadow-lg active:scale-95"
          >
            {theme === 'light' ? '🌙 DARK MODE' : '☀️ LIGHT MODE'}
          </button>
        </div>

        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 tracking-tight">
            Віталій Рипкович
          </h1>
          <p className="text-slate-500 mt-4 text-xl font-medium">Cybersecurity Student | Web & Android Developer</p>
          <div className="flex justify-center gap-3 mt-6">
            <span className="bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-xl border border-blue-500/20 text-sm font-semibold">📍 Львів</span>
            <span className="bg-emerald-500/10 text-emerald-400 px-4 py-1.5 rounded-xl border border-emerald-500/20 text-sm font-semibold">🎓 НУЛП</span>
          </div>
        </header>

        {/* Про мене */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2 italic">
            <span className="w-8 h-[2px] bg-blue-400 inline-block"></span> Про мене
          </h2>
          <p className={`text-lg leading-relaxed ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>
            Я студент 3-го курсу кафедри систем захисту інформації. Моя пристрасть — створення безпечних та інтуїтивно зрозумілих веб-додатків. 
            Зараз фокусуюся на екосистемі **React** та розробці під **Android**.
          </p>
        </section>

        {/* Навички (Додано) */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-400 mb-6 italic">🛠️ Мої Навички</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map(skill => (
              <span key={skill} className={`px-4 py-2 rounded-xl border font-bold text-sm transition-all hover:-translate-y-1 ${
                theme === 'light' 
                ? 'bg-blue-50 border-blue-100 text-blue-600 shadow-sm' 
                : 'bg-slate-800 border-slate-700 text-blue-300 shadow-blue-900/20 shadow-md'
              }`}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Досвід та Освіта (Додано) */}
        <section className="mb-12 grid md:grid-cols-2 gap-6">
          <div className={`p-6 rounded-2xl border ${theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/40 border-slate-700'}`}>
            <h3 className="text-xl font-bold text-blue-400 mb-2">🎓 Освіта</h3>
            <p className="font-bold">НУ "Львівська Політехніка"</p>
            <p className="text-sm text-slate-500">Кібербезпека (Бакалавр)</p>
          </div>
          <div className={`p-6 rounded-2xl border ${theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/40 border-slate-700'}`}>
            <h3 className="text-xl font-bold text-emerald-400 mb-2">💼 Досвід</h3>
            <p className="font-bold">Freelance Developer</p>
            <p className="text-sm text-slate-500">React & Frontend розробка</p>
          </div>
        </section>

        {/* Компонент Відгуків (Завдання 2) */}
        <Reviews theme={theme} />

        {/* Контакти (Додано) */}
        <section className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-blue-400 mb-6">📩 На зв'язку</h2>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/VitaliyRypkovych" className="text-slate-500 hover:text-blue-400 transition-colors">GitHub</a>
            <a href="mailto:vitaliy@example.com" className="text-slate-500 hover:text-blue-400 transition-colors">Email</a>
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">Telegram</a>
          </div>
        </section>

        {/* Footer (Завдання 1) */}
        <footer className="mt-16 pt-8 border-t border-slate-800/50 text-center">
          <p className="text-slate-500 text-xs font-semibold">© 2026 VITALIY RYPKOVYCH | LAB 4</p>
          <div className={`inline-block mt-4 px-4 py-2 rounded-lg text-[10px] font-mono border ${
            theme === 'light' ? 'bg-slate-100 border-slate-200 text-slate-500' : 'bg-black/30 border-slate-800 text-slate-600'
          }`}>
            LOGGED DATA: {sysInfo}
          </div>
        </footer>
      </main>

      {/* Модальне вікно (Завдання 3) */}
      <ContactForm />
    </div>
  );
}

export default App;