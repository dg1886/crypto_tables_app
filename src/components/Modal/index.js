import { ClickOutsideBackground } from "../CommonUI/ClickOutsideBackground";
import FlexBox from "../CommonUI/FlexBox";
import Typography from "../Typography";
import { CloseButton, ModalContainer } from "./styled";

const Modal = ({
  title, children, active, hideModal,
}) => {
  return (
    <>
      {active && (
        <div>
          <ClickOutsideBackground onClick={hideModal} />
          <ModalContainer>
            <FlexBox backColor="lightGrey" justifyContent="space-between" padding="0 0.3rem 0.6rem 0">
              <Typography variant="bold_16px">{title}</Typography>
              <CloseButton onClick={hideModal}>X</CloseButton>
            </FlexBox>
            <Typography variant="normal_14px">{children}</Typography>
          </ModalContainer>
        </div>
      )}
    </>
  );
};

export default Modal;
