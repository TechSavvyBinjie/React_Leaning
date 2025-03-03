import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import TextInput from "./components/TextInput";
import TableList from "./components/TableList";
import FetchDate from "./components/FetchDate";
import PageTittle from "./components/PageTittle";
import NewTime from "./components/NewTime";
import Weather from "./components/Weather";
import Counter from "./components/countReducer";
import UserProvider from "./components/UserProvider";
import UserStatus from "./components/UserStatus";
import LoginForm from "./components/LoginForm";
import LogoutButton from "./components/LogoutButton";
const App = () => {
  return (
    <UserProvider>
      <div>
        <h1>用户登录系统</h1>
        <LoginForm />
        <LogoutButton />
        <UserStatus />
      </div>
    </UserProvider>
  );
};

export default App;
