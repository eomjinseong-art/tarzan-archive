import Link from "next/link";
import { ActorAvatar } from "@/components/ActorAvatar";
import { actors, type Actor } from "@/data/actors";
import { films } from "@/data/films";
import { pageMetadata } from "@/lib/seo";
import { CoupangCard } from "@/components/CoupangCard";

export const metadata = pageMetadata({
  title: "역대 타잔·제인 배우",
  description: "엘모 링컨부터 알렉산더 스카스가드까지 역대 타잔 배우, 이니드 마키부터 마고 로비까지 역대 제인 배우와 출연작을 정리했습니다.",
  path: "/actors",
});

function filmsOf(actor: Actor) {
  return films
    .filter((f) => f.tarzan === actor.slug || f.jane === actor.slug || f.cast.some((c) => c.includes(actor.nameKo.split(" (")[0])))
    .sort((a, b) => a.year - b.year);
}

function ActorGrid({ list }: { list: Actor[] }) {
  return (
    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((actor) => {
        const fs = filmsOf(actor);
        return (
          <Link key={actor.slug} href={`/actors/${actor.slug}`} className="flex gap-4 rounded-lg border border-line bg-card p-4 hover:border-gold/70">
            <ActorAvatar slug={actor.slug} name={actor.nameKo} size={64} />
            <span className="min-w-0">
            <p className="font-semibold">{actor.nameKo}</p>
            <p className="text-xs text-muted">{actor.nameEn} · {actor.life}</p>
            <p className="mt-2 text-xs leading-5 text-muted">
              {fs.length > 0 ? `${fs.length}편 · ${fs.map((f) => f.year).filter((y, i, a) => a.indexOf(y) === i).join(", ")}` : actor.extra?.join(", ")}
            </p>
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export default function ActorsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-serif text-3xl text-gold">역대 타잔·제인 배우</h1>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
        이 아카이브에 실린 영화 기준으로 정리했습니다. 올림픽 수영·육상 선수 출신이 유난히 많은 것이 타잔 배우의 특징입니다.
      </p>
      <section className="mt-10">
        <h2 className="font-serif text-2xl">타잔</h2>
        <ActorGrid list={actors.filter((a) => a.role === "tarzan")} />
      </section>
      <CoupangCard />
      <section className="mt-12">
        <h2 className="font-serif text-2xl">제인</h2>
        <ActorGrid list={actors.filter((a) => a.role === "jane")} />
      </section>
      <section className="mt-12">
        <h2 className="font-serif text-2xl">보이</h2>
        <ActorGrid list={actors.filter((a) => a.role === "boy")} />
      </section>
      <p className="mt-10 text-sm text-muted">
        TV에서 타잔을 맡은 조 라라, 울프 라슨, 트래비스 핌멜 등은 <Link href="/tv" className="underline hover:text-gold">TV 시리즈</Link>에 정리했습니다.
      </p>
    </div>
  );
}
