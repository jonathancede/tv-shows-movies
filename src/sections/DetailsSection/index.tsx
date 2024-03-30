"use client"

import Section from "@/components/Sections"
import { DetailItemBody, DetailItemTitle, DetailItemWrapper, DetailsSectionWrapper, GenresWrapper } from "./styles"
import { priceFormat } from "@/utils/functions"
import Link from "next/link"
import Tag from "@/components/Tag"

interface DetailItemProps {
  title?: string
  children: React.ReactNode
}

interface DetailsSectionProps {
  data: any
  withinSection?: boolean
}

const DetailItem: React.FC<DetailItemProps> = ({ title, children }) => {
  return (
    <DetailItemWrapper>
      {!!title && <DetailItemTitle>{title}</DetailItemTitle>}
      <DetailItemBody>{children}</DetailItemBody>
    </DetailItemWrapper>
  )
}

const DetailsSection: React.FC<DetailsSectionProps> = ({ data, withinSection = false }) => {
  const hasGenres = !!data?.genres && data.genres.length
  const bornDate = data?.release_date ?? data?.first_air_date ?? false

  return (
    <Section fullWidth styleCleaned={withinSection}>
      <DetailsSectionWrapper>
        {!!data?.overview && <DetailItem title="Overview">{data.overview}</DetailItem>}
        {hasGenres && (
          <GenresWrapper>
            {data.genres.map((genre: any) => (
              <Tag key={genre.id}>{genre.name}</Tag>
            ))}
          </GenresWrapper>
        )}
        {bornDate && <DetailItem title="Release date">{bornDate}</DetailItem>}
        {!!data?.runtime && <DetailItem title="Duration">{data.runtime} mins</DetailItem>}
        {!!data?.number_of_seasons && <DetailItem title="Seasons">{data.number_of_seasons}</DetailItem>}
        {!!data?.number_of_episodes && <DetailItem title="Episodes">{data.number_of_episodes}</DetailItem>}
        {!!data?.vote_count && (
          <DetailItem title="Rating">
            {data.vote_average ?? 0} ({data.vote_count} votes)
          </DetailItem>
        )}
        {!!data?.budget && <DetailItem title="Budget">{priceFormat(data.budget)}</DetailItem>}
        {!!data?.revenue && <DetailItem title="Revenue">{priceFormat(data.revenue)}</DetailItem>}
        {!!data?.homepage && (
          <DetailItem title="More information">
            <Link href={data.homepage} target="_blank">
              {data.homepage}
            </Link>
          </DetailItem>
        )}
      </DetailsSectionWrapper>
    </Section>
  )
}

export default DetailsSection
