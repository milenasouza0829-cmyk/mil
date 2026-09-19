import React from 'react';
import { ASSETS } from '../data/mockData';
import { ShoppingBag, Play, ShieldCheck, Cpu, Sparkles, Eye } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onOpenPreOrder: () => void;
  onExploreModels: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPreOrder, onExploreModels }) => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#0c0d0e] via-[#101214] to-[#0c0d0e]"
    >
      {/* Ambient background glow elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#c3e88d]/10 via-[#82aaff]/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-[#c3e88d]/5 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow Badge */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-inner shadow-white/5"
          >
            <span className="w-2 h-2 rounded-full bg-[#c3e88d] animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-300">
              Geração 2026 • Pear Apex Series
            </span>
          </motion.div>
        </div>

        {/* Main Title & Tagline */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-['Outfit',sans-serif] leading-[1.08]"
          >
            Elegância pura. <br />
            <span className="bg-gradient-to-r from-white via-[#e2e8f0] to-[#94a3b8] bg-clip-text text-transparent">
              Inovação sem precedentes.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Esculpido em titânio aeroespacial grau 5 e impulsionado pelo processador quântico P4 Bionic de 2nm.
            Conheça o smartphone que redefine o limiar entre alta joalheria e tecnologia extrema.
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <button
            id="hero-preorder-cta"
            onClick={onOpenPreOrder}
            className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#c3e88d] to-[#a8db66] hover:from-[#d1f2a5] hover:to-[#b7e479] text-[#0c0d0e] font-bold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-300 shadow-xl shadow-[#c3e88d]/15 hover:shadow-[#c3e88d]/30 active:scale-95"
          >
            <ShoppingBag size={18} />
            <span>Adquirir Pear Apex Ultra</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#0c0d0e]/15">
              R$ 8.499
            </span>
          </button>

          <button
            id="hero-explore-cta"
            onClick={onExploreModels}
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-sm sm:text-base px-6 py-3.5 rounded-full transition-all duration-200 backdrop-blur-sm"
          >
            <Eye size={17} className="text-zinc-300" />
            <span>Explorar Modelos & Cores</span>
          </button>
        </motion.div>

        {/* Hero Product Showcase Stage */}
        <div className="relative mt-12 sm:mt-16 max-w-5xl mx-auto">
          {/* Subtle frame glow container */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-2 sm:p-4 shadow-2xl shadow-black/80">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black/40 group"
            >
              <img
                src={ASSETS.hero}
                alt="Pear Apex Ultra Flagship Smartphone"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e] via-transparent to-black/20 pointer-events-none" />

              {/* Floating Technology Badges on the Hero Image */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 pointer-events-none">
                <div className="bg-[#0c0d0e]/75 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-4 shadow-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#c3e88d]/10 border border-[#c3e88d]/20 flex items-center justify-center text-[#c3e88d]">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white tracking-wide">
                      Titânio Grau 5 & Cerâmica
                    </div>
                    <div className="text-[11px] text-zinc-400">
                      Usinagem micrométrica aeroespacial
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex bg-[#0c0d0e]/75 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-4 shadow-xl items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                    <Cpu size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white tracking-wide">
                      Chip P4 Quantum Bionic
                    </div>
                    <div className="text-[11px] text-zinc-400">
                      Litografia 2nm • 32-core NPU
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex bg-[#0c0d0e]/75 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-4 shadow-xl items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white tracking-wide">
                      Lumina Tandem OLED
                    </div>
                    <div className="text-[11px] text-zinc-400">
                      Pico de 3.500 nits • 1 a 144Hz
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Specifications Bar */}
          <div
            id="hero-specs-strip"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10 text-center"
          >
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit',sans-serif]">
                6.3 mm
              </div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider mt-1">
                Espessura Ultrasslim
              </div>
            </div>

            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#c3e88d] font-['Outfit',sans-serif]">
                108 MP
              </div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider mt-1">
                Sensor Quântico SpectraVision
              </div>
            </div>

            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit',sans-serif]">
                36 Horas
              </div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider mt-1">
                Autonomia de Bateria
              </div>
            </div>

            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#82aaff] font-['Outfit',sans-serif]">
                100W Turbo
              </div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider mt-1">
                0 a 80% em 18 minutos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
