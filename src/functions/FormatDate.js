import { format, fromUnixTime } from "date-fns";

export const formatDate = (date) => {
  return format(fromUnixTime(date), "PPP");
};
