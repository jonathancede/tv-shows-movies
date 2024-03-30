"use client"

import noImagePic from "@/images/no-image.jpg"

const TMDB_IMAGE_URL: string = process.env.NEXT_PUBLIC_TMDB_IMAGE_URL ?? ""

const useTMDBImages = (relative_path: string) => {
  const full_path: string = `${TMDB_IMAGE_URL}${relative_path}`

  return {
    relative_path: relative_path,
    full_path: relative_path ? full_path : noImagePic,
  }
}

export default useTMDBImages
