import '@/app/ui/global.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h2>Root Layout</h2>
        {children}
      </body>
    </html>
  );
}
