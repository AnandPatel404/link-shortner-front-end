import create from "zustand";
const useUserMode = create((set) => ({
	mode: {
		main: "default",
		sidebar: "white",
		header: "white",
		skin: "light",
	},
	darkMode: () => set((state) => ({ mode: { main: "default", sidebar: "dark", header: "dark", skin: "dark" } })),
	lightMode: () => set((state) => ({ mode: { main: "default", sidebar: "white", header: "white", skin: "light" } })),
}));

export default useUserMode;
