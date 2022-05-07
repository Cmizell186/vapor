import '../Games/index.css'

const AddToCart = ({game, handleAddToCart, in_cart_boolean}) => {
    return (
        <div id="add-cart-content">
        <div id="add-cart-div">
          <div id="add-cart-items">
            <p>Buy this game now!</p>
            <div className="add-cart-items-wrapper">
              <div className="add-cart-item">
                <h1>Buy {game?.title.toUpperCase()}</h1>
                <div id="add-cart-item-action">
                  <div id="add-cart-item-action-div">
                    <div id="add-cart-item-price">
                      ${game?.price}
                    </div>
                    <div id="add-cart-bttn">
                      <button id="bttn-cartadd" type="button" onClick={handleAddToCart}>{in_cart_boolean ? 'In cart' : 'Add to cart'}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default AddToCart;
