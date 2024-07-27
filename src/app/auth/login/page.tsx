'use client'
import Header from '@/components/auth/header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useMutation } from '@tanstack/react-query'
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import React, { useState } from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import AuthService from "@/services/auth"
import { useFormik } from 'formik';
import { loginSchema } from '@/constants/validation'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import LoadingComponent from '@/components/common/LoadingComponent'

function Login() {
    const [isJobSeeker, setIsJobSeeker] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [isSecureEntry, setIsSecureEntry] = useState(true);

    const router = useRouter()

    const toggleIsJobSeeker = () => setIsJobSeeker(prev => !prev)

    const mutation = useMutation({
        mutationFn: (data: { email: string; password: string; userType: "User" | "Employer" }) => AuthService.login(data),
        onSuccess: (data) => {
            toast.success('Login successful')
            setIsLoading(false)
            if (data.userType === "Employer") {
                router.push('/dashboard/employer')
            } else {
                router.push('/dashboard/seeker')
            }
        },
        onError: (error: any) => {
            setIsLoading(false)
            toast.error(error?.response?.data?.message || "An Error Occured!!");
        },
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            userType: 'User',
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            setIsLoading(true)
            mutation.mutate({ ...values, userType: isJobSeeker ? "User" : "Employer" });
        },
    });

    const toggleSecureEntry = () => {
                setIsSecureEntry(prev => !prev);
               
    };

    return (
        <section className='px-2 md:px-24 text-gray-1'>
            <Header />
            {isLoading && <LoadingComponent />}
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
                    {/* <Input
                        name="password"
                        placeholder='Password'
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={formik.errors.password ? 'border-red-500' : ''}
                    /> */}
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
