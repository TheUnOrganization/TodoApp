import { useState } from 'react';

function Todo() {
    return(
        <form>
            <div>
                <input type="text" placeholder='Enter a todo...'/>
                <button>Add</button>
            </div>
            <div>
                <li><input type="checkbox"/>dd</li>
                <li><input type="checkbox"/>Learn React</li>
                <li><input type="checkbox"/>Learn Redux</li>
                <li><input type="checkbox"/>Learn GraphQL</li>
            </div>
        </form>
    )
}
export default Todo;