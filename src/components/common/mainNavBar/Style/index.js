import styled from 'styled-components';

export const SearchInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.8);
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  border-radius: 3px;
  margin-left: ${({ active }) => (active === true ? '1px' : '0')};
  padding: ${({ active }) => (active === true ? '0 10px' : '0')};
  opacity: ${({ active }) => (active === true ? '1' : '0')};
  width: ${({ active }) => (active === true ? '200px' : '0px')};
`;
