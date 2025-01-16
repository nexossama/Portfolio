"use client";

import { Trophy, Award, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import Title from "./Title";

interface CompetitionAchievement {
    title: string;
    description: string;
    date: string;
    rank: string;
    organizer: string;
    icon: React.ElementType;
    gradient: string;
}

const achievements: CompetitionAchievement[] = [
    {
        title: "EAIC Data Competition V2 - 2024",
        description: "Ranked 8 out of 56 participants in the Data Competition V2 organised by ENSIAS AI Club about Network Traffic Classification",
        date: "2024",
        rank: "8/56",
        organizer: "ENSIAS AI Club",
        icon: Award,
        gradient: "from-purple-600 via-purple-700 to-purple-900"
    },
    {
        title: "Ensah Coding Challenge - 2023",
        description: "Winner of Ensah Coding Challenge competition of Competitive Programming organised by Club 01 ENSAH",
        date: "2023",
        rank: "1st Place",
        organizer: "Club 01 ENSAH",
        icon: Trophy,
        gradient: "from-green-600 via-green-700 to-green-900"
    },
    {
        title: "Let's Code 1.0 - 2022",
        description: "First Prize Winner in the Let's Code Problem-Solving Competition organized by Club 01 ENSAH",
        date: "2022",
        rank: "1st Place",
        organizer: "Club 01 ENSAH",
        icon: Trophy,
        gradient: "from-blue-600 via-blue-700 to-blue-900"
    },
    {
        title: "Hult Prize - 2020",
        description: "Top 6 out of over 30 teams in the 'On Campus' phase of the International Hult Prize Social Entrepreneurship Competition, organized by Hult Prize ENSAH",
        date: "2020",
        rank: "6/30+",
        organizer: "Hult Prize ENSAH",
        icon: Award,
        gradient: "from-pink-600 via-pink-700 to-pink-900"
    }
];

export default function Competitions() {
    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
            <div className="flex justify-center -rotate-6 relative mb-12">
                <Title
                    className="flex justify-center"
                    text="Competitions 🏆"
                    width="w-48"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievements.map((achievement, idx) => (
                    <div 
                        key={`achievement-${idx}`}
                        className={cn(
                            "relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
                            "bg-gradient-to-br flex flex-col",
                            achievement.gradient
                        )}
                    >
                        <div className="absolute top-0 right-0 m-4 opacity-20">
                            <achievement.icon size={100} strokeWidth={1} className="text-white" />
                        </div>
                        <div className="p-6 flex-grow relative z-10 flex flex-col">
                            <div className="flex items-center mb-4">
                                <div className="mr-4 bg-white/20 p-3 rounded-full">
                                    <achievement.icon size={32} strokeWidth={2} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white drop-shadow-md">{achievement.title}</h3>
                                </div>
                            </div>
                            <div className="flex-grow">
                                <p className="text-sm text-white/90">{achievement.description}</p>
                            </div>
                            <div className="space-y-2 text-white mt-auto">
                                <div className="flex flex-wrap gap-2 mt-2">
                                    <span className="px-2 py-1 rounded-full bg-white/20 text-white text-xs">
                                        {achievement.date}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex items-center space-x-2">
                                        <achievement.icon size={16} className="text-white" />
                                        <span className="text-sm text-white/80">{achievement.organizer}</span>
                                    </div>
                                    <div className="bg-white/20 px-3 py-1 rounded-full">
                                        <span className="text-sm font-bold text-white">
                                            Rank: {achievement.rank}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
