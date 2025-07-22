import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

type TUserState = {
  token: string;
  user: string;
  isLoading: boolean;
  error: string;
  setToken: (token: string) => void;
  setUser: (user: string) => void;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: string) => void;
};

export const useUserStore = create<TUserState>()(
  devtools(
    persist(
      (set) => ({
        token: "",
        user: "",
        isLoading: false,
        error: "",
        setToken: (token) => set({ token }),
        setUser: (user) => set({ user }),
        setIsLoading: (isLoading) => set({ isLoading }),
        setError: (error) => set({ error }),
      }),
      {
        name: "user-storage", 
        storage: createJSONStorage(() => AsyncStorage),
      }
    )
  )
);
