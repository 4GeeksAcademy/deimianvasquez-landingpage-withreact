import React from "react";

//include images into your bundle
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import CardList from "../components/CardList";
import Footer from "../components/Footer";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<CardList />
			<Footer />
		</>
	);
};

export default Home;