import { Button } from '../common/button';
import {useState} from 'react'

export const Note = ({task}) =>{
    const [checked, setChecked] = useState(false)
    const handleChecked = () => {
        setChecked(!checked)
    }
    return(
        <div className="border-2 rounded p-4">
            {task.title}
            {task.description}
            {task.time_estimation}
            {task.status}
            Completed <input type="checkbox" checked = {checked} onChange={handleChecked}>

            </input>
        </div>
    )
}