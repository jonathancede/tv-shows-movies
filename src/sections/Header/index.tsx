"use client"

import Input from "@/components/Input"
import { HeaderContentWrapper, HeaderTitle, HeaderWrapper } from "./styles"
import Link from "next/link"

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderContentWrapper>
        <Link href="/">
          <HeaderTitle>Whatsi</HeaderTitle>
        </Link>
        {/* TODO: pendiente de insertar onChane para renderizar las búsquedas si da tiempo */}
        <Input iconType="search" variant="large" type="text" placeholder="Search" />
      </HeaderContentWrapper>
    </HeaderWrapper>
  )
}

export default Header
