import * as React from "react"
import { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { Menu, ContainerGrid, ImageSection } from "../Container/ContainerElements"
import FullScreenImage from "../FullScreenImage/index" 

const Container = () => {
  //Query images
  const pictures = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { absolutePath: { regex: "/images/" } }) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)
  const pics = pictures.allFile.edges

  //Viewer toggler
  const [viewerActive, setViewerActive] = useState(false)
  const viewerToggler = () => {
    setViewerActive(!viewerActive)
    console.log(sendpicture)
  }

  //Set pictureviewer
  const [sendpicture, setSendpicture] = useState("")

  //Keep background fixed while viewer open
  useEffect(() => {
    if (viewerActive) {
      const position = window.scrollY
      document.body.style.position = "fixed"
      document.body.style.top = `-${position}px`
      window.scroll(0, position)
    } else {
      const scrollY = document.body.style.top
      document.body.style.position = ""
      document.body.style.top = ""
      window.scrollTo(0, parseInt(scrollY || "0") * -1)
    }
  })

  return (
    <ContainerGrid>
      <Menu>
        <p>YOENG.TTT</p>
      </Menu>
      {pics.map((img, index) => {
        const imgId = img.node.childImageSharp.gatsbyImageData
        return (
          <ImageSection
            onClick={() => {
              viewerToggler()
              setSendpicture(imgId)
            }}
            key={index}
          >
            <GatsbyImage
              image={imgId}
              key={index}
              alt="Tattoo Image"
              className="img-wrap"
            />
          </ImageSection>
        )
      })}
      {viewerActive ? (
        <div onClick={viewerToggler} style={{ position: "fixed" }}>
          <FullScreenImage picture={sendpicture} />
        </div>
      ) : null}
    </ContainerGrid>
  )
}

export default Container
