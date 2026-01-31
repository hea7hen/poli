import { useState } from 'react';
import { Menu, Lock, Star } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

// Character data
const characters = [
  {
    id: 'default',
    name: 'DEFAULT POLI',
    image: '/images/default-poli.png',
    stats: { power: 8, stamina: 9, rizzability: 'MAXED', aura: 8, looks: 9 },
    unlocked: true,
  },
  {
    id: 'black',
    name: 'SHADOW POLI',
    image: '/images/black-cat.png',
    stats: { power: 7, stamina: 8, rizzability: 7, aura: 9, looks: 8 },
    unlocked: true,
  },
  {
    id: 'chadelite',
    name: 'CHADELITE POLI',
    image: '/images/chadelite-poli.png',
    stats: { power: 9, stamina: 7, rizzability: 'MAXED', aura: 8, looks: 10 },
    unlocked: true,
  },
  {
    id: 'locked1',
    name: '???',
    image: '/images/casual-poli.png',
    stats: { power: 0, stamina: 0, rizzability: 0, aura: 0, looks: 0 },
    unlocked: false,
  },
  {
    id: 'locked2',
    name: '???',
    image: '/images/casual-poli.png',
    stats: { power: 0, stamina: 0, rizzability: 0, aura: 0, looks: 0 },
    unlocked: false,
  },
];

// Navigation items
const navItems = [
  { label: 'Select Fighter', href: '#characters' },
  { label: 'Avatar Maker', href: '#avatar' },
  { label: 'Buy Tokens', href: '#tokens' },
  { label: 'Link Tree', href: '#links' },
];

function App() {
  const [selectedChar, setSelectedChar] = useState(characters[0]);
  const [language, setLanguage] = useState<'en' | 'de' | 'jp'>('en');

  const languages = [
    { code: 'en', flag: '🇺🇸', name: 'English' },
    { code: 'de', flag: '🇩🇪', name: 'German' },
    { code: 'jp', flag: '🇯🇵', name: 'Japanese' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-game-dark via-[#1a0a2e] to-game-dark text-white overflow-x-hidden">
      {/* CRT Overlay */}
      <div className="crt-overlay" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="w-12 h-12">
            <img 
              src="/images/poli-icon.png" 
              alt="Poli" 
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 text-white hover:text-neon-yellow transition-colors">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-game-card border-game-border">
              <div className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-xl font-gaming font-semibold text-white hover:text-neon-yellow transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-10">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-transparent pointer-events-none" />
        
        {/* Main Logo - Lobster */}
        <div className="relative w-full max-w-2xl mx-auto mb-4 float-animation">
          <img 
            src="/images/lobster-logo.png" 
            alt="LOBSTER HARDCORE VOL 1" 
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>



        {/* Game Controller Buttons */}
        <div className="grid grid-cols-4 gap-4 w-full max-w-md mx-auto">
          <a href="#characters" className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 game-btn-square flex items-center justify-center group-hover:scale-105 transition-transform">
              <div className="w-6 h-6 border-2 border-neon-pink rounded-sm" />
            </div>
            <span className="text-xs font-pixel text-neon-yellow text-center leading-tight">
              Select<br/>Fighter
            </span>
          </a>
          
          <a href="#avatar" className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 game-btn-triangle flex items-center justify-center group-hover:scale-105 transition-transform">
              <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[18px] border-l-transparent border-r-transparent border-b-neon-green" />
            </div>
            <span className="text-xs font-pixel text-neon-yellow text-center leading-tight">
              Avatar<br/>Maker
            </span>
          </a>
          
          <a href="#tokens" className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 game-btn-circle flex items-center justify-center group-hover:scale-105 transition-transform">
              <div className="w-6 h-6 rounded-full bg-neon-red" />
            </div>
            <span className="text-xs font-pixel text-neon-yellow text-center leading-tight">
              Buy<br/>Tokens
            </span>
          </a>
          
          <a href="#links" className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 game-btn-x flex items-center justify-center group-hover:scale-105 transition-transform">
              <div className="relative w-6 h-6">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-neon-blue -translate-y-1/2 rotate-45" />
                <div className="absolute top-1/2 left-0 w-full h-1 bg-neon-blue -translate-y-1/2 -rotate-45" />
              </div>
            </div>
            <span className="text-xs font-pixel text-neon-yellow text-center leading-tight">
              Link<br/>Tree
            </span>
          </a>
        </div>

        {/* Language Selector */}
        <div className="mt-12 flex gap-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code as 'en' | 'de' | 'jp')}
              className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all ${
                language === lang.code 
                  ? 'border-neon-yellow shadow-neon scale-110' 
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <span className="text-2xl">{lang.flag}</span>
            </button>
          ))}
        </div>
      </section>

      {/* What is Poli Section */}
      <section className="py-16 px-4">
        <div className="max-w-md mx-auto">
          <div className="metal-card p-6 relative">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-white text-xs font-bold">?</span>
              </div>
              <h2 className="text-2xl font-gaming font-bold text-white tracking-wider">
                WHAT IS <span className="text-neon-yellow">POLI</span>?
              </h2>
            </div>

            {/* Content */}
            <div className="space-y-4 text-neon-yellow/90 text-sm leading-relaxed">
              <p>
                Poli is an orange cat roaming the Solana blockchain. Taking stylistic inspiration 
                from the 2010s videogame era, Poli emits a rare nostalgic aura.
              </p>
              <p>
                The low poly cat was modeled and named closely after one of the developers IRL 
                orange cat named Poly.
              </p>
              <p>
                In bearish times, many turn to Poli as a trusted safe haven. The 4 letter ticker 
                will paint your dreams.
              </p>
            </div>

            {/* Character Image */}
            <div className="mt-6 flex justify-center">
              <img 
                src="/images/default-poli.png" 
                alt="Poli" 
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Character Selection Section */}
      <section id="characters" className="py-16 px-4">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-pixel text-neon-yellow text-center mb-8">
            Choose Your Character!
          </h2>

          {/* Character Grid */}
          <div className="grid grid-cols-5 gap-2 mb-6">
            {characters.map((char) => (
              <button
                key={char.id}
                onClick={() => char.unlocked && setSelectedChar(char)}
                className={`character-card aspect-square rounded-lg overflow-hidden ${
                  selectedChar.id === char.id ? 'selected' : ''
                } ${!char.unlocked ? 'locked' : ''}`}
                disabled={!char.unlocked}
              >
                <img 
                  src={char.image} 
                  alt={char.name}
                  className="w-full h-full object-cover"
                />
                {!char.unlocked && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                    <Lock className="w-5 h-5 text-gray-500" />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Selected Character Display */}
          <div className="metal-card p-6">
            {/* Character Name */}
            <div className="flex items-center gap-4 mb-4">
              <img 
                src={selectedChar.image} 
                alt={selectedChar.name}
                className="w-16 h-16 rounded-lg object-cover border-2 border-neon-yellow"
              />
              <h3 className="text-xl font-gaming font-bold text-neon-yellow">
                {selectedChar.name}
              </h3>
            </div>

            {/* Character Preview */}
            <div className="flex justify-center mb-6">
              <img 
                src={selectedChar.image} 
                alt={selectedChar.name}
                className="w-48 h-48 object-contain drop-shadow-xl"
              />
            </div>

            {/* Stats */}
            {selectedChar.unlocked && (
              <div className="space-y-3">
                {Object.entries(selectedChar.stats).map(([stat, value]) => (
                  <div key={stat} className="flex items-center gap-3">
                    <span className="w-24 text-xs font-pixel text-neon-yellow uppercase">
                      {stat}
                    </span>
                    <div className="flex-1 stat-bar">
                      <div 
                        className="stat-bar-fill transition-all duration-500"
                        style={{ 
                          width: value === 'MAXED' ? '100%' : `${(value as number) * 10}%` 
                        }}
                      />
                    </div>
                    <span className="w-16 text-right text-xs font-pixel text-neon-yellow">
                      {value === 'MAXED' ? (
                        <span className="text-neon-pink">MAXED</span>
                      ) : (
                        <span className="flex items-center gap-1 justify-end">
                          <Star className="w-3 h-3 text-neon-yellow fill-neon-yellow" />
                          {value}/10
                        </span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Start Button */}
            <button className="w-full mt-6 py-3 px-6 bg-gradient-to-r from-neon-pink/20 to-neon-pink/40 border-2 border-neon-pink rounded-lg font-pixel text-sm text-neon-yellow hover:bg-neon-pink/30 transition-colors">
              START PLAYING (SOON)
            </button>

            {/* Quote */}
            <p className="mt-4 text-center text-xs text-neon-yellow/70 italic">
              Rarely in life can you entirely choose your own fate.<br/>
              This is one of those times.
            </p>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section id="links" className="py-16 px-4">
        <div className="max-w-md mx-auto">
          <div className="grid grid-cols-2 gap-4">
            {/* Choose Rich */}
            <a 
              href="#tokens" 
              className="metal-card p-4 flex flex-col items-center gap-3 hover:border-neon-yellow transition-colors group"
            >
              <div className="w-16 h-16 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-lg transform rotate-12 group-hover:rotate-0 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-green-500 rounded-lg transform -rotate-6 group-hover:rotate-0 transition-transform" />
              </div>
              <span className="font-pixel text-xs text-neon-yellow">Choose Rich</span>
            </a>

            {/* Monitor Chart */}
            <a 
              href="#chart" 
              className="metal-card p-4 flex flex-col items-center gap-3 hover:border-neon-yellow transition-colors group"
            >
              <div className="w-16 h-16 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 rounded transform skew-x-12 group-hover:skew-x-0 transition-transform" />
              </div>
              <span className="font-pixel text-xs text-neon-yellow">Monitor Chart</span>
            </a>

            {/* Lobster Avatar Maker */}
            <a 
              href="#avatar" 
              className="metal-card p-4 flex flex-col items-center gap-3 hover:border-neon-yellow transition-colors group"
            >
              <img 
                src="/images/lobster-avatar-maker.png" 
                alt="Lobster Avatar Maker"
                className="w-16 h-16 object-contain group-hover:scale-110 transition-transform"
              />
              <span className="font-pixel text-xs text-neon-yellow">Avatar Maker</span>
            </a>

            {/* The Kabal */}
            <a 
              href="#kabal" 
              className="metal-card p-4 flex flex-col items-center gap-3 hover:border-neon-yellow transition-colors group"
            >
              <img 
                src="/images/paper-plane.png" 
                alt="The Kabal"
                className="w-16 h-16 object-contain group-hover:scale-110 transition-transform"
              />
              <span className="font-pixel text-xs text-neon-yellow">The Kabal</span>
            </a>

            {/* Blue Bird */}
            <a 
              href="#twitter" 
              className="metal-card p-4 flex flex-col items-center gap-3 hover:border-neon-yellow transition-colors col-span-2 group"
            >
              <img 
                src="/images/blue-bird.png" 
                alt="Blue Bird"
                className="w-16 h-16 object-contain group-hover:scale-110 transition-transform"
              />
              <span className="font-pixel text-xs text-neon-yellow">Blue Bird</span>
            </a>
          </div>
        </div>
      </section>

      {/* Secret Section - Avatar Maker */}
      <section id="avatar" className="py-16 px-4 min-h-screen flex flex-col items-center justify-center bg-black">
        <div className="text-center">
          {/* POLI AVATAR MAKER Logo */}
          <div className="mb-8">
            <img 
              src="/images/poli-avatar-section.png" 
              alt="POLI AVATAR MAKER"
              className="w-40 h-auto mx-auto"
            />
          </div>
          
          {/* Construction Worker Lobster */}
          <div className="relative w-72 h-72 mx-auto mb-8">
            <img 
              src="/images/lobster-construction.png" 
              alt="Under Construction"
              className="w-full h-full object-contain"
            />
          </div>

          <h2 className="text-3xl font-pixel text-neon-yellow mb-4">Shhh...</h2>
          <p className="text-neon-yellow/80 font-gaming text-lg max-w-md mx-auto">
            We haven't yet revealed this part of the website.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-game-border">
        <div className="max-w-md mx-auto text-center">
          <p className="text-sm text-gray-500 font-gaming">
            Copyright (C) 2024 Poli. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
