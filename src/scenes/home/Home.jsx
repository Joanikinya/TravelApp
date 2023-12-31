import Footer from "../global/Footer";
import MainCarousel from "./MainCarousel";
import ShoppingList from "./ShoppingList";
import Subscribe from "./Subscribe";

function Home(){
    return (
        <div className="home">
            <MainCarousel/>
            <ShoppingList/>
            <Subscribe />
            <Footer/>
        </div>
    );
}

export default Home;