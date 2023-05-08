import * as React from "react"
import { Menu, ContainerGrid, ImageSection } from "../Container/ContainerElements"

import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Container = () => {
  //Query images
  const pictures = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { absolutePath: {regex: "/images/"}}) {
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

  return (
    <ContainerGrid>
      <Menu>
        <p>YOENG.TTT</p>
      </Menu>
      {pics.map((img, index) => {
        return (
          <ImageSection key={index}>
            <GatsbyImage
              image={img.node.childImageSharp.gatsbyImageData}
              key={index}
              alt="Tattoo Image"
              className="img-wrap"
            />
          </ImageSection>
        )
      })}
    </ContainerGrid>
  )
}

export default Container
