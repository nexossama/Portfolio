"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "../../../components/ui/card-hover-effect";
import { SiCss3, SiHtml5, SiJavascript, SiKeras, SiPython, SiReact, SiScikitlearn } from "react-icons/si";
import { FaJava } from "react-icons/fa";
// import SkillLine from "./SkillLine";

export default function Skills() {
	const skills = [
		{
			text: "Python",
			icon: SiReact,
		},
		{
			text: "Sklearn",
			icon: SiScikitlearn,
		},
		{
			text: "Keras",
			icon: SiKeras,
		},
		{
			text: "Html",
			icon: SiHtml5,
		},
		{
			text: "CSS",
			icon: SiCss3,
		},{
			text: "Javascript",
			icon: SiJavascript,
		},
		{
			text: "React",
			icon: SiReact,
		},
		{
			text: "Java",
			icon: FaJava,
		},
	];
	return (
		<div className="max-w-3xl mx-auto px-4">
			<div className="flex justify-center -rotate-6 relative">
				<Title
					className="flex justify-center "
					text="Skills 🧩"
					width="w-20"
				/>
			</div>
			<HoverEffect items={skills} />
		</div>
	);
}
