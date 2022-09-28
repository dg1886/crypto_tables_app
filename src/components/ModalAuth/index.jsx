import Typography from "../CommonUI/Typography";
import {
  ClickOutsideBackground, CloseButton, ModalContainer, TittleWrapper,
} from "./style";

const Modal = ({
  title, children, active, hideModal,
}) => {
  return (
    <>
      {active && (
        <div>
          <ClickOutsideBackground onClick={hideModal} />
          <ModalContainer>
            <TittleWrapper justifyContent="space-between">
              <Typography variant="bold_16px">{title}</Typography>
              <CloseButton onClick={hideModal}>X</CloseButton>
            </TittleWrapper>
            <Typography variant="normal_14px">{children}</Typography>
          </ModalContainer>
        </div>
      )}
    </>
  );
};

export default Modal;
