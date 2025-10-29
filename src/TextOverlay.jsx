import React from 'react';

const TextOverlay = () => {
  return (
    <div className="absolute top-[67%] left-1/2 -translate-x-1/2 z-10 w-full max-w-3xl p-8 bg-black/50 rounded-2xl shadow-2xl backdrop-blur-sm text-center md:text-left">
      <h2 className="text-2xl font-bold mb-4 text-cyan-300">Tentang Bumi</h2>
      <p className="text-lg text-gray-200 leading-relaxed">
        Bumi adalah planet ketiga dari Matahari dan satu-satunya planet yang diketahui mendukung
        kehidupan di tata surya kita dengan diameter sekitar 12.742 km dan massa sekitar 5,97×10²⁴
        kg Bumi memiliki struktur internal berlapis—inti dalam padat, inti luar cair, mantel semi
        padat, dan kerak keras—serta atmosfer yang didominasi oleh nitrogen dan oksigen yang bersama
        air cair dan medan magnet biru-hijau menciptakan kondisi yang memungkinkan keberlangsungan
        kehidupan dalam sistem planet yang dinamis
      </p>
    </div>
  );
};

export default TextOverlay;
