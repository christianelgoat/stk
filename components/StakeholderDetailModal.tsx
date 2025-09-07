import React from 'react';
import type { Stakeholder } from '../types';
import { Level } from '../types';

interface StakeholderDetailModalProps {
  stakeholder: Stakeholder | null;
  onClose: () => void;
}

const levelColorMap = {
  [Level.High]: 'bg-red-100 text-red-800 border-red-200',
  [Level.Medium]: 'bg-orange-100 text-orange-800 border-orange-200',
  [Level.Low]: 'bg-sky-100 text-sky-800 border-sky-200',
};

const LevelIndicator: React.FC<{ level: Level }> = ({ level }) => (
  <span className={`px-3 py-1 text-sm font-semibold rounded-full ${levelColorMap[level]}`}>
    {level}
  </span>
);

const InfoBlock: React.FC<{ title: string; children: React.ReactNode; level?: Level }> = ({ title, children, level }) => (
  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
    <div className="flex justify-between items-center mb-2">
      <h4 className="text-md font-bold text-slate-700">{title}</h4>
      {level && <LevelIndicator level={level} />}
    </div>
    <p className="text-slate-600 leading-relaxed">{children}</p>
  </div>
);

export const StakeholderDetailModal: React.FC<StakeholderDetailModalProps> = ({ stakeholder, onClose }) => {
  if (!stakeholder) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-slide-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white p-6 border-b border-gray-200 flex justify-between items-center z-10">
           <div className="flex items-center space-x-4">
              <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full">
                <stakeholder.icon className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-extrabold text-brand-dark">{stakeholder.name}</h2>
           </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <InfoBlock title="Interés" level={stakeholder.interestLevel}>{stakeholder.interest}</InfoBlock>
            <InfoBlock title="Influencia" level={stakeholder.influenceLevel}>{stakeholder.influence}</InfoBlock>
            <InfoBlock title="Impacto" level={stakeholder.impactLevel}>{stakeholder.impact}</InfoBlock>
          </div>
          
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
             <h3 className="text-xl font-bold text-indigo-700 mb-3">Estrategia de Gestión</h3>
             <p className="text-slate-700 leading-relaxed">{stakeholder.strategy}</p>
          </div>
        </div>
      </div>
    </div>
  );
};