import React, { useState } from 'react';
import { HALO_EVENTS } from '../data/mockData';
import { Music, Phone, Timer, Plane, Zap, Check, Play, Pause, Sparkles, Volume2, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PearLogo } from './PearLogo';

export const DynamicHaloDemo: React.FC = () => {
  const [activeEventId, setActiveEventId] = useState<string>('music');
  const [isPlayingMusic, setIsPlayingMusic] = useState(true);

  const activeEvent = HALO_EVENTS.find((e) => e.id === activeEventId) || HALO_EVENTS[0];

  return (
    <section id="halo" className="py-24 bg-[#0c0d0e] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#82aaff]/10 border border-[#82aaff]/20 text-xs font-semibold text-[#82aaff] uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            <span>PearOS 19 • Interface Fluida</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Dynamic Halo. A informação que respira.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light">
            O entalhe do sensor facial transforma-se dinamicamente no centro nevrálgico das suas notificações, música e status em tempo real com fluidez tátil e discreta.
          </p>
        </div>

        {/* Interactive Phone Stage with Dynamic Halo */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Simulated Phone Screen Front View */}
          <div className="md:col-span-7 flex justify-center">
            <div className="w-[300px] sm:w-[330px] h-[580px] rounded-[48px] bg-black border-[4px] border-[#303338] shadow-[0_0_50px_rgba(0,0,0,0.9)] p-3 relative flex flex-col justify-between overflow-hidden">
              {/* Wallpaper Screen Background */}
              <div className="absolute inset-2 rounded-[42px] overflow-hidden bg-gradient-to-b from-[#14181c] via-[#0f1114] to-[#161a20]">
                {/* Ambient dynamic colorful wallpaper wave */}
                <div className="absolute top-10 left-0 right-0 h-44 bg-gradient-to-b from-[#c3e88d]/15 via-[#82aaff]/10 to-transparent blur-2xl" />

                {/* Top Status Bar */}
                <div className="pt-2 px-6 flex justify-between items-center text-[11px] text-zinc-400 font-medium z-20 relative">
                  <span className="font-semibold text-white">09:41</span>
                  <div className="flex items-center gap-1.5 text-zinc-300">
                    <span className="text-[10px] font-bold text-[#c3e88d]">5G+</span>
                    <div className="w-5 h-2.5 rounded-sm border border-zinc-400 p-0.5 flex items-center">
                      <div className="h-full w-4/5 bg-[#c3e88d] rounded-xs" />
                    </div>
                  </div>
                </div>

                {/* THE DYNAMIC HALO CAPSULE */}
                <div className="flex justify-center mt-2 px-3 z-30 relative">
                  <motion.div
                    layout
                    key={activeEvent.id}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className="w-full bg-[#16181b] border border-white/15 rounded-full py-2 px-3.5 shadow-2xl shadow-black flex items-center justify-between text-xs"
                  >
                    {/* Left Icon/State */}
                    <div className="flex items-center gap-2">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-black"
                        style={{ backgroundColor: activeEvent.color }}
                      >
                        {activeEvent.id === 'music' && <Music size={13} />}
                        {activeEvent.id === 'call' && <Phone size={13} />}
                        {activeEvent.id === 'timer' && <Timer size={13} />}
                        {activeEvent.id === 'flight' && <Plane size={13} />}
                        {activeEvent.id === 'battery' && <Zap size={13} />}
                      </div>

                      <div>
                        <div className="text-white font-semibold text-[11px] leading-tight flex items-center gap-1">
                          <span>{activeEvent.title}</span>
                          {activeEvent.id === 'call' && (
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          )}
                        </div>
                        <div className="text-[9.5px] text-zinc-400 truncate max-w-[120px]">
                          {activeEvent.id === 'music' && 'Debussy — Clair de Lune'}
                          {activeEvent.id === 'call' && '00:42 • Gravando áudio'}
                          {activeEvent.id === 'timer' && '24m 18s restantes'}
                          {activeEvent.id === 'flight' && 'Portão B14 • 18 min'}
                          {activeEvent.id === 'battery' && '94% • Carga rápida'}
                        </div>
                      </div>
                    </div>

                    {/* Right Interactive action */}
                    <div className="flex items-center gap-1.5">
                      {activeEvent.id === 'music' && (
                        <div className="flex items-center gap-1">
                          {/* Animated equalizer waves */}
                          <div className="flex items-end gap-0.5 h-3">
                            <span className="w-0.5 h-3 bg-[#c3e88d] animate-bounce" />
                            <span className="w-0.5 h-2 bg-[#c3e88d] animate-pulse" />
                            <span className="w-0.5 h-3.5 bg-[#c3e88d] animate-bounce delay-75" />
                          </div>
                          <button
                            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                            className="p-1 text-white hover:text-[#c3e88d] ml-1"
                          >
                            {isPlayingMusic ? <Pause size={12} /> : <Play size={12} />}
                          </button>
                        </div>
                      )}

                      {activeEvent.id === 'call' && (
                        <div className="flex items-center gap-1">
                          <span className="text-[10px] text-emerald-400 font-mono">Ao Vivo</span>
                        </div>
                      )}

                      {activeEvent.id === 'timer' && (
                        <span className="font-mono text-[10px] text-amber-300 font-bold">24:18</span>
                      )}

                      {activeEvent.id === 'flight' && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold">
                          B14
                        </span>
                      )}

                      {activeEvent.id === 'battery' && (
                        <span className="text-[10px] text-sky-400 font-bold">94%</span>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Simulated lockscreen content below Halo */}
                <div className="p-6 text-center mt-6">
                  <div className="text-zinc-400 text-xs font-medium">Sábado, 19 de Setembro</div>
                  <div className="text-4xl font-extrabold text-white font-['Outfit',sans-serif] mt-1">
                    09:41
                  </div>

                  {/* Pear Intelligent Widget Card */}
                  <div className="mt-8 bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-left">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-semibold text-[#c3e88d] uppercase tracking-wider flex items-center gap-1">
                        <Sparkles size={12} />
                        <span>Pear Intelligence</span>
                      </span>
                      <span className="text-[10px] text-zinc-400">Agora</span>
                    </div>
                    <div className="text-xs font-semibold text-white">
                      Reunião de Design com Milão
                    </div>
                    <p className="text-[11px] text-zinc-300 mt-1">
                      O arquivo 3D de protótipo de titânio foi sincronizado e o resumo executivo está pronto.
                    </p>
                  </div>
                </div>

                {/* Bottom Home Indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/40 rounded-full" />
              </div>
            </div>
          </div>

          {/* Event Trigger Controls on the Right */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#82aaff] block mb-1">
                Interatividade ao Vivo
              </span>
              <h3 className="text-2xl font-bold text-white font-['Outfit',sans-serif]">
                Experimente o Halo em tempo real
              </h3>
              <p className="text-sm text-zinc-400 mt-2 font-light">
                Clique nos diferentes cenários abaixo para ver como o Dynamic Halo se adapta instantaneamente na tela:
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              {HALO_EVENTS.map((event) => {
                const isSelected = event.id === activeEventId;
                return (
                  <button
                    key={event.id}
                    onClick={() => setActiveEventId(event.id)}
                    className={`w-full p-3.5 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between ${
                      isSelected
                        ? 'bg-white/10 border-white/25 shadow-lg'
                        : 'bg-white/5 border-white/5 hover:bg-white/[0.08]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-black font-bold"
                        style={{ backgroundColor: event.color }}
                      >
                        {event.id === 'music' && <Music size={16} />}
                        {event.id === 'call' && <Phone size={16} />}
                        {event.id === 'timer' && <Timer size={16} />}
                        {event.id === 'flight' && <Plane size={16} />}
                        {event.id === 'battery' && <Zap size={16} />}
                      </div>

                      <div>
                        <div className="text-sm font-semibold text-white">{event.title}</div>
                        <div className="text-xs text-zinc-400">{event.subtitle}</div>
                      </div>
                    </div>

                    {isSelected && (
                      <div className="w-6 h-6 rounded-full bg-[#c3e88d] flex items-center justify-center text-[#0c0d0e]">
                        <Check size={14} />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-zinc-400 flex items-start gap-3">
              <Shield size={16} className="text-[#c3e88d] shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-medium block">Privacidade Absoluta</span>
                <span>Nenhum dado do Halo ou biometria facial é compartilhado com terceiros. Criptografia ponta a ponta nativa PearOS.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
