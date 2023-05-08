import styled, { keyframes } from "styled-components"

export const MessageBanner = styled.div`
  background-color: #ea4a41;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 80%;
  height: 80%;
  border: 4px solid #fff;
  z-index: 9999;
`
export const MessageText = styled.p`
  margin: 5px;
  text-align: center;
  font-weight: bold;
  font-family: "Tahoma", sans-serif;
  & a {
    color: #fff;
    text-decoration: none;
  }
`

export const CloseButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  top: 10px;
  right: 10px;
  font-weight: bold;

  @media screen and (max-width: 767px) {
    bottom: 10px;
    top: auto;
  }
`

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`

export const OpenButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 100px;
  height: 100px;
  padding: 10px;
  background-color: #f8d7da;
  color: red;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  animation: ${floatAnimation} 2s ease-in-out infinite;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 767px) {
    width: 50px;
    height: 50px;
  }
`
