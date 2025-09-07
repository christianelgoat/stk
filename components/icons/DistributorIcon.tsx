
import React from 'react';

export const DistributorIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 16.5V14a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v2.5"></path>
    <path d="M12 12V2"></path>
    <path d="M20.5 10.4 12 2 3.5 10.4"></path>
    <path d="M18 19H6v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2Z"></path>
  </svg>
);
