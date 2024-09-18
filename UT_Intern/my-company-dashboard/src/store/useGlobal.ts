// src/store/useGlobalStore.ts
import { create } from 'zustand';
import logoUT from '../assets/logoUT.png';
import checkIn from '../assets/check-in.png';
import checkOut from '../assets/check-out.png';

interface GlobalStore {
  colors: {
    yellow: string;
    black: string;
    gray: string;
    darkBlue: string;
    white: string;
  };
  logo: {
    logoCompany: string;
    checkOut: string;
    checkIn: string;
  };
}

const useGlobalStore = create<GlobalStore>(() => ({
  colors: {
    yellow: '#FFD700', // Kuning
    black: '#000000',  // Hitam
    gray: '#808080',    // Abu-abu
    darkBlue: '#003366', // Biru dongker
    white: '#fff'
  },
  logo: {
    logoCompany: logoUT,
    checkOut: checkOut,
    checkIn: checkIn,
  },
}));

export default useGlobalStore;