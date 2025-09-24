import '../src/index.css';

export const metadata = {
  title: 'Melanie Lobo - Full-Stack Developer',
  description: 'Full-Stack Developer & Digital Innovator. I create beautiful, functional websites and applications that bring your ideas to life.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
