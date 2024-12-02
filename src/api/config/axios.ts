import axios, { CreateAxiosDefaults } from "axios";
import { BASE_URL } from "./constants";

const axiosOptions: CreateAxiosDefaults = {
	baseURL: BASE_URL,
};

export const axiosClassic = axios.create(axiosOptions);
