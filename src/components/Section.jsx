import React from 'react'

const Section = ({children, className}) => {
  return (
    <section className={`${className} py-27.5`}>
        {children}
    </section>
  )
}

export default Section