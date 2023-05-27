import styled from "styled-components";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Container = styled.div`
    height: 100vh;
    background-color: #ddbea9;
    display: flex;
`;

const LeftSide = styled.div`
    margin: auto;
    width: 50%;
    height: 100vh;
    padding: 10px;
    padding-right: 30px;
    background-image: url("https://src.hidoc.co.kr/image/lib/2021/9/3/1630652987056_0.jpg")
`;

const RightSide = styled.div`
    margin: auto;
    width: 50%;
    padding: 10px;
    padding-right: 30px;
    text-align: center;
    
`
const WelcomeTitle = styled.h1`
    color: #4C8C43;
    text-align: center;

`;
const Label = styled.label`
    font-size: 30px;
    text-align: center;
`;

const Inputfield = styled.input`
    font-size: 30px;
    text-align: center;
`;

const Login = styled.button`
    font-size: 30px;
    text-align: center;
    color: #FF8F00;
`;


function LoginPage() {
    const clickme = () => {
        alert("Insert your information!")
        console.log(user);
    };
    const [user,setUser] = useState({
        id: "",
        password: "",
    })
    const putUserInfo = (e) => {
        const {name,value} = e.target;
        setUser({
            ...user,
            [name]:value,
        });
    };
    return (<Container>
        <LeftSide></LeftSide>
        <RightSide>
        <WelcomeTitle> HELLO </WelcomeTitle>
        <div>
        <Label>ID</Label>
        <Inputfield type = "text" value = {user.id} name= "id" onChange = {putUserInfo} placeholder = "Insert your ID"></Inputfield>
        </div>
        <div>
        <Label>Password</Label>
        <Inputfield type = "password" value = {user.password} name = "password" onChange = {putUserInfo} placeholder = "Insert your Password"></Inputfield>
        </div>
        <Login onClick = {clickme}>Login</Login>
        </RightSide>
    </Container>)
}
export default LoginPage;