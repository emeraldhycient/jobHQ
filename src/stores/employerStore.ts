import { Employer } from '@/constants/interface';
import { Store } from '@tanstack/store';

export const employerStore = new Store<{ employer: Partial<Employer> | null; isAuthenticated: boolean }>({
    employer: null,
    isAuthenticated: false,
});

export const setEmployer = (employer: Employer) => {
    employerStore.setState((state) => ({
        ...state,
        employer,
        isAuthenticated: true,
    }));
};

export const clearEmployer = () => {
    employerStore.setState((state) => ({
        ...state,
        employer: null,
        isAuthenticated: false,
    }));
};

export const updateEmployer = (employer: Partial<Employer>) => {
    employerStore.setState((state) => ({
        ...state,
        employer: { ...state.employer, ...employer },
    }));
};
