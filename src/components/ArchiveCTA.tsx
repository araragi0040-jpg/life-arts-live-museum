import { Button } from "./Button";

type ArchiveCTAProps = {
  title?: string;
  text?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function ArchiveCTA({
  title = "これまでのLIFE ARTS LIVEを見る",
  text = "写真と記録から、これまでに生まれた表現の場をたどれます。",
  primaryHref = "/archive",
  primaryLabel = "過去回一覧へ",
  secondaryHref,
  secondaryLabel,
}: ArchiveCTAProps) {
  return (
    <section className="section archive-cta">
      <div className="container archive-cta__inner">
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="button-row button-row--center">
          <Button href={primaryHref}>{primaryLabel}</Button>
          {secondaryHref && secondaryLabel ? (
            <Button href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
