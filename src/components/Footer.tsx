import React, { useState } from 'react';
import { PearLogo } from './PearLogo';
import { Leaf, Shield, Globe, Send, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#08090a] text-zinc-400 text-xs border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sustainability & Environmental Commitment Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/5 mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#c3e88d]/10 border border-[#c3e88d]/20 flex items-center justify-center text-[#c3e88d] shrink-0">
              <Leaf size={18} />
            </div>
            <div>
              <h5 className="text-white font-semibold text-sm">Pegada de Carbono Neutra</h5>
              <p className="text-zinc-400 mt-1 leading-relaxed">
                100% de alumínio e ouro reciclados na placa-mãe. Embalagem 100% feita de fibra vegetal livre de plásticos.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
              <Shield size={18} />
            </div>
            <div>
              <h5 className="text-white font-semibold text-sm">Privacidade Inegociável</h5>
              <p className="text-zinc-400 mt-1 leading-relaxed">
                Seus dados biométricos, fotos e senhas jamais deixam o chip de segurança do aparelho. Sem venda de dados.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
              <Globe size={18} />
            </div>
            <div>
              <h5 className="text-white font-semibold text-sm">Suporte Concierge 24/7</h5>
              <p className="text-zinc-400 mt-1 leading-relaxed">
                Atendimento humano dedicado com especialistas Pear em mais de 120 países e reparo expresso no mesmo dia.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation columns & newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <PearLogo size={28} />
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Pear é a fusão definitiva entre artesanato de alta joalheria e inovação computacional de vanguarda.
              Projetado em Genebra e São Francisco.
            </p>
            <div className="text-xs text-zinc-500">
              © 2026 Pear Corporation. Todos os direitos reservados.
            </div>
          </div>

          {/* Quick Links 1 */}
          <div className="md:col-span-2 space-y-2.5">
            <h6 className="text-white font-semibold uppercase tracking-wider text-[11px]">
              Smartphones Pear
            </h6>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#modelos" className="hover:text-white transition-colors">Pear Apex Ultra</a></li>
              <li><a href="#modelos" className="hover:text-white transition-colors">Pear Apex</a></li>
              <li><a href="#modelos" className="hover:text-white transition-colors">Pear Air</a></li>
              <li><a href="#comparar" className="hover:text-white transition-colors">Comparar Modelos</a></li>
              <li><a href="#tradein" className="hover:text-white transition-colors">Programa Trade-In</a></li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div className="md:col-span-2 space-y-2.5">
            <h6 className="text-white font-semibold uppercase tracking-wider text-[11px]">
              Ecossistema & Inovação
            </h6>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#inovacao" className="hover:text-white transition-colors">Chip P4 Quantum Bionic</a></li>
              <li><a href="#camera" className="hover:text-white transition-colors">SpectraVision 108MP</a></li>
              <li><a href="#halo" className="hover:text-white transition-colors">PearOS 19 & Dynamic Halo</a></li>
              <li><a href="#inovacao" className="hover:text-white transition-colors">Pear Intelligence</a></li>
              <li><a href="#hero" className="hover:text-white transition-colors">PearMag Wireless</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-4 space-y-3">
            <h6 className="text-white font-semibold uppercase tracking-wider text-[11px]">
              Pear Keynote & Notícias Exclusivas
            </h6>
            <p className="text-xs text-zinc-400">
              Cadastre-se para receber novidades em primeira mão sobre os lançamentos, atualizações do PearOS e eventos globais.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 rounded-xl bg-[#c3e88d]/15 border border-[#c3e88d]/30 text-xs text-[#c3e88d] flex items-center gap-2">
                <Check size={16} />
                <span>Obrigado! Seu e-mail foi cadastrado com prioridade.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Digite seu e-mail corporativo"
                  className="bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 flex-1 focus:outline-none focus:border-[#c3e88d]"
                />
                <button
                  type="submit"
                  className="bg-[#c3e88d] hover:bg-[#b2dc73] text-[#0c0d0e] px-4 py-2.5 rounded-xl font-bold transition-all flex items-center justify-center"
                >
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Legal bottom row */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div className="flex flex-wrap gap-4">
            <span className="hover:text-zinc-300 cursor-pointer">Política de Privacidade</span>
            <span className="hover:text-zinc-300 cursor-pointer">Termos de Serviço</span>
            <span className="hover:text-zinc-300 cursor-pointer">Vendas e Reembolsos</span>
            <span className="hover:text-zinc-300 cursor-pointer">Garantia Limitada PearCare+</span>
          </div>

          <div className="text-zinc-500">
            Brasil • Português (BRL)
          </div>
        </div>
      </div>
    </footer>
  );
};
