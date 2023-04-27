import { Poppins } from "next/font/google";
import "./globals.css";

import { ThemeContextProvider } from "../app/contexts/Theme";
import Nav from "../app/components/Nav";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Rest Countries",
  description: "A simple app to search for countries",
  keywords: "countries, rest countries, search countries, search, rest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeContextProvider>
          <Nav />
          <main>{children}</main>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
