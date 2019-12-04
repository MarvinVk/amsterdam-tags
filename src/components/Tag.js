import React from 'react';
import styled from 'styled-components';

// base styles
import Colors from '../styles/Colors';
import Sizes from '../styles/Sizes';

const Tag = (props) => {

    return (
        <Styled.TagEl>
            {props.children}
        </Styled.TagEl>
    );
}

const Styled = {
    TagEl: styled.span`
        margin-right: ${Sizes.gutterSmall};
        margin-bottom: ${Sizes.gutterSmall};
        color: ${Colors.white};
        padding: 0 ${Sizes.gutterSmall};
        font-size: 14px;
        line-height: 30px;
        height: 30px;
        border-radius 15px;
        background: ${Colors.primary};
    `,
};

export default Tag;
