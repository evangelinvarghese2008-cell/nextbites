import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="p-4 border-b font-bold text-xl">
          🍳 NextBites
        </nav>
        {children}
      </body>
    </html>
  );
}