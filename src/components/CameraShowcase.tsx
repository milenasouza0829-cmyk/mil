import React, { useState } from 'react';
import { CAMERA_MODES, ASSETS } from '../data/mockData';
import { CameraLensMode } from '../types';
import { Camera, Film, Disc, Sparkles, Aperture, Sliders, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const CameraShowcase: React.FC = () => {
  const [selectedLensId, setSelectedLensId] = useState<string>('main');
  const activeLens = CAMERA_MODES.find((m) => m.id === selectedLensId) || CAMERA_MODES[1];

  return (
    <section id="camera" className="py-24 bg-[#0a0b0c] border-t border-white/5 relative overflow-hidden">
      {/* Subtle emerald atmospheric background reflection */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-[#c3e88d] uppercase tracking-wider mb-4">
            <Camera size={14} />
            <span>Sistema Óptico SpectraVision Pro</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Óptica de estúdio. No seu bolso.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light">
            Sensores de 108MP com estabilização mecânica de 5 eixos e revestimento quântico antirreflexo em safira.
            Capture a alma da cena com fidelidade cromática absoluta.
          </p>
        </div>

        {/* Camera Hardware Hero & Macro Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          {/* Left: Close-up macro product image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black group">
              <img
                src={ASSETS.camera}
                alt="Pear SpectraVision Camera Module Close-up"
                referrerPolicy="no-referrer"
                className="w-full aspect-square object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0c] via-transparent to-black/20 pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0c0d0e]/80 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#c3e88d] uppercase tracking-wider mb-1">
                  <Sparkles size={14} />
                  <span>Usinagem em Titânio & Cristal de Safira</span>
                </div>
                <p className="text-xs text-zinc-300">
                  Lentes polidas a nível atômico com nanorrevestimento esmeralda que elimina reflexos e refrações parasitas sob luz direta.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Technical Optical Superiority */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#c3e88d]">
                Arquitetura Tetraprisma Periscópica
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold text-white font-['Outfit',sans-serif]">
                A maior captura de luz já concebida para um smartphone.
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
                O sensor principal de 108MP combina 16 pixels adjacentes em um superpixel quântico de 3.2μm.
                Mesmo em noites sem iluminação direta, os detalhes emergem nítidos sem granulados artificiais.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-xs text-[#c3e88d] font-semibold mb-1 flex items-center gap-1.5">
                  <Aperture size={15} />
                  <span>Abertura Variável</span>
                </div>
                <div className="text-sm font-bold text-white">ƒ/1.4 a ƒ/4.0</div>
                <div className="text-[11px] text-zinc-400">Controle de profundidade físico real</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-xs text-sky-400 font-semibold mb-1 flex items-center gap-1.5">
                  <Film size={15} />
                  <span>Cinema ProRes 8K</span>
                </div>
                <div className="text-sm font-bold text-white">120 FPS Dolby Vision</div>
                <div className="text-[11px] text-zinc-400">Com perfil de cor PearLog 12-bit</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-xs text-amber-400 font-semibold mb-1 flex items-center gap-1.5">
                  <Sliders size={15} />
                  <span>Estabilização 5 Eixos</span>
                </div>
                <div className="text-sm font-bold text-white">OIS com Sensor-Shift</div>
                <div className="text-[11px] text-zinc-400">20.000 micro-correções por segundo</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-xs text-purple-400 font-semibold mb-1 flex items-center gap-1.5">
                  <Disc size={15} />
                  <span>Áudio Espacial 3D</span>
                </div>
                <div className="text-sm font-bold text-white">4 Microfones de Estúdio</div>
                <div className="text-[11px] text-zinc-400">Filtro de vento e isolamento de voz</div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Focal Length Demonstration Bar */}
        <div className="mt-12 bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h4 className="text-xl sm:text-2xl font-bold text-white font-['Outfit',sans-serif]">
              Cinco lentes de nível profissional. Um só toque.
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Alterne entre as distâncias focais ópticas dedicadas do Pear Apex Ultra:
            </p>
          </div>

          {/* Focal buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8">
            {CAMERA_MODES.map((mode) => {
              const isSelected = mode.id === selectedLensId;
              return (
                <button
                  key={mode.id}
                  onClick={() => setSelectedLensId(mode.id)}
                  className={`relative px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                    isSelected
                      ? 'bg-[#c3e88d] text-[#0c0d0e] shadow-lg shadow-[#c3e88d]/20 scale-105'
                      : 'bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10'
                  }`}
                >
                  <span className="font-mono font-bold">{mode.zoom}</span>
                  <span className="hidden sm:inline opacity-80 text-[11px]">({mode.focalLength})</span>
                </button>
              );
            })}
          </div>

          {/* Focal Preview Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLens.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              {/* Image result */}
              <div className="lg:col-span-8 rounded-2xl overflow-hidden border border-white/10 relative aspect-[16/9] shadow-xl">
                <img
                  src={activeLens.sampleImage}
                  alt={activeLens.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-mono text-white border border-white/10 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#c3e88d]" />
                  <span>{activeLens.focalLength} • {activeLens.zoom}</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-[11px] text-zinc-300 border border-white/10">
                  Foto original não comprimida (108MP RAW)
                </div>
              </div>

              {/* Lens info description */}
              <div className="lg:col-span-4 space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#c3e88d] font-semibold">
                    Distância Focal {activeLens.focalLength}
                  </span>
                  <h5 className="text-xl font-bold text-white mt-1 font-['Outfit',sans-serif]">
                    {activeLens.name}
                  </h5>
                  <div className="text-xs text-zinc-400 font-mono mt-1">
                    Abertura: {activeLens.aperture}
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed font-light">
                  {activeLens.description}
                </p>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs text-zinc-400 space-y-1">
                  <div className="text-white font-semibold">Tecnologia Quântica:</div>
                  <div>Fusão de quadros de exposição múltipla com calibração neural em tempo real.</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
