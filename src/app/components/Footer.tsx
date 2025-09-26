import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-violet-500/10 text-gray-500 py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Devran. All Rights Reserved.</p>
        <p className="text-sm mt-1">Designed & Built with Passion</p>
      </div>
    </footer>
  );
};

export default Footer;
