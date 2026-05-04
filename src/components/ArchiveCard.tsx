import Link from "next/link";
import type { Event } from "@/types";
import { formatDate } from "@/utils/formatDate";
import { Button } from "./Button";

type ArchiveCardProps = {
  event: Event;
};

export function ArchiveCard({ event }: ArchiveCardProps) {
  return (
    <article className="archive-card">
      <Link href={`/archive/${event.id}`} className="archive-card__image-link" aria-label={`${event.title}の詳細を見る`}>
        <img src={event.coverImage} alt={`${event.title}の代表写真`} className="archive-card__image" />
      </Link>
      <div className="archive-card__body">
        <p className="archive-card__meta">{formatDate(event.date)}</p>
        <h3>{event.title}</h3>
        {event.shortText && (
        <p className="archive-card__text">{event.shortText}</p>
        )}
        <p className="archive-card__venue">会場：{event.venue}</p>
        <Button href={`/archive/${event.id}`} variant="secondary">
          詳細を見る
        </Button>
      </div>
    </article>
  );
}
