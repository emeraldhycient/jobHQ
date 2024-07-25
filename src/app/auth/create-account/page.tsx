'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import AuthService from "@/services/auth";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Header from '@/components/auth/header';
import { useMutation } from '@tanstack/react-query';
import { CreateAccountPagePayload, CreateAccountPayload } from '@/constants/interface';
import { createAccountSchema } from '@/constants/validation';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import LoadingComponent from '@/components/common/LoadingComponent';

function SignUp() {
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    const [isSecureEntry2, setIsSecureEntry2] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const toggleSecureEntry = (pos: number) => {
        switch (pos) {
            case 1:
                setIsSecureEntry(prev => !prev);
                break;
            case 2:
                setIsSecureEntry2(prev => !prev);
                break;
            default:
                break;
        }
    };

    const mutation = useMutation({
        mutationFn: (data: CreateAccountPayload) => AuthService.createAccount(data),
        onSuccess: (data) => {
            toast.success('Account created successfully');
            setIsLoading(false);
            router.push('/auth/login');
        },
        onError: (error: any) => {
            setIsLoading(false);
            toast.error(error?.response?.data?.message || "An Error Occured!!");
        },
    });

    const formik = useFormik<CreateAccountPagePayload>({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
            userType: 'User',
            country: '',
        },
        validationSchema: createAccountSchema,
        onSubmit: (values) => {
            const { confirmPassword, ...submitValues } = values;
            setIsLoading(true);
            mutation.mutate(submitValues);
        },
    });

    return (
        <section className='px-2 md:px-24 text-gray-1'>
            <Header />
            {isLoading && <LoadingComponent />}
            <div className="">
                <h4 className='text-xl font-semibold text-center px-4 md:px-0'>Ready to take the next step?</h4>
                <p className='text-sm font-normal my-3 text-center w-[90%] md:w-[70%] lg:w-[50%] text-center mx-auto'>
                    JobHQ is a premier platform connecting top talent in business, design, and technology with leading employers.
                </p>
                <form onSubmit={formik.handleSubmit} className="w-[95%] md:w-[50%] mx-auto space-y-5 mt-10">
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
                    <Select
                        onValueChange={(value) => formik.setFieldValue('userType', value)}
                        value={formik.values.userType}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="I'm applying as ..." />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="User">Job Seeker</SelectItem>
                            <SelectItem value="Employer">Employer</SelectItem>
                        </SelectContent>
                    </Select>
                    <p className="text-red-500 text-xs mt-1">{formik.errors.userType}</p>
                    <Input
                        name="name"
                        placeholder={formik.values.userType === 'Employer' ? "Company Name" : "Full Name"}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={formik.errors.name ? 'border-red-500' : ''}
                    />
                    <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
                    <Input
                        name="email"
                        placeholder="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={formik.errors.email ? 'border-red-500' : ''}
                    />
                    <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
                    <Select
                        onValueChange={(value) => formik.setFieldValue('country', value)}
                        value={formik.values.country}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Country" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>North America</SelectLabel>
                                <SelectItem value="USA">United States</SelectItem>
                                <SelectItem value="Canada">Canada</SelectItem>
                                {/* Add more countries as needed */}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <p className="text-red-500 text-xs mt-1">{formik.errors.country}</p>
                    <Input
                        type={isSecureEntry ? 'password' : 'text'}
                        name="password"
                        placeholder="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onRightIconClick={() => toggleSecureEntry(1)}
                        rightIcon={isSecureEntry ? FaRegEye : FaRegEyeSlash}
                        className={formik.errors.password ? 'border-red-500' : ''}
                    />
                    <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
                    <Input
                        type={isSecureEntry2 ? 'password' : 'text'}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onRightIconClick={() => toggleSecureEntry(2)}
                        rightIcon={isSecureEntry2 ? FaRegEye : FaRegEyeSlash}
                        className={formik.errors.confirmPassword ? 'border-red-500' : ''}
                    />
                    <p className="text-red-500 text-xs mt-1">{formik.errors.confirmPassword}</p>
                    <Button variant={'default'} size={'lg'} type='submit' className="w-full">
                        <p className='block text-left px-3 py-2 rounded-md  font-medium text-white'>
                            Create Account
                        </p>
                    </Button>
                </form>
            </div>
        </section>
    );
}

export default SignUp;
