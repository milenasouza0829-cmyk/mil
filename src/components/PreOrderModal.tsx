import React, { useState } from 'react';
import { PEAR_MODELS } from '../data/mockData';
import { PhoneModel, PhoneColor } from '../types';
import { X, Check, ShoppingBag, ShieldCheck, Truck, Sparkles, CheckCircle2 } from 'lucide-react';
import { PearLogo } from './PearLogo';

interface PreOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialModelId?: string;
  initialColorId?: string;
  tradeInDiscount?: number;
  tradeInDeviceName?: string;
}

export const PreOrderModal: React.FC<PreOrderModalProps> = ({
  isOpen,
  onClose,
  initialModelId = 'pear-apex-ultra',
  initialColorId,
  tradeInDiscount = 0,
  tradeInDeviceName = '',
}) => {
  const [selectedModelId, setSelectedModelId] = useState<string>(initialModelId);
  const currentModel = PEAR_MODELS.find((m) => m.id === selectedModelId) || PEAR_MODELS[0];

  const [selectedColorId, setSelectedColorId] = useState<string>(
    initialColorId || currentModel.colors[0].id
  );

  const [selectedStorageSize, setSelectedStorageSize] = useState<string>(
    currentModel.storages[0].size
  );

  // Accessories optional checkboxes
  const [includePearMag, setIncludePearMag] = useState<boolean>(true);
  const [includeCase, setIncludeCase] = useState<boolean>(false);

  // Completed order state
  const [orderSuccess, setOrderSuccess] = useState<boolean>(false);
  const [reservationCode, setReservationCode] = useState<string>('');

  if (!isOpen) return null;

  const currentColor =
    currentModel.colors.find((c) => c.id === selectedColorId) || currentModel.colors[0];

  const storageObj =
    currentModel.storages.find((s) => s.size === selectedStorageSize) || currentModel.storages[0];

  const basePrice = storageObj.price;
  const accessoriesTotal = (includePearMag ? 499 : 0) + (includeCase ? 349 : 0);
  const subtotal = basePrice + accessoriesTotal;
  const finalTotal = Math.max(subtotal - tradeInDiscount, 1000);
  const installment = (finalTotal / 12).toFixed(2).replace('.', ',');

  const handleFinishReservation = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `PEAR-${Math.random().toString(36).substring(2, 8).toUpperCase()}-2026`;
    setReservationCode(code);
    setOrderSuccess(true);
  };

  return (
    <div
      id="preorder-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto"
    >
      <div
        id="preorder-modal-container"
        className="relative w-full max-w-3xl bg-[#121417] border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-8"
      >
        {/* Header bar */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <PearLogo size={22} showWordmark={false} />
            <div>
              <h3 className="text-lg font-bold text-white font-['Outfit',sans-serif]">
                Configurador Pear Oficial
              </h3>
              <p className="text-xs text-zinc-400">Reserva de lançamento com entrega prioritária</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {orderSuccess ? (
          /* Confirmation Screen */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#c3e88d]/20 border border-[#c3e88d] mx-auto flex items-center justify-center text-[#c3e88d]">
              <CheckCircle2 size={36} />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#c3e88d] font-bold">
                Reserva Confirmada com Sucesso
              </span>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit',sans-serif]">
                Bem-vindo à nova era, você garantiu seu Pear!
              </h4>
              <p className="text-sm text-zinc-300 max-w-md mx-auto">
                Enviamos os detalhes do pedido e o rastreamento prioritário para o seu e-mail. Seu aparelho será preparado e lapidado individualmente.
              </p>
            </div>

            <div className="max-w-md mx-auto p-4 rounded-2xl bg-white/5 border border-white/10 text-left space-y-2 text-xs">
              <div className="flex justify-between text-zinc-400">
                <span>Código de Reserva:</span>
                <span className="text-white font-mono font-bold text-sm text-[#c3e88d]">
                  {reservationCode}
                </span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Modelo Escolhido:</span>
                <span className="text-white font-medium">
                  {currentModel.name} ({storageObj.size})
                </span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Acabamento:</span>
                <span className="text-white font-medium">{currentColor.name}</span>
              </div>
              <div className="flex justify-between text-zinc-400 pt-2 border-t border-white/10">
                <span>Total Final:</span>
                <span className="text-white font-bold text-sm">
                  R$ {finalTotal.toLocaleString('pt-BR')} (12x R$ {installment})
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 bg-[#c3e88d] hover:bg-[#b2dc73] text-[#0c0d0e] font-bold text-sm rounded-xl transition-all"
            >
              Concluir & Voltar ao Início
            </button>
          </div>
        ) : (
          /* Configuration Flow */
          <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Step 1: Model Choice */}
            <div>
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
                1. Escolha o Smartphone:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PEAR_MODELS.map((m) => {
                  const isSelected = m.id === selectedModelId;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => {
                        setSelectedModelId(m.id);
                        if (!m.colors.some((c) => c.id === selectedColorId)) {
                          setSelectedColorId(m.colors[0].id);
                        }
                      }}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        isSelected
                          ? 'bg-white/15 border-[#c3e88d] ring-1 ring-[#c3e88d]'
                          : 'bg-white/5 border-white/10 hover:bg-white/[0.08]'
                      }`}
                    >
                      <div className="text-sm font-bold text-white">{m.name}</div>
                      <div className="text-xs text-zinc-400 mt-0.5">{m.screenSize.split(' ')[0]}</div>
                      <div className="text-xs font-semibold text-[#c3e88d] mt-2">
                        A partir de R$ {m.priceStartingAt.toLocaleString('pt-BR')}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Color Choice */}
            <div>
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
                2. Acabamento & Cor: <span className="text-white ml-1">{currentColor.name}</span>
              </label>
              <div className="flex flex-wrap items-center gap-3">
                {currentModel.colors.map((c) => {
                  const isSelected = c.id === selectedColorId;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelectedColorId(c.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl border transition-all ${
                        isSelected
                          ? 'bg-white/15 border-[#c3e88d] text-white'
                          : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-white/20"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span className="text-xs font-medium">{c.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Storage Choice */}
            <div>
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
                3. Armazenamento Quântico:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {currentModel.storages.map((s) => {
                  const isSelected = s.size === selectedStorageSize;
                  return (
                    <button
                      key={s.size}
                      type="button"
                      onClick={() => setSelectedStorageSize(s.size)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        isSelected
                          ? 'bg-white/15 border-[#c3e88d] text-white'
                          : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <div className="text-sm font-bold text-white font-mono">{s.size}</div>
                      <div className="text-xs text-zinc-400 mt-1">
                        R$ {s.price.toLocaleString('pt-BR')}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Add-ons / PearMag */}
            <div>
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
                4. Acessórios de Engenharia Pear (Opcional):
              </label>
              <div className="space-y-2">
                <label className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/[0.07] transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includePearMag}
                      onChange={(e) => setIncludePearMag(e.target.checked)}
                      className="rounded accent-[#c3e88d] w-4 h-4"
                    />
                    <div>
                      <div className="text-xs font-semibold text-white">Carregador Rápido PearMag 50W</div>
                      <div className="text-[11px] text-zinc-400">
                        Base magnética de alumínio aeroespacial com cabo trançado
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-zinc-300">+ R$ 499</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/[0.07] transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeCase}
                      onChange={(e) => setIncludeCase(e.target.checked)}
                      className="rounded accent-[#c3e88d] w-4 h-4"
                    />
                    <div>
                      <div className="text-xs font-semibold text-white">Case PearShield em Couro Vegano</div>
                      <div className="text-[11px] text-zinc-400">
                        Proteção térmica contra impactos com botões em titânio polido
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-zinc-300">+ R$ 349</span>
                </label>
              </div>
            </div>

            {/* Trade in badge if applied */}
            {tradeInDiscount > 0 && (
              <div className="p-3.5 rounded-xl bg-[#c3e88d]/10 border border-[#c3e88d]/30 text-xs flex items-center justify-between">
                <div>
                  <span className="font-semibold text-white block">
                    Crédito Pear Trade-in Aplicado!
                  </span>
                  <span className="text-zinc-300 text-[11px]">
                    Aparelho anterior ({tradeInDeviceName})
                  </span>
                </div>
                <span className="font-bold font-mono text-[#c3e88d] text-sm">
                  - R$ {tradeInDiscount.toLocaleString('pt-BR')}
                </span>
              </div>
            )}

            {/* Step 5: Customer Form & Submission */}
            <form onSubmit={handleFinishReservation} className="space-y-4 pt-4 border-t border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-zinc-400 block mb-1">Nome Completo</label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    className="w-full bg-[#1b1f24] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#c3e88d]"
                  />
                </div>
                <div>
                  <label className="text-xs text-zinc-400 block mb-1">E-mail para Confirmação</label>
                  <input
                    type="email"
                    required
                    placeholder="seu.email@exemplo.com"
                    className="w-full bg-[#1b1f24] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#c3e88d]"
                  />
                </div>
              </div>

              {/* Order total strip */}
              <div className="p-4 rounded-2xl bg-black/60 border border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-zinc-400">Total a pagar:</div>
                  <div className="text-2xl font-extrabold text-white font-['Outfit',sans-serif]">
                    R$ {finalTotal.toLocaleString('pt-BR')}
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    Em até 12x de R$ {installment} sem juros ou R$ {(finalTotal * 0.9).toFixed(2).replace('.', ',')} no Pix
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-[#c3e88d] hover:bg-[#b0db74] text-[#0c0d0e] font-extrabold px-6 py-3.5 rounded-xl text-sm transition-all flex items-center gap-2 shadow-lg shadow-[#c3e88d]/15 active:scale-95"
                >
                  <ShoppingBag size={17} />
                  <span>Confirmar Minha Reserva</span>
                </button>
              </div>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-[11px] text-zinc-400">
              <span className="flex items-center gap-1">
                <Truck size={13} className="text-[#c3e88d]" />
                Frete Expresso Grátis para todo o Brasil
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck size={13} className="text-[#c3e88d]" />
                2 Anos de Garantia PearCare+
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
