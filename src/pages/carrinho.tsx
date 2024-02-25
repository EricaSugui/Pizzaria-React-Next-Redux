import useIndex from "@/data/hooks/pages/useIndex";
import PizzaCart from "@/ui/components/PizzaCart/PizzaCart";
import PizzaHeaderDesktop from "@/ui/components/PizzaHeaderDesktop/PizzaHeaderDesktop";

export default function Carrinho(){
    const { pizzas } = useIndex();
    return <>
        <PizzaHeaderDesktop />
        <PizzaCart pizzas={pizzas}/>
    </>
}