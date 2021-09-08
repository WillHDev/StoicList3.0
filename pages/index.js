import Head from 'next/head'
import Image from 'next/image'
import React, { useDebugValue, useState, useEffect } from 'react'
//import styles from 'styles/Home.module.css'
import Layout from 'components/Layout'
import ResourceHighlight from 'components/ResourceHighlight'
import ResourceList from 'components/ResourceList'
import NewsLetter from 'components/NewsLetter'
import Footer from 'components/Footer'

//import { resources } from 'api/data';


const Home = ({ resources }) => {


    return (
     <>
        <Layout>
        <ResourceHighlight
          resources={resources.slice(0,2)}
        />  
        <NewsLetter />
        <ResourceList 
          resources={resources.slice(2)}
        />
        <Footer />
        </Layout>
     </>
    )
}

//is called every time you will visit the page
//fn is executed on the server
//data are always fresh
//good for whSen data is updated frequently
//blog etc where data doesn't change often
//good to use static props to optimize seo
export async function getServerSideProps() {
  //write async in front of the function where you would
  //like to resolve this data

  const resData = await fetch("http://localhost:3001/api/resources");
  console.log(resData);
  
  const data = await resData.json();
     return {  props: {
       resources: data
     }
    }
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
