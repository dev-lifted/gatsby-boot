import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const About = () => {
  return (
    <div>
      <Layout>
        <h1>About</h1>
        <Link to="/contact">Contact</Link>
      </Layout>
    </div>
  )
}

export default About
