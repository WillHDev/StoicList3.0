import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'

const arrowFunction = () => {
  return (
    <div>
      <h1>I'm an arrow function</h1>
    </div>
  )
}
function CompA() {
  return (
    <>
    <h1>CompA</h1>
    <p>Hello Component A</p>
    </>
  )
}




class CompC extends React.Component {
  render() {
    return (
      <h1>CompC</h1>
    )
  }

}

//  function Home() {
//   return (
//     <>
//     <h1>Hello world</h1>
//     <CompA />
    
//     </>
//   )
// }

const HomePage = () => {
    return (
      <>
      <h1>Hello world</h1>
      <CompA />
      
      </>
    )
}


export default HomePage;