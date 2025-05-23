import Navbar from './component/navbar';
import './globals.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
       <Navbar/>

        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
