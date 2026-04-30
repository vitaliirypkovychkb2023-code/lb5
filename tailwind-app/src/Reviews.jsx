import React, { useState, useEffect } from 'react';

const Reviews = ({ theme }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/posts/23/comments')
      .then(response => response.json())
      .then(data => setComments(data.slice(0, 3))) 
      .catch(err => console.error("Помилка завантаження:", err));
  }, []);

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-blue-400 mb-4 border-b border-slate-700 pb-2">
        Відгуки роботодавців
      </h2>
      <div className="grid gap-4">
        {comments.map(comment => (
          <div key={comment.id} className={`${theme === 'light' ? 'bg-slate-100' : 'bg-slate-800'} p-4 rounded-xl transition-colors`}>
            <h3 className="text-green-400 font-semibold mb-1 truncate">{comment.name}</h3>
            <p className="text-slate-500 text-xs mb-2">{comment.email}</p>
            <p className={`${theme === 'light' ? 'text-slate-700' : 'text-slate-300'} text-sm italic`}>
              "{comment.body}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;