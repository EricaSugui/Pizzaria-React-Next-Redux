import Head from "next/head";
import useIndex from "@/data/hooks/pages/useIndex";
import PizzaList from "@/ui/components/PizzaList/PizzaList";
import PizzaHeader from "@/ui/components/PizzaHeader/PizzaHeader";
import PizzaFooter from "@/ui/components/PizzaFooter/PizzaFooter";

export default function Home() {
  const { pizzas } = useIndex();
  return (
    <div>
      <Head>
        <title> Pizzaria React </title>
      </Head>
      <main>
        <PizzaHeader />
        <PizzaList pizzas={pizzas} />
        <PizzaFooter />
      </main>
    </div>

  );
}
