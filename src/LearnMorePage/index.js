import styled from "styled-components";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {ProgressBar, Button} from "react-bootstrap";
import Me2 from "./me2.png";

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
`;
const Photo = styled.img`
    margin: auto;
    height: 50vh;
    padding: 200px;
    padding-left: 20px;
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
                label = {'4.8/5.0'}
                max = {5.0}
                min = {0}
                now={5}/>
                </EducationRowContainer>
                <EducationRowContainer>
                <EducationLabel>B</EducationLabel>
                <ProgressBar
                label = {'5/5'}
                max = {5}
                min = {0}
                now={5}/>
                </EducationRowContainer>
                <EducationRowContainer>
                <EducationLabel>C</EducationLabel>
                <ProgressBar
                label = {'5/5'}
                max = {5}
                min = {0}
                now={5}/>
                </EducationRowContainer>
                <EducationRowContainer>
                <EducationLabel>D</EducationLabel>
                <ProgressBar
                label = {'5/5'}
                max = {5}
                min = {0}
                now={5}/>
            </EducationRowContainer>
        </EducationContainer>
    </Container>)
}
export default LearnMorePage;