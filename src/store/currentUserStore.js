import { getUserByUid } from "@/services/firebase/authentication";
import { useEffect } from "react";

import { create } from "zustand";

const DEFAULT_USER_IMAGE =
  "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png";

const setUserStore = async (setUser, setLoadingUser) => {
  const userId = window.localStorage.getItem("userId");

  console.log({ userId });

  if (userId) {
    try {
      const user = await getUserByUid(userId);

      console.log({ user });

      setUser({
        ...user,
        userId,
        imageUrl: user?.imageUrl || DEFAULT_USER_IMAGE,
      });
    } catch (error) {
      console.error("Error setting user", error);
      window.localStorage.setItem("userId", null);
    }
  } else {
    setUser({});
  }

  setLoadingUser(false);
};

const currentUserStore = create((set, get) => {
  return {
    loadingUser: true,
    user: {},
    setLoadingUser: (loadingUser) => set({ loadingUser }),
    setUser: (user) => set({ user: user ? { ...get().user, ...user } : user }),
  };
});

const useCurrentUser = (returnUser) => {
  const { user, loadingUser, setLoadingUser, setUser } = currentUserStore();

  useEffect(() => {
    setUserStore(setUser, setLoadingUser);
  }, []);

  const onLogin = async (userId) => {
    if (!userId) return;

    window.localStorage.setItem("userId", userId);

    setUserStore(setUser, setLoadingUser);
  };

  const onLogout = async () => {
    window.localStorage.removeItem("userId");
    setUserStore(setUser, setLoadingUser);
  };

  if (returnUser) {
    return user;
  }

  return { user, setUser, loadingUser, onLogin, onLogout };
};

export default useCurrentUser;
