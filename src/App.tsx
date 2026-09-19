/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ColorCustomizer } from './components/ColorCustomizer';
import { InnovationBento } from './components/InnovationBento';
import { CameraShowcase } from './components/CameraShowcase';
import { DynamicHaloDemo } from './components/DynamicHaloDemo';
import { ComparisonTable } from './components/ComparisonTable';
import { TradeInCalculator } from './components/TradeInCalculator';
import { PressReviews } from './components/PressReviews';
import { Footer } from './components/Footer';
import { PreOrderModal } from './components/PreOrderModal';

export default function App() {
  const [preOrderOpen, setPreOrderOpen] = useState<boolean>(false);
  const [selectedModelId, setSelectedModelId] = useState<string>('pear-apex-ultra');
  const [selectedColorId, setSelectedColorId] = useState<string | undefined>(undefined);
  const [tradeInDiscount, setTradeInDiscount] = useState<number>(0);
  const [tradeInDeviceName, setTradeInDeviceName] = useState<string>('');

  const handleOpenPreOrder = (modelId?: string, colorId?: string) => {
    if (modelId) setSelectedModelId(modelId);
    if (colorId) setSelectedColorId(colorId);
    setPreOrderOpen(true);
  };

  const handleApplyTradeIn = (discount: number, deviceName: string) => {
    setTradeInDiscount(discount);
    setTradeInDeviceName(deviceName);
    setPreOrderOpen(true);
  };

  const handleExploreModels = () => {
    const el = document.getElementById('modelos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#f4f5f6] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#c3e88d] selection:text-[#0c0d0e]">
      {/* Navigation */}
      <Navbar onOpenPreOrder={() => handleOpenPreOrder()} />

      {/* Hero Section */}
      <main>
        <HeroSection
          onOpenPreOrder={() => handleOpenPreOrder('pear-apex-ultra')}
          onExploreModels={handleExploreModels}
        />

        {/* Color & Model Studio */}
        <ColorCustomizer
          onSelectModelForPreOrder={(modelId, colorId) => handleOpenPreOrder(modelId, colorId)}
        />

        {/* Technological Innovation (P4 Quantum Bionic, NPU, Lumina OLED) */}
        <InnovationBento />

        {/* Camera SpectraVision 108MP Showcase */}
        <CameraShowcase />

        {/* PearOS 19 Dynamic Halo Interactive Experience */}
        <DynamicHaloDemo />

        {/* Model Comparison Table */}
        <ComparisonTable
          onSelectModelForPreOrder={(modelId) => handleOpenPreOrder(modelId)}
        />

        {/* Interactive Trade-in Calculator */}
        <TradeInCalculator onApplyTradeIn={handleApplyTradeIn} />

        {/* Press Reviews & Accolades */}
        <PressReviews />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Reservation & Configuration Modal */}
      <PreOrderModal
        isOpen={preOrderOpen}
        onClose={() => setPreOrderOpen(false)}
        initialModelId={selectedModelId}
        initialColorId={selectedColorId}
        tradeInDiscount={tradeInDiscount}
        tradeInDeviceName={tradeInDeviceName}
      />
    </div>
  );
}

