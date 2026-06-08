"use client";

import { reviewers } from "../definiciones/resvisores";
import ReviewerCard from "./RevisoresCard";



export default function Revisores() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#020d1a] via-[#041525] to-[#020d1a] overflow-hidden py-20 px-6">
      {/* Background decorative blobs */}
      <div className="pointer-events-none absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl" />

      {/* Section header */}
      <div className="relative text-center mb-16 space-y-3">
        {/* Eyebrow */}
        <p className="text-yellow-400/80 text-xs tracking-[0.3em] uppercase font-semibold">
          Congreso Internacional 2026
        </p>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Comité de{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 bg-clip-text text-transparent">
            Revisores
          </span>{" "}
          Internacionales
        </h2>

        {/* Underline accent */}
        <div className="mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-yellow-400/60 via-teal-400/80 to-blue-400/60" />
      </div>

      {/* Cards grid: 3 top, 2 bottom centered */}
      <div className="relative max-w-5xl mx-auto space-y-6">
        {/* Row 1 — 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewers.slice(0, 3).map((r) => (
            <ReviewerCard key={r.id} reviewer={r} />
          ))}
        </div>

        {/* Row 2 — 2 cards centered */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {reviewers.slice(3).map((r) => (
            <div key={r.id} className="w-full sm:w-72">
              <ReviewerCard reviewer={r} />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}