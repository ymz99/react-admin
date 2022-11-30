import styled from 'styled-components'


const Form = styled.form`
  .form-item {
    margin-bottom: 12px;
    width: 100%;
    height: 38px;
    margin-top: 35px;
    position: relative;

    input {
      box-sizing: border-box;
      border: none;
      width: 100%;
      height: 32px;
      line-height: 32px;
      border: none;
      outline: none;
      border-bottom: 1px solid #ebedf2;
      text-indent: 15px;
      padding: 0 15px 10px 30px;
      font-size: 13px;
      color: #333;
    }

    .btn{
      cursor: pointer;
      width: 100%;
      background: #409EFF;
      color: #FFF;
      height: 45px;
      font-size: 18px;
      border: none;
      font-weight: 600;
      text-align: center;
      line-height: 45px;
      transition: .25s;

      &:hover{
        background: #66b1ff;
        color: #FFF;
      }
    }

    .form-icon{
      right: 30px;
      float: right;
      font-size: 12px;
      width: 15px;
      position: absolute;
      top: 5px;
      height: 15px;
      fill: #333333;
      cursor: pointer;
    }

  }

  .error {
    position: relative;
    input {
      border-color: red;
    }

    .form-icon{
      fill: red;
    }

    p{
      font-size: 12px;
      color: #F56C6C;
      line-height: 1;
      position: absolute;
      bottom: -20px;
    }
  }

`

export default Form