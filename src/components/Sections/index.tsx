"use client"

import { FullSection, NormalSection } from "./styles"

interface SectionProps {
  fullWidth?: boolean
  styleCleaned?: boolean
  children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ fullWidth = false, styleCleaned = false, children }) => {
  const SectionContainer = fullWidth ? FullSection : NormalSection

  return <SectionContainer $styleCleaned={styleCleaned}>{children}</SectionContainer>
}

export default Section
