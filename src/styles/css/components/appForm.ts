import styled from 'styled-components'

export const AppFormGroup = styled.div`
    width: auto;
    margin-bottom: 1rem;

    > label {
        display: block;
        margin-bottom: 8px;
    }

    > input,
    > select,
    > textarea {
        width: 100%;
        height: 44px;
        display: block;
        border: 2px solid;
        padding: 4px 12px;
        border-radius: 4px;

        &:focus {
            outline: none !important;
        }
    }
`
