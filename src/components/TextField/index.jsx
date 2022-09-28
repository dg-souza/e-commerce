import { InputContainer } from "./style"

const TextField = props => {
    const {
        placeholder,
        type,
        onChange,
        style
    } = props

    return(
        <>
            <InputContainer 
                placeholder={placeholder}
                type={type}
                onChange={onChange}
                style={style}
            />
        </>
    )
}

export default TextField