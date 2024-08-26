import { ICreateLearningPath } from '@/constants/interface';
import { Endpoints } from '@/constants/interface/endpoints';
import axiosClient from "@/providers/axiosClient";

class learningPathService {
    async getBookmarkedJobs({ page, limit, filters }: { page: number, limit: number, filters?: Record<string, string | string[]> }) {
        const params = new URLSearchParams();
        params.append('page', page.toString());
        params.append('limit', limit.toString());

        if (filters) {
            Object.entries(filters).forEach(([key, value]) => {
                if (Array.isArray(value)) {
                    value.forEach(val => params.append(key, val));
                } else {
                    params.append(key, value);
                }
            });
        }

        const response = await axiosClient.get(`${Endpoints.bookmarks}?${params.toString()}`);
        return response.data;
    }

    async all() {
        const response = await axiosClient.get(`${Endpoints.learningPath}`);
        return response.data;
    }

    async create({ title, experienceLevel, focusArea }: ICreateLearningPath) {
        const data = {
            "variables": { "topic": title },
            "additionalData": {
                "focusArea": focusArea,
                "experienceLevel": experienceLevel
            }
        }
        const response = await axiosClient.post(`${Endpoints.learningPath}`,{...data});
        return response.data;
    }

    async one(pathId: string) {
        const response = await axiosClient.get(`${Endpoints.learningPath}/${pathId}`);
        return response.data;
    }

};


export default new learningPathService