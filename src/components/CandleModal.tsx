
import React from 'react';
import { X } from 'lucide-react';
import { Candle } from '../types/candle';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface CandleModalProps {
  candle: Candle | null;
  isOpen: boolean;
  onClose: () => void;
}

const CandleModal: React.FC<CandleModalProps> = ({ candle, isOpen, onClose }) => {
  if (!candle) return null;

  const handleContactClick = () => {
    window.open('https://www.instagram.com/_sridha07', '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden bg-cream rounded-xl">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="font-playfair text-2xl">{candle.name}</DialogTitle>
            <button 
              onClick={onClose} 
              className="rounded-full p-1.5 hover:bg-gray-100 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </DialogHeader>
        
        <div className="relative h-72 overflow-hidden">
          <img 
            src={candle.image} 
            alt={candle.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap gap-3 mb-4">
            {candle.details.map((detail, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-lavender/30 rounded-full text-xs font-medium"
              >
                {detail}
              </span>
            ))}
          </div>
          
          <p className="text-gray-700 mb-6 leading-relaxed">{candle.description}</p>
          
          <div className="text-sm text-gray-600 mb-6">
            <p className="mb-1"><span className="font-medium">Scent:</span> {candle.scent}</p>
            <p className="mb-1"><span className="font-medium">Material:</span> {candle.material}</p>
            <p><span className="font-medium">Burn Time:</span> {candle.burnTime}</p>
          </div>
          
          <button 
            className="w-full btn-primary"
            onClick={handleContactClick}
          >
            Contact to Order
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CandleModal;
