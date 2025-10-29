import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-black/50 backdrop-blur-md border-b border-white/10">
      <nav className="flex items-center justify-center gap-80 py-4">
        <h1 className="text-3xl font-medium text-white tracking-wide">
          Globe Interaktif 3D
        </h1>
        <button className="md:inline-block hidden bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full transition-all duration-300 text-lg">
          2305551142
        </button>
      </nav>
    </header>
  );
};

export default Header;
