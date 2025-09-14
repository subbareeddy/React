//How to give style External and InLine


import './ReactStyles.css';

//functional component

const Header=()=>{
  return(
    <div style={{backgroundcolor: 'gray', display:'flex'}}>
    <h1 className='H'>Shopify App</h1>
    <input placeholder='search' />
    <ul style={{display:'flex'}}>
       <li>Home</li>
       <li>About</li>
       <li>Contact</li>
    </ul>
    </div>

  )
}




function ReactStyles() {
  const name='subba reddy'
  return (
    <>
      <Header />
    </>
    
  );
}

export default ReactStyles;