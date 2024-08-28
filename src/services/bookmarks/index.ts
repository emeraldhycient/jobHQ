import { Endpoints } from '@/constants/interface/endpoints';
import axiosClient from "@/providers/axiosClient";

class BookmarkService  {
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

    async addBookmark(jobId: string) {
        const response = await axiosClient.post(`${Endpoints.bookmarks}`, { jobId });
        return response.data;
    }

    async removeBookmark(jobId: string) {
        const response = await axiosClient.delete(`${Endpoints.bookmarks}/${jobId}`);
        return response.data;
    }
    
};


const bookmarkService = new BookmarkService()
export default bookmarkService;

// export default new bookmarkService