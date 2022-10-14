import styled from "styled-components";
import { THEME } from "../../global";
import MenuBg from "../../assets/images/menu-bg.png";

export const Container = styled.div<{
  display: boolean;
}>`
  background-color: ${THEME.colors.beige300};
  background-image: url(${MenuBg});
  background-repeat: no-repeat;
  background-size: contain;
  visibility: ${({ display }) => (display ? "visible" : "hidden")};
  width: ${({ display }) => (display ? "495" : "0")}px;
  height: 100%;
  display: ${({ display }) => (display ? "flex" : "none")};
  flex-direction: column;
  transition: 0.5s;
  position: ${({ display }) => (display ? "fixed" : "sticky")};
  right: 0;
  z-index: 100;
  padding-top: 100px;
  padding-left: 45px;

  .logo-menu {
    width: 180px;
  }

  .main-menu {
    width: 100%;
    display: flex;
    flex-direction: column;
    transition: 0.5s;
    padding-top: 80px;
    > a {
      font-size: 20px;
      font-weight: bold;
      margin: 0 0 10px 10px;
      cursor: pointer;
      text-decoration: none;
      font-family: "Bebas Neue";
      color: ${THEME.colors.brown900};
      font-size: 35px;
      line-height: 45px;
    }
  }

  .footer-menu {
    padding-top: 100px;
    ul {
      display: flex;
      list-style: none;
      li {
        background-color: ${THEME.colors.brown900};
        width: 24px;
        height: 24px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 5px;
        &.facebook-item {
          background-color: transparent;
        }
        &:last-child {
          width: auto;
          background-color: transparent;
          font-family: 'SFCompactDisplay';
          color: ${THEME.colors.brown900};
          font-weight: 300;
          letter-spacing: 3px;
          font-size: 20px;
        }
        a {
          .fa-brands {
            color: ${THEME.colors.beige300};
            padding-top: 0.3px;
            &.fa-facebook {
              border-radius: 100%;
              font-size: 24px;
              color: ${THEME.colors.brown900};
            }
          }
        }
      }
    }
  }
  @media (min-width: 0px) and (max-width: 1024px){
    width: 100%;
  }
`;
