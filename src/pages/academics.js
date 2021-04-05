import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Academics = () => (
  <Layout>
    <SEO title="Academics" />
    <h1>Academics</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae metus ac dui vehicula ultrices suscipit a orci. Maecenas in tellus ullamcorper, consectetur urna id, interdum diam. 
      Vivamus mattis orci arcu, sit amet elementum leo venenatis in. Maecenas eget consectetur lacus, nec volutpat quam. Aliquam placerat tincidunt risus nec hendrerit. Proin ac tempus ligula. 
      Vestibulum dolor augue, elementum ut tortor vitae, mollis pulvinar orci. Etiam est tellus, scelerisque et nunc bibendum, malesuada consequat massa. Vivamus eget suscipit urna, ut suscipit enim. 
      Vestibulum et enim lectus. Donec pulvinar vestibulum mi, eget iaculis ante vehicula eu. Aenean eleifend luctus sem eget commodo.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Academics
