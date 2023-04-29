import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "material-symbols";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
