import './App.css';
import OrderDetails from "./components/OrderDetails.jsx";
import Item from "./components/Item.jsx";
import { useState } from "react";

function App() {

    const shopName = "Welcome to your Mario Kart shop"
    const description = "Please select the game you want to buy"

    const [items, setItems] = useState([
        {
            id: 1,
            photo: "mario_kart_8_deluxe.jpg",
            name: "Mario Kart 8 Deluxe",
            year: 2017,
            platforms: ["Nintendo Switch"],
            players: "1-12",
            price: 49.99,
            active: false,
            quantity: 1,
            isInBag: false
        },
        {
            id: 2,
            photo: "mario_kart_tour.jpg",
            name: "Mario Kart Tour",
            year: 2019,
            platforms: ["iOS", "Android"],
            players: "1-8",
            price: 0.00, // Jogo gratuito com microtransações
            active: false,
            quantity: 1,
            isInBag: false
        },
        {
            id: 3,
            photo: "mario_kart_7.jpg",
            name: "Mario Kart 7",
            year: 2011,
            platforms: ["Nintendo 3DS"],
            players: "1-8",
            price: 39.99,
            active: false,
            quantity: 1,
            isInBag: false
        },
        {
            id: 4,
            photo: "mario_kart_wii.jpg",
            name: "Mario Kart Wii",
            year: 2008,
            platforms: ["Nintendo Wii"],
            players: '1-4 (local), 1-12 (online)',
            price: 29.99,
            active: false,
            quantity: 1,
            isInBag: false
        },
        {
            id: 5,
            photo: "mario_kart_ds.jpg",
            name: "Mario Kart DS",
            year: 2005,
            platforms: ["Nintendo DS"],
            players: "1-8",
            price: 34.99,
            active: false,
            quantity: 1,
            isInBag: false
        },
        {
            id: 6,
            photo: "mario_kart_double_dash.jpg",
            name: "Mario Kart: Double Dash!!",
            year: 2003,
            platforms: ["Nintendo GameCube"],
            players: "1-4",
            price: 24.99,
            active: false,
            quantity: 1,
            isInBag: false
        },
        {
            id: 7,
            photo: "mario_kart_super_circuit.jpg",
            name: "Mario Kart: Super Circuit",
            year: 2001,
            platforms: ["Game Boy Advance"],
            players: "1-4",
            price: 19.99,
            active: false,
            quantity: 1,
            isInBag: false
        },
        {
            id: 8,
            photo: "mario_kart_64.jpg",
            name: "Mario Kart 64",
            year: 1996,
            platforms: ["Nintendo 64", "Wii Virtual Console"],
            players: "1-4",
            price: 14.99,
            active: false,
            quantity: 1,
            isInBag: false
        },
        {
            id: 9,
            photo: "super_mario_kart.jpg",
            name: "Super Mario Kart",
            year: 1992,
            platforms: ["SNES", "Wii Virtual Console"],
            players: "1-2",
            price: 9.99,
            active: false,
            quantity: 1,
            isInBag: false
        }
    ]);


    const itemsInBag = items.filter(item => item.isInBag);

    function selectHandler(id){
        let item = items.filter((item) => item.id === id)[0];
        item.isInBag = !item.isInBag;
        setItems(items.map((element) => element.id === id ? item : element));
    }

    function quantityHandler(e, id, increment) {
        e.stopPropagation();
        let item = items.filter((item) => item.id === id)[0];
        item.quantity += increment;
        setItems(items.map((element) => element.id === id ? item : element));
    }

    return (
        <>
            <section className="items">
                <h2>{shopName}</h2>
                <h4>{description}</h4>

                { items
                    .slice()
                    .sort((a, b) => b.year - a.year)
                    .map((item) =>
                    <Item
                        selectProduct={(id) => selectHandler(id)}
                        changeQuantity={(e, id, increment) => quantityHandler(e, id, increment) }
                        item={item}
                        key={item.id}
                    />
                )}

            </section>
            {<OrderDetails itemsInBag={itemsInBag} />}
        </>
    );
}

export default App
