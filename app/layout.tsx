import "./globals.css";

export const metadata = {
  title: "Martha Cares Nails Experience",
  description: "Luxury Nail Booking App"
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
