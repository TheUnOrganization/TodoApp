import { useState } from 'react';
import classes from './Todo.module.css';

const INITIAL_PRODUCTS = [
    { id: 'p1', title: 'dd'},
    { id: 'p2', title: 'Learn React'},
    { id: 'p3', title: 'Learn Redux'},
    { id: 'p4', title: 'Learn GraphQL'},

]

function Todo() {

    const [products, setProducts] = useState(INITIAL_PRODUCTS)

    function addProductHandler() {
        setProducts((curProducts) => 
            curProducts.concat({
                title: 'Another new Todo',
            })
        );
    }

    return(
        <form>
            <div>
                <input type="text" placeholder='Enter a todo...'/>
                <button>Add</button>
            </div>
            <div className={classes.searchbar}>
                <input type="text" placeholder='Filter for a todo...'/>
            </div>
            <div>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.title}
                    </li>
                ))}
            </div>
            <button onClick={addProductHandler}>Add Todo</button>
        </form>
    )
}
export default Todo;