import Image from "next/image";
import { Reviewer } from "../definiciones/resvisores";

export default function ReviewerCard({ reviewer }: { reviewer: Reviewer }) {
    return (
        <div className="group relative h-full">
            {/* Glow layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-teal-500/10 to-yellow-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

            {/* Card - altura fija */}
            <div className="relative bg-gradient-to-br from-blue-900/40 via-teal-900/30 to-blue-900/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/20 hover:border-yellow-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/20 flex flex-col items-center text-center gap-4 h-full min-h-[320px]">
                {/* Avatar ring */}
                <div className="relative w-32 h-32 shrink-0">
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

                {/* Text - altura fija para el nombre */}
                <div className="space-y-1 flex-1 flex flex-col justify-center">
                    <div className="min-h-[60px] flex items-center justify-center">
                        <p className="text-blue-200 font-semibold text-sm leading-snug tracking-wide line-clamp-3">
                            {reviewer.name}
                        </p>
                    </div>
                    <p className="text-teal-400/80 text-xs font-medium uppercase tracking-widest">
                        {reviewer.degree}
                    </p>
                    {/* Email del revisor */}
                    <div className="mt-2">
                        <p className="text-blue-300/70 text-xs font-mono break-all hover:text-yellow-400/80 transition-colors">
                            {reviewer.email}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}