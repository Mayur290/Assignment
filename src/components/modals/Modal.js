import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import "./Model.css";

const Background = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalWrapper = styled.div`
  width: 600px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;

  position: relative;
  z-index: 10;
  border-radius: 6px;
`;
const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: -35px;
  color: rgb(0, 63, 126);
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 100%;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

function Modal({ showModal, setShowModal, dataModal }) {
  return (
    <>
      {showModal && dataModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <div className="video_player">
              <iframe src={dataModal.videolink} />
            </div>

            <div className="video_details">
              <h2>{dataModal.title}</h2>
              <div>
                {dataModal.tags && dataModal.tags.map((m) => <span>{m}</span>)}
              </div>
              <p>{dataModal.description}</p>
            </div>

            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
}

export default Modal;
