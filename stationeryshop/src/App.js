import { useContext, useEffect, useState } from "react";
import Cart from './components/addCart';
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Customer from "./components/customer";

import CheckoutForm from "./components/CheckoutForm";
import MyAccount from "./components/MyAccount";
import CardList from "./components/cardList";
import { ProductContext } from "./contexts/Products.context";
import CartPage from "./components/cartPage";

import { addAccount, getProducts} from "./Service/api";
import AdminAddItem from "./components/adminAddItem";





function App() {



  useEffect(async ()=>{
    console.log("asdsa")
    printProducts()
  })

const printProducts=async ()=>{
  console.log(await getProducts())
}



  const { cards } = useContext(ProductContext);
  const objects = cards;
  const [selected, setSelected] = useState([{ title: "irfii" }]);
  const [collectiontype, setCollectiontype] = useState({ type: "types" });

  
  const penCollection = objects.filter(card => card.type === "pen");


  function selection(id) {
    for (let i = 0; i < objects.length; i++) {
      if (objects[i].id === id) {
        setSelected(objects[i]);
        break;
      }
    }
  }

  function collection(type) {
    for (let i = 0; i < objects.length; i++) {
      if (objects[i].type == type) {
        setCollectiontype(objects[i]);
      }

    }
  }
  useEffect(()=>{
    addAccount()
  })
  return (
    <div>
      
      <Routes>
        <Route path="/addCart" element={<Cart selected={selected} />} />
        <Route exact path="/" element={<Home objects={objects}
          selection={selection}
          collection={collection}
          selected={selected}
          
        />} />
        <Route path="/CheckoutForm" element={<CheckoutForm />} />
        <Route path="/customer" element={<Customer/>} /> 
        <Route exact path="/MyAccount" element={<MyAccount />} />
        <Route
          path="/cardList"
          element={<CardList objects={penCollection}
            selection={selection}
            collection={collection}
            
            selected={selected} />}
        />
        <Route path="/cartPage" element={<CartPage/>}/>
       
        
      </Routes>
      <AdminAddItem/>
      
    </div>
  );
}

export default App;
