"use client"

import Section from "@/components/Sections"
import useTMDBImages from "@/hooks/useTMDBImages"
import {
  BackgroundImageInformation,
  BackgroundImageSubtitle,
  BackgroundImageTitle,
  BackgroundImageWrapper,
} from "./styles"
import Image from "next/image"

interface BackgroundImageSectionProps {
  data: any
}

const BackgroundImageSection: React.FC<BackgroundImageSectionProps> = ({ data }) => {
  const { backdrop_path, title, name, first_air_date, release_date, type, runtime } = data
  const { full_path } = useTMDBImages(backdrop_path)

  const firstAirDateYear = new Date(first_air_date ?? release_date).getFullYear()

  return (
    <Section>
      <BackgroundImageWrapper>
        <Image fill src={full_path} alt={name ?? title} sizes="100%" priority />
        <BackgroundImageInformation>
          <BackgroundImageTitle>{name ?? title ?? ""}</BackgroundImageTitle>
          <BackgroundImageSubtitle>
            {!!firstAirDateYear && <span>{firstAirDateYear}</span>}
            {!!type && <span>{type}</span>}
            {!!runtime && <span>{runtime} mins</span>}
          </BackgroundImageSubtitle>
        </BackgroundImageInformation>
      </BackgroundImageWrapper>
    </Section>
  )
}

export default BackgroundImageSection
