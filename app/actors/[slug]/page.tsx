import Link from "next/link";
import { notFound } from "next/navigation";
import { actorBySlug, actors } from "@/data/actors";
import { eraById } from "@/data/eras";
import { films } from "@/data/films";
import { pageMetadata } from "@/lib/seo";

const ROLE_LABEL = { tarzan: "타잔", jane: "제인", boy: "보이" } as const;

export function generateStaticParams() {
  return actors.map((actor) => ({ slug: actor.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const actor = actorBySlug(slug);
  if (!actor) return {};
  return pageMetadata({
    title: `${actor.nameKo} — ${ROLE_LABEL[actor.role]} 배우`,
    description: `${ROLE_LABEL[actor.role]} 배우 ${actor.nameKo}(${actor.nameEn}). ${actor.bio}`,
    path: `/actors/${actor.slug}`,
  });
}

export default async function ActorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const actor = actorBySlug(slug);
  if (!actor) notFound();
  const short = actor.nameKo.split(" (")[0];
  const list = films
    .filter((f) => f.tarzan === actor.slug || f.jane === actor.slug || f.cast.some((c) => c.includes(short)))
    .sort((a, b) => a.year - b.year);
  const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: actor.nameEn, alternateName: actor.nameKo, sameAs: actor.wiki };

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="text-xs text-muted">
        <Link href="/" className="hover:text-gold">홈</Link> / <Link href="/actors" className="hover:text-gold">배우</Link>
      </nav>
      <p className="mt-6 text-xs text-leaf">{ROLE_LABEL[actor.role]} 배우</p>
      <h1 className="mt-1 font-serif text-3xl text-gold">{actor.nameKo}</h1>
      <p className="text-muted">{actor.nameEn} · {actor.life}</p>
      <p className="mt-6 leading-8">{actor.bio}</p>

      <h2 className="mt-10 font-serif text-xl">출연한 타잔 영화</h2>
      {list.length > 0 ? (
        <ul className="mt-3 divide-y divide-line rounded-lg border border-line bg-card">
          {list.map((film) => {
            const role = film.tarzan === actor.slug ? "타잔" : film.jane === actor.slug ? "제인" : film.cast.find((c) => c.includes(short))?.match(/\((.+)\)/)?.[1] ?? "출연";
            return (
              <li key={film.slug}>
                <Link href={`/films/${film.slug}`} className="flex gap-4 px-4 py-3 hover:bg-gold/5">
                  <span className="w-12 shrink-0 font-serif text-gold tabular-nums">{film.year}</span>
                  <span>
                    <span className="block">{film.titleKo}</span>
                    <span className="block text-xs text-muted">{film.titleEn} · {role} · {eraById(film.era).label}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="mt-3 text-sm text-muted">이 아카이브의 극장 영화 목록에는 없습니다.</p>
      )}
      {actor.extra && (
        <>
          <h2 className="mt-8 font-serif text-xl">그 밖의 타잔 출연</h2>
          <ul className="mt-3 list-disc pl-5 text-sm leading-7">{actor.extra.map((e) => <li key={e}>{e}</li>)}</ul>
        </>
      )}
      <p className="mt-10 text-xs text-muted">
        참고: <a href={actor.wiki} target="_blank" rel="noopener noreferrer" className="underline">Wikipedia — {actor.nameEn}</a>
      </p>
    </article>
  );
}
