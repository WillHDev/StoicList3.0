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
    //console.log("COmpA useEffect");
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
   //console.log(incrementor)
   this.setState({
    myValue: incrementor
  })  //const [ myValue, setValue ] = useState(10);

 }

 
  render() {
    const { myValue }  = this.state;
    const { myProp1, myProp2: MyNewComponent } = this.props;
    return (
      <>
      <h1>CompC</h1>
      Current Value: { this.state.myValue }
      <button onClick={ () => this.changeState( myValue + 1 ) }>+</button>
      <button onClick={ () => this.changeState( myValue - 1 )}>-</button>
      <h2>{ myProp1 }</h2>
      <MyNewComponent
      
      />
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
<nav className="navbar">
<div className="container">
  <div className="navbar-brand">
    <a className="navbar-item" href="../">
      <img src="../images/bulma.png" alt="Logo"/>
    </a>
    <span className="navbar-burger burger" data-target="navbarMenu">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>
  <div id="navbarMenu" className="navbar-menu">
    <div className="navbar-end">
      <div className=" navbar-item">
        <div className="control has-icons-left">
          <input className="input is-rounded" type="email" placeholder="Search" />
          <span className="icon is-left">
            <i className="fa fa-search"></i>
          </span>
        </div>
      </div>
      <a className="navbar-item is-active is-size-5 has-text-weight-semibold">
        Home
      </a>
      <a className="navbar-item is-size-5 has-text-weight-semibold">
        Examples
      </a>
      <a className="navbar-item is-size-5 has-text-weight-semibold">
        Features
      </a>
    </div>
  </div>
</div>
</nav>

<section className="hero ">
<div className="hero-body">
  <div className="container">
    <div className="columns">
      <div className="column is-8 is-offset-2">
        <figure className="image is-16by9">
          <img src="../images/first-post.png" alt="" />
        </figure>
      </div>
    </div>

    <section className="section">
      <div className="columns">
        <div className="column is-8 is-offset-2">
          <div className="content is-medium">
            <h2 className="subtitle is-4">December 25, 2018</h2>
            <h1 className="title">Getting Started</h1>
            <p>This is a starter template for creating a beautiful, customizable blog with minimal
              effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
              configuration settings can be found in config</p>
          </div>
        </div>
      </div>
    </section>

    <div className="is-divider"></div>

    <section className="section">
      <div className="columns">
        <div className="column is-8 is-offset-2">
          <div className="content is-medium">
            <h2 className="subtitle is-4">December 25, 2018</h2>
            <h1 className="title">Getting Started</h1>
            <p>This is a starter template for creating a beautiful, customizable blog with minimal
              effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
              configuration settings can be found in config</p>
          </div>
        </div>
      </div>
    </section>


  </div>
</div>
</section>


<section className="section">
<div className="columns">
  <div className="column is-10 is-offset-1">
    <div className="container has-text-centered is-fluid">
      <div className="hero is-light">
        <div className="hero-body">
          <h2 className="title is-4">Sign up for our newsletter</h2>
            <div className="column is-6 is-offset-3">
              <div className="field has-addons has-addons-centered">
                <div className="control is-expanded">
                  <input className="input " type="text" placeholder="Email address" />
                </div>
                <div className="control">
                  <a className="button is-info">
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

<section className="hero ">
<div className="hero-body">
  <div className="container">

    <section className="section">
      <div className="columns is-variable is-8">
        <div className="column is-5 is-offset-1 ">
          <div className="content is-medium">
            <h2 className="subtitle is-5 has-text-grey">December 23, 2018</h2>
            <h1 className="title has-text-black is-3">Custom 404 Pages</h1>
            <p className="has-text-dark">This starter template includes a custom 404 Not Found error page, located at
              /source/404.blade.php.
              To preview the 404 page, you can visit /404 in your browser. Depending...</p>
          </div>
        </div>
        <div className="column is-5">
          <div className="content is-medium">
            <h2 className="subtitle is-5 has-text-grey">December 25, 2018</h2>
            <h1 className="title has-text-black is-3">Fuse Search</h1>
            <p className="has-text-dark">To provide fast, local search of your blog, this starter template comes with a
              pre-built Vue.js
              component that uses Fuse.js. Fuse.js is a "lightweight fuzzy-search library with no...</p>
          </div>
        </div>
      </div>
    </section>

    <div className="is-divider"></div>

    <section className="section">
      <div className="columns is-variable is-8">
        <div className="column is-5 is-offset-1">
          <div className="content is-medium">
            <h2 className="subtitle is-5 has-text-grey">December 25, 2018</h2>
            <h1 className="title has-text-black is-3">Getting Started</h1>
            <p className="has-text-dark">This is a starter template for creating a beautiful, customizable blog with
              minimal
              effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
              configuration settings can be found in config</p>
          </div>
        </div>
        <div className="column is-5">
          <div className="content is-medium">
            <h2 className="subtitle is-5 has-text-grey">December 25, 2018</h2>
            <h1 className="title has-text-black is-3">Getting Started</h1>
            <p className="has-text-dark">This is a starter template for creating a beautiful, customizable blog with
              minimal
              effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
              configuration settings can be found in config</p>
          </div>
        </div>
      </div>
    </section>


  </div>
</div>
</section>

<footer className="footer">
<div className="content has-text-centered">
  <p>
    <strong>Bulma - Blog theme</strong> by <a href="https://gonzalojs.com">Gonzalo Gutierrez</a>. Based on the <a
      href="http://jigsaw-blog-staging.tighten.co/">jigsaw-blog</a>. The source code is licensed
    <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
  </p>
</div>
</footer>


     </>
    )
}


export default Home;