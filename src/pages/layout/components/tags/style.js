import styled from "styled-components";

const TagsWrapper = styled.div`
  height: 38px;
  background-color: #fff;

  ul li{
    padding: 0;
    list-style: none;
    display: inline-block;
    margin: 0 3px;
    padding: 0 20px;
    height: 36px;
    line-height: 36px;
    font-size: 13px;
    font-weight: normal;
    color: #c3c3c3;
    cursor: pointer;  

    &.active {
      color: #0960bd;
      border-bottom: 3px solid #0960bd;
    }

    .icon {
      visibility: hidden;
      margin-left: 5px;
      margin-top: 10px;
    }

    &:hover {
      .icon {
        visibility: visible
      }
    }
  }

`

export default TagsWrapper