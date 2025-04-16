import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { userLogin } from './redux/userSlice';

function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //state login 
  const [login, setlogin] = useState({
    email : "" ,
    password :"" , 
  })

  const user = useSelector((state) => state.user?.user);
  const isAuth = localStorage.getItem('token');

  return (
    <>
    {!isAuth?(
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="assets/b2.png"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Se connecter à votre espace personnel !
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form  className="space-y-6" onSubmit={(e)=> e.preventDefault()}>
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
              Email 
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                onChange={(e)=> setlogin({...login,email : e.target.value})}
                autoComplete="email"
                className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                Mot de passe
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Mot de passe oublié ? 
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                onChange={(e)=> setlogin({...login,password : e.target.value})}
                autoComplete="current-password"
                className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          

          <div>
            <button
              type="submit"
              onClick={() => {dispatch(userLogin(login)) }}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Se connecter
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Vous n'êtes pas membre ?{' '}
          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
            <Link to={"/register"}>S'inscrire</Link>
            
          </a>
        </p>
      </div>
    </div>
    ):(navigate("/"))}
    
    </>
  )
}

export default Signin