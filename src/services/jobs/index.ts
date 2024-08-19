import { Endpoints } from "@/constants/interface/endpoints";
import axiosClient from "@/providers/axiosClient";


class JobsServices {
    async getAppliedJobs() {
        const jobs = await axiosClient.get(Endpoints.AppliedJobs)
        return jobs.data
    }
}



export default new JobsServices()