import Joi from 'joi';

export const createAccountSchema = Joi.object({
    email: Joi.string().email().when('userType', { is: 'User', then: Joi.required() }),
    password: Joi.string().min(6).required(),
    name: Joi.string().when('userType', { is: 'User', then: Joi.required() }),
    userType: Joi.string().valid('User', 'Employer').required(),
    companyName: Joi.string().when('userType', { is: 'Employer', then: Joi.required() }),
    companyEmail: Joi.string().email().when('userType', { is: 'Employer', then: Joi.required() }),
    country: Joi.string().required()
});


export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    userType: Joi.string().valid('User', 'Employer').required(),
});
