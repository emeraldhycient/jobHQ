import Joi from 'joi';

export const createAccountSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    name: Joi.when('userType', {
        is: 'User',
        then: Joi.string().required(),
        otherwise: Joi.string().optional(),
    }),
    userType: Joi.string().valid('User', 'Employer').required(),
    companyName: Joi.when('userType', {
        is: 'Employer',
        then: Joi.string().required(),
        otherwise: Joi.string().optional(),
    }),
    companyEmail: Joi.when('userType', {
        is: 'Employer',
        then: Joi.string().email().required(),
        otherwise: Joi.string().optional(),
    }),
    country: Joi.string().required(),
});


export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    userType: Joi.string().valid('User', 'Employer').required(),
});
