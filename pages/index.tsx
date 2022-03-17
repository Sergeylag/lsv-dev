import React from 'react';
import Header from "./header/header";

export default function Home() {
  return (
      <React.Fragment>
        <Header/>
        <main>
          <div>Content test Content</div>
        </main>
        <footer>
          <h3>footer</h3>
        </footer>
      </React.Fragment>
  )
}
