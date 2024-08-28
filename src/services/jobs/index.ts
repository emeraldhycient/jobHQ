import { GetAppliedJobsParams, GetJobsParams } from "@/constants/interface";
import { Endpoints } from "@/constants/interface/endpoints";
import axiosClient from "@/providers/axiosClient";



class JobsServices {

    async getAppliedJobs({ page = 1, limit = 10 }: GetAppliedJobsParams) {
        // Construct the query parameters string
        const params = new URLSearchParams();
        if (page) params.append('page', page.toString());
        if (limit) params.append('limit', limit.toString());

        const response = await axiosClient.get(`${Endpoints.AppliedJobs}?${params.toString()}`);
        return response.data;

    }

    async getJobs({ page = 1, limit = 10, ...filters }: GetJobsParams) {
        const params = new URLSearchParams();

        // Add pagination params
        if (page) params.append('page', page.toString());
        if (limit) params.append('limit', limit.toString());

        // Add filters
        // if (filters.title) params.append('title', filters.title);
        // if (filters.location) params.append('location', filters.location);
        // if (filters.type) params.append('type', filters.type);
        // if (filters.requirements) filters.requirements.forEach(req => params.append('requirements', req));
        // if (filters.responsibilities) filters.responsibilities.forEach(res => params.append('responsibilities', res));
        // if (filters.salaryRange) params.append('salaryRange', filters.salaryRange);
        // if (filters.benefits) filters.benefits.forEach(benefit => params.append('benefits', benefit));
        // if (filters.status) params.append('status', filters.status);
        // if (filters.employerId) params.append('employerId', filters.employerId);

        

        // Add filters to the query params
        if (filters) {
            Object.entries(filters).forEach(([key, value]) => {
                if (Array.isArray(value)) {
                    value.forEach(val => params.append(key, val));
                } else if (value) {
                    params.append(key, value);
                }
            });
        }

        const response = await axiosClient.get(`${Endpoints.jobs}?${params.toString()}`);
        return response.data;
    }

    async getJob(id: string) {
        const response = await axiosClient.get(`${Endpoints.jobs}/${id}`);
        return response.data;
    }
    async getJobPublic(id: string) {
        const response = await axiosClient.get(`${Endpoints.Publicjobs}/${id}`);
        return response.data;
    }
}


const jobservice = new JobsServices()
export default jobservice
// export default new JobsServices()