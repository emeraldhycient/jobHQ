// stores/userStore.ts
import {create} from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface CompanyDetails {
    companyId: string;
    companyName: string;
    companyEmail: string;
    industry: string;
    teamSize?: number | null;
    organizationType?: string | null;
    description?: string | null;
    logo?: string | null;
    yearOfEstablishment?: number | null;
    socialMedias?: string[] | null;
    contactInfo?: string | null;
    country?: string | null;
    setupComplete?: boolean;
}

interface User {
    id?: string;
    email?: string;
    name?: string;
    profilePicture?: string | null;
    professionalTitle?: string | null;
    contactInfo?: string | null;
    resumeUrls?: string | null;
    country?: string;
    skills?: string[] | null; 
    setupComplete?: boolean;
    createdAt?: string;
    updatedAt?: string;
    role: string;
    isCompanyUser?: boolean;
    company?: CompanyDetails;
}

interface UserState {
    user: User | null;
    isAuthenticated: boolean;
    setUser: (user: User) => void;
    clearUser: () => void;
}

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            setUser: (user) => set({ user, isAuthenticated: true }),
            clearUser: () => set({ user: null, isAuthenticated: false }),
        }),
        {
            name: 'user-store',
            storage: createJSONStorage(() => localStorage), 
        }
    )
);
