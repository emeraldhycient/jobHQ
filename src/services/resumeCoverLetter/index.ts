// services/ResumeCoverLetterService.ts
import { Endpoints } from '@/constants/interface/endpoints';
import axiosClient from '@/providers/axiosClient';

interface ResumePayload {
    language: string;
    tone: string;
    experienceLevel: string;
    jobDescription: string;
    wordLimit: number;
    numberOfResults: number;
    creativityLevel: string;
    resumeContent: string;
}

interface CoverLetterPayload {
    language: string;
    tone: string;
    name: string;
    jobPosition: string;
    experienceLevel: string;
    jobDescription: string;
    wordLimit: number;
    numberOfResults: number;
    creativityLevel: string;
    coverLetterContent: string;
}

class ResumeCoverLetterService {
    async createResume(payload: ResumePayload) {
        const response = await axiosClient.post(Endpoints.resume, payload);
        return response.data;
    }

    async createCoverLetter(payload: CoverLetterPayload) {
        const response = await axiosClient.post(Endpoints.coverLetter, payload);
        return response.data;
    }

    async getResumes() {
        const response = await axiosClient.get(Endpoints.allResumeCoverLetter);
        return response.data;
    }

    async getCoverLetters() {
        const response = await axiosClient.get(Endpoints.allResumeCoverLetter);
        return response.data;
    }
}

const resumeCoverLetterService = new ResumeCoverLetterService();
export default resumeCoverLetterService;
