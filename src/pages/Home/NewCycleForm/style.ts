import styled from "styled-components";

export const FormContainer = styled.div `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${props => props.theme["gray-100"]};
  font-size: 1.125rem;
  flex-wrap: wrap;
  font-weight: bold;
`

const BaseInput = styled.input `
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${porps => porps.theme["gray-500"]};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${props => props.theme["gray-100"]};

  &:focus {
    box-shadow: none;
    border-color: ${props => props.theme["green-500"]};
  }

  &::placeholder {
    color: ${props => props.theme["gray-500"]};
  }
`

export const TaskInput = styled(BaseInput) `
    background: transparent;
    flex: 1;

    &::-webkit-calendar-picker-indicator {
      display: none !important;
    }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`