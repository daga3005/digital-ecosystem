import Image from "next/image";
import { Reviewer } from "../definiciones/resvisores";



export default function ReviewerCard({ reviewer }: { reviewer: Reviewer }) {

    console.log(reviewer)
    return (
        <div className="group relative">
            {/* Glow layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-teal-500/10 to-yellow-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

            {/* Card */}
            <div className="relative bg-gradient-to-br from-blue-900/40 via-teal-900/30 to-blue-900/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/20 hover:border-yellow-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/20 flex flex-col items-center text-center gap-4">

                {/* Avatar ring */}
                <div className="relative w-32 h-32 shrink-0">
                    {/* Animated border ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-teal-400 to-yellow-400 p-[2px] group-hover:from-yellow-400 group-hover:via-teal-400 group-hover:to-blue-400 transition-all duration-700">
                        <div className="w-full h-full rounded-full bg-blue-950 overflow-hidden">
                            <Image
                                src={reviewer.image}
                                alt={reviewer.name}
                                width={128}
                                height={128}
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>
                </div>

                {/* Text */}
                <div className="space-y-1">
                    <p className="text-blue-200 font-semibold text-sm leading-snug tracking-wide">
                        {reviewer.name}
                    </p>
                    <p className="text-teal-400/80 text-xs font-medium uppercase tracking-widest">
                        {reviewer.degree}
                    </p>
                </div>
            </div>
        </div>
    );
}

