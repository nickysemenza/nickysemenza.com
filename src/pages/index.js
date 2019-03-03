import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Nicky Semenza"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        I'm a software engineer at{' '}
        <a href="https://cloudflare.com" target="_blank">
          Cloudflare
        </a>
        , working on PKI management for our customers - automated issuance,
        validation, and renewal of SSL Certificates for millions of hostnames.
        <br /> I mostly work in a golang + Kubernetes + TypeScript + React
        environment - you can expect content in that realm here. I try to stay
        active on <a href="https://github.com/nickysemenza">GitHub</a>
        <br />
        <Link to="posts">View all posts</Link>
        <br />
        <h3>cooking</h3>
        When I'm at home but not at my desk, i'm probably in the kitchen! I
        don't have much in terms of posts in that category <i>yet</i> though.
        <h3>photography</h3>
        I enjoy photography as well - at Purdue I did lots of work in
        photojournalism and sports photography, but these days I mostly just
        take pictures of my cooking and the great outdoors.
        <iframe
          src="https://www.nicky.photos/frame/slideshow?key=wXtF6f&autoStart=1&captions=1&navigation=1&playButton=0&randomize=0&speed=3&transition=fade&transitionSpeed=2"
          width="100%"
          height="600"
          frameborder="no"
          scrolling="no"
        />
        <br />
        It's scarce but... <Link to="posts">view all posts</Link>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
