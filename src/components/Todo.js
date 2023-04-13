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

    function deleteProductHandler() {
        setProducts((curProducts) => 
            curProducts.concat({})
        );
    }

    function editProductHandler() {
        setProducts((curProducts) =>
            curProducts.concat({})
        );
    }

    function searchProductHandler() {
        let input = document.getElementById('searchbar').value
        input=input.toLowerCase();
        let x = document.getElementsByClassName('products');

        for (let i = 0; i < x.length; i++) {
            if (!x[i].innerHTML.toLowerCase().includes(input)) {
                x[i].style.display="none";
            } else {
                x[i].style.display="list-item"
            }
        }
    }

    return(
        <form>
            <div>
                <input type="text" placeholder='Enter a todo...'/>
                <button onClick={addProductHandler}>Add</button>
                <input className={classes.searchbar} onkeyup="searchProductHandler()" type="text" placeholder='Filter for a todo...'></input>
            </div>
            <div id="products">
                {products.map((product) => (
                    <li key={product.id}>
                        {product.title}
                    </li>
                ))}
            </div>
        </form>
    )
}
export default Todo;