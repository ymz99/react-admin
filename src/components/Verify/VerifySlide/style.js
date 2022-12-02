import styled from 'styled-components'

const VerifySlideWrapper = styled.div`
  .verify-img-out{
    height: 155px;
    margin-bottom: 5px;
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
    }

    .refresh {
      cursor: pointer;
      position: absolute;
      right: 10px;
      z-index: 999;
      top: 10px;
      color: #333333;
      font-size: 16px;
    }
    .verify-status {
      width: 330px;
      position: absolute;
      bottom: 0;
      font-size: 12px;
      color: #fff;
      height: 20px;
      line-height: 20px;
    }

    .status-enter {
      bottom: -20px;
    }
    .status-enter-active {
      bottom: 0;
      transition: bottom .8s ease;
    }
    .status-exit {
      bottom: 0;
    }
    .status-exit-active {
      bottom: -20px;
      transition: bottom .8s ease;
    }

    .verify-status.success {
      background-color:rgba(92, 184, 92,.5);  
    }
    .verify-status.fail {
      background-color:rgba(217, 83, 79,.5);  
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
      background-color: blue;
    }

    .verify-left-bar {
      flex: 1;

      .verify-left-icon{
        background-color: rgb(255, 255, 255);
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
  .left-transition {
    transition-property: width, left;
    transition-duration: .8s;
    transition-timing-function: ease;
  }
`

export default VerifySlideWrapper