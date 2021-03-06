import styled from "styled-components"
import { media } from "theme/utils/media"

const Base = styled.div`
  h2 {
    font-size: 1.99rem;
    margin-top: 2em;
  }

  h3 {
    // font-weight: 600;
    font-size: 1.324rem !important;
    margin-top: 0.5em;
    text-size-adjust: 100%;
  }

  h3:nth-last-child(2) {
    margin-bottom: 0.8em;
  }
`

const Wrapper = styled.div`background-color: red;`

export const NoteContainer = Base.extend`
  p {
    cursor: default;
    text-size-adjust: 100%;
  }
`

export const BlogContainer = Base.extend`
  p {
    cursor: default;
    text-size-adjust: 100%;
    padding-bottom: .8em;
    // border-bottom: 1px solid #f2f2f2;
  }
`

export const LinkContainer = Base.extend`
  section {
    display: flex;
    flex-wrap: wrap;

    h3 {
      width: 50%;
      font-size: 1.2em;
      ${media.tablet`
        width: 100%;
      `};
    }
  }
`

export const ProjectContainer = Base.extend`
  width: 100%;
  letter-spacing: 0.02em;
  section {
    display: flex;
    flex-wrap: wrap;

    h3 {
      font-weight: 600;
      width: 33.3%;
      font-size: 1.2em;
      ${media.tablet`
        width: 50%;
      `} ${media.phone`
        width: 100%;
      `};
    }
  }
`
