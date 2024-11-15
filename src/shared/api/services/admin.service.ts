import { AdminLogin, AdminloginResponse } from "@/shared/";
import { instance } from "../api.instance";
import { SERVICE_URL } from "@/shared/model/constants";






export const adminService = {
    axios: instance,
    async login(payload: AdminLogin) : Promise<AdminloginResponse> {
        return (await this.axios.post(`${SERVICE_URL.ADMIN}/auth`, payload)).data
    }
}