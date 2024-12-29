import instance from "./index.ts";

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}
export const login = async (username: string): Promise<LoginResponse> => {
  const response = await instance.post<LoginResponse>("/auth/login", {
    username,
  });
  return response.data;
};
