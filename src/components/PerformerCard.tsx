import type { Performer } from "@/types";

type PerformerCardProps = {
  performer: Performer;
  compact?: boolean;
};

export function PerformerCard({ performer, compact = false }: PerformerCardProps) {
  return (
    <article className={`performer-card ${compact ? "performer-card--compact" : ""}`}>
      {!compact && performer.image ? (
        <img src={performer.image} alt={`${performer.name}の写真`} className="performer-card__image" />
      ) : null}
      <div className="performer-card__body">
        <h3>{performer.name}</h3>
        <div className="tag-list" aria-label="表現ジャンル">
          {performer.genre.map((genre) => (
            <span className="tag" key={genre}>#{genre}</span>
          ))}
        </div>
        {!compact && performer.shortBio ? <p>{performer.shortBio}</p> : null}
        {performer.sns.instagram ? (
          <a className="performer-card__link" href={performer.sns.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        ) : null}
      </div>
    </article>
  );
}
