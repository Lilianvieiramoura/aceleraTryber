import { useContext, useState } from 'react';
import banner from '../assets/banner.svg'
import Context from '../context/Context';
import { useNavigate } from 'react-router-dom';

function Login() {

const [input, setInput] = useState({
  username: '',
  password: '',
});

const { onLogin } = useContext(Context);

const navigate = useNavigate();

function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  // console.log(event.target.name, event.target.value);
  
  setInput({
    ...input,
    [event.target.name]: event.target.value
  })
}

function handleSubmit(event: React.FormEvent) {
  // console.log(input);
  event.preventDefault();
  onLogin(input.username);
  navigate('/todo');
}

  return (
    <>
      <h1>Welcome</h1>
      <img src={banner} alt="banner da tela de login" />
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder='Enter your usarname' id='username' name='username'/>
        <input onChange={handleChange} type="password" placeholder='Enter your password' id='password' name='password'/>
        <p>Forgout Passowrd?</p>
        <button>Sign In</button>
      </form>
    </>
  )
}

export default Login;