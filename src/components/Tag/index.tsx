"use client"

import { TagWrapper } from "./styles"

interface TagProps {
  children: React.ReactNode
}

const Tag: React.FC<TagProps> = ({ children }) => {
  return <TagWrapper>{children}</TagWrapper>
}

export default Tag
