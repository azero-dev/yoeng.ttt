import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 200;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 1024px) and (orientation: landscape) {
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 1024px) and (orientation: landscape) {
  }
`

export const Box = styled.div`
  align-self: center;
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: 0 0 100px 20px rgba(0, 0, 0, 0.6);
  @media screen and (max-width: 1024px) {
    box-shadow: none;
    background-color: transparent;
  }
  
  & .gatsby-image-wrapper img {
    display: block;
    position: absolute;
    top: 0;
    height: 95vh;
    width: auto;
    margin: 0 auto;
    transform: ${props => {
      const zoomed = props.children.props.scale
      const xPos = props.children.props.xPos
      const yPos = props.children.props.yPos
      if (props.children.props.scale === 1) {
        return null
      } else {
        return `scale(${zoomed}, ${zoomed}) translate(${xPos}px, ${yPos}px)`
      }
    }};
    @media screen and (max-width: 1024px) {
      height: auto;
      max-width: 95vw;
    }
  }
`

export const InfoText = styled.div`
  display: block;
  position: fixed;
  top: 5px;
  right: 10px;
  z-index: 201;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export const Texto = styled.p`
  color: #fff;
  font-family: "Helvetica", sans-serif;
`