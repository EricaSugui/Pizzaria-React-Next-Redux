import PizzaPage from "@/ui/components/PizzaPage/PizzaPage";
import { useRouter } from 'next/router'

import useIndex from "@/data/hooks/pages/useIndex";
import PizzaHeaderDesktop from "@/ui/components/PizzaHeaderDesktop/PizzaHeaderDesktop";

function Pizzas(){
    const router = useRouter();
    const { slug } = router.query
    const { pizzas } = useIndex();
    const pizzaItem = pizzas.filter(pizza => pizza.slug === slug)
    
    return <>
        <PizzaHeaderDesktop />
        <PizzaPage pizza={pizzaItem[0]}/>
    </>
}



export default Pizzas;