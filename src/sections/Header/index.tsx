import Input from "@/components/Input"
import { HeaderContentWrapper, HeaderTitle, HeaderWrapper } from "./styles"

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderContentWrapper>
        <HeaderTitle>Whatsi</HeaderTitle>
        {/* TODO: pendiente de insertar onChane para renderizar las búsquedas si da tiempo */}
        <Input iconType="search" variant="large" type="text" />
      </HeaderContentWrapper>
    </HeaderWrapper>
  )
}

export default Header
