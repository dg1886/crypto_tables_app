import { selector } from "recoil";

import { apiKeysState } from "../atoms/apiKeysState";

export const apiKeysSelector = selector({
  key: "api/apiKeysSelector",
  get: ({ get }) => {
    const keys = get(apiKeysState);
    return () => keys[Math.floor(Math.random() * keys.length)];
  },
});
