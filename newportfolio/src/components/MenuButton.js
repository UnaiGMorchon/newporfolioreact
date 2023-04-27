import React from 'react';

function MenuButton({ menuOpen, setMenuOpen }) {
  return (
    <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
      <span className="menu-button__line"></span>
      <span className="menu-button__line"></span>
      <span className="menu-button__line"></span>
    </button>
  );
}

export default MenuButton;
