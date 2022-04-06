import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from './../styles/project-details.module.css'

export default function ProjectDetails({ data }) {
  
  const { html  } = data.markdownRemark
  const { title, stack } = data.markdownRemark.frontmatter
  const image = getImage(data.markdownRemark.frontmatter.featuredImg)

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
        <GatsbyImage image={image} alt={title} />
        </div>
        <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
query ProjectsDetail($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      slug
      stack
      title
      featuredImg {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED, quality: 100
          )
        }
      }
    }
  }
}
`