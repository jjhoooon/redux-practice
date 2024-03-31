import React from 'react'
import { useSelector } from 'react-redux'


const Box = () => {

    const userId = useSelector(state => state.id)
    const userPassword = useSelector(state => state.password)
    return (
        <div>
            <h1>Account</h1>
            <div>아이디 : {userId}</div>
            <div>비밀번호 : {userPassword}</div>
        </div>
    )
}

export default Box