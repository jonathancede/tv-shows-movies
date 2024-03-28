"use client"

import tmdb_api_service from "@/services/tmdb_api_service"
import { ITEMS_TYPES } from "@/utils/constans"
import { useEffect, useState } from "react"

const useFetchItem = (type?: string, id?: string | number): { loading: boolean; data: any; failed: boolean } => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [failed, setFailed] = useState(false)

  const isValidType: boolean = !!type && Object.values(ITEMS_TYPES).includes(type)
  const isValidId: boolean = !!id

  const fetchData = async () => {
    setLoading(true)
    try {
      const isTVShow: boolean = type === ITEMS_TYPES.TV_SHOW
      let data = null

      if (isTVShow) data = await tmdb_api_service.getTVShowById(id ?? "")
      else data = await tmdb_api_service.getMovieById(id ?? "")

      setData(data)
    } catch (error) {
      setData(null)
      setFailed(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isValidType && isValidId) {
      fetchData()
    }
  }, [isValidType, isValidId])

  if (!isValidType || !isValidId) {
    return { loading: false, data: null, failed: true }
  }

  return { loading, data, failed }
}

export default useFetchItem
