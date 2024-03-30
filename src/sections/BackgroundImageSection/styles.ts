"use client"

import styled from "styled-components"

export const BackgroundImageWrapper = styled.div<{ $noImage: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 480px;

  img {
    border-radius: 12px;
    object-fit: cover;
    mask-image: linear-gradient(black, transparent);
  }

  ${({ $noImage }) => $noImage && `height: auto;`}
`

export const BackgroundImageInformation = styled.div<{ $noImage: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 32px;

  ${({ $noImage }) => $noImage && `padding: 32px 0px 0px 0px;`}
`

export const BackgroundImageTitle = styled.div`
  font-weight: 900;
  font-size: 48px;
`

export const BackgroundImageSubtitle = styled.div`
  display: flex;
  gap: 20px;
`
