import { useState } from "react";
import Input from "../../assets/components/input/input";
import Button from "../../assets/components/button/button";

function Menu () {
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

    return (
        <div>
            <Input 
               name="email"
               label="Ваш email"
               type='email'
               placeholder='Email'
               value={email}
               isValid={isValid}
               onChange={handleChange}
            />
            <Input 
               name="password"
               label="Ваш пароль"
               type='password'
               placeholder='Пароль'
            //    value={}
               isValid={isValid}
            //    onChange={handleChange}
            />
            <Button size={"L"} onClick={handleSubmit}>Зарегистрироваться</Button>
            <h2>Menu</h2> 
        </div> 
    )
}

export default Menu;