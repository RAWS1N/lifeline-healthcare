
import { useState } from 'react'

function useToggleShow(){
    const [show,setShow] = useState(false)
    function toggle() {
        setShow(prevState => !prevState)
    }
    return [show,toggle]
}

export default useToggleShow