import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function page() {
	return (
		<div className="min-h-screen bg-black overflow-hidden ">
			<div className="dark:bg-black bg-white  dark:bg-grid-white/[0.08] bg-grid-black/[0.5]">
				<div className="max-w-6xl mx-auto p-5">
					<Navbar />
					<HeroSection />
				</div>
			</div>
			<div className="max-w-6xl mx-auto p-5 mt-20">
				<Skills />
				<Projects />
				<Footer/>
			</div>
		</div>
	);
}
