"use client"

import Link from "next/link"
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
  link?: string
}

const MovieCard: React.FC<MovieCardProps> = ({ image_path, title, vote_average, link = "" }) => {
  const { full_path } = useTMDBImages(image_path)
  const hasLink: boolean = link !== ""

  const MovieCardBody = () => (
    <MovieCardWrapper $hasLink={hasLink}>
      <MovieCardImageWrapper>
        <Image fill src={full_path} alt={title} sizes="100%" priority />
      </MovieCardImageWrapper>
      <MovieCardInformationWrapper>
        <MovieCardTitle>{title}</MovieCardTitle>
        <MovieCardVoteAverage>{vote_average}</MovieCardVoteAverage>
      </MovieCardInformationWrapper>
    </MovieCardWrapper>
  )

  if (hasLink)
    return (
      <Link href={link}>
        <MovieCardBody />
      </Link>
    )

  return <MovieCardBody />
}

export default MovieCard
