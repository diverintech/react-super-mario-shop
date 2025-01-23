function Item({item, selectProduct, changeQuantity}) {



    return (
        <>
            <div onClick={()=> selectProduct(item.id)} className={`product ${item.isInBag ? 'selected' : ''}`}>
                <div className="photo">
                    <img src={"././img/" + item.photo}/>
                </div>
                <div className="description">
                    <span className="field">{item.name}</span>
                    <span className="field">Year: {item.year}</span>
                    <span className="field">Platforms: {item.platforms}</span>
                    <span className="field">Players: {item.players}</span>
                    {
                        item.isInBag &&
                        <div className="quantity-area">
                            <button
                                disabled={item.quantity<=1}
                                onClick={(e) => changeQuantity(e, item.id, -1)}
                            >-
                            </button>
                            <span className="quantity">{item.quantity}</span>
                            <button
                                onClick={(e) => changeQuantity(e, item.id, +1)}
                            >+
                            </button>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Item;