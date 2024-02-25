import useIndex from "@/data/hooks/pages/useIndex";
import PizzaFooter from "@/ui/components/PizzaFooter/PizzaFooter";
import PizzaFooterDesktop from "@/ui/components/PizzaFooterDesktop/PizzaFooterDesktop";
import PizzaHeader from "@/ui/components/PizzaHeader/PizzaHeader";
import PizzaHeaderArrowBack from "@/ui/components/PizzaHeaderArrowBack/PizzaHeaderArrowBack";
import PizzaHeaderDesktop from "@/ui/components/PizzaHeaderDesktop/PizzaHeaderDesktop";

export default function Pagamento(){
    const { pizzas } = useIndex();
    return <>
        <PizzaHeaderDesktop />
        <PizzaHeaderArrowBack/>
        <h1>Feito!</h1>
        <PizzaFooter/>
        <PizzaFooterDesktop/>
    </>
}