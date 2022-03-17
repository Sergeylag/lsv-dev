import React from 'react';
import Header from "./header/header";
import Head from 'next/head'
import Image from 'next/image'

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
