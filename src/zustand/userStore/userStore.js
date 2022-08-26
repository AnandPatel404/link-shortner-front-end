import create from "zustand";

const useUserStore = create((set) => ({
	user: {},
	fetch: async(),
}));
