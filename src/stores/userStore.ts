import { User } from '@/constants/interface';
import { Store } from '@tanstack/store';

export const userStore = new Store<{ user: Partial<User> | null; isAuthenticated: boolean }>({
    user: null,
    isAuthenticated: false,
});

export const setUser = (user: User) => {
    userStore.setState((state) => ({
        ...state,
        user,
        isAuthenticated: true,
    }));
};

export const clearUser = () => {
    userStore.setState((state) => ({
        ...state,
        user: null,
        isAuthenticated: false,
    }));
};

export const updateUser = (user: Partial<User>) => {
    userStore.setState((state) => ({
        ...state,
        user: { ...state.user, ...user },
    }));
};
