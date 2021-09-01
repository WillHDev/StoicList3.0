import Head from 'next/head'
import Image from 'next/image'
import React, { useDebugValue, useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

const ArrowFunction = _ => 
    <div>
      <h1>I'm an arrow function</h1>
    </div>



function CompA( props ) {

  useEffect( () => {
    console.log("COmpA useEffect");
  }, [props.myProp1])
  return (
    <>
    <ArrowFunction />
    <p>Hello Component A</p>
    <div>My Props: { props.myProp1 } </div>
    <div>My Props2: { props.myProp2 } </div>
    <div>My Props3: { props.myProp3.toString() } </div>
    <div>My Props4: { <props.myProp4/> } </div>
    </>
  )
}

//


class CompC extends React.Component {


  constructor() {
    super();
    this.state = {
        myValue: 10
      }
  }


  // state = {
  //   myValue:10
  // };

  changeState(incrementor)
 {
   console.log(incrementor)
   this.setState({
    myValue: incrementor
  })  //const [ myValue, setValue ] = useState(10);

 }

 
  render() {
    const { myValue }  = this.state;
    const { myProp1, MyProp2 } = this.props;
    return (
      <>
      <h1>CompC</h1>
      Current Value: { this.state.myValue }
      <button onClick={ () => this.changeState( myValue + 1 ) }>+</button>
      <button onClick={ () => this.changeState( myValue - 1 )}>-</button>
      <h2>{ myProp1 }</h2>
      <MyProp2 />
      </>
    )
  }

}

function MyComponent() {
  return <h1>My Component</h1>
}


const Home = () => {
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
  const [ myValue, setValue ] = useState(10);

  //slightly different than state only when specified props 
  //or state changed

  //list of dependencies go in array
  useEffect( () => {
    console.log("useEffect called");
  }, [myValue])

    return (
      <>
      <h1>Hello world</h1>
     
      <h1>CompC</h1>
     Current Value: <h1>{ myValue }</h1>
      <button onClick={ () => setValue( myValue + 1 ) }>+</button>
      <button onClick={ () => setValue( myValue - 1 )}>-</button>
     {/* <CompA 
        myProp1={ myValue }
        myProp2="My custome value"
        myProp3={true}
        myProp4={ () => <div>My new JSX</div>}
        /> */}
        <CompC myProp1={myValue}
              MyProp2={MyComponent}
        />
      </>
    )
}


export default Home;