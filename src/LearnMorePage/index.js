import styled from "styled-components";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {ProgressBar, Button} from "react-bootstrap";
import Me2 from "./me2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const Container = styled.div`
    height: 100%;
    background-color: #ddbea9;
    display: flex;
    flex-direction: column;

`;
const AboutMeContainer = styled.div`
    background-color: #fae5d7;
    display: flex;
`;
const RightSide = styled.div`
    margin: auto;
    width: 70%;
    padding: 10px;
    padding-right: 30px;
    text-align: center;
    
`;
const LeftSide = styled.div`
    margin: auto;
    width: 30%;
    height: 100vh;
    padding: 10px;
    padding-right: 30px;
`;

const EducationContainer = styled.div`
    background-color: #ddbea9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
`;
const Photo = styled.img`
    margin: auto;
    height: 500px;
    padding-left: 300px;
    margin-top: 150px;
`;
const Title = styled.h1`
    color: #ffab8f;
    text-align: center;
    font-family: cursive;
    font-size: 50px;
`;
const Title2 = styled.h1`
    color: #3d544c;
    text-align: center;
    font-family: cursive;
    font-size: 50px;
    margin-bottom: 20px;
`;
const Intro = styled.h4`
    color: #443d54;
`;
const Detail = styled.div`
    color: #443d54;
`;
const EducationRowContainer = styled.div`
    display: flex;
    margin-bottom: 10px;
`;
const EducationLabel = styled.div`
    width: 100px;
    margin-right: 20px;
`;


function LearnMorePage() {
    const barStyle = {
        width: "300px",
        backgroundColor: "#d6ffd7",
        height: "30px",
    };
    return(<Container>
        <AboutMeContainer>
            <LeftSide>
                <Photo src={Me2}/>
            </LeftSide>
            <RightSide>
                <Title>About Me</Title>
                <Intro>
                    Hello I am Cindy Ryu! <br></br>
                </Intro>
                <Detail>
                Name:                   Cindy Ryu <br></br>
                Email: 1103iamcindy1103@gmail.com <br></br>
                Phone:              010 3432 7650 <br></br>
                Date of Birth:  3rd November 2007</Detail>
            </RightSide>
        </AboutMeContainer>
        <EducationContainer>
            <Title2>Education</Title2>
            <EducationRowContainer>
                <EducationLabel> A </EducationLabel>
                <ProgressBar
                style = {barStyle}
                label = {'4.8/5.0'}
                max = {5.0}
                min = {0}
                now={4.8}/>
                </EducationRowContainer>
                <EducationRowContainer>
                <EducationLabel>B</EducationLabel>
                <ProgressBar
                style = {barStyle}
                label = {'5/5'}
                max = {5}
                min = {0}
                now={5}/>
                </EducationRowContainer>
                <EducationRowContainer>
                <EducationLabel>C</EducationLabel>
                <ProgressBar
                style = {barStyle}
                label = {'5/5'}
                max = {5}
                min = {0}
                now={5}/>
                </EducationRowContainer>
                <EducationRowContainer>
                <EducationLabel>D</EducationLabel>
                <ProgressBar
                style = {barStyle}
                label = {'5/5'}
                max = {5}
                min = {0}
                now={5}/>
            </EducationRowContainer>
        </EducationContainer>
    </Container>)
}
export default LearnMorePage;