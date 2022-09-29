import { useState } from 'react'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { authActions } from '../../Reducer/auth'
import { useNavigate } from 'react-router-dom'

import { getMessage } from '../../utils/Toast'

import {
    MenuContainer
} from "./style"

import SmartPhone from '../../assets/Icons/smartphone.png'
import Refrigerator from '../../assets/Icons/refrigerator.png'
import Couch from '../../assets/Icons/couch.png'
import Profile from '../../assets/Icons/profile.png'
import Logout from '../../assets/Icons/logout.png'

const Menu = () => {
    const userInfo = useSelector((state) => state.user.userInfo)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [toggle, setToggle] = useState(false)

    function openMenu() {
        let toggler = document.getElementById('trigger')

        if(toggler.checked) {
            setToggle(true)
        } else {
            setToggle(false)
        }
    }

    function deslogar() {
        dispatch(authActions.logout())
        getMessage('sucesso', 'Obrigado pelo acesso, volte sempre :)')
        navigate('/')
    }

    return (
        <MenuContainer id='menu' toggle={toggle}>
            <input id='trigger' onClick={() => openMenu()} type="checkbox" className="toggler" />
            <div className="hamburger">
                <div className="line"></div>
            </div>

            <div className="menu-holder-items">
                <div className="menu-holder-items-item">
                    <img src={SmartPhone} alt="SmartPhone" />
                    <span>Smartphones</span>
                </div>

                <div className="menu-holder-items-item">
                    <img src={Refrigerator} alt="Refrigerator" />
                    <span>Home Appliance</span>
                </div>

                <div className="menu-holder-items-item">
                    <img src={Couch} alt="Couch" />
                    <span>Furniture</span>
                </div>

                <div className="menu-holder-items-item">
                    <img src={Profile} alt="Profile" />
                    <span>{ userInfo.login }</span>
                </div>

                <div 
                    style={{ marginTop: '550px' }} 
                    className="menu-holder-items-item"
                    onClick={() => deslogar()}
                >
                    <img src={Logout} alt="Logout" />
                    <span>Logout</span>
                </div>
            </div>
        </MenuContainer>
    )
}

export default Menu