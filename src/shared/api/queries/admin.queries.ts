import { AdminLogin } from "@/shared";
import { QUERY_KEYS } from "@/shared/model/constants";
import { useMutation } from "@tanstack/react-query";
import { adminService } from "../services/admin.service";

export const useLoginAdmin = () => {
  const {
    mutate: login,
    isError: loginError,
    isSuccess: loginSuccess,
    data: loginData,
  } = useMutation({
    mutationKey: [QUERY_KEYS.ADMIN],
    mutationFn: (payload: AdminLogin) => adminService.login(payload),
  });

  return {
    login,
    loginError,
    loginSuccess,
    loginData
  }
};
