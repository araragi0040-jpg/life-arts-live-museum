import type { Event } from "@/types";
import { formatDate } from "@/utils/formatDate";

type EventInfoProps = {
  event: Event;
  performerCount: number;
};

export function EventInfo({ event, performerCount }: EventInfoProps) {
  return (
    <div className="event-info">
      <dl>
        <div>
          <dt>開催日</dt>
          <dd>{formatDate(event.date)}</dd>
        </div>
        <div>
          <dt>会場</dt>
          <dd>{event.venue}</dd>
        </div>
        <div>
          <dt>回数</dt>
          <dd>LIFE ARTS LIVE 第{event.number}回</dd>
        </div>
        <div>
          <dt>出演者</dt>
          <dd>{performerCount}組</dd>
        </div>
      </dl>
    </div>
  );
}
