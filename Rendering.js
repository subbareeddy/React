const isAdmin=false;

const isLodding=false;

const Produts=[{id: "1", item:'T-shirt'}, {id: "2", item:'shirt'}, {id: "3", item:'pants'}, {id: "4", item:'shorts'}]

function Loder(){
    return(
        <h2>Loding....</h2>
    )
}
function Rendering(){
    return(
        <>
        <h1>Welcome to Subba Reddy</h1>
        {
        isAdmin ? <h2>This is a Admin portal</h2> : <h3>This is a User portal</h3>
        }

        {
            isLodding ? 'page Lodded' : <Loder />
        }

        {
            Produts.map(product => <p key={product.id}>{product.item}</p>)
            //<li className={`${product.id %2===0 ? 'bg-color-gray' : 'red'}`} key={product.id}>{product.item}</li>
        }
        </>
    );
}

export default Rendering;