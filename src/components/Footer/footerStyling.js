import styled from "styled-components";

export const FooterMainContainer=styled.div`
width:100%;
background-color: ${props=>(props.$isDark ? '#000000':'#F0F3F2')};
`

export const FooterSubHeading=styled.p`
color:${props=>(props.$isDark ? '#ffffff':'#21313C')};`