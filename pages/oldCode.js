

// function HeadWithBulma() {
//   return (
//     <div>
//       <Head>
//         <title>My page title</title>
//         <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        
//       </Head>
//       <p>Hello world!</p>
//     </div>
//   )
// }


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
         myProp2={
           () => 
           <CompA 
           myProp1={ myValue }
           myProp2="My custom value"
           myProp3={true}
          myProp4={ () => <div>My new JSX</div>}
           />
         }
   />
 </>



<script>
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
</script>