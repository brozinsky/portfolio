import React from 'react';
import styled from "styled-components";

const Contact = () => {
    return (
        <ContactSection id="contact">
            <Title>Want to contact me?</Title>
            <Text>Please, use the form below or send an email to mateusz0brzezinski@gmail.com</Text>
            <Form>
                <InputWrap>
                    <Input placeholder="name" type="text" />
                    <Input placeholder="e-mail" type="email" />
                </InputWrap>
                <TextArea placeholder="message..." name="Message" id="" cols="30" rows="10"></TextArea>
                <FormButton>Send</FormButton>

            </Form>
        </ContactSection>
    )
}

const ContactSection = styled.section`
    font-family: 'Rajdhani', 'Helvetica Neue',
    sans-serif;
    margin-top: 10rem;
`

const Title = styled.h3`
    font-weight: 100;
    text-align: center;
    font-size: 2rem;
    margin: 2rem ;
`

const Text = styled.p`
    font-weight: 100;
    text-align: center;
    font-size: 1.4rem;
    margin: 2rem ;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 600px;
    margin: 0 auto;

    @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    width: 90vw;
    }
`

const InputWrap = styled.div`
    height: 60px;

    @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80px;
    }
`

const Input = styled.input`
    width: 284px;
    height: 55px;
    border: 1px solid #666;
    background: #111;
    color: #c4c4c4;
    margin: 3px;
    padding-left: 10px;
    box-shadow: none;
    outline: none;
    box-sizing: content-box;

    @media (max-width: 768px) {
    width: 90vw;
    box-sizing: border-box;
    height: 70px;
    }
&:focus{
    border-bottom: 4px solid #F13F3F;
}
`
const TextArea = styled.textarea`
    border: 1px solid #666;
    background: #111;
    color: #c4c4c4;
    margin: 3px;
    margin-top: 7px;
    padding: 10px;
    resize: none;
    box-shadow: none;
    font-family: 'Rajdhani', 'Helvetica Neue',
    sans-serif;
    outline:none;

    @media (max-width: 768px) {
    width: 90vw;
    }
&:focus{
    border: 1px solid #F13F3F;
}
`

const FormButton = styled.button`
    width: 100%;
    height: 55px;
    border: 1px solid #F13F3F;
    color: #F13F3F;
    font-family: 'Rajdhani', 'Helvetica Neue',
    sans-serif;
    font-size: 1.4rem;
    text-transform: uppercase;
    background: #111;
    margin: 3px;
    margin-top: 5px;
&:hover{
    border: 1px solid #F13F3F;
    background: #F13F3F;
    color: #111;
    cursor: pointer;
    font-weight: 700;
}
`


export default Contact