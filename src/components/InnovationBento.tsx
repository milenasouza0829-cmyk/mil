import React, { useState } from 'react';
import { BENCHMARKS } from '../data/mockData';
import { Cpu, Zap, Eye, ShieldCheck, Radio, Sparkles, BarChart2, CheckCircle2, Lock } from 'lucide-react';
import { motion } from 'motion/react';

export const InnovationBento: React.FC = () => {
  const [activeBenchmarkTab, setActiveBenchmarkTab] = useState<number>(0);

  return (
    <section id="inovacao" className="py-24 bg-[#0c0d0e] relative overflow-hidden">
      {/* Background illumination grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c3e88d]/10 border border-[#c3e88d]/20 text-xs font-semibold text-[#c3e88d] uppercase tracking-wider mb-4">
            <Cpu size={14} />
            <span>Engenharia & Silício de 2nm</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Inovação forjada em nível atômico.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light">
            O novo processador P4 Quantum Bionic não apenas acelera tarefas — ele reimagina o que um smartphone é capaz de antecipar e realizar de forma autônoma.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          {/* Card 1: P4 Quantum Bionic Processor (Spans 8 cols on LG) */}
          <div className="lg:col-span-8 rounded-3xl bg-gradient-to-br from-[#13161a] via-[#0f1114] to-[#121518] border border-white/10 p-6 sm:p-8 shadow-2xl relative overflow-hidden group">
            {/* Subtle glow accent */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#c3e88d]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#c3e88d]/15 transition-all duration-700" />

            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#c3e88d]/15 border border-[#c3e88d]/30 flex items-center justify-center text-[#c3e88d]">
                  <Cpu size={24} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit',sans-serif]">
                    Chip P4 Quantum Bionic
                  </h3>
                  <span className="text-xs text-zinc-400 font-mono">
                    Litografia de 2 nanômetros • 18,6 bilhões de transistores
                  </span>
                </div>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[#c3e88d] font-semibold">
                32-Core NPU Neural
              </span>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed mb-6">
              Desenvolvido sob medida pela Pear com núcleos de computação quântica probabilística.
              O P4 Bionic executa até 48 trilhões de operações por segundo, mantendo temperatura operacional estável através da câmara de vapor com nanotubos de carbono.
            </p>

            {/* Interactive Benchmark Comparison Selector */}
            <div className="bg-black/40 rounded-2xl p-4 sm:p-5 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                  <BarChart2 size={15} className="text-[#c3e88d]" />
                  <span>Índice de Performance Relativa</span>
                </div>
                <span className="text-[11px] text-zinc-400">vs. Média do Segmento Flagship</span>
              </div>

              {/* Benchmark metric tabs */}
              <div className="flex flex-wrap gap-2 mb-4">
                {BENCHMARKS.map((bench, idx) => (
                  <button
                    key={bench.label}
                    onClick={() => setActiveBenchmarkTab(idx)}
                    className={`text-xs px-3 py-1.5 rounded-lg transition-all ${
                      activeBenchmarkTab === idx
                        ? 'bg-[#c3e88d] text-[#0c0d0e] font-bold'
                        : 'bg-white/5 text-zinc-400 hover:text-white'
                    }`}
                  >
                    {bench.label.split(' ')[0]} {bench.label.split(' ')[1]}
                  </button>
                ))}
              </div>

              {/* Active Benchmark Visualization */}
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span className="text-white flex items-center gap-1.5 font-bold">
                      <span className="w-2 h-2 rounded-full bg-[#c3e88d]" />
                      Pear P4 Quantum Bionic
                    </span>
                    <span className="text-[#c3e88d] font-mono font-bold">
                      +{BENCHMARKS[activeBenchmarkTab].pearValue - 100}% mais veloz
                    </span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      key={activeBenchmarkTab}
                      initial={{ width: 0 }}
                      animate={{ width: `${(BENCHMARKS[activeBenchmarkTab].pearValue / 200) * 100}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-[#c3e88d] to-[#82aaff]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-zinc-400 mb-1">
                    <span>Smartphones Flagships Anteriores</span>
                    <span className="font-mono">Padrão Base (100%)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full rounded-full bg-zinc-600 w-1/2" />
                  </div>
                </div>
              </div>

              <p className="text-xs text-zinc-400 mt-4 italic">
                {BENCHMARKS[activeBenchmarkTab].description}
              </p>
            </div>
          </div>

          {/* Card 2: Pear Intelligence & Privacy (Spans 4 cols on LG) */}
          <div className="lg:col-span-4 rounded-3xl bg-gradient-to-br from-[#13161a] via-[#0f1114] to-[#121518] border border-white/10 p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute -top-20 -right-20 w-52 h-52 bg-sky-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-500/15 transition-all duration-700" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-6">
                <Sparkles size={24} />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit',sans-serif] mb-2">
                Pear Intelligence
              </h3>
              <p className="text-xs text-sky-400 font-mono mb-4 uppercase tracking-wider">
                100% On-Device Neural Engine
              </p>
              <p className="text-sm text-zinc-300 font-light leading-relaxed mb-6">
                Inteligência contextual profunda que processa sua agenda, redige mensagens no seu tom de voz e retoca fotografias sem nunca transmitir seus dados para a nuvem.
              </p>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs">
              <div className="flex items-center gap-2 text-zinc-300">
                <Lock size={14} className="text-[#c3e88d]" />
                <span>Enclave de Segurança Criptográfico Quântico</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <CheckCircle2 size={14} className="text-sky-400" />
                <span>Tradução simultânea offline em 42 idiomas</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <CheckCircle2 size={14} className="text-sky-400" />
                <span>Edição generativa de áudio com eliminação de ruído</span>
              </div>
            </div>
          </div>

          {/* Card 3: Lumina Tandem micro-OLED Display (Spans 4 cols on LG) */}
          <div className="lg:col-span-4 rounded-3xl bg-gradient-to-br from-[#13161a] via-[#0f1114] to-[#121518] border border-white/10 p-6 sm:p-8 shadow-2xl relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6">
              <Eye size={24} />
            </div>

            <h3 className="text-xl font-bold text-white font-['Outfit',sans-serif] mb-2">
              Lumina Tandem micro-OLED
            </h3>
            <div className="text-2xl font-extrabold text-amber-300 mb-2 font-mono">
              3.500 nits
            </div>
            <p className="text-xs text-zinc-400 uppercase tracking-wider mb-4">
              Pico de Brilho Solar • 1 a 144Hz
            </p>
            <p className="text-sm text-zinc-300 font-light leading-relaxed">
              Duas camadas de OLED acopladas geram brilho sem precedentes mantendo o consumo reduzido em 30%.
              Cores calibradas individualmente no padrão DCI-P3 cinematográfico.
            </p>
          </div>

          {/* Card 4: Bateria de Silício-Carbono & HyperCharge (Spans 4 cols on LG) */}
          <div className="lg:col-span-4 rounded-3xl bg-gradient-to-br from-[#13161a] via-[#0f1114] to-[#121518] border border-white/10 p-6 sm:p-8 shadow-2xl relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
              <Zap size={24} />
            </div>

            <h3 className="text-xl font-bold text-white font-['Outfit',sans-serif] mb-2">
              Silício-Carbono & 100W
            </h3>
            <div className="text-2xl font-extrabold text-emerald-300 mb-2 font-mono">
              0-80% em 18 min
            </div>
            <p className="text-xs text-zinc-400 uppercase tracking-wider mb-4">
              PearMag Wireless 50W • 5.400 mAh
            </p>
            <p className="text-sm text-zinc-300 font-light leading-relaxed">
              Células de bateria de alta densidade química que retêm 90% da capacidade original após mais de 1.600 ciclos completos de recarga.
            </p>
          </div>

          {/* Card 5: Conexão Satélite & Durabilidade Extrema (Spans 4 cols on LG) */}
          <div className="lg:col-span-4 rounded-3xl bg-gradient-to-br from-[#13161a] via-[#0f1114] to-[#121518] border border-white/10 p-6 sm:p-8 shadow-2xl relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6">
              <Radio size={24} />
            </div>

            <h3 className="text-xl font-bold text-white font-['Outfit',sans-serif] mb-2">
              Pear Orbit SOS & Wi-Fi 7
            </h3>
            <div className="text-2xl font-extrabold text-purple-300 mb-2 font-mono">
              Sem sinal celular?
            </div>
            <p className="text-xs text-zinc-400 uppercase tracking-wider mb-4">
              Comunicação Satelital LEO Bidirecional
            </p>
            <p className="text-sm text-zinc-300 font-light leading-relaxed">
              Envie mensagens e coordenadas de resgate em alto mar, cordilheiras ou desertos remotamente com conexão direta a satélites em órbita baixa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
