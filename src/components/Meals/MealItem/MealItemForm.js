import Input from '../../UI/Input';
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {

    const addMealHandler = (event) => {
        event.preventDefault();
    }
    return <form className={classes.form}>
        <Input label='amount' input={{
            id: 'amount_'+props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }}/>
        <button onClick={addMealHandler}>+ Add</button>
    </form>
}

export default MealItemForm;