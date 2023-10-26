import { useAppSelector } from "../store/store";

const List = () => {
    const persons = useAppSelector(state => state.person.persons)
    return (
        <>
            <p>this is list</p>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map((person) => (
                        <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                        </tr>
                    ) )}
                </tbody>
            </table>
        </>
    );
}

export default List;