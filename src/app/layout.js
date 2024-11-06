import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/Shared/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  fallback: ["sans-serif"],
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  fallback: ["monospace"],
});

export const metadata = {
  title: "ShareMate",
  description: "Showcase and share your profiles seamlessly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        <div className="w-full max-w-6xl mx-auto px-4">
          <header>
            <Navbar />
          </header>
          <main className="py-8">{children}</main>
          <footer className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
            <p>&copy; 2023 ShareMate. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
