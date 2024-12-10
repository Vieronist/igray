import axios, { CreateAxiosDefaults } from 'axios'

const axiosOptions: CreateAxiosDefaults = {
	baseURL: process.env.SERVER_URL as string
}

export const axiosClassic = axios.create(axiosOptions)
