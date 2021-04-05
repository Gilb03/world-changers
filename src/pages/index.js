import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Index = () => (
  <Layout>
    <SEO title="Home" />
    <p>"Where Christian scholars take flight"</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <article>
        <p>NOW ENROLLING</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Aliquam vitae metus ac dui vehicula ultrices suscipit a orci. 
          Maecenas in tellus ullamcorper, consectetur urna id, interdum diam. </p>
      </article>
     <Image /> 
    </div>
    <div>

    </div>
   {/* <h1>“Train up a child in the way he should go and when he is old he will not depart from it.”
       – Proverbs 22:6</h1>*/} 
    <section>
      <h2>Navigate Site</h2>
      <ul>
      <li>
      <Link to="/">Home</Link> 
      </li>
      <li>
      <Link to="/about/">About Us</Link> 
      </li>
       <li>
          <Link to="/admission/">Admission</Link>
       </li>
        <li>
          <Link to="/academics/">Academics</Link>
        </li>
      </ul>
      <h2>Upcoming Events</h2>
    </section>
   <p>
     Events will be posted here. 
   </p>
  </Layout>
)

export default Index
