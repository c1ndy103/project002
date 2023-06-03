import styled from "styled-components";
import React, { useState } from "react";
import Me from "./me.jpeg";
import W1 from "./instagram.png";
import W2 from "./github.png";
import W3 from "./owl.png";
import W4 from "./news.png";
import { useHistory } from "react-router-dom";

const Container = styled.div`
    height: 100vh;
    background-color: #ddbea9;
    display: flex;
`;
const DescriptionContainer = styled.div`
    display: flex;
    font-family: Georgia, 'Times New Roman', Times, serif;
    flex-direction: column;
    justify-content:center;
    padding-left: 30px;
    width: 50%;
    align-items:center
`;
const WelcomeTitle = styled.h1`
    color: #4C8C43;
    text-align: center;
    font-family: cursive;
    font-size: 50px;
`;
const Skill = styled.h2`
    color: #4C8C43;
    text-align: center;
    font-size: 30px;
`;
const Photo = styled.img`
    margin: auto;
    width: 30%;
    height: 50vh;
    padding: 10px;
    padding-right: 10px;

`;
const Webs = styled.img`
    width: 50px;
    height: 50px;
    padding: 10px;
`;
const LearnMore = styled.button`
    font-size: 20px;
    text-align: center;
    color: #4C8C43;
    background-color: #ded1c8;
    width: 200px;


`;

function MainPage(){
    return(<Container>
        <DescriptionContainer>
            <WelcomeTitle> Hello, I am Cindy! </WelcomeTitle>
            <Skill>python | c++ | arima</Skill>
            <div>
                <a href = "https://www.instagram.com/c1ndy1_03/?next=%2F" target="_blank">
                    <Webs src={W1}/> </a>
                <a href = "https://github.com/c1ndy103" target="_blank">
                    <Webs src={W2}/> </a>
                <a href = "https://www.duolingo.com/profile/c1ndy103" target="_blank">
                    <Webs src={W3}/> </a>
                <a href = "http://www.heraldinsight.co.kr/news/articleList.html?sc_area=A&view_type=sm&sc_word=Boyoung" target="_blank">
                <Webs src={W4}/> </a>
            </div>
            <LearnMore>Learn More</LearnMore>
        </DescriptionContainer>
        <Photo src={Me}/>
    </Container>)
}
export default MainPage;