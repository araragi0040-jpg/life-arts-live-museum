import { ArchiveCard } from "@/components/ArchiveCard";
import { ArchiveCTA } from "@/components/ArchiveCTA";
import { InstagramCTA } from "@/components/InstagramCTA";
import { SectionTitle } from "@/components/SectionTitle";
import { events } from "@/data/events";
import { nextLive } from "@/data/nextLive";
import { siteData } from "@/data/site";

export default function ArchivePage() {
  const publishedEvents = events
    .filter((event) => event.isPublished)
    .sort((a, b) => b.number - a.number);

  const eventsByYear = publishedEvents.reduce<Record<number, typeof publishedEvents>>((acc, event) => {
    acc[event.year] = acc[event.year] ? [...acc[event.year], event] : [event];
    return acc;
  }, {});

  const years = Object.keys(eventsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <main className="sub-page">
      <section className="page-hero page-hero--simple">
        <div className="container">
          <SectionTitle
            eyebrow="Archives"
            title="これまでのLIFE ARTS LIVE"
            description="その夜ごとに生まれた表現と、そこに集まった人たちの記録。"
          />
        </div>
      </section>

      <section className="section section--compact">
        <div className="container archive-list">
          {years.map((year) => (
            <div className="year-block" key={year}>
              <h2 className="year-block__title">{year}</h2>
              <div className="archive-grid archive-grid--two">
                {eventsByYear[year].map((event) => (
                  <ArchiveCard event={event} key={event.id} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section archive-note">
        <div className="container archive-note__inner">
          <h2>過去の回も、順次追加予定です。</h2>
          <p>LIFE ARTS LIVEのこれまでの記録を、少しずつこの場所に残していきます。</p>
        </div>
      </section>

      <InstagramCTA instagramUrl={siteData.instagramUrl} />
      <ArchiveCTA
        title="次のLIFE ARTS LIVEへ"
        text="写真の中にある空気を、次はその場で感じてみませんか。"
        primaryHref="/#next-live"
        primaryLabel={`${nextLive.title}を見る`}
        secondaryHref="/"
        secondaryLabel="トップへ戻る"
      />
    </main>
  );
}
