"use client"

import { useEffect, useState } from "react"
import Section from "@/components/Sections"
import SubsectionSelector, { SubsectionsType } from "@/components/SubsectionSelector"
import DetailsSection from "../DetailsSection"
import { ITEMS_TYPES } from "@/utils/constans"
import tmdb_api_service from "@/services/tmdb_api_service"
import { EmptyText, ListItemsWrapper, MoreLikeThisWrapper } from "./styles"
import MovieCard from "@/components/MovieCard"

const SUBSECTIONS_DETAIL_TYPE = {
  DETAIL: "detail",
  MORE_LIKE_THIS: "more_like_this",
} as const

interface DetailAndMoreLikeSectionProps {
  data: any
  type: string
}

const DetailAndMoreLikeSection: React.FC<DetailAndMoreLikeSectionProps> = ({ data, type }) => {
  const [subsectionSelected, setSubsectionSelected] = useState<string>(SUBSECTIONS_DETAIL_TYPE.DETAIL)
  const [moreLikeThisItems, setMoreLikeThisItems] = useState<Array<any>>([])

  const showDetail = subsectionSelected === SUBSECTIONS_DETAIL_TYPE.DETAIL
  const isTVShow: boolean = type === ITEMS_TYPES.TV_SHOW

  useEffect(() => {
    const showMoreLikeThis = subsectionSelected === SUBSECTIONS_DETAIL_TYPE.MORE_LIKE_THIS
    const moreLikeThisFilled = !!moreLikeThisItems && moreLikeThisItems.length > 0
    if (showMoreLikeThis && !moreLikeThisFilled) {
      fetchMoreLikeThis()
    }
  }, [subsectionSelected])

  const sections: Array<SubsectionsType> = [
    {
      id: SUBSECTIONS_DETAIL_TYPE.DETAIL,
      label: "Details",
      onClick: () => setSubsectionSelected(SUBSECTIONS_DETAIL_TYPE.DETAIL),
    },
    {
      id: SUBSECTIONS_DETAIL_TYPE.MORE_LIKE_THIS,
      label: "More Like This",
      onClick: () => setSubsectionSelected(SUBSECTIONS_DETAIL_TYPE.MORE_LIKE_THIS),
    },
  ]

  const fetchMoreLikeThis = async () => {
    let result = null

    if (isTVShow) result = await tmdb_api_service.getSimilarTVShows(data.id ?? "")
    else result = await tmdb_api_service.getSimilarMovies(data.id ?? "")

    setMoreLikeThisItems(result.results ?? [])
  }

  return (
    <Section>
      <SubsectionSelector sections={sections} selected={subsectionSelected} />
      {showDetail ? (
        <DetailsSection data={data} withinSection />
      ) : (
        <MoreLikeThisWrapper>
          {moreLikeThisItems.length === 0 ? (
            <EmptyText>There are no similar {isTVShow ? "TV shows" : "movies"}</EmptyText>
          ) : (
            <ListItemsWrapper>
              {moreLikeThisItems.map(({ id, backdrop_path, name, title, vote_average }) => (
                <MovieCard
                  key={`movie-card-item-${id}`}
                  image_path={backdrop_path}
                  title={name ?? title}
                  vote_average={vote_average}
                  link={`/detail/${type}-${id}`}
                />
              ))}
            </ListItemsWrapper>
          )}
        </MoreLikeThisWrapper>
      )}
    </Section>
  )
}

export default DetailAndMoreLikeSection
