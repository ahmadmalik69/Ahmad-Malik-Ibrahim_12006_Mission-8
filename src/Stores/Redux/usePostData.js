import { create } from "zustand";

const usePostStore = create((set) => ({
    newUser: { name: '', description: '' },
    setNewUser: (res) => set({ newUser: res }),
}));

export default usePostStore;
