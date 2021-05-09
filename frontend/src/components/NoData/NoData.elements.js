import styled from 'styled-components';

export const NoDataWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Information = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-weight: bold;
  font-size: 1.2rem;
  text-align:center;
  line-height:2rem;
`;

export const SVG = styled.img`
width:200px;
margin-bottom:1.8rem;

`;
export const Icon = styled.i``;

export const AddIcon = styled(Icon).attrs((props) => ({
  className: 'fas fa-2x fa-plus',
}))`
  color: ${({ theme }) => theme.btnLogout};
`;
