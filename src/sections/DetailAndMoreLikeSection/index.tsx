"use client"

import { useState } from "react"
import Section from "@/components/Sections"
import SubsectionSelector, { SubsectionsType } from "@/components/SubsectionSelector"
import DetailsSection from "../DetailsSection"

const SUBSECTIONS_DETAIL_TYPE = {
  DETAIL: "detail",
  MORE_LIKE_THIS: "more_like_this",
} as const

interface DetailAndMoreLikeSectionProps {
  data: any
}

const DetailAndMoreLikeSection: React.FC<DetailAndMoreLikeSectionProps> = ({ data }) => {
  const [subsectionSelected, setSubsectionSelected] = useState<string>(SUBSECTIONS_DETAIL_TYPE.DETAIL)

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

  return (
    <Section>
      <SubsectionSelector sections={sections} selected={subsectionSelected} />
      <DetailsSection data={data} withinSection />
    </Section>
  )
}

export default DetailAndMoreLikeSection
