import { writable } from "svelte/store";

export interface UsersStoreType {
  users: UserType[];
}

export interface UserType {
  username: string;
  phone: string;
}

const createUsersStore = () => {
  const initial: UsersStoreType = {
    users: [],
  };
  const { subscribe, set, update } = writable<UsersStoreType>(initial);

  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("users");
    if (saved) {
      set({ users: JSON.parse(saved).users });
    }
  }

  return {
    subscribe,

    addUser: (user: UserType) => {
      update((value) => {
        const updated = { ...value, users: [...value.users, user] };
        if (typeof window !== "undefined") {
          localStorage.setItem("users", JSON.stringify(updated));
        }
        return updated;
      });
    },
    deleteUser: (username: string) => {
      update((value) => {
        const updated = {
          ...value,
          users: value.users.filter((user) => user.username !== username),
        };
        if (typeof window !== "undefined") {
          localStorage.setItem("users", JSON.stringify(updated));
        }
        return updated;
      });
    },
  };
};

export const usersStore = createUsersStore();
