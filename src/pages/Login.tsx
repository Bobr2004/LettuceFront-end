import { useState } from "react";
import Input from "../components/Input";
import ModalForm from "../components/ModalForm";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import { routes } from "../config/routes";

function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
   };

   const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
   };

   return (
      <div className="container mx-auto flex justify-center p-8 mt-12">
         <ModalForm>
            <h1 className="text-center text-4xl">Вхід</h1>
            <Input
               type="email"
               placeholder="Електронна пошта"
               val={email}
               changeVal={changeEmail}
            />
            <Input
               type="password"
               placeholder="Пароль"
               val={password}
               changeVal={changePassword}
            />
            <Button>Увійти</Button>
            <div>
               Ще немає аккаунта? <NavLink to={routes.reg} className="text-amber-500 underline">Реєстрація</NavLink>
            </div>
         </ModalForm>
      </div>
   );
}

export default Login;
