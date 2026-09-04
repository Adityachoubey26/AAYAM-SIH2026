import L from 'leaflet';

/**
 * Configure default Leaflet icon paths for Vite bundling
 */
export const initializeLeafletIcons = (): void => {
  // Fix default marker icon issues with bundlers
  delete (L.Icon.Default.prototype as { _getIconUrl?: unknown })._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  });
};

export const MAP_CONFIG = {
  tileLayerUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  defaultCenter: [20.5937, 78.9629] as [number, number], // Center of India
  defaultZoom: 5,
  minZoom: 4,
  maxZoom: 18,
};
