import styled from 'styled-components'

export  const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: url(${require('@/static/img/login/login.png')});
  height: 100vh;
  animation: login_animation 20s linear infinite;

  .card {
    margin: 0 auto ;
    width: 380px;
    box-sizing: border-box;
    padding: 0 40px 40px;
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
    background-color: #fff;
    position: relative;

    .logo{
      width: 110px;
      height: 110px;
      border-radius: 50%; 
      margin: -50px auto 0;
      position: relative;
      z-index: 3;
      padding: 20px;
      box-sizing: border-box;
      box-shadow: 0 4px 40px rgba(0, 0, 0, 0.07);
      background-color: #fff;
      img{
        width: 100%;
      }
    }
    
    .title{
      h3{
        color: #409eff;
        text-align: center;
        font-weight: 700;
        font-size: 16px;
      }
    }
  }

  @keyframes login_animation {
    from {
      background-position: 600px 100%;
    }
    to {
      background-position: 0 100%;
    }
  }
`

