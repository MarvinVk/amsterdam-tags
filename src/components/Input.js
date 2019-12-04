import React, { useState } from 'react';
import styled from 'styled-components';

// base styles
import Colors from '../styles/Colors';
import Sizes from '../styles/Sizes';

const Input = (props) => {
    const [state, setState] = useState({
        [props.name]: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        setState({
            ...state,
            [name]: value,
        });

        props.onChange(name, value);
    }

    return (
        <Styled.Field
            type={props.type || 'text'}
            name={props.name}
            value={props.value}
            placeholder={props.placeholder || ''}
            onChange={handleChange}
            required={props.required}
        />
    );
}

const Styled = {
    Field: styled.input`
        box-sizing: border-box;
        width: 100%;
        height: ${Sizes.formElHeight};
        padding: 0 ${Sizes.gutterSmall};
        font-size: 16px;
        line-height: ${Sizes.formElHeight};
        background: ${Colors.white};
        border: 1px solid ${Colors.grey};
        border-radius: 3px;
    `,
};

export default Input;

