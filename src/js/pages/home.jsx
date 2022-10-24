import React from "react";
import PropTypes from "prop-types";
import Navbar from "../component/navbar.jsx";
import Jumbotron from "../component/jumbotron.jsx";
import Card from "../component/card.jsx";
import Footer from "../component/footer.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component


const Home = () => {
	return (
		<div>
            <Navbar/>
			<div className ="container-fluid h-100">
                <Jumbotron/>
                <div className ="row">
                <div className="col-lg-3 col-md-6 col-sm-12 justify-content-center d-flex "><Card/> </div>
                <div className="col-lg-3 col-md-6 col-sm-12 justify-content-center d-flex"><Card/> </div>
                <div className="col-lg-3 col-md-6 col-sm-12 justify-content-center d-flex"><Card/> </div>
                <div className="col-lg-3 col-md-6 col-sm-12 justify-content-center d-flex"><Card/> </div>
                </div>
                
            </div>
            <Footer/>
		</div>
	)
}

export default Home;

