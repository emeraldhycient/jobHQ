import axiosClient from "@/providers/axiosClient";
import { CreateAccountPayload, LoginPayload } from "@/constants/interface";
import { Endpoints } from "@/constants/interface/endpoints";



class AuthService {
    async login(payload: LoginPayload) {
        const response = await axiosClient.post(Endpoints.Login, payload);
        return response.data;
    }

    async createAccount(payload: CreateAccountPayload) {
        const response = await axiosClient.post(Endpoints.Signup, payload);
        return response.data;
    }
    async analytics() {
        const response = await axiosClient.get(Endpoints.Analytics);
        return response.data;
    }

    async logout() {
        return await axiosClient.post(Endpoints.Logout)
    }
}

export default new AuthService();
