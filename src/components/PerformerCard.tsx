import type { Performer, SocialLink } from "@/types";

type PerformerCardProps = {
  performer: Performer;
  compact?: boolean;
};

function getSocialLinks(performer: Performer): SocialLink[] {
  if (performer.snsLinks && performer.snsLinks.length > 0) {
    return performer.snsLinks;
  }

  const links: SocialLink[] = [];

  if (performer.sns.instagram) {
    links.push({
      label: "Instagram",
      url: performer.sns.instagram,
      type: "instagram",
    });
  }

  if (performer.sns.x) {
    links.push({
      label: "X",
      url: performer.sns.x,
      type: "x",
    });
  }

  if (performer.sns.website) {
    links.push({
      label: "Website",
      url: performer.sns.website,
      type: "website",
    });
  }

  return links;
}

export function PerformerCard({ performer, compact = false }: PerformerCardProps) {
  const socialLinks = getSocialLinks(performer);

  return (
    <article className="performer-card">
      {performer.image && (
        <img
          src={performer.image}
          alt={performer.name}
          className="performer-card__image"
        />
      )}

      <div className="performer-card__body">
        <h3 className="performer-card__name">{performer.name}</h3>

        {performer.genre.length > 0 && (
          <div className="performer-card__genres">
            {performer.genre.map((genre) => (
              <span key={genre} className="performer-card__tag">
                #{genre}
              </span>
            ))}
          </div>
        )}

        {!compact && performer.shortBio && (
          <p className="performer-card__bio">{performer.shortBio}</p>
        )}

        {socialLinks.length > 0 && (
          <div className="performer-card__links">
            {socialLinks.map((link) => (
              <a
                key={`${link.label}-${link.url}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="performer-card__link"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
