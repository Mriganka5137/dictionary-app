import { create } from "zustand";

interface StoreData {
  fontType: string;
  setFontType: (fontType: string) => void;
}

export const useStore = create<StoreData>((set) => ({
  fontType: "font-sans",
  setFontType: (fontType) => set(() => ({ fontType: fontType })),
}));
