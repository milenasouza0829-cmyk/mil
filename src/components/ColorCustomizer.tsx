import React, { useState } from 'react';
import { PEAR_MODELS, ASSETS } from '../data/mockData';
import { PhoneModel, PhoneColor } from '../types';
import { Check, Sparkles, SlidersHorizontal, ArrowRight, Shield, Layers, Scale } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PearLogo } from './PearLogo';

interface ColorCustomizerProps {
  onSelectModelForPreOrder: (modelId: string, colorId: string) => void;
}

export const ColorCustomizer: React.FC<ColorCustomizerProps> = ({ onSelectModelForPreOrder }) => {
  const [selectedModelId, setSelectedModelId] = useState<string>('pear-apex-ultra');
  const currentModel = PEAR_MODELS.find((m) => m.id === selectedModelId) || PEAR_MODELS[0];
  const [selectedColorId, setSelectedColorId] = useState<string>(currentModel.colors[0].id);

  // When model changes, update selected color if not available
  const handleModelChange = (model: PhoneModel) => {
    setSelectedModelId(model.id);
    if (!model.colors.some((c) => c.id === selectedColorId)) {
      setSelectedColorId(model.colors[0].id);
    }
  };

  const currentColor: PhoneColor =
    currentModel.colors.find((c) => c.id === selectedColorId) || currentModel.colors[0];

  return (
    <section id="modelos" className="py-24 bg-[#0e1013] border-t border-white/5 relative overflow-hidden">
      {/* Subtle radial decorative background light */}
      <div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none opacity-20 transition-colors duration-700"
        style={{ backgroundColor: currentColor.accentHex }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-4">
            <SlidersHorizontal size={13} className="text-[#c3e88d]" />
            <span>Estúdio de Design & Acabamentos</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            A personificação da sua elegância.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light">
            Escolha entre ligas espaciais de titânio polido a plasma e cerâmica cristalizada.
            Cada tom foi concebido para expressar serenidade e autoridade visual.
          </p>
        </div>

        {/* Model Tabs */}
        <div className="flex justify-center mb-12">
          <div
            id="model-selection-tabs"
            className="inline-flex p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg"
          >
            {PEAR_MODELS.map((model) => {
              const isActive = model.id === selectedModelId;
              return (
                <button
                  key={model.id}
                  onClick={() => handleModelChange(model)}
                  className={`relative px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'text-[#0c0d0e] shadow-md'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeModelPill"
                      className="absolute inset-0 bg-[#c3e88d] rounded-xl"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {model.name}
                    {model.badge && (
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full hidden sm:inline ${
                          isActive
                            ? 'bg-[#0c0d0e]/20 text-[#0c0d0e]'
                            : 'bg-white/10 text-zinc-300'
                        }`}
                      >
                        {model.badge}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Studio Showcase Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Showcase Stage */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            <div className="w-full max-w-lg relative">
              {/* Product Frame Showcase */}
              <motion.div
                key={`${selectedModelId}-${selectedColorId}`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.07] via-white/[0.02] to-transparent p-6 sm:p-8 shadow-2xl flex flex-col items-center"
              >
                {/* Simulated Modern Pear Phone Back chassis representation */}
                <div
                  className="w-64 sm:w-72 h-[450px] rounded-[42px] p-2.5 relative shadow-2xl transition-all duration-700 border-2"
                  style={{
                    backgroundColor: currentColor.hex,
                    borderColor: currentColor.accentHex,
                    boxShadow: `0 25px 60px -15px ${currentColor.hex}90, inset 0 1px 2px rgba(255,255,255,0.4)`,
                  }}
                >
                  {/* Subtle glass reflection highlight on the back */}
                  <div className="absolute inset-0 rounded-[38px] bg-gradient-to-tr from-white/10 via-transparent to-black/30 pointer-events-none" />

                  {/* Titanium camera bump island */}
                  <div
                    className="absolute top-4 left-4 w-28 h-28 rounded-2xl border p-2 shadow-inner transition-colors duration-500 flex flex-col justify-between"
                    style={{
                      backgroundColor: `${currentColor.hex}dd`,
                      borderColor: currentColor.accentHex,
                    }}
                  >
                    <div className="flex justify-between items-center">
                      {/* Lens 1 */}
                      <div className="w-9 h-9 rounded-full bg-black/90 border border-zinc-500/50 p-1 flex items-center justify-center shadow-lg">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-emerald-950 to-zinc-900 border border-emerald-500/40" />
                      </div>
                      {/* Lens 2 */}
                      <div className="w-9 h-9 rounded-full bg-black/90 border border-zinc-500/50 p-1 flex items-center justify-center shadow-lg">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-sky-950 to-zinc-900 border border-sky-500/40" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      {/* Lens 3 (Periscope) */}
                      <div className="w-9 h-9 rounded-full bg-black/90 border border-zinc-500/50 p-1 flex items-center justify-center shadow-lg">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-purple-950 to-zinc-900 border border-purple-500/40" />
                      </div>
                      {/* Laser LiDAR & Quad Flash */}
                      <div className="flex flex-col items-center gap-1.5 pr-1">
                        <div className="w-3.5 h-3.5 rounded-full bg-amber-100 border border-amber-300 shadow-sm shadow-amber-300/50" />
                        <div className="w-3 h-3 rounded-full bg-zinc-900 border border-zinc-700" />
                      </div>
                    </div>
                  </div>

                  {/* Pear Brand Emblem in the Center */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center opacity-85 hover:opacity-100 transition-opacity">
                    <PearLogo
                      size={44}
                      showWordmark={false}
                      className={currentColor.id === 'polar-ceramic' ? 'text-zinc-800' : 'text-zinc-200'}
                    />
                    <span
                      className={`text-[11px] font-bold tracking-widest uppercase mt-1 ${
                        currentColor.id === 'polar-ceramic' ? 'text-zinc-700' : 'text-zinc-400'
                      }`}
                    >
                      pear
                    </span>
                  </div>

                  {/* Ultra-slim antenna lines on titanium edges */}
                  <div className="absolute top-16 -left-1 w-1 h-3 bg-zinc-600/40 rounded-l" />
                  <div className="absolute top-24 -left-1 w-1 h-8 bg-zinc-600/40 rounded-l" />
                  <div className="absolute top-36 -left-1 w-1 h-8 bg-zinc-600/40 rounded-l" />
                  <div className="absolute top-20 -right-1 w-1 h-12 bg-zinc-600/40 rounded-r" />

                  {/* Magnetic PearMag ring discreet watermark */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white/5 pointer-events-none" />
                </div>

                {/* Subtitle tag of the rendered model */}
                <div className="mt-6 text-center">
                  <span className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
                    {currentModel.name} • {currentColor.name}
                  </span>
                  <p className="text-xs text-[#c3e88d] font-semibold mt-1">
                    {currentColor.finish}
                  </p>
                </div>
              </motion.div>

              {/* Real studio photograph inset card */}
              <div className="mt-4 p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                <img
                  src={ASSETS.lifestyle}
                  alt="Pear smartphone studio detail"
                  referrerPolicy="no-referrer"
                  className="w-16 h-12 rounded-lg object-cover border border-white/10"
                />
                <div className="text-xs">
                  <span className="text-zinc-300 font-medium block">
                    Fotografia de Precisão Industrial
                  </span>
                  <span className="text-zinc-400 text-[11px]">
                    Curvatura de 2.5D com junção zero entre vidro e titânio.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Model Customizer Controls */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#c3e88d] mb-1">
                {currentModel.badge || 'Linha Premium'}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Outfit',sans-serif]">
                {currentModel.name}
              </h3>
              <p className="text-sm text-zinc-400 mt-1 font-light">
                {currentModel.tagline}
              </p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-white">
                  R$ {currentModel.priceStartingAt.toLocaleString('pt-BR')}
                </span>
                <span className="text-xs text-zinc-400">
                  ou 12x de R$ {(currentModel.priceStartingAt / 12).toFixed(2).replace('.', ',')} sem juros
                </span>
              </div>
            </div>

            {/* Color Swatches */}
            <div className="border-t border-white/10 pt-6">
              <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider block mb-3">
                Cor & Acabamento: <span className="text-white font-bold ml-1">{currentColor.name}</span>
              </label>

              <div className="flex items-center gap-3">
                {currentModel.colors.map((color) => {
                  const isSelected = color.id === selectedColorId;
                  return (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColorId(color.id)}
                      className={`group relative flex flex-col items-center p-1 rounded-full transition-all duration-200 ${
                        isSelected ? 'ring-2 ring-[#c3e88d] ring-offset-2 ring-offset-[#0e1013]' : 'opacity-70 hover:opacity-100'
                      }`}
                      title={color.name}
                    >
                      <div
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 shadow-inner flex items-center justify-center"
                        style={{ backgroundColor: color.hex }}
                      >
                        {isSelected && (
                          <Check
                            size={16}
                            className={color.id === 'polar-ceramic' ? 'text-zinc-900' : 'text-white'}
                          />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                {currentColor.description}
              </p>
            </div>

            {/* Key Specs Matrix */}
            <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-6 text-xs">
              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <div className="text-zinc-400 flex items-center gap-1.5 mb-1">
                  <Layers size={14} className="text-[#c3e88d]" />
                  <span>Tela Display</span>
                </div>
                <div className="text-white font-medium">{currentModel.screenSize}</div>
              </div>

              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <div className="text-zinc-400 flex items-center gap-1.5 mb-1">
                  <Scale size={14} className="text-[#82aaff]" />
                  <span>Peso & Espessura</span>
                </div>
                <div className="text-white font-medium">
                  {currentModel.weight} • {currentModel.thickness}
                </div>
              </div>

              <div className="bg-white/5 p-3 rounded-xl border border-white/5 col-span-2">
                <div className="text-zinc-400 flex items-center gap-1.5 mb-1">
                  <Shield size={14} className="text-amber-400" />
                  <span>Material do Chassi</span>
                </div>
                <div className="text-white font-medium">{currentModel.chassisMaterial}</div>
              </div>
            </div>

            {/* Storage options preview */}
            <div className="border-t border-white/10 pt-4">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
                Capacidades disponíveis
              </span>
              <div className="flex flex-wrap gap-2">
                {currentModel.storages.map((st) => (
                  <span
                    key={st.size}
                    className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-300 font-mono"
                  >
                    {st.size}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-4">
              <button
                id="customizer-preorder-button"
                onClick={() => onSelectModelForPreOrder(currentModel.id, currentColor.id)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#f4f5f6] hover:bg-white text-[#0c0d0e] font-bold text-sm sm:text-base py-3.5 px-6 rounded-2xl transition-all duration-200 shadow-xl shadow-white/5 active:scale-98"
              >
                <span>Configurar {currentModel.name}</span>
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
