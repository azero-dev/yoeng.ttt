import * as React from "react"
import { useState } from "react"
import { MessageBanner, MessageText, CloseButton, OpenButton } from "./ContainerElements"
import { graphql, useStaticQuery } from 'gatsby';

const Panel = () => {
  const queryMenuImg = useStaticQuery(graphql`
    query SecondQuery {
      allFile(filter: {name: {eq: "menu"}}) {
        edges {
          node {
            id
            publicURL
          }
        }
      }
    }
  `);
  const menuImg = queryMenuImg.allFile.edges[0].node.publicURL;

  //Show banner State
  const [showBanner, setShowBanner] = useState(false)
  
  //Change banner state
  const handleClose = () => {
    setShowBanner(!showBanner)
  }

  return (
    <>
      {showBanner ? (
        <MessageBanner>
          <MessageText>Instagram: <a href="https://instagram.com/yoeng.ttt">@yoeng.ttt</a></MessageText>
          <CloseButton onClick={handleClose}>X</CloseButton>
        </MessageBanner>
      ) : (
        <OpenButton onClick={handleClose} imageUrl={menuImg} />
      )}
    </>
  )
}

export default Panel


