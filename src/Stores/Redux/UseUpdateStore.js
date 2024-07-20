import { create } from "zustand";

const useUpdateStore = create((set) => ({
    updateUser: { id: '', name: '', description: '' },
    setUpdateUser: (res) => set({ updateUser: res }),
}));

export default useUpdateStore;
