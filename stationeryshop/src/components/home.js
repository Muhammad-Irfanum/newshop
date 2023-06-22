import '../style/home.css';
import '../style/footer.css';

import CardList from './cardList';
import Cart from './addCart';
import Carousel from './carousel';
import Category from './category';
import Footer from './footer';
import Header from './header';
import CheckoutForm from './CheckoutForm';
import Login from './MyAccount';
import MyAccount from './MyAccount';
import {  useState } from 'react';
import CartPage from './cartPage';


const Home = (props) => {
    // const objects = useContext(Context);
    const { selection, objects } = props;
    const [number,setNumber] = useState(props.selected.length)

    return (
        <div>

            <Header selected= {number}/>
            <Carousel />
            <Category objects={objects} selection={selection} />
            
            <Footer />
             




        </div>




    )
}
export default Home;