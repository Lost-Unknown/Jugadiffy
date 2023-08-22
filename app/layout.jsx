"use client";
import "@styles/globals.css";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import { NextUIProvider } from "@nextui-org/react";
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <NextUIProvider>
          <body className=" bg-neutral-100 py-0 mt-0">
            <main className="w-full">
              <Nav />
              {children}
            </main>
            <Footer />
          </body>
      </NextUIProvider>
    </html>
  );
};

export default RootLayout;
