import React from 'react';
import { PEAR_MODELS } from '../data/mockData';
import { Check, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

interface ComparisonTableProps {
  onSelectModelForPreOrder: (modelId: string) => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onSelectModelForPreOrder }) => {
  return (
    <section id="comparar" className="py-24 bg-[#0a0b0c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#c3e88d] block mb-2">
            Linha Completa Pear 2026
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Qual Pear é o ideal para você?
          </h2>
          <p className="mt-4 text-base text-zinc-400 font-light">
            Compare lado a lado o poder do titânio, a precisão óptica e as especificações de cada criação Pear.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PEAR_MODELS.map((model) => {
            const isUltra = model.id === 'pear-apex-ultra';
            return (
              <div
                key={model.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isUltra
                    ? 'bg-gradient-to-b from-[#161a1f] to-[#0f1114] border-2 border-[#c3e88d]/50 shadow-2xl shadow-[#c3e88d]/5'
                    : 'bg-[#101215] border border-white/10 hover:border-white/20'
                }`}
              >
                {isUltra && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c3e88d] text-[#0c0d0e] font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Mais Avançado
                  </div>
                )}

                <div>
                  <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                    {model.badge || 'Linha Premium'}
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-1 font-['Outfit',sans-serif]">
                    {model.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 min-h-[32px]">{model.tagline}</p>

                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-xs text-zinc-400 block">A partir de</span>
                    <span className="text-2xl font-extrabold text-white">
                      R$ {model.priceStartingAt.toLocaleString('pt-BR')}
                    </span>
                    <span className="text-xs text-zinc-400 block mt-0.5">
                      ou 12x de R$ {(model.priceStartingAt / 12).toFixed(2).replace('.', ',')}
                    </span>
                  </div>

                  {/* Feature specs list */}
                  <div className="mt-6 space-y-4 text-xs">
                    <div>
                      <span className="text-zinc-500 font-medium block uppercase text-[10px] tracking-wider">
                        Tela & Resolução
                      </span>
                      <span className="text-white font-semibold text-sm">{model.screenSize}</span>
                      <p className="text-zinc-400 text-[11px] mt-0.5">{model.displayTech}</p>
                    </div>

                    <div>
                      <span className="text-zinc-500 font-medium block uppercase text-[10px] tracking-wider">
                        Processador & NPU
                      </span>
                      <span className="text-white font-semibold text-sm">{model.processor}</span>
                    </div>

                    <div>
                      <span className="text-zinc-500 font-medium block uppercase text-[10px] tracking-wider">
                        Chassi & Acabamento
                      </span>
                      <span className="text-white font-medium">{model.chassisMaterial}</span>
                    </div>

                    <div>
                      <span className="text-zinc-500 font-medium block uppercase text-[10px] tracking-wider">
                        Sistema Fotográfico
                      </span>
                      <span className="text-white font-medium leading-tight block">
                        {model.cameraSetup}
                      </span>
                    </div>

                    <div>
                      <span className="text-zinc-500 font-medium block uppercase text-[10px] tracking-wider">
                        Bateria & Carga
                      </span>
                      <span className="text-white font-medium">{model.batteryLife}</span>
                    </div>

                    <div>
                      <span className="text-zinc-500 font-medium block uppercase text-[10px] tracking-wider">
                        Dimensões
                      </span>
                      <span className="text-white font-medium">
                        {model.weight} • {model.thickness}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <button
                    onClick={() => onSelectModelForPreOrder(model.id)}
                    className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                      isUltra
                        ? 'bg-[#c3e88d] hover:bg-[#b5e07a] text-[#0c0d0e] shadow-lg shadow-[#c3e88d]/15'
                        : 'bg-white/10 hover:bg-white/15 text-white'
                    }`}
                  >
                    <ShoppingBag size={16} />
                    <span>Configurar {model.name}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
