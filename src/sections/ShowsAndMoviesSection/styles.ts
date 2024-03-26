"use client"

import styled from "styled-components"

export const ShowsAndMoviesSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`

export const ListItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 24px;
`
