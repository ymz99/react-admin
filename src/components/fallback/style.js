import styled from "styled-components";
const FallbackWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: rgba(0,0,0, .8);
  display: flex;
  align-items: center;
  justify-content: center;
`

export default FallbackWrapper