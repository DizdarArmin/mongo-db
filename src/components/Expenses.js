import {useState} from 'react';

export default function Expenses(){
    const [value, setValue] = useState(0);
    const [selected, setSelected] = useState("");
    
    const[expenses, setExpenses] = useState(
        {   }
    )

    function add(e){
        e.preventDefault();
        let select = selected;
       
    }

    function handleChange(e){
        e.preventDefault();
        setSelected(e.target.value);
    }
    function handleValue(e){
        e.preventDefault();
        setValue(e.target.value);
    }


    return (
        <div>
            <div className="form-outline expenses">
            <form>
                <div className="form-group row">
                    <input  onChange={handleValue} type="number" className="col form-control"></input>
                    <select onChange={handleChange} className="col form-control">
                        <option value="Rent">Rent</option>
                        <option value="Car">Car</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Digital subscriptions">Digital subscriptions</option>
                        <option value="Cosmetics">Cosmetics</option>
                        <option value="Savings">Savings</option>
                    </select>
                    <button onClick={add} className="col btn btn-warning">Add</button>
                </div>
            </form>
            </div>
               
        </div>
    )
}