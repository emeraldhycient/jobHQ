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



export const jobSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    type: Joi.string().valid('FULL_TIME', 'PART_TIME', 'CONTRACT', 'TEMPORARY', 'INTERN', 'VOLUNTEER', 'FREELANCE').required(),
    requirements: Joi.array().items(Joi.string()).required(),
    responsibilities: Joi.array().items(Joi.string()).required(),
    salaryRange: Joi.string().optional(),
    benefits: Joi.array().items(Joi.string()).optional(),
    questions: Joi.object().optional()
});

export const applicationSchema = Joi.object({
    jobId: Joi.string().required(),
    resumeId: Joi.string().required(),
    responses: Joi.object().optional(),
    status: Joi.string().valid('APPLIED', 'INTERVIEW_SCHEDULED', 'OFFERED', 'ACCEPTED', 'REJECTED', 'WITHDRAWN').default('APPLIED'),
});