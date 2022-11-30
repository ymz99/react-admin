import styled from 'styled-components'

const VerifySlideWrapper = styled.div.attrs(props => ({
  
}))`
  .verify-img-out{
    height: 160px;
    position: relative;
    transition: all .3s ease;

    .verify-img-panel{
      width: 330px;
      height: 155px;
      margin: 0;
      box-sizing: content-box;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      border-radius: 3px;
      position: relative;
    }

    .verify-block-img {
      z-index: 999;
      position: absolute;
      top: 0;
      width: 50px;
      height: 155px;
      left: ${props => props.leftDistance + 'px'};
    }

  }

  .verify-bar-area {
    width: 330px;
    height: 40px;
    line-height: 40px;
    position: relative;
    background: #FFFFFF;
    text-align: center;
    box-sizing: content-box;
    border: 1px solid #ddd;
    display: flex;

    .verify-left-bg{
      height: 100%;
      display: inline-block;
      width: ${props => props.leftDistance + 'px'};
      background-color: blue;
    }

    .verify-left-bar {
      flex: 1;

      .verify-left-icon{
        background-color: rgb(255, 255, 255);
        left: ${props => props.leftDistance + 'px'};
        box-shadow: 0 0 2px #888888;
        cursor: pointer;
        width: 40px;
        height: 40px;
      }
    }
  }

  img{
    width: 100%;
    height: 100%;
    display: block;
  }
`
export default VerifySlideWrapper