import styled from 'styled-components'

const VerifyWrapper = styled.div`
z-index: 98;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .3);
`

export const VerifyBox = styled.div`
  z-index: 100;
  max-width: 360px;
  box-sizing: border-box;
  height: 300px;
  border: 1px solid #e4e7eb;
  box-shadow: 0 0 10px rgba(0,0,0,.3);
  background: #fff;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .verifybox-top {
    padding: 0 15px;
    height: 50px;
    line-height: 50px;
    text-align: left;
    font-size: 16px;
    color: #45494c;
    border-bottom: 1px solid #e4e7eb;
    box-sizing: border-box;

    .verifybox-close{
      position: absolute;
      top: 16px;
      right: 9px;
      width: 24px;
      height: 24px;
      text-align: center;
      cursor: pointer;
    }
      
  }

  .verifybox-content {
    padding: 15px;
    box-sizing: border-box;

  }


`



export default VerifyWrapper