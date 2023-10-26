import { FormEvent, useRef } from "react";
import { useAppDispatch } from "../store/store";
import { addPerson } from "../store/features/PersonSlice";

const Add = () => {
    const name = useRef<string>("")
    const dispatch = useAppDispatch()
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addPerson({name: name.current}))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Person Name</label>
            <input type="text" onChange={e => (name.current = e.target.value)} />
            <button>add</button>
        </form>
    );
}

export default Add;