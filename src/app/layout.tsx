
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'REMNORA',
  description: 'Premium tea collections for every mood and moment.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://media.discordapp.net/attachments/1332392764947693670/1496759558058807358/-1.png?ex=69eb0d77&is=69e9bbf7&hm=929730139c55019d0ec2d42d7a4a54c31982fc772c7f9a0cdfeed1b4a267f1d6&=&format=webp&quality=lossless&width=296&height=282" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-accent selection:text-accent-foreground">
        {children}
      </body>
    </html>
  );
}
