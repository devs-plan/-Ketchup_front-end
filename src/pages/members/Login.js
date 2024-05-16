
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";

import {
    callLoginAPI
} from '../../apis/MemberAPICalls'


function Login() {
    const navigate = useNavigate();

    // 리덕스를 이용하기 위한 디스패처, 셀렉터 선언
    const dispatch = useDispatch();
    const loginMember = useSelector(state => state.memberReducer);  // API 요청하여 가져온 loginMember 정보
    
    // 폼 데이터 한번에 변경 및 State에 저장    
    const [form, setForm] = useState({
        memberNo: '',
        memberPW: ''
    });

    useEffect(() => {
        
        if(loginMember.status === 200){
            console.log("[Login] Login SUCCESS {}", loginMember);
            navigate("/", { replace: true });
        }
    }
    ,[loginMember]);
    
    // 로그인 상태일 시 로그인페이지로 접근 방지
    if(loginMember.length > 0) {
        console.log("[Login] Login is already authenticated by the server");        
        return <Navigate to="/"/>
    }

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    // 로그인 버튼 클릭시 디스패처 실행 및 메인 페이지로 이동
    const onClickLoginHandler = () => { 
        dispatch(callLoginAPI({	// 로그인
            form: form
        }));
        if (window.localStorage.getItem('accessToken')) {
            console.log("로그인 진행");
            navigate("/main", { replace: true });
        } 
    }

    return (
        <div className = "row justify-content-center">
            <div className ="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
            <img src="/img/loginLogo.png" class = "loginLogo"  alt="" style={{marginTop: 200}}/>

                <input className="form-control"
                    type="text" 
                    name='memberNo'
                    placeholder="사번을 입력하세요" 
                    autoComplete='off'
                    onChange={ onChangeHandler }
                    style ={{width: 500,borderColor:"black" ,textAlign: 'center', marginTop: 70 ,borderWidth: '0px 0px 1px 0px' ,borderRadius: 0}}
                />
                <input  className="form-control"
                    type="password"
                    name='memberPW' 
                    placeholder="비밀번호를 입력하세요" 
                    autoComplete='off'
                    onChange={ onChangeHandler }
                    style ={{width: 500,borderColor:"black" ,textAlign: 'center', marginTop: 20, borderWidth: '0px 0px 1px 0px' ,borderRadius: 0}}
                />
                <button
                 
                  style={ {width: '500px', border: 'none', margin: 0, fontSize: '20px', height: '50px',color: 'white' ,backgroundColor: "#ED0B0D", marginTop: 40 } }
                    onClick={ onClickLoginHandler }
                >
                    로그인
                </button>
                <a style={{marginTop:"10px",marginLeft: 390}}>비밀번호 찾기</a>
              
            </div>
        </div>
       
    );
}

export default Login;