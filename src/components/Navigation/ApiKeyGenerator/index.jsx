import { useContext } from "react";

import { KeysContext } from "../../../services/keyContext";
import Typography from "../../CommonUI/Typography";
import { GeneratorBtnWrapper } from "./styled";

const ApiKeyGenerator = () => {
  const { randomApiKeys } = useContext(KeysContext);

  return (
    <GeneratorBtnWrapper onClick={randomApiKeys}>
      <Typography variant="bold_16px" userSelect="none">
        Generate key
      </Typography>
    </GeneratorBtnWrapper>
  );
};

export default ApiKeyGenerator;
