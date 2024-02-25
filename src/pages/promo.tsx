import useIndex from "@/data/hooks/pages/useIndex";
import PizzaFooter from "@/ui/components/PizzaFooter/PizzaFooter";
import PizzaFooterDesktop from "@/ui/components/PizzaFooterDesktop/PizzaFooterDesktop";
import PizzaHeader from "@/ui/components/PizzaHeader/PizzaHeader";
import PizzaHeaderArrowBack from "@/ui/components/PizzaHeaderArrowBack/PizzaHeaderArrowBack";
import PizzaHeaderDesktop from "@/ui/components/PizzaHeaderDesktop/PizzaHeaderDesktop";

export default function Promo(){
    const { pizzas } = useIndex();
    return <>
        <PizzaHeaderDesktop />
        <PizzaHeaderArrowBack/>
        <h1>Promoção do dia: </h1>
        <PizzaFooter/>
        <PizzaFooterDesktop/>
    </>
}