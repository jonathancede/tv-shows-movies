"use client"

import styled from "styled-components"

export const SubsectionSelectorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  border-bottom: 1px solid #3D3D54;
`
export const SubsectionWrapper = styled.div<{ $isSelected: boolean }>`
  color: #9E9EB8;
  padding: 16px 0px;
  border-bottom: 3px solid #E5E8EB;
  cursor: pointer;
  font-weight: bold;

  ${({ $isSelected }) => $isSelected && `
    color: #FFFFFF;
  `}
`