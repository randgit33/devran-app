'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface LanguageModalProps {
  onSelectLanguage: (language: 'en' | 'id') => void;
}

const LanguageModal: React.FC<LanguageModalProps> = ({ onSelectLanguage }) => {
  return (
    // This is the overlay, it darkens the background
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/30 backdrop-blur-sm">
      
      {/* This is the modal card */}
      <motion.div
        className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Choose your language
        </h2>
        <p className="text-slate-600 mb-8">
          Pilih bahasa Anda
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => onSelectLanguage('en')}
            className="w-full bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-200"
          >
            English
          </button>
          <button
            onClick={() => onSelectLanguage('id')}
            className="w-full bg-slate-100 text-slate-800 font-semibold py-3 px-8 rounded-full hover:bg-slate-200 transition-all duration-300 border border-slate-200"
          >
            Bahasa Indonesia
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default LanguageModal;