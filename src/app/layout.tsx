import "./globals.css"

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body>
        <header>HEADER</header>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
