
import React from 'react';

interface CandleCardProps {
  id: string;
  name: string;
  image: string;
  description: string;
  onClick: () => void;
}

const CandleCard: React.FC<CandleCardProps> = ({ id, name, image, description, onClick }) => {
  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-md card-hover cursor-pointer"
      onClick={onClick}
    >
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="font-playfair text-xl mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <button 
          className="btn-outline text-sm"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CandleCard;
