"use client"

import { FullSection, NormalSection } from "./styles"

interface SectionProps {
  fullWidth?: boolean
  children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ fullWidth = false, children }) => {
  const SectionContainer = fullWidth ? FullSection : NormalSection

  return <SectionContainer>{children}</SectionContainer>
}

export default Section
