import UserComponent from "./UserComponent.tsx";
import {useCallback, useMemo} from "react";
import {useFetch} from "../../hooks/useFetch.tsx";

const UsersComponent = () => {
    console.log('users')

    const foo = useCallback(() => {
        console.log('test')
    }, [])//функция изменяется при ререндер, из-за чего летит новый проспс в юзер компонент и мемо не работает, с юзколбек все ок


    const array: number[] = useMemo(() => {
        return [11, 22, 33]
    }, [])//делает так чтобі работало один раз

    const users =useFetch()

    return (
        <div>
            {
                users.map((value)=><UserComponent foo={foo} arr={array} user={value}/>)
            }
        </div>
    );
};

export default UsersComponent;