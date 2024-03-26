"use client"

import styled from "styled-components"

const BaseSection = styled.section`
  margin: auto;
  padding: 24px;
`

export const NormalSection = styled(BaseSection)`
  max-width: 1060px;
`

export const FullSection = styled(BaseSection)`
  width: 100%;
`