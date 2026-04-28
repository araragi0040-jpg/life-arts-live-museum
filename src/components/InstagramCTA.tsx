import { Button } from "./Button";

type InstagramCTAProps = {
  instagramUrl: string;
};

export function InstagramCTA({ instagramUrl }: InstagramCTAProps) {
  return (
    <section className="section instagram-cta">
      <div className="container instagram-cta__inner">
        <p className="section-title__eyebrow">Follow LIFE ARTS LIVE</p>
        <h2>Instagramで、次の空気を追いかける</h2>
        <p>次回のお知らせや、当日の空気はInstagramで発信していきます。</p>
        <Button href={instagramUrl} variant="secondary">
          Instagramを見る
        </Button>
      </div>
    </section>
  );
}
