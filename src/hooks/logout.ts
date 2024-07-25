import { useState } from 'react';
import { useRouter } from 'next/navigation';
// import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import AuthService from '@/services/auth'; 

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const logout = async () => {
        setLoading(true);
        try {
            // Clear the cookie with the JWT token
            // Cookies.remove('token');

            await AuthService.logout(); 

            // Redirect to the login or home page
            router.push('/auth/login');
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
