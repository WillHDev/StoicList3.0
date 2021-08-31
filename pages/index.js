import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../styles/Home.module.css'

const ArrowFunction = _ => 
    <div>
      <h1>I'm an arrow function</h1>
    </div>



function CompA() {
  return (
    <>
    <ArrowFunction />
    <p>Hello Component A</p>
    </>
  )
}

//


class CompC extends React.Component {
  render() {
    return (
      <h1>CompC</h1>
    )
  }

}

const Home = () => {
  //[ stateValue, mutateState ]
  const [ myValue, setValue ] = useState(10);
 
  // const value = valueState[0];
  // const setValue = valueState[1];

    return (
      <>
      { myValue }
      <h1>Hello world</h1>
      <CompA />
      
      </>
    )
}


export default Home;