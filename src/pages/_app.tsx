import PizzaFooterDesktop from "@/ui/components/PizzaFooterDesktop/PizzaFooterDesktop";
import PizzaHeaderDesktop from "@/ui/components/PizzaHeaderDesktop/PizzaHeaderDesktop";
import "@/ui/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return(<>
    <PizzaHeaderDesktop />
    <Component {...pageProps} />
    <PizzaFooterDesktop />
  </>
  ) 
}
