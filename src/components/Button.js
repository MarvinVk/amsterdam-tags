import React from 'react';
import styled from 'styled-components';

// base styles
import Colors from '../styles/Colors';
import Sizes from '../styles/Sizes';

const Button = (props) => {

    const handleClick = (e) => {
        if (props.onClick) {
            props.onClick(e);
        }
    }

    return (
        <Styled.Btn
            type={props.type}
            name={props.name}
            onClick={handleClick}
        >
            {props.children}
        </Styled.Btn>
    );
}

const Styled = {
    Btn: styled.button`
        box-sizing: border-box;
        height: ${Sizes.formElHeight};
        padding: 0 ${Sizes.gutter};
        font-size: 16px;
        line-height: ${Sizes.formElHeight};
        color: ${Colors.white};
        background: ${Colors.primary};
        border: none;
        border-radius: 3px;
    `,
};

export default Button;
