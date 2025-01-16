"use client";

import { cn } from "@/lib/utils";
import Title from "./Title";

interface Volunteering {
    title: string;
    organization: string;
    period: string;
    description: string[];
    background?: string;
}

const volunteering: Volunteering[] = [
    {
        title: "Training Manager",
        organization: "Data Club ENSAH",
        period: "Sep 2022 - 2023",
        description: [
            "Insuring offline and online training sessions, provided by either club members or experts.",
            "Conducting project sharing sessions to thrive in new domains, ideas, and technologies"
        ],
        background: "bg-teal-50 dark:bg-teal-900/20"
    },
    {
        title: "Design Coordinator",
        organization: "Social and Solidarity Club ENSAH (CSS)",
        period: "Sep 2022 - 2023",
        description: [
            "Created Instagram designs and printed posters to effectively communicate the club's activities"
        ],
        background: "bg-purple-50 dark:bg-purple-900/20"
    }
];

export default function Volunteering() {
    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
            <div className="flex justify-center -rotate-6 relative mb-12">
                <Title
                    className="flex justify-center"
                    text="Volunteering 🤝"
                    width="w-52"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {volunteering.map((item, idx) => (
                    <div 
                        key={`volunteering-${idx}`}
                        className={cn(
                            "p-5 rounded-md cursor-pointer relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg flex flex-col",
                            item.background || "bg-neutral-100 dark:bg-neutral-800"
                        )}
                    >
                        <div className="space-y-3 flex-grow">
                            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                            <div className="text-neutral-600 dark:text-neutral-300 mb-4">
                                <p className="font-semibold">{item.organization}</p>
                                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">{item.period}</p>
                                <ul className="list-disc list-inside space-y-1">
                                    {item.description.map((desc, descIdx) => (
                                        <li key={descIdx} className="text-sm">{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}