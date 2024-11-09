import "sanitize.css";
import {createGlobalStyle} from "styled-components";
import { ThemeName } from "./theme";

interface Props {
    themeName : ThemeName; //타입가드 해주기
     //테마 name에 따라서 기본 스타일 변경
}
export const GlobalStyle = createGlobalStyle<Props>`
body {
padding : 0;
margin : 0;
background-color : ${(props) => (props.themeName === "light" ? "white" : "black")}
}
 h1 {
 margin : 0;
 }
 * {
 color : ${(props) => props.themeName === 'light' ? "black" : "white"}};
`;

//sanitize는 where절을 이용하는 특징이 있고 css를 
//전역으로 쓰겠다는 뜻
//global은 sanitze스타일 외에 프로젝트에 적용하겠다는 스타일
//테마에 따라 변해야 함