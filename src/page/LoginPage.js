import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userName, setUsername] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const handleSubmit = () => {
        navigate('/account')
        dispatch({ type: "LOGIN", payload: { id: userName, password: userPassword } })
        alert("로그인 되었습니다.")
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">아이디</label>
                    <input
                        type="text"
                        id="username"
                        value={userName}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">비밀번호</label>
                    <input
                        type="password"
                        id="password"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                        required
                    />
                </div>
                <button className='login-form-button' type="submit" >로그인</button>
            </form>
        </div>
    )
}

export default LoginPage