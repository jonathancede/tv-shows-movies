"use client"

import styled from "styled-components"

export const MovieCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
`

export const MovieCardImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100px;

  img {
    border-radius: 12px;
    object-fit: cover;
  }
`

export const MovieCardInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const MovieCardTitle = styled.span`
  color: #ffffff;
`

export const MovieCardVoteAverage = styled.span`
  color: #9e9eb8;
`
