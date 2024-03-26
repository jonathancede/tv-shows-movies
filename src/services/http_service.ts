import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios"

export type GeneralCatchFunctionType = (error: any) => void

class HttpService {
  private axiosInstance: AxiosInstance
  private generalCatch?: GeneralCatchFunctionType

  constructor(baseUrl?: string, apiKey?: string, generalCatch?: GeneralCatchFunctionType) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl ?? "",
      headers: {
        accept: "application/json",
        ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
      },
    })
    this.generalCatch = generalCatch
  }

  private handleGeneralCatch(error: AxiosError) {
    if (this.generalCatch) this.generalCatch(error)
  }

  async get<T>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get<T>(url)
      return response.data
    } catch (error: any) {
      this.handleGeneralCatch(error)
      throw new Error(`Error al realizar la solicitud GET: ${error}`)
    }
  }

  async post<T>(url: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.post<T>(url, data)
      return response.data
    } catch (error: any) {
      this.handleGeneralCatch(error)
      throw new Error(`Error al realizar la solicitud POST: ${error}`)
    }
  }

  async put<T>(url: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.put<T>(url, data)
      return response.data
    } catch (error: any) {
      this.handleGeneralCatch(error)
      throw new Error(`Error al realizar la solicitud PUT: ${error}`)
    }
  }

  async patch<T>(url: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.patch<T>(url, data)
      return response.data
    } catch (error: any) {
      this.handleGeneralCatch(error)
      throw new Error(`Error al realizar la solicitud PATCH: ${error}`)
    }
  }

  async delete<T>(url: string): Promise<void> {
    try {
      await this.axiosInstance.delete(url)
    } catch (error: any) {
      this.handleGeneralCatch(error)
      throw new Error(`Error al realizar la solicitud DELETE: ${error}`)
    }
  }
}

export default HttpService
