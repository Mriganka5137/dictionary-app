import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Navbar from "@/components/shared/Navbar";
import QueryClientProvider from "@/services/queryClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dictionary App",
  description: "Dictionary App for searching words",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=" main-container   min-h-screen">
          <QueryClientProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem={true}
              disableTransitionOnChange
            >
              <Navbar />
              {children}
            </ThemeProvider>
          </QueryClientProvider>
        </main>
      </body>
    </html>
  );
}
