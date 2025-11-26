import { create } from "zustand";

interface TabStore {
  parent: number;
  childList: string;
  setParent: (i: number) => void;
  setChildList: (child: string) => void;
  resetSelection: () => void;
}

export const useTabStore = create<TabStore>((set) => ({
  parent: 0,
  childList: "",
  setParent: (i) => set({ parent: i }),
  setChildList: (child) => set({ childList: child }),
  resetSelection: () => set({ parent: 0, childList: "" }),
}));