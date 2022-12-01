import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_wrapper">
        <h1 className="footer_title">
          Servicio Social 2022 - Noche de estrellas
        </h1>
        <div className="footer_links">
          <p className="footer_author_name">App realizada por </p>
          <Link
            href="https://www.linkedin.com/in/juanglezf/"
            className="footer_author_link"
          >
            Juan Gonzalez
          </Link>
        </div>
      </div>
    </div>
  )
}
