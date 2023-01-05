import React,{useState} from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-left: 50px;
`;

const Link = styled.span`
  margin-left: 30px;
`;

const SignIn = () => {
  const [email,setEmail]=useState("");
     function Sign(){
      let data={email}
      fetch('https://prachi-195fa-default-rtdb.asia-southeast1.firebasedatabase.app/application.json',
      {
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      }}
      ).then((result)=>{result.json().then((response)=>{console.log('response', response)})})
      setEmail('')

    }
  
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue to Pranjal Mittal</SubTitle>
        <Input placeholder="username" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" />
        <Input type="password" placeholder="password" />
        <Button onClick={Sign}>Sign in</Button>
        <Title>or</Title>
        <Input placeholder="username" />
        <Input placeholder="email" />
        <Input type="password" placeholder="password" />
        <Button  type="button" onClick={Sign}>Sign up</Button>
      </Wrapper>
      <More>
        English(INDIA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;