
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from '@/components/ui/checkbox';
import { CandleFormData } from '@/types/admin';

interface CandleFormProps {
  candle?: CandleFormData;
  onSubmit: (data: CandleFormData) => void;
}

const CANDLE_TYPES = [
  'Fragrance Candles',
  'Spiral Candles',
  'Surprise Message Candles',
  'Layered Scent Candles',
  'Minimalist Jar Candles',
  'Festival Edition Candles',
  'Custom Candle'
];

const CandleForm: React.FC<CandleFormProps> = ({ candle, onSubmit }) => {
  const [formData, setFormData] = useState<CandleFormData>(candle || {
    name: '',
    type: 'Fragrance Candles',
    price: 0,
    image: '',
    description: '',
    emotionalText: '',
    scent: '',
    material: '',
    burnTime: '',
    details: [''],
    instagramLink: '',
    isLive: true,
    isComingSoon: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDetailsChange = (index: number, value: string) => {
    const newDetails = [...formData.details];
    newDetails[index] = value;
    setFormData(prev => ({ ...prev, details: newDetails }));
  };

  const addDetail = () => {
    setFormData(prev => ({ ...prev, details: [...prev.details, ''] }));
  };

  const removeDetail = (index: number) => {
    const newDetails = [...formData.details];
    newDetails.splice(index, 1);
    setFormData(prev => ({ ...prev, details: newDetails }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Filter out empty details
    const cleanedData = {
      ...formData,
      details: formData.details.filter(d => d.trim() !== '')
    };
    onSubmit(cleanedData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Product Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="type">Candle Type *</Label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              required
            >
              {CANDLE_TYPES.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <Label htmlFor="price">Price (INR) *</Label>
            <Input
              id="price"
              name="price"
              type="number"
              min="0"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="image">Image URL *</Label>
            <Input
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>

          <div>
            <Label htmlFor="instagramLink">Instagram Link (optional)</Label>
            <Input
              id="instagramLink"
              name="instagramLink"
              value={formData.instagramLink || ''}
              onChange={handleChange}
              placeholder="https://instagram.com/..."
            />
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="isLive" 
                checked={formData.isLive} 
                onCheckedChange={(checked) => {
                  setFormData(prev => ({ ...prev, isLive: checked === true }));
                }}
              />
              <Label htmlFor="isLive">Active/Live</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="isComingSoon" 
                checked={formData.isComingSoon} 
                onCheckedChange={(checked) => {
                  setFormData(prev => ({ ...prev, isComingSoon: checked === true }));
                }}
              />
              <Label htmlFor="isComingSoon">Coming Soon</Label>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              required
            />
          </div>

          <div>
            <Label htmlFor="emotionalText">Emotional Description *</Label>
            <Textarea
              id="emotionalText"
              name="emotionalText"
              value={formData.emotionalText}
              onChange={handleChange}
              placeholder="Connect the candle to a mood or memory..."
              rows={3}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="scent">Scent *</Label>
              <Input
                id="scent"
                name="scent"
                value={formData.scent}
                onChange={handleChange}
                placeholder="e.g., Lavender, Vanilla"
                required
              />
            </div>

            <div>
              <Label htmlFor="material">Material *</Label>
              <Input
                id="material"
                name="material"
                value={formData.material}
                onChange={handleChange}
                placeholder="e.g., Soy Wax, Cotton Wick"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="burnTime">Burn Time *</Label>
            <Input
              id="burnTime"
              name="burnTime"
              value={formData.burnTime}
              onChange={handleChange}
              placeholder="e.g., Approximately 45 hours"
              required
            />
          </div>
        </div>
      </div>

      <div>
        <Label>Product Details</Label>
        <div className="space-y-2 mt-2">
          {formData.details.map((detail, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Input
                value={detail}
                onChange={(e) => handleDetailsChange(index, e.target.value)}
                placeholder={`Detail ${index + 1}`}
              />
              {formData.details.length > 1 && (
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="sm" 
                  className="text-red-500"
                  onClick={() => removeDetail(index)}
                >
                  Remove
                </Button>
              )}
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={addDetail}
          >
            Add Detail
          </Button>
        </div>
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        <Button type="submit" className="bg-gold hover:bg-gold/80 text-white">
          {candle ? 'Update Candle' : 'Add Candle'}
        </Button>
      </div>
    </form>
  );
};

export default CandleForm;
