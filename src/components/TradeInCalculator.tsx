import React, { useState } from 'react';
import { TRADE_IN_OPTIONS, PEAR_MODELS } from '../data/mockData';
import { RefreshCw, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, CreditCard, DollarSign } from 'lucide-react';

interface TradeInCalculatorProps {
  onApplyTradeIn: (discountValue: number, oldDeviceName: string) => void;
}

export const TradeInCalculator: React.FC<TradeInCalculatorProps> = ({ onApplyTradeIn }) => {
  const [selectedDeviceIndex, setSelectedDeviceIndex] = useState<number>(0);
  const [deviceCondition, setDeviceCondition] = useState<'perfect' | 'good' | 'fair'>('perfect');
  const [targetModelId, setTargetModelId] = useState<string>('pear-apex-ultra');

  const selectedDevice = TRADE_IN_OPTIONS[selectedDeviceIndex];
  const targetModel = PEAR_MODELS.find((m) => m.id === targetModelId) || PEAR_MODELS[0];

  // Condition multiplier
  const conditionMultiplier = deviceCondition === 'perfect' ? 1.0 : deviceCondition === 'good' ? 0.85 : 0.65;
  const estimatedDiscount = Math.round(selectedDevice.estimatedValue * conditionMultiplier);
  const finalPrice = Math.max(targetModel.priceStartingAt - estimatedDiscount, 1000);
  const pixPrice = Math.round(finalPrice * 0.9); // 10% discount on Pix

  return (
    <section id="tradein" className="py-24 bg-[#0c0d0e] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c3e88d]/10 border border-[#c3e88d]/20 text-xs font-semibold text-[#c3e88d] uppercase tracking-wider mb-4">
            <RefreshCw size={13} />
            <span>Programa Pear Trade-In 2026</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Troque o seu atual pelo novo Pear.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light">
            Entregue seu smartphone antigo como parte do pagamento e receba crédito instantâneo na compra de qualquer modelo Pear Apex.
          </p>
        </div>

        {/* Calculator Card Container */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#13161a] to-[#0f1114] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Input Selection Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Step 1: Current device */}
              <div>
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
                  1. Selecione seu smartphone atual:
                </label>
                <select
                  value={selectedDeviceIndex}
                  onChange={(e) => setSelectedDeviceIndex(Number(e.target.value))}
                  className="w-full bg-[#1b1f24] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c3e88d] transition-colors"
                >
                  {TRADE_IN_OPTIONS.map((opt, i) => (
                    <option key={opt.brand} value={i} className="bg-[#121417] text-white">
                      {opt.brand} (Até R$ {opt.estimatedValue.toLocaleString('pt-BR')})
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 2: Device Condition */}
              <div>
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
                  2. Estado de conservação:
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setDeviceCondition('perfect')}
                    className={`p-3 rounded-xl border text-xs text-center transition-all ${
                      deviceCondition === 'perfect'
                        ? 'bg-[#c3e88d]/15 border-[#c3e88d] text-white font-bold'
                        : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <div className="font-semibold text-white">Excelente</div>
                    <div className="text-[10px] text-zinc-400 mt-0.5">Sem marcas de uso</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDeviceCondition('good')}
                    className={`p-3 rounded-xl border text-xs text-center transition-all ${
                      deviceCondition === 'good'
                        ? 'bg-[#c3e88d]/15 border-[#c3e88d] text-white font-bold'
                        : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <div className="font-semibold text-white">Bom</div>
                    <div className="text-[10px] text-zinc-400 mt-0.5">Pequenos riscos leves</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDeviceCondition('fair')}
                    className={`p-3 rounded-xl border text-xs text-center transition-all ${
                      deviceCondition === 'fair'
                        ? 'bg-[#c3e88d]/15 border-[#c3e88d] text-white font-bold'
                        : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <div className="font-semibold text-white">Razoável</div>
                    <div className="text-[10px] text-zinc-400 mt-0.5">Marcas visíveis</div>
                  </button>
                </div>
              </div>

              {/* Step 3: Desired Pear Model */}
              <div>
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
                  3. Modelo Pear desejado:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {PEAR_MODELS.map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setTargetModelId(m.id)}
                      className={`p-2.5 rounded-xl border text-xs text-center transition-all ${
                        targetModelId === m.id
                          ? 'bg-white/15 border-white/40 text-white font-bold'
                          : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <span className="block truncate font-medium">{m.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Output Calculation Result Column */}
            <div className="lg:col-span-5 bg-black/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                  <span>Valor de avaliação:</span>
                  <span className="text-[#c3e88d] font-bold font-mono">
                    - R$ {estimatedDiscount.toLocaleString('pt-BR')}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-zinc-400 mb-3">
                  <span>Preço original ({targetModel.name}):</span>
                  <span className="text-zinc-300 font-mono">
                    R$ {targetModel.priceStartingAt.toLocaleString('pt-BR')}
                  </span>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <span className="text-xs uppercase tracking-wider text-zinc-400 block mb-1">
                    Seu novo Pear sairá por:
                  </span>
                  <div className="text-3xl font-extrabold text-white font-['Outfit',sans-serif]">
                    R$ {finalPrice.toLocaleString('pt-BR')}
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">
                    ou 12x de R$ {(finalPrice / 12).toFixed(2).replace('.', ',')} sem juros
                  </div>
                </div>

                {/* Pix Discount box */}
                <div className="mt-4 p-3 rounded-xl bg-[#c3e88d]/10 border border-[#c3e88d]/20 text-xs flex items-center justify-between">
                  <span className="text-zinc-300 flex items-center gap-1.5 font-medium">
                    <DollarSign size={14} className="text-[#c3e88d]" />
                    À vista com 10% no Pix:
                  </span>
                  <span className="text-[#c3e88d] font-bold font-mono">
                    R$ {pixPrice.toLocaleString('pt-BR')}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onApplyTradeIn(estimatedDiscount, selectedDevice.brand)}
                className="w-full bg-[#c3e88d] hover:bg-[#b3dc75] text-[#0c0d0e] font-bold py-3.5 px-4 rounded-xl text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#c3e88d]/15 active:scale-98"
              >
                <span>Aplicar Desconto e Configurar</span>
                <ArrowRight size={16} />
              </button>

              <div className="flex items-center gap-2 text-[11px] text-zinc-400 justify-center">
                <ShieldCheck size={14} className="text-[#c3e88d]" />
                <span>Avaliação definitiva na entrega do aparelho novo.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
