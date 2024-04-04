import { Metadata } from "next";
import { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { AppProvider } from "./app-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minsk Soap By",
  description: "Minsk Soap By",
  icons: "/next.svg",
};

export function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <div className={inter.className}>
        <Component {...pageProps} />
        <Toaster />
      </div>
    </AppProvider>
  );
}
