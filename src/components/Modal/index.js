import { ClickOutsideBackground } from "../CommonUI/ClickOutsideBackground";
import FlexBox from "../CommonUI/FlexBox";
import { Subtitle } from "../Text/Subtitle";
import { TextRegular } from "../Text/TextRegular";
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
            <FlexBox bgColor="lightGrey" justifyContent="space-between" padding="0 0.3rem 0.6rem 0">
              <Subtitle color="darkGrey">{title}</Subtitle>
              <CloseButton onClick={hideModal}>X</CloseButton>
            </FlexBox>
            <TextRegular color="darkGrey">{children}</TextRegular>
          </ModalContainer>
        </div>
      )}
    </>
  );
};

export default Modal;
