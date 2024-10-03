import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <div className="w-full h-auto text-red-800 text-base md:text-xl bg-orange-400 flex flex-col md:flex-row justify-around items-center p-4">
      <p className="text-center md:text-left">
        Developed and Designed by 
        <Link 
          href="https://github.com/samreensaif"
          target="_blank" 
          className="link underline ml-1"
        >
          <strong>Samreen Saif</strong>
        </Link>
      </p>
      <p className="text-center md:text-left">&copy; All Rights Reserved by Samreen Saif</p>
    </div>
  );
}

export default Footer;
