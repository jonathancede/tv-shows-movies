"use client"

import styled from "styled-components"

const BaseSection = styled.section<{ $styleCleaned: boolean }>`
  margin: auto;
  padding: 24px;

  ${({ $styleCleaned }) => $styleCleaned && `padding: 0px; margin: 0px;`}
`

export const NormalSection = styled(BaseSection)`
  max-width: 1060px;
`

export const FullSection = styled(BaseSection)`
  width: 100%;
`
