import React from "react";
import ReactDOM from "react-dom/client";
import "../src/index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1
        style={{
          color: "Grey",
          fontSize: "48px",
          textTransform: "uppercase",
          textAlign: "center",
          fontWeight: "bold",
          textShadow: "2px 2px 4px #000000",
          marginBottom: "20px",
          marginTop: "20px",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        Pizzeria Cártama La Osita
      </h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Menú</h2>
      <p>
        Consequat cillum fugiat irure anim sunt do irure dolor minim in magna.
        Aliquip magna in enim cillum elit dolor et excepteur esse culpa esse.
        Aliqua esse magna esse culpa cupidatat ipsum incididunt enim. Labore do
        cupidatat Lorem eu minim reprehenderit veniam esse irure cillum magna.
        Occaecat proident occaecat esse adipisicing ut cillum quis consequat.
        Ullamco laboris laborum fugiat ea non.
      </p>
      {/*
    <ul className="pizzas">
      {pizzaData.map((itemPizza) => (
        <Pizza
          imagen={itemPizza.photoName}
          nombre={itemPizza.name}
          ingredientes={itemPizza.ingredients}
          precio={itemPizza.price}
        />
      
      ))}
    </ul>
    */}
      {pizzaData.length > 0 && (
        <ul className="pizzas">
          {pizzaData.map((itemPizza) => (
            <Pizza objetoPizza={itemPizza} />
          ))}
        </ul>
      )}
    </main>
  );
}
{
  /*
function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.imagen} alt={props.nombre} />
      <h2>{props.nombre}</h2>
      <p>{props.ingredientes}</p>
      <p>{props.precio}</p>
    </li>
  );
}
*/
}

function Pizza({ objetoPizza }) {
  return (
    <li className="pizza">
      <img src={objetoPizza.photoName} alt={objetoPizza.name} />
      <h2>{objetoPizza.name}</h2>
      <p>{objetoPizza.ingredients}</p>
      <p>{objetoPizza.price}</p>
    </li>
  );
}

function Footer() {
  const currentHour = new Date().getHours();
  const openHour = 10;
  const closeHour = 23;
  const isOpen = currentHour >= openHour && currentHour <= closeHour;

  {/* 
  if (!isOpen)
  {return(
    <footer className="footer">
      <p>Estamos cerrados</p>
    </footer>
  );}
 Si ponemos esta opcion de renderización quitamos el ternario*/}
  return (
    <footer className="footer">
      {isOpen ?<div className="order">
      <br></br><p>Estamos Open for you...desde {openHour}:00hs hasta las {closeHour}:00hs</p>
        <button>Reservar</button>
      </div>: <p style={{
          color: "Black",
          fontSize: "22px",
          textAlign: "center",
          textShadow: "2px 2px 10px #000000",
          marginBottom: "20px",
          marginTop: "20px",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}>Estamos cerrados, Sorry!. Volvemos a abrir a las 10:00hs</p>}
      <br></br>
      <p
        style={{
          color: "Grey",
          fontSize: "12px",
          textAlign: "center",
          textShadow: "2px 2px 10px #000000",
          marginBottom: "20px",
          marginTop: "20px",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        Pizzeria Cártama La Osita &copy; 2023 <em>by Sofía Tru Company</em>
      </p>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
