import Banner from "../../Shared/Banner/Banner";
import Footer from "../../Shared/Footer/Footer";
import Brands from "../Brands/Brands";
import HotProducts from "../HotProducts/HotProducts";
import Serveses from "../Serveses/Serveses";
import WeAreBest from "../WeAreBest/WeAreBest";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <Serveses></Serveses>
            <HotProducts></HotProducts>
            <WeAreBest></WeAreBest>
            <Footer></Footer>
        </div>
        
    );
};

export default Home;