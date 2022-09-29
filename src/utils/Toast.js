import { toast } from 'react-toastify'

export function getMessage(type, message) {
    switch(type) {
        case 'sucesso':
            toast.success(message, {
                position: 'bottom-right',
                autoClose: 3000,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true
            })
            break
        case 'erro':
            toast.error(message, {
                position: 'bottom-right',
                autoClose: 3000,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true
            })
            break
        default:
            break
    }
}