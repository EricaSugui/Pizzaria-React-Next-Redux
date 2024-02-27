import { connect } from 'react-redux';

import PizzaCart from "@/ui/components/PizzaCart/PizzaCart";
import PizzaHeaderDesktop from "@/ui/components/PizzaHeaderDesktop/PizzaHeaderDesktop";
import { IPizzaList } from '@/data/@types/IPizzaList';

function Carrinho({pizzas}: {pizzas: IPizzaList}){
    return <>
        <PizzaHeaderDesktop />
        <PizzaCart pizzas={pizzas}/>
    </>
}
const mapStateToProps = (state: any) => ({
    pizzas: state.items.list
})

export default connect(mapStateToProps)(Carrinho)