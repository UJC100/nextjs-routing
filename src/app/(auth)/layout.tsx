export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        {children}
        <footer 
        style={{
            backgroundColor: "ghostwhite",
            padding: "1rem"
        }}
        >
            <p>Footer</p>
        </footer>
        </body>

    </html>
  )
}
