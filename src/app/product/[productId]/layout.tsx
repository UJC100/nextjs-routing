export default function ProductDetailsLayout({children}: {
    children: React.ReactNode
}) {
    return <h1>{children}
    <h2>Featured products</h2>
    </h1>
}