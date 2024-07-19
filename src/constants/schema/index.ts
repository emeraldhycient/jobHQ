import Joi from 'joi';

export const createAccountSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    name: Joi.string().required(),
    userType: Joi.string().valid('User', 'Employer').required(),
    country: Joi.string().required(),
});


export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    userType: Joi.string().valid('User', 'Employer').required(),
});
