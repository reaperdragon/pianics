import React from 'react'

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer>
      Pianics {currentYear}
    </footer>
  )
}

export default Footer