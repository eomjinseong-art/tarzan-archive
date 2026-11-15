import { FilmCard } from "@/components/FilmCard";
import { eras } from "@/data/eras";
import { films, filmsByEra } from "@/data/films";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "타잔 영화 전체 목록",
  description: `1918년부터 2016년까지 타잔 영화 ${films.length}편. 시대별로 연도, 감독, 타잔·제인 배우를 정리했습니다.`,
  path: "/films",
});

export default function FilmsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-serif text-3xl text-gold">타잔 영화 전체 목록</h1>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
        극장 장편, 연속극(시리얼), 애니메이션, TV 에피소드를 묶은 극장판까지 {films.length}편입니다. 출처가 확인되지 않은 작품과 비공인 작품은 넣지 않았습니다.
      </p>
      {eras.map((era) => (
        <section key={era.id} className="mt-10" id={era.id}>
          <h2 className="font-serif text-xl">{era.label} <span className="text-sm text-gold">{era.range}</span></h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {filmsByEra(era.id).map((film) => <FilmCard key={film.slug} film={film} />)}
          </div>
        </section>
      ))}
    </div>
  );
}
