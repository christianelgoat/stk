import React, { useState } from 'react';
import type { Stakeholder } from './types';
import { Level } from './types';
import { StakeholderCard } from './components/StakeholderCard';
import { StakeholderDetailModal } from './components/StakeholderDetailModal';
import { OwnerIcon } from './components/icons/OwnerIcon';
import { ManagerIcon } from './components/icons/ManagerIcon';
import { InventoryIcon } from './components/icons/InventoryIcon';
import { TechProviderIcon } from './components/icons/TechProviderIcon';
import { ClientIcon } from './components/icons/ClientIcon';
import { DistributorIcon } from './components/icons/DistributorIcon';

const stakeholdersData: Stakeholder[] = [
  {
    id: 1,
    name: 'Propietario / Dueño de la MYPE',
    interest: 'Es su negocio; busca reducir pérdidas y ser más competitivo.',
    influence: 'Decide inversiones, procesos y adopción tecnológica.',
    impact: 'Define el rumbo del proyecto; sin su apoyo no avanza.',
    strategy: 'Gestionar de Cerca: Mantenerlo actualizado semanalmente con avances y reportes enfocados en el retorno de la inversión (ahorro de costos).',
    interestLevel: Level.High,
    influenceLevel: Level.High,
    impactLevel: Level.High,
    icon: OwnerIcon,
  },
  {
    id: 2,
    name: 'Administrador / Gerente',
    interest: 'Necesita sistemas eficientes para coordinar compras y ventas.',
    influence: 'Supervisa al equipo y asegura que los cambios se implementen.',
    impact: 'Su gestión garantiza el éxito de la implementación.',
    strategy: 'Colaborar Estrechamente: Involucrarlo en las decisiones de diseño funcional y validar con él los flujos de trabajo.',
    interestLevel: Level.High,
    influenceLevel: Level.High,
    impactLevel: Level.High,
    icon: ManagerIcon,
  },
  {
    id: 3,
    name: 'Encargado de Inventario / Almacenero',
    interest: 'Usa el sistema a diario; necesita facilidad de uso.',
    influence: 'Su experiencia puede facilitar o dificultar adopción.',
    impact: 'Un mal uso puede causar errores graves en el inventario.',
    strategy: 'Involucrar y Capacitar: Convertirlo en un aliado. Invitarlo a las sesiones de diseño (UX), priorizar su capacitación y escuchar activamente su feedback.',
    interestLevel: Level.High,
    influenceLevel: Level.Medium,
    impactLevel: Level.High,
    icon: InventoryIcon,
  },
  {
    id: 4,
    name: 'Proveedores de Tecnología / Software',
    interest: 'Quieren vender soluciones asequibles; interesados en clientes MYPE.',
    influence: 'Ofrecen capacitación y soporte; influyen en calidad de implementación.',
    impact: 'Aportan herramientas funcionales o limitadas según su soporte.',
    strategy: 'Mantener Informado: Establecer canales de comunicación claros para consultas técnicas y de soporte.',
    interestLevel: Level.Medium,
    influenceLevel: Level.Medium,
    impactLevel: Level.Medium,
    icon: TechProviderIcon,
  },
  {
    id: 5,
    name: 'Clientes',
    interest: 'Esperan entregas correctas y rápidas.',
    influence: 'Influyen indirectamente a través de quejas o fidelidad.',
    impact: 'Una buena gestión aumenta satisfacción y ventas.',
    strategy: 'Monitorear (Indirectamente): Medir su satisfacción a través de métricas como la disminución de quejas por falta de productos.',
    interestLevel: Level.Medium,
    influenceLevel: Level.Low,
    impactLevel: Level.Medium,
    icon: ClientIcon,
  },
  {
    id: 6,
    name: 'Proveedores de Productos / Distribuidores',
    interest: 'Quieren claridad en pedidos y pagos.',
    influence: 'Pueden retrasar o acelerar abastecimiento.',
    impact: 'Su puntualidad afecta disponibilidad de stock.',
    strategy: 'Mantener Informado: Asegurar que el nuevo sistema no afecte la claridad de los pedidos y comunicar cualquier cambio en el proceso.',
    interestLevel: Level.Medium,
    influenceLevel: Level.Medium,
    impactLevel: Level.Medium,
    icon: DistributorIcon,
  },
];


const App: React.FC = () => {
  const [selectedStakeholder, setSelectedStakeholder] = useState<Stakeholder | null>(null);

  const handleCardClick = (stakeholder: Stakeholder) => {
    setSelectedStakeholder(stakeholder);
  };

  const handleCloseModal = () => {
    setSelectedStakeholder(null);
  };

  return (
    <div className="min-h-screen bg-brand-light text-brand-dark">
      <main className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight">
            Análisis Interactivo de Stakeholders
          </h1>
          
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stakeholdersData.map((stakeholder) => (
            <StakeholderCard
              key={stakeholder.id}
              stakeholder={stakeholder}
              onClick={() => handleCardClick(stakeholder)}
            />
          ))}
        </div>
      </main>

      <StakeholderDetailModal
        stakeholder={selectedStakeholder}
        onClose={handleCloseModal}
      />
      
      <footer className="text-center py-8 text-gray-400 text-sm">
        
      </footer>
    </div>
  );
};

export default App;