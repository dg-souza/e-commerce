import { useState } from 'react'

import {
    Container
} from "./style"

import { getMessage } from '../../utils/Toast'

const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin() {
        if(validar()) {
            const objUser = JSON.parse(localStorage.getItem('user'))
            if(objUser.filter(e => e.login === login && e.password === password)[0] !== undefined) {
                getMessage('sucesso', 'Logado com sucesso')
            } else {
                getMessage('erro', 'Usuario não encontrado')
            }
        }
    }

    function clear() {
        setLogin('')
        setPassword('')
    }

    function handleCreate() {
        if (validar()) {
            const objUser = JSON.parse(localStorage.getItem('user'))
            if(objUser !== null) {
                const lastId = objUser[objUser.length - 1].id + 1

                objUser.push({ id: lastId, login: login, password: password })
                localStorage.setItem('user', JSON.stringify(objUser))
                clear()
                getMessage('sucesso', 'Usuario registrado com sucesso')
            } else {
                const objNewUser = [{ id: 0, login: login, password: password }]
                localStorage.setItem('user', JSON.stringify(objNewUser))
                clear()
                getMessage('sucesso', 'Usuario registrado com sucesso.')
            }

            changeVisibility(2)
        }
    }

    function validar() {
        if (login !== '' && password !== '')
            return true
        else
            getMessage('erro', 'Preencha os campos')
    }

    function changeVisibility(verify) {
        let login = document.getElementById('login')
        let signin = document.getElementById('signin')

        if (verify === 1) {
            login.style.display = 'none'
            signin.style.display = 'flex'
            clear()
        } else {
            login.style.display = 'flex'
            signin.style.display = 'none'
            clear()
        }
    }

    return (
        <Container>
            <div className="container-handle">
                <div className="container-handle-info">
                    <span>Bem vindo ao e-commerce</span>
                </div>

                {/* Div para o login */}

                <div id='login' className="container-handle-login">
                    <h1>Faça seu login</h1>

                    <input
                        placeholder="Digite seu login"
                        autoComplete="off"
                        onChange={(e) => setLogin(e.target.value)}
                        value={login}
                    />

                    <input
                        type='password'
                        placeholder="Digite sua senha"
                        autoComplete="off"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />

                    <button onClick={() => handleLogin()}>ACESSAR</button>
                    <span>Não tem login? <a onClick={() => changeVisibility(1)}>Cadastre-se agora.</a></span>
                </div>

                {/* Div para o cadastro */}

                <div id='signin' className='container-handle-signin'>
                    <h1>Faça seu cadastro</h1>

                    <input
                        placeholder="Digite seu login"
                        autoComplete="off"
                        onChange={(e) => setLogin(e.target.value)}
                        value={login}
                    />

                    <input
                        type='password'
                        placeholder="Digite sua senha"
                        autoComplete="off"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />

                    <button onClick={() => handleCreate()}>CONFIRMAR</button>
                    <span
                        style={{ color: '#8160c6', cursor: 'pointer', marginTop: '10px' }}
                        onClick={() => changeVisibility(2)}
                    >
                        Voltar ao login.
                    </span>
                </div>
            </div>
        </Container>
    )
}

export default Login