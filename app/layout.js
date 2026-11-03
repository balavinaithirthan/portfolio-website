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
  title: "Bala Vinaithirthan | Software Engineer & Researcher",
  description:
    "Bala Vinaithirthan works on autonomous systems, compilers, machine learning, and high-performance computing. Stanford CS alumnus and OOPSLA 2026 author.",
  alternates: { canonical: "https://balabuilds.com" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bala Vinaithirthan",
              url: "https://balabuilds.com",
              email: "mailto:balabv1@gmail.com",
              sameAs: [
                "https://www.linkedin.com/in/balabv/",
                "https://github.com/balavinaithirthan",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Stanford University",
              },
              worksFor: {
                "@type": "Organization",
                name: "Applied Intuition",
              },
              jobTitle: "Software Engineer",
              knowsAbout: [
                "Autonomous Systems",
                "Compilers",
                "Bioinformatics",
                "Machine Learning",
                "High-Performance Computing",
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
