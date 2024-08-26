import { useState } from 'react';
import { useRouter } from 'next/navigation';
// import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import AuthService from '@/services/auth'; 
import { useUserStore } from '@/stores/userStore';
import usePersistStore from './usePersistStore';

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const store = usePersistStore(useUserStore, (state) => state);


    const logout = async () => {
        setLoading(true);
        try {
            // Clear the cookie with the JWT token
            // Cookies.remove('token');

            await AuthService.logout(); 

            // Redirect to the login or home page
            router.push('/auth/login');
            store?.clearUser()
            toast.success('Logged out successfully');
        } catch (error) {
            console.error('Logout failed:', error);
            toast.error('Error logging out');
        } finally {
            setLoading(false);
        }
    };

    return { logout, loading };
};

export default useLogout;
