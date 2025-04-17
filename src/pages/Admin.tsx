
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { LogOut, Moon, Sun } from "lucide-react";
import CandleManager from "../components/admin/CandleManager";
import SettingsPanel from "../components/admin/SettingsPanel";
import AdminLogin from "../components/admin/AdminLogin";

const Admin = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Simple authentication - to be replaced with proper auth system
  const handleLogin = (username: string, password: string) => {
    // Temporary simple auth - would be replaced with proper auth
    if (username === "admin" && password === "password123") {
      setAuthenticated(true);
      toast({
        title: "Login Successful",
        description: "Welcome to the Bloom & Burn Admin Dashboard"
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid username or password",
        variant: "destructive"
      });
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully"
    });
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    // In a real app, would toggle document classes or use a theme context
  };

  if (!authenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-cream text-gray-800'}`}>
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 md:w-64 md:min-h-screen shadow-md`}>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-xl font-playfair font-bold">Bloom & Burn</h1>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
          
          <nav className="space-y-2">
            <Button 
              variant="ghost" 
              className={`w-full justify-start ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              onClick={() => navigate('/')}
            >
              View Website
            </Button>
            <Button 
              variant="destructive" 
              className="w-full justify-start mt-8"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6">
          <header className="mb-6">
            <h1 className="text-2xl md:text-3xl font-playfair font-bold">Admin Dashboard</h1>
            <p className={`mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Manage your candle products and website settings
            </p>
          </header>

          <Tabs defaultValue="products" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="products">
              <CandleManager darkMode={darkMode} />
            </TabsContent>
            <TabsContent value="settings">
              <SettingsPanel darkMode={darkMode} />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Admin;
