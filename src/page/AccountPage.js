import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Box from '../component/Box'

const AccountPage = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

    const increase = () => {
        //action(type)은 Object 형식 매개변수를 던져준다(payload).
        dispatch({ type: "INCREMENT", payload: { num: 100 } })
    }

    const decrease = () => {
        if (count <= 0) {
            alert("꺼낼 동전이 없습니다.")
        } else {
            dispatch({ type: "DECREMENT", payload: { num: 100 } })
        }
    }

    return (
        <div className='account-container'>
            <div>
                <img width="200px" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAvVBMVEX////9w67zsJv///3zrpj98/D9w7D8///7yT71u6n7wKv9wKn0s577vqr4uqb92Mr8w6j/2oT7yTj8x2H++PX3x7f6wx/75+H4zsb87Oj708P849r72M75y77+7tj+2JX80oL+6cr6xk79z2P90HH+9+v8z1n83ar8zEj+1nj6wi7725/7wUL/9uT5vR7+02z947f3uXbsnnLroWbqm4L5tFTxqYmmiX+6k4fdrZ1PU1RDTVBbWlp5a2aNe3WkB7ZLAAAE90lEQVR4nO2bi3LbNhBFAYIvkSBoyaBpilSl1LEbK63TtEnb9PX/n5UFSEm0rYxFpTME03vGD5oz9uBosQssKDMGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwrSPMpxh7FP8JZCH0t6FCfLfezDfrV5PyEYbdJdtdMbb+frvdLm5er2+jafnYL0HAWNTZCLa52sZxfDe/v9ncjjq40xF6uayD9pqHxbKMupT/4WoRx4s39/P5/fbtNCIjRDDzfX9Wm+GmnPNwVbU2P5JLHN/M5/Obxfanscd5EoKRjGd0gsjKcJ7mgnLk1UPcBeZdHD/8PInQtDJSkk/VyZCNZuytSZg370xg4vhqPSEZi1/yjrTWbL2w2W8DE19t9BTWzr6M4rvQ8OL6vZEx2X9HF1fvi6auAuH4fqAnIyXfhyZVvzwsFnc2+4mHXz/4vqeuy8Bll4OMlBnvkfkfLy836/Xm9SXx8TePbknfD20Vd9Wok3miQiTpxQW/2JG0hlZHMxFFY4/7KF01e6piFpww3H0P9zcV6awqVxMnMjLHXL6ACc6sdFSGkYxMTnah6UdLkqrd3HlGTBfpAJe9jYtVQETBIJXOxivHHvhRhgaGm7yhFXbscR+lGexCNc2TvnKwOt/Kl8f+HOlLvxl76E+g9eIcFZpoZs+gBYuqIl1S7+BElKL6jElmUJQ1K8ZqXgd5Vjnhws4MDEEyUuu8jqKoKUY/j7InMuWZgTFZ43lNUDRNraN8dBmz6EVFmiT75X82RIbmmRc2KsyLXLuQM0Fdh2mmpFJ2azb7/Y8hNqYEFM1SB2E1dsdGc6xcJWaS0XruSUUXn/78K3zJoIf5tUY3y+UyGLvBoXQpdvNLtTaf/h4kY+bZiulyd+Y2pote7nPfxMbLhsrQUuMX3R8bm7I3cPMiKz77598BLjwhmZkeO11aml4/llkZPpvxIaExMoEDYaHXM0+pBaY0Nk6Z2dMnIQ+HuFiZyoGiTJAM7XwzX7Yy3qBusyfjQGRaGU9l3tfJODHNOpnsa2X02BotVoYfZLyhMqotzU5UM5Lhmf1oq9ngyMi2CXCCujf4dp0ZiHkB3Gg2BauKg42yO4DhMqoa26NDNHsZdc4sMykTupAvFt10T2PSs2qZqRluzDKLLpfUzlA/Q3vmwS6JbZvHVthD+xAdVLVKsmywigmM70wtY+0CETEx/DzTkJo+c/RG5hHGpzpLhqam37ixlXnEucez2dgDP4YuBrukJmPGHvcxBAsGdTG8bbN9V9bLp1ThsHJmXGrmRlv2nP7W5pS4+LJ04RjjC1Srk20y6Xsz6+KsTdCcmDiKwrJya4F5jihPscmUL4vanV3McYR51HJCWKi5dD0sliPrTZomj1ZUs7msxx7naTT9IpCoRGV5nvfrXNaex0yCgD86sZVeIbSu+CMZb+XmWzOeIlhvniVmJ2net9A7X7dd/0Rm2aNngqZj8+0/AhxuZg6d+r0EDfIwzcyO5dreDoq+TOHGOdkp7EuAORb40Ka62LcIE5pllt24zWMBaR8hi0P3Zs6WXF8v+1ynh9WxO3oROm9vSim7J2UTIUh5wtvNpB+0RViI9k0c5jjGn9IsE1FuWa5Wq8MbFYLG3qR711OaZeLYT1OpXs+Ijl5PphoDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8n/kM9U9DTJRV4rsAAAAASUVORK5CYII=' />
                <div>{count}원</div>
                <button onClick={increase}>동전 넣기</button>
                <button onClick={decrease}>동전 빼기</button>
                <Box />
            </div>
        </div>
    );
}

export default AccountPage