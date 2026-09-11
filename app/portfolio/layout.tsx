export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-500 min-h-screen text-neutral-200">{children}</div>
  );
}
