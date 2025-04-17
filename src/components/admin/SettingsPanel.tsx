
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { AdminSettings } from '@/types/admin';
import { candles } from '@/data/candles';

interface SettingsPanelProps {
  darkMode: boolean;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ darkMode }) => {
  // Mock initial settings
  const [settings, setSettings] = useState<AdminSettings>({
    instagramLink: 'https://www.instagram.com/_sridha07',
    tagline: 'Light a memory. Burn a story.',
    aboutText: 'Bloom & Burn creates artisanal candles handcrafted with love and care. Each piece tells a story and sets a mood, transforming your space into a sanctuary of peace and comfort.',
    featuredCandleId: candles[0].id
  });
  
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Would save to backend in a real app
    toast({
      title: "Settings Saved",
      description: "Your website settings have been updated."
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card className={darkMode ? "bg-gray-800" : "bg-white"}>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>Update your contact information that will be displayed on the website.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="instagramLink">Instagram Link *</Label>
            <Input 
              id="instagramLink"
              name="instagramLink"
              value={settings.instagramLink}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="whatsappNumber">WhatsApp Number (optional)</Label>
            <Input 
              id="whatsappNumber"
              name="whatsappNumber"
              value={settings.whatsappNumber || ''}
              onChange={handleChange}
              placeholder="+91 XXXXXXXXXX"
            />
          </div>
          
          <div>
            <Label htmlFor="email">Email Address (optional)</Label>
            <Input 
              id="email"
              name="email"
              type="email"
              value={settings.email || ''}
              onChange={handleChange}
              placeholder="your@email.com"
            />
          </div>
        </CardContent>
      </Card>
      
      <Card className={darkMode ? "bg-gray-800" : "bg-white"}>
        <CardHeader>
          <CardTitle>Homepage Settings</CardTitle>
          <CardDescription>Update the content displayed on your homepage.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="tagline">Tagline/Slogan *</Label>
            <Input 
              id="tagline"
              name="tagline"
              value={settings.tagline}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="aboutText">About Text *</Label>
            <Textarea 
              id="aboutText"
              name="aboutText"
              value={settings.aboutText}
              onChange={handleChange}
              rows={4}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="featuredCandleId">Featured Candle</Label>
            <select
              id="featuredCandleId"
              name="featuredCandleId"
              value={settings.featuredCandleId}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            >
              <option value="">None</option>
              {candles.map(candle => (
                <option key={candle.id} value={candle.id}>{candle.name}</option>
              ))}
            </select>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-end">
        <Button type="submit" className="bg-gold hover:bg-gold/80 text-white">
          Save Settings
        </Button>
      </div>
    </form>
  );
};

export default SettingsPanel;
