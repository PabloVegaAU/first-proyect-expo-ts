import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"

export const connection = (instance: AxiosInstance) => {
  return {
    get: async (path: string, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>> => {
      return await instance.get(path, config)
    },

    post: async (path: string, data?: any, config?: AxiosRequestConfig<any> | undefined) => {
      return await instance.post(path, data, config)
    },

    put: async (path: string, data?: any, config?: AxiosRequestConfig<any> | undefined) => {
      return await instance.put(path, data, config)
    },

    patch: async (path: string, data: any, config?: AxiosRequestConfig<any> | undefined) => {
      return await instance.patch(path, data, config)
    },

    delete: (path: string, config?: AxiosRequestConfig<any> | undefined) => {
      return instance.delete(path, config)
    }
  }
}
