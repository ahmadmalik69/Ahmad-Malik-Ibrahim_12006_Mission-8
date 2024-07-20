import { create } from "zustand";

const useDeleteStore = create((set) => ({
    initialState : [],
    setInitialState : (res) => set ({ initialState : res }),
}));

export default useDeleteStore