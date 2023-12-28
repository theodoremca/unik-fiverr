import styled from 'styled-components';

export const ProfileHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom:1rem;
`;


export const FixedContainer = styled.div`
position:relative;
height: 100%;
 div{  
  position: absolute;
  top:-20px;
  z-index: 1;
  margin-left: 2.3rem;
  height:1.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width:1.125rem;
  background-color: #9F00D9;
  border-radius: 0.375rem;
  outline: 2px solid #fff;}
`;

export const RoundedImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
`;





