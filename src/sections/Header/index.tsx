import { HeaderContentWrapper, HeaderTitle, HeaderWrapper } from "./styles"

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderContentWrapper>
        <HeaderTitle>Whatsi</HeaderTitle>
        {/* TODO: Crear input de buscador */}
        <div>Buscador</div>
      </HeaderContentWrapper>
    </HeaderWrapper>
  )
}

export default Header
