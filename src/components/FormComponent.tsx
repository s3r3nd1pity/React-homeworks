import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../validators/user.validator.tsx";

interface IFormProps {
    username: string,
    password: string,
    age: number
}

const FormComponent = () => {
    //
    // const [formState,setFormState] =useState<IFormProps>({
    //     username:'',
    //     password:''
    // })
    // const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
    //     e.preventDefault()
    //     const user={
    //         username:formState.username,
    //         password:formState.password
    //     }
    //    console.log(user) // const form=e.target as HTMLFormElement///вытягиваем форму и потом делаем че хочем с ней
    //     // console.log(form.username.value)//вытягиваем значение юзернаме
    // }
    // // const handleUsernameChange=(e:FormEvent<HTMLInputElement>)=>{
    // //     const input=e.target as HTMLInputElement
    // //     setFormState({...formState,username:input.value})
    // //     console.log(formState)
    // // }
    // // const handlePasswordChange=(e:FormEvent<HTMLInputElement>)=>{
    // //     const input=e.target as HTMLInputElement
    // //     setFormState({...formState,password:input.value})
    // //     console.log(formState)
    // // }
    // const handleInputdChange=(e:FormEvent<HTMLInputElement>)=>{
    //         const input=e.target as HTMLInputElement
    //         setFormState({...formState,[input.name]:input.value})
    //         console.log(formState)
    //     }

    const {handleSubmit, register, formState: {errors, isValid}}
        = useForm<IFormProps>(
        {
            mode: 'all', //режим когда форма валидуетсяб. Работает вся5кая хуйея
            resolver: joiResolver(userValidator)
        }
    )
    const customHandler = (formData: IFormProps) => {
        console.log(formData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label><input type={'text'} {...register('username')}  />
                    {errors.username && <div>{errors.username.message}</div>}
                </label>
                <label><input type={'text'} {...register('password')} />
                    {errors.password && <div>{errors.password.message}</div>}</label>
                    <input type={'number'} {...register('age')} />
                <button disabled={!isValid}>send</button>
            </form>
        </div>
);
};

export default FormComponent;