import React, { useState } from 'react';
import styled from 'styled-components';

import Sizes from './styles/Sizes';

import Input from './components/Input';
import Button from './components/Button';
import Tag from './components/Tag';

const App = () => {
    const [state, setState] = useState({
        tag: '',
        tags: [],
    });

    const handleStateChange = (name, value) => {
        setState({
            ...state,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        state.tags.push(state.tag);

        setState({
            ...state,
            tag: '',
            tags: state.tags,
        });
    }

    return (
        <Styled.Wrapper>
            <Styled.Container>
                <Styled.TagForm onSubmit={handleSubmit}>
                    <Input
                        name="tag"
                        value={state.tag}
                        placeholder="Tag name"
                        onChange={handleStateChange}
                        required
                    />
                    <Button type="submit">Add</Button>
                </Styled.TagForm>
                <Styled.Tags>
                    {state.tags.map((tag, i) => (
                        <Tag key={i}>{tag}</Tag>
                    ))}
                </Styled.Tags>
            </Styled.Container>
        </Styled.Wrapper>
    );
}

const Styled = {
    Wrapper: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    `,
    Container: styled.div`
        width: 100%;
        max-width: 400px;
    `,
    TagForm: styled.form`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: ${Sizes.gutter};
    `,
    Tags: styled.div`
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    `,
};

export default App;
