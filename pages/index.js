import Head from 'next/head'
import Image from 'next/image'
import React, { useDebugValue, useState, useEffect } from 'react'
//import styles from 'styles/Home.module.css'
import Layout from 'components/Layout'
import ResourceHighlight from 'components/ResourceHighlight'
import ResourceList from 'components/ResourceList'
import NewsLetter from 'components/NewsLetter'
import Footer from 'components/Footer'

const Home = () => {

    return (
     <>
        <Layout>
        <ResourceHighlight />  
        <ResourceList />
        <NewsLetter />
        <Footer />
        </Layout>
     </>
    )
}


export default Home;


  // useEffect( () => {
  //   console.log("useEffect called");
  // }, [myValue])


  //[ stateValue, mutateState ]


  // const changeValue = ( incrementor ) => {
  //   setValue( myValue + incrementor );
  //   return myValue;
  // }
//   const incrementValue = () => {
//    setValue( myValue + 1 );
//  }

//  const decrementValue = () => {
//   setValue( myValue - 1 );
// }
  // const value = valueState[0];
  // const setValue = valueState[1];
 // const [ myValue, setValue ] = useState(10);

  //slightly different than state only when specified props 
  //or state changed

  //list of dependencies go in array

  // useEffect(() => {
  //   // const script = document.createElement('script');
  
  //   // script.src = "https://use.typekit.net/foobar.js";
  //   // script.async = true;
  
  //   // document.body.appendChild(script);
  
  //   // return () => {
  //   //   document.body.removeChild(script);


  //   // }


  // }, []);
