import styled from 'styled-components'

const Left = styled.div`
  .left-top {
    cursor: pointer;
    width: 210px;
    height: 48px;
    padding-left: 25px;
    display: flex;
    align-items: center;
    color: #fff;
    box-sizing: border-box;

    .logo {
      width: 32px;
      height: 32px;
    }
    p {
      margin: 0;
      margin-left: 10px;
      font-size: 16px;
      line-height: 32px;
      opacity: ${props => props.collapsed ? 0 : 1};
    }
  }
`
export default Left