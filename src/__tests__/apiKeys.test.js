import { act, renderRecoilHook } from "react-recoil-hooks-testing-library";
import { useRecoilState, useRecoilValue } from "recoil";

import { defaultApiKeyState } from "../state/atoms/apiKeysState";
import { apiKeysSelector } from "../state/selectors/apiKeysSelectors";

export const useRecoilKey = () => {
  const [getKey, setKey] = useRecoilState(defaultApiKeyState);

  return {
    getKey,
    setKey,
  };
};

describe("api keys", () => {
  it("returns the default key value", () => {
    const { result } = renderRecoilHook(() => useRecoilValue(defaultApiKeyState));
    expect(result.current)
      .toBe(process.env.REACT_APP_API_KEY1);
  });

  it("default key should be changed", () => {
    const { result } = renderRecoilHook(useRecoilKey);
    const { result: { current: randomKey } } = renderRecoilHook(() => useRecoilValue(apiKeysSelector));

    act(() => {
      result.current.setKey(randomKey);
    });

    expect(result.current.getKey)
      .not
      .toBe(process.env.REACT_APP_API_KEY1);
  });
});
