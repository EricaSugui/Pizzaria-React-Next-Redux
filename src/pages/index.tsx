import Head from "next/head";
import useIndex from "@/data/hooks/pages/useIndex";
import PizzaList from "@/ui/components/PizzaList/PizzaList";
import PizzaHeader from "@/ui/components/PizzaHeader/PizzaHeader";
import PizzaFooter from "@/ui/components/PizzaFooter/PizzaFooter";
import PizzaHeaderDesktop from "@/ui/components/PizzaHeaderDesktop/PizzaHeaderDesktop";
import NavMenu from "@/ui/components/NavMenu/NavMenu";
import PizzaFooterDesktop from "@/ui/components/PizzaFooterDesktop/PizzaFooterDesktop";

export default function Home() {
  const { pizzas } = useIndex();
  return (
    <div>
      <Head>
        <title> Pizzaria React </title>
      </Head>
      <main>
        <PizzaHeader />
        <PizzaHeaderDesktop>
          <NavMenu />
        </PizzaHeaderDesktop>
        <PizzaList pizzas={pizzas} />
        <PizzaFooterDesktop />
        <PizzaFooter />
      </main>
    </div>

  );
}
