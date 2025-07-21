import '../globals.css';
import Header from './header/page';
import Footer from './footer/page';

export default function UserLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow xl:mx-24 xl:bg-[#f9f9f9]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
