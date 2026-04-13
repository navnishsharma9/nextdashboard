import '@/app/ui/global.css'

export const metadata = {
  title: 'DevTeam Studio | Scalable Web & Mobile Products',
  description: 'A collaborative team of elite freelance developers. We build scalable web & mobile products.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-gray-950 text-gray-100">{children}</body>
    </html>
  );
}
