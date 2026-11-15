import { COUPANG_URL } from "@/lib/site";

/** 본문 중간용 쿠팡 파트너스 카드 (광고). 한 페이지에 하나만 씁니다. */
export function CoupangCard() {
  return (
    <a
      href={COUPANG_URL}
      target="_blank"
      rel="sponsored noopener"
      aria-label="광고: 주말 영화 한 편과 함께할 간식 — 쿠팡에서 보기 (새 창)"
      className="my-8 block rounded-xl border border-line bg-card px-5 py-4 transition hover:-translate-y-0.5 hover:border-gold"
    >
      <span className="flex flex-wrap items-center gap-4">
        <span aria-hidden className="text-3xl leading-none">🌴</span>
        <span className="min-w-0 flex-[1_1_14rem]">
          <span className="block font-semibold leading-6">주말 정글 영화 한 편, 간식은 로켓배송으로</span>
          <span className="mt-0.5 block text-sm text-muted">Swing in for movie night snacks.</span>
        </span>
        <span aria-hidden className="shrink-0 rounded-full bg-[#e5322d] px-4 py-2 text-sm font-semibold text-white">쿠팡에서 보기</span>
      </span>
      <span className="mt-3 block text-[11px] leading-5 text-muted">
        <span className="mr-1 rounded border border-line px-1">광고</span>
        이 포스트는 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
      </span>
    </a>
  );
}
