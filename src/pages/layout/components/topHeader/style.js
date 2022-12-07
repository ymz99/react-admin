import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  position: relative;
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

`

export default Header