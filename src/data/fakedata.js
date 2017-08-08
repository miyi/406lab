
const TOTAL_COUNT = 50;

export const UBCCoords= { lat: 49.2606052, lng: -123.2459938 };

export const markerData = [...Array(TOTAL_COUNT)].fill(0) // fill(0) for loose mode
  .map((__, index) => ({
    id: index,
    lat: UBCCoords.lat +
      (0.2 * (index + 1) *
      Math.sin(30 * Math.PI * 4 * index / 180) *
      Math.cos(50 * Math.PI * 4 * index / 180) + Math.sin(5 * 4 * index / 180)) / 250,
    lng: UBCCoords.lng +
      (0.2 * (index + 1) *
      Math.cos(70 + 23 * Math.PI * 4 * index / 180) *
      Math.cos(50 * Math.PI * 4 * index / 180) + Math.sin(5 * 4 * index / 180)) / 250,
  }));