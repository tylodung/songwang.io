import React from "react"
import Helmet from "react-helmet"
import { Header } from "theme/containers/Header.js"
import { ContentContainer } from "theme/containers/ContentContainer.js"
import { TagSection } from "components/TagSection.jsx"
import Comment from "components/Comment.jsx"

class BlogPostRoute extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { fields: { slug } } = post

    return (
      <div>
        <Helmet
          title={`${post.frontmatter.title}`}
          meta={[
            {
              name: `description`,
              content: post.excerpt || post.frontmatter.description,
            },
          ]}
        />
        <div>
          <Header>
            {slug.slice(5, 12) === `/links/` ? (
              <div>
                <h1>
                  <a
                    rel="noopener noreferrer"
                    target="__blank"
                    href={post.frontmatter.link}
                  >
                    {post.frontmatter.title}
                  </a>
                </h1>
                <small>{post.frontmatter.date}</small>
              </div>
            ) : (
              <div>
                <h1>{post.frontmatter.title}</h1>
                {post.frontmatter.description ? (
                  <p>{post.frontmatter.description}</p>
                ) : (
                  <small>{post.frontmatter.date}</small>
                )}
              </div>
            )}
          </Header>
          <ContentContainer dangerouslySetInnerHTML={{ __html: post.html }} />
          <TagSection {...this.props} />
          <Comment />
        </div>
      </div>
    )
  }
}

export default BlogPostRoute

// eslint-disable-next-line
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        author
        homeCity
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        tagSlugs
        slug
      }
      frontmatter {
        title
        layout
        tags
        description
        link
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
