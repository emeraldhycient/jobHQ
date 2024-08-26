'use client'
import Header from '@/components/auth/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useMutation, useQuery } from '@tanstack/react-query';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import AuthService from "@/services/auth";
import { useFormik } from 'formik';
import { loginSchema } from '@/constants/validation';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import LoadingComponent from '@/components/common/LoadingComponent';
import { useUserStore } from '@/stores/userStore'; // Import the user store
import usePersistStore from '@/hooks/usePersistStore';

function Login() {
    const [isJobSeeker, setIsJobSeeker] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    const [shouldFetchProfile, setShouldFetchProfile] = useState(false); // Flag to control profile fetch

    const router = useRouter();
    const store = usePersistStore(useUserStore, (state) => state);


    const toggleIsJobSeeker = () => setIsJobSeeker(prev => !prev);

    // Mutation for logging in
    const mutation = useMutation({
        mutationFn: (data: { email: string; password: string; userType: "User" | "Employer" }) => AuthService.login(data),
        onSuccess: () => {
            toast.success('Login successful');
            setIsLoading(false);
            setShouldFetchProfile(true); // Set flag to true to trigger profile fetch
        },
        onError: (error: any) => {
            setIsLoading(false);
            toast.error(error?.response?.data?.message || "An Error Occurred!!");
        },
    });

    // useQuery to fetch user profile data
    const { data: userData, isLoading: profileLoading, error: profileError } = useQuery({
        queryKey: ['profile'],
        queryFn: () => AuthService.profile(), 
        refetchOnWindowFocus: false,
        enabled: shouldFetchProfile, 
    });

    // useEffect to handle setting the user profile
    useEffect(() => {
        if (userData) {
            const user = {
                contactInfo: userData.user?.contactInfo,
                country: userData.user?.country,
                createdAt: userData.user?.createdAt,
                email: userData.user?.email,
                id: userData.user?.id,
                name: userData.user?.name,
                professionalTitle: userData.user?.professionalTitle,
                profilePicture: userData.user?.profilePicture,
                resumeUrls: userData.user?.resumeUrls,
                setupComplete: userData.user?.setupComplete,
                skills: userData.user?.skills,
                updatedAt: userData.user?.updatedAt,
                role: userData.userType === "Employer" ? "Employer" : "User",
                isCompanyUser: userData.userType === "Employer",
                company: userData.user?.employer,
            };

            store?.setUser(user); // Store the user data in the Zustand store

            console.log({userData})
            // Navigate to dashboard
            if (userData.userType === "Employer") {
                router.push('/dashboard/employer');
            } else {
                router.push('/dashboard/seeker');
            }
        }
    }, [userData, store?.setUser]); 

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            userType: 'User',
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            setIsLoading(true);
            mutation.mutate({ ...values, userType: isJobSeeker ? "User" : "Employer" });
        },
    });

    const toggleSecureEntry = () => {
        setIsSecureEntry(prev => !prev);
    };

    return (
        <section className='px-2 md:px-24 text-gray-1'>
            <Header />
            {(isLoading || profileLoading) && <LoadingComponent />} {/* Show loading indicator */}
            <h4 className='hidden md:block text-xl font-semibold md:text-center px-4 md:px-0'>Sign In</h4>
            <div className="w-[95%] md:w-[50%] mx-auto space-y-5 mt-10">
                <div className="my-10 grid grid-cols-2">
                    <div onClick={toggleIsJobSeeker} className={`${isJobSeeker ? "border-b-2 border-blue-primary" : "border-b-[0.3px] border-gray-3"} flex justify-center items-center py-3 transition-all duration-300 ease-in-out cursor-pointer`}>
                        <h6 className='text-sm font-normal'>I&apos;m a Job Seeker</h6>
                    </div>
                    <div onClick={toggleIsJobSeeker} className={`${!isJobSeeker ? "border-b-2 border-blue-primary" : "border-b-[0.3px] border-gray-3"} flex justify-center items-center py-3 transition-all duration-300 ease-in-out cursor-pointer`}>
                        <h6 className='text-sm font-normal'>I&apos;m an Employer</h6>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 md:px-4 mt-10">
                    <Button variant={"default"} className="w-full">
                        <div className="flex items-center space-x-3">
                            <FaLinkedin />
                            <h6 className='text-sm font-normal'>LinkedIn</h6>
                        </div>
                    </Button>
                    <Button variant={"default"} className="w-full">
                        <div className="flex items-center space-x-3">
                            <FcGoogle />
                            <h6 className='text-sm font-normal'>Google</h6>
                        </div>
                    </Button>
                </div>
                <div className="my-10 flex items-center justify-center">
                    <div className="h-[1px] w-[48%] border-[0.2px] border-gray-3"></div>
                    <div className="h-[25px] w-[25px] rounded-full border-[0.3px] border-gray-3 flex items-center justify-center">
                        <h6 className='text-xs font-normal'>OR</h6>
                    </div>
                    <div className="h-[1px] w-[48%] border-[0.2px] border-gray-3"></div>
                </div>
                <form onSubmit={formik.handleSubmit} className='mx-auto space-y-5 w-full'>
                    <Input
                        name="email"
                        placeholder='Email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={formik.errors.email ? 'border-red-500' : ''}
                    />
                    <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
                    <Input
                        type={isSecureEntry ? 'password' : 'text'}
                        name="password"
                        placeholder="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onRightIconClick={() => toggleSecureEntry()}
                        rightIcon={isSecureEntry ? FaRegEye : FaRegEyeSlash}
                        className={formik.errors.password ? 'border-red-500' : ''}
                    />
                    <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
                    <Button variant={'default'} size={'lg'} type='submit' className="w-full">
                        <p className='block text-left px-3 py-2 rounded-md  font-medium text-white'>
                            Sign In
                        </p>
                    </Button>
                </form>
            </div>
        </section>
    )
}

export default Login;
