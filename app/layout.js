import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bala Vinaithirthan – Portfolio / Research",
  description: "All about Bala Vinaithirthan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Bala Vinaithirthan",
              "url": "https://balabuilds.com",
              "sameAs": [
                "https://www.linkedin.com/in/balabv",
                "https://github.com/balavinaithirthan"
              ],
              "affiliation": {
                "@type": "CollegeOrUniversity",
                "name": "Stanford University"
              },
              "jobTitle": "Computer Science Student",
              "knowsAbout": ["Bioinformatics", "Compilers", "High Performance Computing"]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
