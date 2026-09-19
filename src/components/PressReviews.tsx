import React from 'react';
import { Award, Star, Quote } from 'lucide-react';

export const PressReviews: React.FC = () => {
  const reviews = [
    {
      source: 'Wired Tech Global',
      quote:
        'A Pear conseguiu o feito definitivo: superar todos os padrões vigentes de elegância e trazer o primeiro processador de 2nm com autonomia e IA autônoma impecáveis.',
      badge: 'Nota 9.9/10 • Escolha dos Editores',
    },
    {
      source: 'Design & Haute Horlogerie',
      quote:
        'Um monumento de precisão escultural. Segurar o Pear Apex Ultra em Titânio Obsidiana evoca a mesma emoção tátil de um relógio suíço de alta complicação.',
      badge: 'Prêmio Excelência Estética 2026',
    },
    {
      source: 'The Verge & Mobile Review',
      quote:
        'A câmera SpectraVision com sensor periscópico tetraprisma e gravação 8K ProRes eleva o smartphone ao status de câmera principal para cineastas.',
      badge: 'Melhor Câmera de Smartphone do Ano',
    },
  ];

  return (
    <section className="py-20 bg-[#0e1013] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-3">
            <Award size={14} />
            <span>Aclamação da Crítica Internacional</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit',sans-serif]">
            Reconhecido pelos maiores olhos da indústria.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between hover:border-white/20 transition-colors"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star key={starIdx} size={14} fill="currentColor" />
                  ))}
                </div>
                <Quote size={24} className="text-white/20 mb-3" />
                <p className="text-sm text-zinc-300 leading-relaxed font-light italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  {rev.source}
                </div>
                <div className="text-[11px] text-[#c3e88d] font-medium mt-0.5">{rev.badge}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
