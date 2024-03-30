import HttpService, { GeneralCatchFunctionType } from "./http_service"

class TMDBApiService extends HttpService {
  constructor(baseUrl?: string, apiKey?: string, generalCatch?: GeneralCatchFunctionType) {
    super(baseUrl, apiKey, generalCatch)
  }

  async getPopularMovies(language: string, page: string | number): Promise<any> {
    return await this.get(`movie/popular?language=${language}&page=${page}`)
  }

  async getMovieById(id: string | number): Promise<any> {
    return await this.get(`movie/${id}`)
  }

  async getSimilarMovies(id: string | number): Promise<any> {
    return await this.get(`movie/${id}/similar`)
  }

  async getPopularTVShows(language: string, page: string | number): Promise<any> {
    return await this.get(`tv/popular?language=${language}&page=${page}`)
  }

  async getTVShowById(id: string | number): Promise<any> {
    return await this.get(`tv/${id}`)
  }

  async getSimilarTVShows(id: string | number): Promise<any> {
    return await this.get(`tv/${id}/similar`)
  }
}

const TMDB_URL = process.env.NEXT_PUBLIC_TMDB_URL
const TMDB_API_AUTH_TOKEN = process.env.NEXT_PUBLIC_TMDB_API_AUTH_TOKEN
export default new TMDBApiService(TMDB_URL, TMDB_API_AUTH_TOKEN)
