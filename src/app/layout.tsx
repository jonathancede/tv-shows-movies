import StyledComponentsRegistry from "@/lib/registry"
import Header from "@/sections/Header"
import "./globals.css"

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Header />
          <main>{children}</main>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
