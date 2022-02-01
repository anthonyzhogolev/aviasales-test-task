import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

export const formatPrice = (price: string): string => `${price} P`;

export const formatStopsCountLabel = (stopsCount: number): string => {
  switch (true) {
    case stopsCount === 1: {
      return `${stopsCount} пересадка`;
    }
    case stopsCount <= 4: {
      return `${stopsCount} пересадки`;
    }
    default: {
      return `${stopsCount} пересадок`;
    }
  }
};

export const formatFlightTime = (time: number): string =>
  dayjs.unix(time).format("H:mm");

export const formatDuration = (duration: number): string =>
  dayjs.duration(duration).format("Hч mм");

export const formatStops = (stops: string[]): string => stops.join(", ");
