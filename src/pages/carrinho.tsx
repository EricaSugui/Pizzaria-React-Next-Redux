import { connect } from 'react-redux';

import PizzaCart from "@/ui/components/PizzaCart/PizzaCart";
import PizzaHeaderDesktop from "@/ui/components/PizzaHeaderDesktop/PizzaHeaderDesktop";

function Carrinho({items}: any){
    console.log('carrinho ', items)
    return <>
        <PizzaHeaderDesktop />
        <PizzaCart pizzas={items}/>
    </>
}
const mapStateToProps = (state: any) => ({
    items: state.item.list
})

export default connect(mapStateToProps)(Carrinho)