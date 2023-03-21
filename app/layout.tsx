import "./globals.css";

export const metadata = {
  title: "Transperfect - Numbers' Game",
  description: "Transperfect - Numbers' Game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
