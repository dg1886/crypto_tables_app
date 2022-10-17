import { selector } from "recoil";

import { apiKeysState, defaultApiKeyState } from "../atoms/apiKeysState";

export const apiKeysSelector = selector({
  key: "api/apiKeysSelector",
  get: ({ get }) => {
    const keys = get(apiKeysState);
    const currentKey = get(defaultApiKeyState);
    let newKey = currentKey;

    while (newKey === currentKey) {
      newKey = keys[Math.floor(Math.random() * keys.length)];
    }

    return newKey;
  },
});
