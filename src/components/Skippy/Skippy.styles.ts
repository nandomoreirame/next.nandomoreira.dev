import styled from 'styled-components';

export const Skippy = styled.div`
  background-color: ${({ theme }) => theme?.backgroundColor};
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  text-align: center;
  top: 40px;
  left: 40px;
  white-space: nowrap;
  width: 1px;
  z-index: 10001;

  a {
    width: 100%;
    color: ${({ theme }) => theme?.textColor};
    display: inline-block;
  }

  &:focus,
  &:focus-within {
    clip: auto;
    display: block;
    height: auto;
    margin: 0;
    overflow: visible;
    padding: 0.5rem;
    position: fixed;
    white-space: normal;
    width: auto;
  }
`;
