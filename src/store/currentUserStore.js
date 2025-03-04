import { useEffect } from "react";

import { create } from "zustand";

const DEFAULT_USER_IMAGE =
  "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png";

const userStore = create((set, get) => ({
  user: null,
  isLoading: false,
  setUser: (user) => {
    set({ user: { avatar: DEFAULT_USER_IMAGE, ...user } });
  },
  fetch: async () => {
    try {
      if (get().isLoading) {
        return;
      }

      if (!get().user) {
        set({ isLoading: true });
        const token = window.localStorage.getItem("token");

        const user = {
          avatar: DEFAULT_USER_IMAGE,
        };

        set({ user, isLoading: false });
      }

      return get().user;
    } catch (error) {
      console.error(error);
    }
  },
}));

const useCurrentUser = (fn) => {
  const storeData = userStore();
  const { user, setUser, fetch } = storeData;

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (fn) {
    return fn(storeData) || {};
  }

  return { user, setUser };
};

export default useCurrentUser;
