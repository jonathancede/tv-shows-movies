"use client"

import Image from "next/image"
import useTMDBImages from "@/hooks/useTMDBImages"
import {
  MovieCardImageWrapper,
  MovieCardInformationWrapper,
  MovieCardTitle,
  MovieCardVoteAverage,
  MovieCardWrapper,
} from "./styles"

interface MovieCardProps {
  image_path: string
  title: string
  vote_average: number
}

const MovieCard: React.FC<MovieCardProps> = ({ image_path, title, vote_average }) => {
  const { full_path } = useTMDBImages(image_path)

  return (
    <MovieCardWrapper>
      <MovieCardImageWrapper>
        <Image fill src={full_path} alt={title} sizes="100%" />
      </MovieCardImageWrapper>
      <MovieCardInformationWrapper>
        <MovieCardTitle>{title}</MovieCardTitle>
        <MovieCardVoteAverage>{vote_average}</MovieCardVoteAverage>
      </MovieCardInformationWrapper>
    </MovieCardWrapper>
  )
}

export default MovieCard
