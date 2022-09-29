import React from 'react';
import './style/button.css';

export default function Button({ to, children }) {
  return (
    <button to={to} type="button" className="access_button">
      {children}
    </button>
  );
}
