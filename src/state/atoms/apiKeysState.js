import { atom } from "recoil";

export const apiKeysState = atom({
  key: "api/apiKeysState",
  default: [
    process.env.REACT_APP_API_KEY1,
    process.env.REACT_APP_API_KEY2,
    process.env.REACT_APP_API_KEY3,
    process.env.REACT_APP_API_KEY4,
    process.env.REACT_APP_API_KEY5,
    process.env.REACT_APP_API_KEY6,
    process.env.REACT_APP_API_KEY7,
    process.env.REACT_APP_API_KEY8,
    process.env.REACT_APP_API_KEY9,
    process.env.REACT_APP_API_KEY10,
  ],
});

export const defaultApiKeyState = atom({
  key: "api/defaultApiKeyState",
  default: process.env.REACT_APP_API_KEY1,
});
