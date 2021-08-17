import React from 'react'
import styled from 'styled-components';
// import logo from './images/cta-logo-one.png'

function Login(props) {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src='https://media.discordapp.net/attachments/874550751605710898/877238660171448382/cta-logo-one.png'></CTALogoOne>

                </CTA>
                <BgImage/>

            </Content>
        </Container>
    )
}

const CTA = styled.div` 
`;
const CTALogoOne = styled.img` 
   margin-bottom:12px;
   max-width:600px;
   min-height:1px;
   display:block;
   width:100%

`;
const Container = styled.section`
    overflow : hidden;
    display : flex;
    flex-direction : column;
    text-align:center;
    height:100vh;
`;

const Content = styled.div`
   margin-bottom:10vw;
   width:100%;
   position:relative;
   min-height:100vh;
   box-sizing:border-box;
   display:flex;
   justify-content:center;
   align-items:center;
   flex-direction:column;
   padding:80px 40px;
   height:100%;
`;


const BgImage = styled.div`
   height:100%;
   background-position:top;
   background-size :cover;
   background-repeat:no-repeat;
   background-image: url('https://media.discordapp.net/attachments/874550751605710898/877234763306532946/login-background.jpg?width=980&height=613');
   position:absolute;
   top:0;
   right:0;
   left:0;
   z-index:-1;
`;


export default Login
