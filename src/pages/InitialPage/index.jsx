import { useSelector } from "react-redux"

const InitialPage = () => {
    const userInfo = useSelector((state) => state.user.userInfo)

    return(
        <>
            <h1>{ userInfo.login }</h1>
        </>
    )
}

export default InitialPage