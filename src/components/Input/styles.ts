"use client"

import styled from "styled-components"

export const InputBase = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #292938;
  border-radius: 12px;
  padding: 6px 12px;
  
  input {
    font-family: "Be Vietnam Pro", sans-serif;
    background-color: transparent;
    color: #9E9EB8;
    outline: none;
    border: none;
    font-size: 14px;
    width: 100%;
  }

  img {
    width: 18px;
    height: 18px;
  }
`

export const InputLarge = styled(InputBase)`
  gap: 12px;
  padding: 10px 16px;

  input {
    font-size: 16px;
  }

  img {
    width: 24px;
    height: 24px;
  }
`