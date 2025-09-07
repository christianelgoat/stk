
import type React from 'react';

export enum Level {
  High = 'Alto',
  Medium = 'Medio',
  Low = 'Bajo',
}

export interface Stakeholder {
  id: number;
  name: string;
  interest: string;
  influence: string;
  impact: string;
  strategy: string;
  interestLevel: Level.High | Level.Medium;
  influenceLevel: Level.High | Level.Medium | Level.Low;
  impactLevel: Level.High | Level.Medium;
  icon: React.FC<{ className?: string }>;
}
