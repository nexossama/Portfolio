import Link from "next/link";
import React from "react";
import Title from "./Title";
import DevImg from "./DevImg";
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ContactForm from "./ContactForm";

export default function HeroSection() {
	return (
		<div>
			<div className="min-h-[60vh] flex flex-col-reverse md:flex-row gap-14 md:gap-0 items-center justify-between ">
				<div className="space-y-5 text-center md:text-left">
					<h1 className="text-4xl lg:text-7xl  font-bold">
						Hello 👋
						<br />
						<span className="underline underline-offset-4 decoration-green-500">
							{"I'm Ossama"}
						</span>
					</h1>
					<p className="md:w-96 text-lg text-gray-300">
						{
							"Based in Morocco, I'm a Data Engineering and Machine Learning student .Curious about understanding how logic and science are helping humans to solve life problems."
						}
					</p>

					<Dialog>
						<DialogTrigger className="inline-block group">
							<Title
								text="Contact me 📬"
								width="w-40"
							/>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Get in Touch</DialogTitle>
							</DialogHeader>
							<ContactForm />
						</DialogContent>
					</Dialog>
				</div>
				<div className="w-56  h-56 md:w-72 md:h-72 md:translate-y-10 relative">
					<div className="absolute top-0 w-full h-full bg-green-500">
					</div>
					<div className="w-full h-full absolute -top-2 right-2">
						<Image src={"/ossama_profile.png"} fill priority alt="" />
					</div>
					<div className="glow absolute top-[40%] right-1/2 -z-30"></div>
				</div>
			</div>
		</div>
	);
}
