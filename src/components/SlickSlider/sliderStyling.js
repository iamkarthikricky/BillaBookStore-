import styled from 'styled-components';


export const SliderHeading=styled.h1`
    color:${props=>(props.$isDark ? '#f0f0f0': '#21313C')};
    font-size:20px;
    font-weight:500;
`

export const SlidePara = styled.p`
    margin-top: 5px;
    font-size: 16px;
    color: ${props=>(props.$isDark ? '#f9f9f9' :'#5C6C75')};
    font-weight: 500;
    line-height: 1;
`