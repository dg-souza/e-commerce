import { 
    Container 
} from "./style"


const Login = () => {
    return(
        <Container>
            <div className="container-handle">
                <div className="container-handle-info">
                    <span>Bem vindo ao e-commerce</span>
                </div>

                <div className="container-handle-login">
                    <h1>Faça seu login</h1>

                    <input
                        placeholder="Digite seu login"
                        autoComplete="off"
                    />

                    <input 
                        type='password'
                        placeholder="Digite sua senha"
                        autoComplete="off"
                    />

                    <button>ACESSAR</button>
                </div>
            </div>
        </Container>
    )
}

export default Login