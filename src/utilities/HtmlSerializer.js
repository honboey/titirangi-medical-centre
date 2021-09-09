import * as React from 'react'
import { Link } from 'gatsby'
import { Elements } from 'prismic-richtext'
import { Link as PrismicLink } from 'prismic-reactjs'
import { linkResolver } from './linkResolver'

// -- HTML Serializer
function HtmlSerializer(type, element, content, children, key) {
  switch (type) {

    case Elements.paragraph: // Paragraph
      return <p key={key} className="mb-4">{children}</p>

    case Elements.heading3: // Heading 3
      return <h3 key={key} className="font-display text-2xl md:text-3xl mb-4">{children}</h3>

    case Elements.heading4: // Heading 4
      return <h4 key={key} className="font-display text-2xl md:text-3xl mb-4">{children}</h4>

    case Elements.hyperlink: // Hyperlinks
      const url = PrismicLink.url(element.data, linkResolver)

      if (element.data.link_type === 'Document') {
        return (
          <Link key={key} to={url}>
            {content}
          </Link>
        )
      }
      return (
        <a
          key={key}
          href={url}
          target={element.data.target}
          rel={element.data.target ? 'noopener' : undefined}
          className="link-class"
        >
          {children}
        </a>
      )
      
    case Elements.list: // Unordered List
      return <ul key={key} className="mb-4">{children}</ul>

    default:
      // Always include a default that returns null
      return null
  }
}

export default HtmlSerializer