import Link from "next/link";
import React from "react";
import Title from "./Title";

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
						{"Based in Morocco, I'm a Data Engineering and Machine Learning student .Curious about understanding how logic and science are helping humans to solve life problems."}
					</p>

					<Link
						href={""}
						className="inline-block group"
					>
						<Title text="Contact me 📬" width="w-40"/>
					</Link>
				</div>
				<div className="w-72 h-72 -rotate-12 space-y-3 relative">
					<div className="flex gap-5 translate-x-8">
						<div className="w-32 h-32 rou-2xl bg-green-500 rounded-2xl"></div>
						<div className="w-32 h-32 rou-2xl bg-indigo-500 rounded-full"></div>
					</div>
					<div className="flex gap-5 -translate-x-8">
						<div className="w-32 h-32 rou-2xl bg-indigo-500 rounded-full"></div>
						<div className="w-32 h-32 rou-2xl bg-green-500 rounded-2xl"></div>
					</div>
					<div className="glow absolute top-[40%] right-1/2 -z-10"></div>
				</div>
			</div>
		</div>
	);
}
