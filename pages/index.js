import Head from 'next/head'
import Image from 'next/image'
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

 function Home() {
  return (
    <>
    <h1>Hello world</h1>
    <CompA />
    </>
  )
}


export default Home