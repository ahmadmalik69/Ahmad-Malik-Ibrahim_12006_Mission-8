import { create } from "zustand";

const useGetStore = create((set) => ({
    initialState: [],
    setInitialState: (res) => set({ initialState: res }),
}));

export default useGetStore;
