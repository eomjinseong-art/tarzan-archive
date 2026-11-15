import Link from "next/link";
import { actorBySlug } from "@/data/actors";
import type { Film } from "@/data/films";

export function FilmCard({ film }: { film: Film }) {
  const tarzan = actorBySlug(film.tarzan);
  const jane = film.jane ? actorBySlug(film.jane) : null;
  return (
    <Link href={`/films/${film.slug}`} className="block rounded-lg border border-line bg-card p-4 transition hover:border-gold/70">
      <div className="flex items-baseline justify-between gap-2">
        <span className="font-serif text-2xl text-gold tabular-nums">{film.year}</span>
        <span className="rounded-full border border-line px-2 py-0.5 text-[10px] text-muted">{film.kind}</span>
      </div>
      <h3 className="mt-2 font-semibold leading-6 text-paper">{film.titleKo}</h3>
      <p className="text-xs text-muted">{film.titleEn}</p>
      <p className="mt-3 text-xs leading-5 text-muted">
        타잔 <span className="text-paper">{tarzan?.nameKo}</span>
        {" · "}제인 <span className="text-paper">{jane ? jane.nameKo : "—"}</span>
        <br />감독 {film.director}
      </p>
    </Link>
  );
}
