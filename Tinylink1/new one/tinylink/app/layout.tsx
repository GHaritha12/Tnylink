import "./globals.css";

export const metadata = {
  title: "TinyLink",
  description: "Simple link shortener"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white shadow">
          <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-xl font-bold">TinyLink</h1>
          </div>
        </header>

        <main className="max-w-4xl mx-auto p-4">
          {children}
        </main>

        <footer className="max-w-4xl mx-auto p-4 text-sm text-gray-600 text-center">
          © 2025 TinyLink
        </footer>
      </body>
    </html>
  );
}
