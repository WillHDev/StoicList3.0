import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'


function CompA() {
  return (
    <>
    <h1>CompA</h1>
    <p>Hello Component A</p>
    <CompB />
    </>
  )
}


function CompB() {
  return (
    <>
    <h1>CompB</h1>
    <p>Hello CompB</p>
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

 function Home() {
  return (
    <>
    <h1>Hello world</h1>
    <CompA />
    <CompC />
    </>
  )
}


export default Home