"use client"

import { MouseEventHandler } from "react"
import { SubsectionSelectorWrapper, SubsectionWrapper } from "./styles"

interface SubsectionSelectorProps {
  sections: Array<SubsectionsType>
  selected: Number | String
}

export interface SubsectionsType {
  id: Number | String
  label: String
  onClick: MouseEventHandler<HTMLDivElement>
}

const SubsectionSelector: React.FC<SubsectionSelectorProps> = ({ sections, selected }) => {
  const hasSections = sections && !!sections.length

  return (
    <SubsectionSelectorWrapper>
      {hasSections &&
        sections.map((section) => (
          <SubsectionWrapper
            key={`subsection-${section.id}-${section.label}`}
            onClick={section.onClick}
            $isSelected={selected === section.id}
          >
            {section.label}
          </SubsectionWrapper>
        ))}
    </SubsectionSelectorWrapper>
  )
}

export default SubsectionSelector
