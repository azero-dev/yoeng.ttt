import styled from "styled-components"

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 18vh repeat(2, 1fr);
  height: 100vh;
  /* width: 100vw; */
  grid-gap: 0;

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 18vh repeat(4, 1fr);
    overflow: hidden;
  }
`

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 1 / 2;
  grid-column: 1 / 9;
  background-color: #f7c243;

  & p {
    font-size: 12vh;
    font-weight: bold;
    font-family: "Helvetica", sans-serif;

    @media screen and (max-width: 767px) {
      font-size: 8vh;
    }
  }

  @media screen and (max-width: 767px) {
    grid-row: 1 / 2;
    grid-column: 1 / 5;
  }
`

export const ImageSection = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  cursor: not-allowed;

  & .img-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`
