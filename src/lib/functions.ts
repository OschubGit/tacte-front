import { Sessions } from "./types";

export const hasMoreThanHalf = (session: Sessions): boolean => {
    return session.current_reserves > session.max_allowed_reserves / 2;
};
