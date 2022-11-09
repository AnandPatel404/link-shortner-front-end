import create from "zustand";
import { persist } from "zustand/middleware";

const userSubStore = create(
	persist(
		(set) => ({
			subscription: {},
		}),
		{
			name: "Sub",
		}
	)
);

export default userSubStore;
