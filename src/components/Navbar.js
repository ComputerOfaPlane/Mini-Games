import React from "react";
import  { useState } from 'react';

export default function Navbar() {
 

  const [isToggled, setIsToggled] = useState(false);
  const togglebtn=()=>{
    setIsToggled(!isToggled);
  }

  const navItems = [
    { link: "/", text: "HOME", id: 1 },
    { link: "/about", text: "ABOUT", id: 2 },
  ];
  
  return (
    <div id='navbar' className="z-50">
    <header className="bg-[#24262f]">
      <nav>
        <ul className="text-white flex justify-between px-36 py-8 items-center">
          <li><a id="navlink" className="text-[#56d0ae]" href="/about">About</a></li>
          <li><a id="logo" className="text-[#ecfb77] text-7xl " href="/minigames">MiniGames</a></li>
          <li><a id="navlink" className="text-[#56d0ae]" href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  </div>
  
  );
}