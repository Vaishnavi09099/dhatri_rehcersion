import React from 'react';
import { Link } from 'react-router-dom';

export default function DhatriLogo({ size = 'medium', to = '/' }) {
  const imageSize = size === 'small' ? 40 : size === 'large' ? 112 : 72;

  const content = (
    <img
      src="/dhatri-logo.png"
      alt="Dhatri — Your Health Has a Story. Understand It."
      draggable={false}
      style={{
        display: 'block',
        width: `${imageSize}px`,
        height: `${imageSize}px`,
        objectFit: 'contain',
        flexShrink: 0,
        userSelect: 'none'
      }}
    />
  );

  if (to) {
    return <Link to={to} aria-label="Dhatri home" style={{ textDecoration: 'none', display: 'inline-flex' }}>{content}</Link>;
  }
  return content;
}
