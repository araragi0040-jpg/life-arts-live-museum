import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArchiveCTA } from "@/components/ArchiveCTA";
import { Button } from "@/components/Button";
import { EventInfo } from "@/components/EventInfo";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PerformerCard } from "@/components/PerformerCard";
import { SectionTitle } from "@/components/SectionTitle";
import { events } from "@/data/events";
import { performers } from "@/data/performers";
import { formatDate } from "@/utils/formatDate";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return events.filter((event) => event.isPublished).map((event) => ({ id: event.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const event = events.find((item) => item.id === id);

  if (!event) {
    return { title: "Archive | LIFE ARTS LIVE" };
  }

  return {
    title: `${event.title} | LIFE ARTS LIVE`,
    description: event.themeText,
  };
}

export default async function EventDetailPage({ params }: PageProps) {
  const { id } = await params;
  const event = events.find((item) => item.id === id);

  if (!event || !event.isPublished) {
    notFound();
  }

  const eventPerformers = performers.filter(
    (performer) => performer.isPublished && event.performers.includes(performer.id),
  );

  const otherEvents = events
    .filter((item) => item.isPublished && item.id !== event.id)
    .sort((a, b) => b.number - a.number)
    .slice(0, 2);

  return (
    <main className="sub-page event-detail">
      <section className="event-cover">
        <div className="container event-cover__inner">
          <img src={event.coverImage} alt={`${event.title}の代表写真`} className="event-cover__image" />
          <div className="event-cover__text">
            <p className="event-cover__meta">{formatDate(event.date)} / {event.venue}</p>
            <h1>{event.title}</h1>
            <p>{event.themeText}</p>
          </div>
        </div>
      </section>

      <section className="section section--compact">
        <div className="container">
          <SectionTitle eyebrow="Event Info" title="開催情報" />
          <EventInfo event={event} performerCount={eventPerformers.length} />
        </div>
      </section>

      <section className="section section--compact">
        <div className="container">
          <SectionTitle eyebrow="Scenes" title="当日の空気" />
          <GalleryGrid images={event.galleryImages} title={event.title} />
        </div>
      </section>

      <section className="section section--compact performers-section">
        <div className="container">
          <SectionTitle eyebrow="Performers" title="出演者" />
          <div className="performer-list">
            {eventPerformers.map((performer) => (
              <PerformerCard performer={performer} compact key={performer.id} />
            ))}
          </div>
        </div>
      </section>

      {event.relatedLinks && event.relatedLinks.length > 0 ? (
        <section className="section section--compact links-section">
          <div className="container">
            <SectionTitle eyebrow="Links" title="関連リンク" />
            <div className="button-row">
              {event.relatedLinks.map((link) => (
                <Button href={link.url} variant="secondary" key={link.url}>
                  {link.label}
                </Button>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section section--compact more-archives">
        <div className="container">
          <SectionTitle eyebrow="More Archives" title="他の回を見る" />
          <div className="button-row">
            {otherEvents.map((item) => (
              <Button href={`/archive/${item.id}`} variant="secondary" key={item.id}>
                第{item.number}回を見る
              </Button>
            ))}
            <Button href="/archive" variant="secondary">過去回一覧へ</Button>
            <Button href="/#next-live">次回開催情報を見る</Button>
          </div>
        </div>
      </section>

      <ArchiveCTA
        title="写真の先にある、次の夜へ"
        text="過去の空気に触れたあと、次はその場で表現が立ち上がる瞬間を感じてみてください。"
        primaryHref="/#next-live"
        primaryLabel="次回開催情報を見る"
        secondaryHref="/archive"
        secondaryLabel="過去回一覧へ"
      />
    </main>
  );
}
