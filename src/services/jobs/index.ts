import { Endpoints } from "@/constants/interface/endpoints";
import axiosClient from "@/providers/axiosClient";


interface GetAppliedJobsParams {
    page?: number;
    limit?: number;
}
class JobsServices {

    async getAppliedJobs({ page = 1, limit = 10 }: GetAppliedJobsParams) {
        // Construct the query parameters string
        const params = new URLSearchParams();
        if (page) params.append('page', page.toString());
        if (limit) params.append('limit', limit.toString());

        const response = await axiosClient.get(`${Endpoints.AppliedJobs}?${params.toString()}`);
        return response.data;

    }
}



export default new JobsServices()