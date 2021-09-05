import NavBar from 'components/NavBar';


const MyTest = (props) => {
  return (
    <>
      <h1>My Test Component</h1>
      {props.children}
    </>
  )
}
function About() {
    return <>
        <NavBar />
        <MyTest>
          <h1>I am about page</h1>
          <h2>Hello World</h2>
          <h3>Hi There</h3>
        </MyTest>
    </>
  }
  
  export default About