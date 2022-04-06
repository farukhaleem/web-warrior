import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Projects = ({ data }) => {

  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects} >
          {
            projects.map(project => {

              const image = getImage(project.frontmatter.thumb)
              console.log(image)
              return (
                <Link to={'/projects/' + project.frontmatter.slug} key={project.id}>
                  <div>
                    <h3>{project.frontmatter.title}</h3>
                    <p>{project.frontmatter.stack}</p>
                  </div>
                  <GatsbyImage image={image} alt={project.frontmatter.title} />

                </Link>
              )
            })
          }
        </div>
        <p>Like what you see! contact us at
          <a
            href={'mailto:' + contact}
            target="_blank"
            rel="noreferrer"
          >
            {contact}
          </a>
        </p>
      </div>
    </Layout>
  );
}

export default Projects

export const query = graphql`
query ProjectsPage {
  projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        slug
        stack
        title
        date
        thumb {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
            )
          }
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}

`