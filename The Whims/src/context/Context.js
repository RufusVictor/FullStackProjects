import { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const products = [
    {
      id: "1",
      name: "Gaming Mouse",
      price: "299",
      image: "https://images.unsplash.com/photo-1563297007-0686b7003af7?q=80&w=1834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      inStock: 10,
      fastDelivery: true,
      ratings: 4,
    },
    {
      id: "2",
      name: "Bluetooth Speaker",
      price: "700",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      inStock: 7,
      fastDelivery: false,
      ratings: 3,
    },
    {
      id: "3",
      name: "Gaming Keyboard",
      price: "199",
      image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      inStock: 0,
      fastDelivery: true,
      ratings: 5,
    },
    {
      id: "4",
      name: "Smart Watch",
      price: "1599",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      inStock: 8,
      fastDelivery: false,
      ratings: 5,
    },
    {
      id: "5",
      name: "Portable SSD",
      price: "219",
      image: "https://images.unsplash.com/photo-1602524815920-35f31875e44c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      inStock: 3,
      fastDelivery: true,
      ratings: 2,
    },
    {
      id: "6",
      name: "Noise Cancelling Headphones",
      price: "3499",
      image: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      inStock: 6,
      fastDelivery: false,
      ratings: 5,
    },
    {
      id: "7",
      name: "Smart Thermostat",
      price: "930",
      image: "https://images.unsplash.com/photo-1636569608385-58efc32690ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      inStock: 4,
      fastDelivery: true,
      ratings: 4,
    },
    {
      id: "8",
      name: "Electric Toothbrush",
      price: "560",
      image: "https://images.unsplash.com/photo-1559671216-bda69517c47f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      inStock: 9,
      fastDelivery: false,
      ratings: 3,
    },
    {
      id: "9",
      name: "Fitness Tracker",
      price: "800",
      image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      inStock: 2,
      fastDelivery: true,
      ratings: 4,
    },
    {
      id: "10",
      name: "Instant Pot",
      price: "1100",
      image: "https://images.unsplash.com/photo-1556911820-1238441ed1a7?q=80&w=1500&h=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      inStock: 5,
      fastDelivery: true,
      ratings: 5,
    },
    {
      id: "11",
      name: "Robot Vacuum",
      price: "9700",
      image: "https://images.unsplash.com/photo-1603618090561-412154b4bd1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      inStock: 4,
      fastDelivery: false,
      ratings: 5,
    },
    {
      id: "12",
      name: "Smart Light Bulb",
      price: "100",
      image: "https://images.unsplash.com/photo-1711006155490-ec01a0ecf0de?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      inStock: 8,
      fastDelivery: true,
      ratings: 4,
    },
    {
      id: "13",
      name: "Action Camera",
      price: "2500",
      image: "https://images.unsplash.com/photo-1598114912510-446d33ce87de?q=80&w=1587&h=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      inStock: 6,
      fastDelivery: false,
      ratings: 5,
    },
    {
      id: "14",
      name: "Portable Projector",
      price: "4070",
      image: "https://images.unsplash.com/photo-1638154540952-0874f2d2bfa6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      inStock: 3,
      fastDelivery: true,
      ratings: 4,
    },
    {
      id: "15",
      name: "E-Reader",
      price: "1900",
      image: "https://images.unsplash.com/photo-1456953180671-730de08edaa7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      inStock: 7,
      fastDelivery: false,
      ratings: 5,
    },
    {
      id: "16",
      name: "Portable Charger",
      price: "400",
      image: "https://images.unsplash.com/photo-1585995603413-eb35b5f4a50b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      inStock: 10,
      fastDelivery: true,
      ratings: 4,
    },
    {
      id: "17",
      name: "VR Headset",
      price: "18599",
      image: "https://images.unsplash.com/photo-1612066518884-2eda70eb3100?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      inStock: 2,
      fastDelivery: false,
      ratings: 5,
    },
    {
      id: "18",
      name: "Drone",
      price: "5799",
      image: "https://images.unsplash.com/photo-1524143986875-3b098d78b363?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      inStock: 4,
      fastDelivery: true,
      ratings: 5,
    },
    {
      id: "19",
      name: "Electric Scooter",
      price: "20000",
      image: "https://images.unsplash.com/photo-1597260491590-7a542ff29bdd?q=80&w=1052&h=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      inStock: 3,
      fastDelivery: false,
      ratings: 3,
    },
    {
      id: "20",
      name: "3D Printer",
      price: "37800",
      image: "https://images.unsplash.com/photo-1611505908502-5b67e53e3a76?q=80&w=1570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      inStock: 2,
      fastDelivery: true,
      ratings: 4,
    },
    {
      id: "21",
      name: "Smart Door Lock",
      price: "6650",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      inStock: 6,
      fastDelivery: false,
      ratings: 5,
    },
    {
      id: "22",
      name: "Wireless Charger",
      price: "1990",
      image: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?q=80&w=1686&h=1100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      inStock: 8,
      fastDelivery: true,
      ratings: 4,
    },
    {
      id: "23",
      name: "Cute Plushies",
      price: "820",
      image: "https://images.unsplash.com/photo-1631567210298-d385d8d9476c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      inStock: 0,
      fastDelivery: false,
      ratings: 4,
    },
    {
      id: "24",
      name: "Air Purifier",
      price: "28000",
      image: "https://plus.unsplash.com/premium_photo-1661315526732-271aa84f480d?q=80&w=1570&h=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      inStock: 5,
      fastDelivery: true,
      ratings: 3,
    },
    {
      id: "25",
      name: "Spy Camera",
      price: "550",
      image: "https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      inStock: 7,
      fastDelivery: false,
      ratings: 1,
    },
  ];

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
