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
      bottom: 4px;
      font-size: 12px;
      color: #fff;
      height: 20px;
      line-height: 20px;
    }
    .verify-status.success {
      background-color:rgba(92, 184, 92,.5);  
       filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7f5CB85C, endcolorstr=#7f5CB85C);
    }
    .verify-status.fail {
      background-color:rgba(217, 83, 79,.5);  
      filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7fD9534F, endcolorstr=#7fD9534F);
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
    transition-duration: .5s;
    transition-timing-function: ease;
  }
`
export default VerifySlideWrapper