import { AxiosResponse } from "axios";

import $api from "../http";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {
  static async login(
    userName: string,
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/login", { userName, email, password });
  }

  static async registration(
    userName: string,
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/registration", {
      userName,
      email,
      password,
    });
  }

  static async logout(): Promise<void> {
    return $api.post("/logout");
  }
}