import type { NextLive } from "@/types";
import { formatDate } from "@/utils/formatDate";
import { Button } from "./Button";
import { SectionTitle } from "./SectionTitle";

type NextLiveBlockProps = {
  nextLive: NextLive;
};

export function NextLiveBlock({ nextLive }: NextLiveBlockProps) {
  return (
    <section className="section next-live" id="next-live">
      <div className="container next-live__inner">
        <SectionTitle eyebrow="Next Live" title="次回開催情報" />
        <div className="next-live__card">
          <p className="next-live__label">Next Stage</p>
          <h2>{nextLive.title}</h2>
          <dl className="next-live__info">
            <div>
              <dt>開催日</dt>
              <dd>{formatDate(nextLive.date)}</dd>
            </div>
            <div>
              <dt>会場</dt>
              <dd>{nextLive.venue}</dd>
            </div>
            {(nextLive.openTime || nextLive.startTime) && (
              <div>
                <dt>時間</dt>
                <dd>
                  OPEN {nextLive.openTime ?? "--:--"} / START {nextLive.startTime ?? "--:--"}
                </dd>
              </div>
            )}
            {nextLive.price && (
              <div>
                <dt>料金</dt>
                <dd>{nextLive.price}</dd>
              </div>
            )}
          </dl>
          {nextLive.note ? <p className="next-live__note">{nextLive.note}</p> : null}
          <div className="button-row">
            <Button href={nextLive.contactUrl}>会場詳細</Button>
            <Button href={nextLive.instagramUrl} variant="secondary">
              観覧の申し込み
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
