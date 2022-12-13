import styled from 'styled-components'

const Header = styled.div`
  border-bottom: 1px solid #f6f6f6;
  display: flex;
  position: relative;
  justify-content: space-between;
  z-index: 99;
  .collapsed {
    display: flex;
    height: 48px;;
    align-items: center;

    .collapsed-btn svg{
      height: 22px;
      width: 22px;
      fill: #000;
    }
    span{
      margin-left: 10px;
    }
  }

  .operate {
    padding-right: 15px;
    display: flex;
    align-items: center;

    .full-screen {
      margin-right: 20px;
      .full-screen-icon {
        font-size: 18px;
        cursor: pointer;
      }
    }
    
    .message {
      margin-right: 20px;
      .message-icon {
        font-size: 18px;
        cursor: pointer;
      }
    }

    .user-info {
      cursor: pointer;
      margin-right: 20px;
      padding: 0 10px;
      display: flex;
      align-items: center;
      .icon {
        margin-right: 5px;
        font-size: 20px;
      }
      &:hover {
        background-color: #f6f6f6;
      }
    }
    .setting {
      font-size: 20px;
      cursor: pointer;
    }
  }
`

export const InfoCard = styled.div`
  p{
    width: 90px;
    margin: 0;
    cursor: pointer;
    text-align:center;
    line-height: 22px;
    font-size: 14px;
    padding: 5px 0;
    &:hover {
      color: #ccc;
    }
  }
  .login-out {
    border-top: 1px solid #ebeef5;
  }
`

export default Header