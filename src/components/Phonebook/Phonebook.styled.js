import styled from "@emotion/styled";
import { Form, Field, ErrorMessage } from "formik";

export const Forms = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 300px;
    margin: 0 auto;
    gap: 10px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 20px;
    font-weight: 500;
    color: black;
`;

export const Input = styled(Field)`
       height: 28px;
    padding: 8px;
    width: 150px;
    border-radius: 5px;
    border: none;
`;

export const Button = styled.button`
    width: 100px;
    font-size: 14px;
    height: 30px;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    background-color: greenyellow;
`;

export const ErrorMess = styled(ErrorMessage)`
        color: red;
    font-size: 15px;
`;
