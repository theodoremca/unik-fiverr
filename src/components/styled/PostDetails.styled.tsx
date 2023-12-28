import styled from "styled-components";
import { Container } from "./Container.styled";

export const ImageContainer = styled(Container)`
  width: 60%; 
  display: none; 
  height: 100vh; 
  justify-content: center; 
  align-items: center; 
  background-color: #bfbebe; 
  position: relative; 
  @media (min-width: 1024px) {
    display: flex; 
  }
  span{
  position: fixed;
  z-index: 4;
  top: 1rem; 
  left: 1.25rem; 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  background: #808080;
  border-radius: 9999px;
  }
`


export const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #fff;
  padding: 1.5rem;
  position:relative;
   align-items: stretch;
 @media (min-width: 1024px) {
    width: 40%;
 }

`

export const TimeBox = styled.div`
  display: flex;
  background-color: #e2caf3;
  padding: 0.5rem; 
  gap: 0.5rem; 
  align-items: center;
  border-radius: 0.375rem; 
  width: max-content;
  flex-grow: 1; 
  div {
  text-align: center;
  color: #6f42c1;
  font-size: 0.875rem; 
  }
   @media (min-width: 1024px) {
     flex-grow: 0; 
 }
`;

export const ActionContainer = styled(Container)`
   & > div:first-child {
  width: 1.125rem; 
  height: 1.125rem;  
  background-color: #e5e7eb; 
  padding: 0.5rem;
  border-radius: 50%; 
      box-sizing: content-box;
  display: flex;
  justify-content:center;
  align-items:center
  } 
  & > div:nth-child(2){
      text-align: center;
  color: #000;
  font-size: 0.725rem;
  font-weight: 500;
  line-height: 1.25rem;
  }

`;

export const StyledTabsContainer = styled.div`
  text-align: center;
  color: #718096;
  margin-top: 1rem;
 border-bottom: 0.5px solid #d1d5db;
  ul {
    display: flex;
    flex-wrap: wrap;
     list-style-type: none;
  }

  li {
    margin-right: 0.5rem;
    
  }

  button {
   font-size: 1rem;
   display: inline-flex;
  justify-content: center;
  padding-inline: 0.25rem; 
  padding-block: 0.25rem; 
  font-size: 0.725rem; 
  font-weight: 300; 
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
  cursor: pointer;

    &:hover {
      color: #4a5568;
      border-bottom: 1px solid #4a5568;
    }

    &.active {
      color: #2d3748;
      border-bottom: 1px solid #9F00D9;;
      font-weight: bold;
    }
  }
`;


export const LeftSideComment = styled.div`display: flex;
  gap: 0.5rem;
  padding-top: 1rem;

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      p {
        &:first-child {
          color: #000;
          font-size: 1rem;
          font-weight: 500;
        }

        &:last-child {
          color: #787878;
          font-size: 0.75rem;
          font-weight: 300;
        }
      }
    }

    > p {
      color: #000;
      font-size: 0.75rem;
      font-weight: 400;

      span {
        color: #800080;
      }
    }

    > div:last-child {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      div {
        width: 2.5rem;
        height: 1px;
        background-color: #800080;
      }

      p {
        color: #950095;
        font-size: 0.75rem;
        font-weight: 300;
      }
    }
  }
`;


export const RightSide = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  > div {
    width: 1.5rem; 
    height: 1.5rem; 
    padding: 0.25rem;
    background-color: #F3D8FD;
    border-radius: 0.375rem;
    display: flex;
    justify-content: center; 
    align-items: center;
    gap: 0.875rem; 
    display: inline-flex;
  }

  p {
    /* Your text styles go here */
  }

  svg {
    height: 1.25rem; /* height-5 */
  }
`


export const NewCommentContainer = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
 
  bottom:0;
  textarea {

    padding: 1rem;
    border: none;
    outline: none;
    resize: none;
    outline: none;
  }
  textarea::placeholder {
    font-size: 0.75rem
  }

   div {
    display: flex;
    width: 100%;
    gap: 0.5rem;
> * {

    color: #00000050;

  }

  }
`;


export const CommentListContainer = styled.div`
  overflow-y: auto;
display: flex;
flex-direction:column;
  flex-grow:1;
  padding-right:1rem;
`;

export const CarouselImage = styled.div`
  max-height: 946px;
  max-width: 811px;

  img {
    width: 100%; 
    height: 100%;
    object-fit: cover; 
    padding: 1.75rem; 
  }
`;