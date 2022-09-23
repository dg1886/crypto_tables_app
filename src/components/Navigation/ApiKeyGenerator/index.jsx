import { useRecoilValue, useSetRecoilState } from "recoil";

import { defaultApiKeyState } from "../../../state/atoms/apiKeysState";
import { apiKeysSelector } from "../../../state/selectors/apiKeysSelectors";
import Typography from "../../CommonUI/Typography";
import { GeneratorBtnWrapper } from "./styled";

const ApiKeyGenerator = () => {
  const initialApiKey = useSetRecoilState(defaultApiKeyState);
  const randomKey = useRecoilValue(apiKeysSelector);

  const setApiKey = () => {
    initialApiKey(randomKey);
  };

  return (
    <GeneratorBtnWrapper onClick={setApiKey}>
      <Typography variant="bold_16px" userSelect="none">
        Generate key
      </Typography>
    </GeneratorBtnWrapper>
  );
};

export default ApiKeyGenerator;
