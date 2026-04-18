import cart from './assets/cart.svg';

const CardWidget = () => {
    return (
        <div>
            <img src={cart} class="carritoimg" alt="cart-widget" />
            0
        </div>
    )
}

export default CardWidget;