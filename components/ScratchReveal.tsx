
import React, { useState } from 'react';

interface ScratchRevealProps {
  onReveal: () => void;
  isUnlocked: boolean; // Si la case est disponible (date passée ou présente)
  isOpened: boolean;   // Si l'utilisateur a déjà cliqué pour l'ouvrir
  isToday: boolean;    // Si c'est la case spécifique du jour
  children: React.ReactNode;
}

const ScratchReveal: React.FC<ScratchRevealProps> = ({ onReveal, isUnlocked, isOpened, isToday, children }) => {
  const [localOpened, setLocalOpened] = useState(isOpened);

  const handleClick = () => {
    if (isUnlocked && !localOpened) {
      setLocalOpened(true);
      onReveal();
    }
  };

  return (
    <div 
      onClick={handleClick}
      className={`relative w-full aspect-square rounded-[2rem] overflow-hidden transition-all duration-500 
        ${isUnlocked && !localOpened ? 'cursor-pointer hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1' : 'cursor-default'}
        ${localOpened ? 'bg-white/40 shadow-inner' : 'glass'}
      `}
    >
      {/* Contenu Révélé */}
      <div className={`absolute inset-0 flex items-center justify-center p-4 transition-all duration-700 
        ${localOpened ? 'scale-100 opacity-100 blur-0' : 'scale-90 opacity-0 blur-xl pointer-events-none'}
      `}>
        {children}
      </div>

      {/* Couche de Givre (Case Fermée) */}
      {!localOpened && (
        <div className={`absolute inset-0 z-10 transition-opacity duration-1000 flex items-center justify-center
          ${isUnlocked ? 'bg-gradient-to-br from-slate-50/80 to-slate-200/80' : 'bg-gradient-to-br from-slate-100/40 to-slate-200/40'}
        `}>
          {/* Texture de givre subtile */}
          <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/frozen-wall.png')]" />
          
          {/* Indice "Wipe to Reveal" uniquement sur la date du jour */}
          {isToday && isUnlocked && (
            <div className="animate-bounce">
              <span className="bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-blue-600 shadow-lg border border-white">
                Wipe to Reveal
              </span>
            </div>
          )}
          
          {/* Indice subtil pour les jours passés non ouverts */}
          {!isToday && isUnlocked && (
            <div className="w-2 h-2 rounded-full bg-blue-400/30 animate-pulse" />
          )}
        </div>
      )}
    </div>
  );
};

export default ScratchReveal;
