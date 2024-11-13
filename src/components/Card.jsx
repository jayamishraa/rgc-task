import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div className="max-w-sm pt-30 mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-2">{title}hello</h2>
      <p className="text-gray-700">{content}hello</p>
    </div>
  );
};

export default Card;