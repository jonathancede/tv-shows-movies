"use client"

import styled from "styled-components"

export const MoreLikeThisWrapper = styled.div`
  padding: 32px 0px;
`

export const EmptyText = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #9e9eb8;
`

export const ListItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 24px;
`
