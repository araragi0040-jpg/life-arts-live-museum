import { ArchiveCard } from "@/components/ArchiveCard";
import { ArchiveCTA } from "@/components/ArchiveCTA";
import { HeroSlider } from "@/components/HeroSlider";
import { InstagramCTA } from "@/components/InstagramCTA";
import { NextLiveBlock } from "@/components/NextLiveBlock";
import { PerformerCard } from "@/components/PerformerCard";
import { SectionTitle } from "@/components/SectionTitle";
import { events } from "@/data/events";
import { nextLive } from "@/data/nextLive";
import { performers } from "@/data/performers";
import { siteData } from "@/data/site";

export default function HomePage() {
  const featuredEvents = events
    .filter((event) => event.isPublished)
    .sort((a, b) => b.number - a.number)
    .slice(0, 2);

  const nextPerformers = performers.filter(
    (performer) => performer.isPublished && nextLive.performers.includes(performer.id),
  );

  return (
    <main>
      <HeroSlider
        images={siteData.heroImages}
        mainCopy={siteData.mainCopy}
        subCopy={siteData.subCopy}
        hostMessage={siteData.hostMessage}
      />

      <section className="section about-section" id="about">
        <div className="container about-section__inner">
          <div>
            <SectionTitle eyebrow="About" title={siteData.aboutTitle} />
            <p className="about-section__text">{siteData.aboutText}</p>
          </div>
          <img src={siteData.aboutImage} alt="LIFE ARTS LIVEの雰囲気写真" className="about-section__image" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Past Archives"
            title="これまでのLIFE ARTS LIVE"
            description="写真から、その夜に生まれた表現の空気をたどれます。"
          />
          <div className="archive-grid archive-grid--two">
            {featuredEvents.map((event) => (
              <ArchiveCard event={event} key={event.id} />
            ))}
          </div>
        </div>
      </section>

      <NextLiveBlock nextLive={nextLive} />

      <section className="section performers-section">
        <div className="container">
          <SectionTitle
            eyebrow="Next Performers"
            title="次回出演者"
            description="出演者に興味を持つことが、観に行く理由になるように。"
          />
          <div className="performer-scroll">
            {nextPerformers.map((performer) => (
              <PerformerCard performer={performer} key={performer.id} />
            ))}
          </div>
        </div>
      </section>

      <InstagramCTA instagramUrl={siteData.instagramUrl} />
      <ArchiveCTA />
    </main>
  );
}
