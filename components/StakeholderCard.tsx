import React from 'react';
import type { Stakeholder } from '../types';

interface StakeholderCardProps {
  stakeholder: Stakeholder;
  onClick: () => void;
}

export const StakeholderCard: React.FC<StakeholderCardProps> = ({ stakeholder, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100 overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <div className="bg-teal-100 text-teal-600 p-3 rounded-full">
            <stakeholder.icon className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-dark">{stakeholder.name}</h3>
          </div>
        </div>
        <div className="mt-4 flex justify-between text-sm text-gray-500">
          <span>Influencia: {stakeholder.influenceLevel}</span>
          <span>Impacto: {stakeholder.impactLevel}</span>
        </div>
      </div>
      <div className="bg-gray-50 px-6 py-2">
        <span className="text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors">Ver Detalles →</span>
      </div>
    </div>
  );
};