import { useEffect } from "react";

import ErrorIcon from "../CommonUI/Icons/Error";
import Typography from "../CommonUI/Typography";
import { Message, TextWrapper } from "./style";

const Error = ({ message, onClose, options = {} }) => {
  useEffect(() => {
    if (!options.autoClose) {
      return null;
    }

    const timeOutId = setTimeout(() => onClose(), options.delay);

    return () => clearTimeout(timeOutId);
  }, []);
  return (
    <Message onClick={onClose}>
      <ErrorIcon />
      <TextWrapper>
        <Typography variant="natification_bold" padding="0 0.5rem">Service is wrong!</Typography>
        <Typography variant="natification" padding="0 0.5rem">{message}</Typography>
      </TextWrapper>
    </Message>
  );
};

Error.defaultProps = { message: "mo message", options: { autoClose: true, delay: 5000 } };

export default Error;
