import React from 'react';
// import Header from "./header/header";
import Header from "../components/Header";
import Heading from "../components/Heading";


export default function Home() {
  return (
      <React.Fragment>
        <Header/>
        <main>
          <div>Content test Content</div>
            <Heading tag='' text='Test'/>
        </main>
        <footer>
          <h3>footer</h3>
        </footer>
      </React.Fragment>
  )
}
