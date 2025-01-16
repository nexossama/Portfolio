"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "../../../components/ui/card-hover-effect";
import { SiCss3, SiFastapi, SiHtml5, SiJavascript, SiKeras, SiMongodb, SiMysql, SiPowerbi, SiPython, SiPytorch, SiReact, SiScikitlearn, SiTailwindcss } from "react-icons/si";
import { FaJava } from "react-icons/fa";
// import SkillLine from "./SkillLine";

export default function Skills() {
	const skills = [
		{
			text: "Python",
			icon: SiPython,
		},
		{
			text: "Sklearn",
			icon: SiScikitlearn,
		},
		{
			text: "Fastapi",
			icon: SiFastapi,
		},
		{
			text: "Pytorch",
			icon: SiPytorch,
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
		},
		{
			text: "Javascript",
			icon: SiJavascript,
		},
		{
			text: "Tailwind",
			icon: SiTailwindcss,
		},
		{
			text: "React",
			icon: SiReact,
		},
		{
			text: "Java",
			icon: FaJava,
		},
		{
			text: "MongoDB",
			icon: SiMongodb,
		},
		{
			text: "MySQL",
			icon: SiMysql,
		},
		{
			text: "PowerBI",
			icon: SiPowerbi,
		},
	];
	return (
		<div className="max-w-4xl mx-auto px-4">
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
