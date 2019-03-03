import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

class TagDetail extends React.Component {
  render() {
    const { tag } = this.props.pageContext
    const { edges, totalCount } = this.props.data.allMarkdownRemark
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with "${tag}"`
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div>
          <h1>{tagHeader}</h1>

          <ul>
            {edges.map(({ node }) => {
              const { title } = node.frontmatter
              const path = node.fields.slug
              return (
                <li key={path}>
                  <Link to={path}>{title}</Link>
                </li>
              )
            })}
          </ul>
          <Link to="/posts">All tags</Link>
        </div>
      </Layout>
    )
  }
}

export default TagDetail

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
