import React, { useEffect } from 'react';
import styled from "styled-components";
import { useForm } from '@formspree/react';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
    const [state, handleSubmit] = useForm("mvodgwog");

    useEffect(() => {
        const section = document.getElementById("contact");
        gsap.fromTo(section.children, { y: '+=20', opacity: 0 },
            {
                y: 0, opacity: 1, stagger: 0.2, duration: 0.6,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 65%',
                    ease: 'power1. out'
                }
            })

    }, [])

    return (
        <ContactSection id="contact">
            <Title>Want to contact me?</Title>
            <Text>Please, use the form below or send an email to mateusz0brzezinski@gmail.com</Text>
            {state.succeeded ? <MessageSuccess>Your message has been sent!</MessageSuccess> : null}
            {state.errors.length ? <MessageError>Incorrect email</MessageError> : null}
            <Form onSubmit={handleSubmit}>
                <InputWrap>
                    <Input
                        placeholder="name"
                        type="text"
                        name='name'
                        required
                    />
                    <Input
                        placeholder="e-mail"
                        id="email"
                        type="email"
                        name="email"
                        required
                    />

                </InputWrap>
                <TextArea
                    placeholder="message..."
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    required
                ></TextArea>

                <FormButton
                    type="submit" disabled={state.submitting}
                >Send</FormButton>

            </Form>
        </ContactSection>
    )
}

const ContactSection = styled.section`
    font-family: 'Rajdhani', 'Helvetica Neue',
    sans-serif;
    margin-top: 10rem;

    @media (max-width: 1430px) {
        margin-top: 0;
    }
`

const MessageSuccess = styled.p`
    font-family: 'Rajdhani', 'Helvetica Neue',
    sans-serif;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    width: 100vw;
    text-align: center;
    color: #23c731;

`

const MessageError = styled.p`
    font-family: 'Rajdhani', 'Helvetica Neue',
    sans-serif;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    width: 100vw;
    text-align: center;
    color: #C92424;
`

const Title = styled.h3`
    font-weight: 100;
    text-align: center;
    font-size: 2rem;
    margin: 2rem ;

    @media (max-width: 1200px) {
    margin-top: 4rem;
    }
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