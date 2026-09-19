export interface PhoneModel {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  priceStartingAt: number;
  screenSize: string;
  displayTech: string;
  processor: string;
  chassisMaterial: string;
  weight: string;
  thickness: string;
  batteryLife: string;
  cameraSetup: string;
  colors: PhoneColor[];
  storages: { size: string; price: number }[];
  highlightFeatures: string[];
}

export interface PhoneColor {
  id: string;
  name: string;
  hex: string;
  accentHex: string;
  finish: string;
  description: string;
  previewImage?: string;
}

export interface BenchmarkStat {
  label: string;
  pearValue: number;
  competitorValue: number;
  unit: string;
  description: string;
}

export interface CameraLensMode {
  id: string;
  focalLength: string;
  zoom: string;
  name: string;
  aperture: string;
  description: string;
  sampleImage: string;
}
