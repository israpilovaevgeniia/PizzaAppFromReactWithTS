import { Link } from "react-router-dom";
import Button from "../../assets/components/button/button";
import Header from "../../assets/components/header/header";
import Input from "../../assets/components/input/input";
import styles from "./login.module.css"
import cn from "classnames"
import { FormEvent, useState } from "react";


function Login() {

    const [email, setEmail] = useState(""); //состояние для хранения email
    const [isValid, setIsValid] = useState(true); 


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value); // обновляем значение email
    setIsValid(value.trim() !== "");
    }

    const handleSubmit = () => {
    if(email.trim() === "") {
        setIsValid(false);
    } else {
        setIsValid(true)
    }
    }

    const submit = (e: FormEvent) => {
        e.preventDefault()
        console.log(e)
    }


  return (
    <div className={cn(styles.login)} onSubmit={submit}>
        <Header>Вход</Header>
        <form className={cn(styles.form)}>
            <div className={cn(styles.field)}>
                <Input 
                   name="email"
                   label="Ваш email"
                   type='email'
                   placeholder='Email'
                   value={email}
                   isValid={isValid}
                   onChange={handleChange}
                />
            </div>
            <div className={cn(styles.field)}>
                <Input 
                   name="password"
                   label="Ваш пароль"
                   type='password'
                   placeholder='Пароль'
                //    value={}
                   isValid={isValid}
                //    onChange={handleChange}
                />
            </div>
            <Button size={"L"} onClick={handleSubmit}>Вход</Button>
        </form>
        <div className={cn(styles.links)}>
            <div>
                Нет аккаунта?
            </div>
            <div>
                <Link to={"/auth/register"}>Зарегистрироваться</Link>
            </div>
        </div>
    </div>
  )
}

export default Login;
