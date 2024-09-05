import styled from "styled-components";

export const FeatureHeading=styled.h1`
  color:${props=>(props.$isDark ? '#f9f9f9': '#21313C')}
    
`
export const FeaturePara=styled.p`
  color:${props=>(props.$isDark ? '#999999': '#5C6C75')}
`
