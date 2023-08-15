"use client"
import "@styles/globals.css";
import { children } from "react";
import Home from "@app/page";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Footer from "@components/Footer";
import { NextUIProvider } from "@nextui-org/react";


const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <NextUIProvider>
      <body className=" bg-neutral-100 py-0 mt-0">
        <Provider>
          <main className="w-full pr-4 pl-4">
            <Nav />
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
      </NextUIProvider>
    </html>
  );
};

export default RootLayout;
