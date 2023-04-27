import { useState } from "react"

import React from 'react';

function Menu({menuOpen}) {
  return (
    <nav className={`menu ${menuOpen ? 'open' : ''}`}>
      <ul>
        <li><a href="#">Opción 1</a></li>
        <li><a href="#">Opción 2</a></li>
        <li><a href="#">Opción 3</a></li>
        <li><a href="#">Opción 4</a></li>
      </ul>
    </nav>
  );
}

export default Menu;

