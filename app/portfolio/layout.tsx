export default function PortfolioLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="bg-gray-500 text-neutral-200">
      <div className="flex flex-col md:flex-row md:gap-4 min-h-screen">
        <div className="p-4 md:p-8">{children}</div>
      </div>
    </div>
  )
}
