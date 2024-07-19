import * as Yup from 'yup';

export const createAccountSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'),], 'Passwords must match')
        .required('Confirm Password is required'),
    name: Yup.string().required('Name is required'),
    country: Yup.string().required('Country is required'),
    userType: Yup.string().oneOf(['User', 'Employer']).required('User type is required'),
});



export const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});
