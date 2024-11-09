import {createContext, ReactNode, useEffect, useState} from "react";
import { getTheme, ThemeName } from "../style/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../style/global";

const DEFAULT_THEME_NAME = "light";
const THEME_LOCALSTORAGE_KEY = "book_store_theme";
interface State {
    themeName : ThemeName;
    toggleTheme : () => void;
}
export const state = {
    themeName : DEFAULT_THEME_NAME as ThemeName,
    toggleTheme : () => {}, //themeName을 파라미터로 하는 함수일뿐
    //provider를 app에 새로 작성해서 감싸줘야함
};

export const ThemeContext = createContext<State>(state);
//초기값은 light지만 dark값이 들어올수도 있음
//이 context는 app에서 사용할거라 app보다 상위파일이어야함
export const BookStoreThemeProvider = ({children} : {children: ReactNode}) => {
    const [themeName, setThemeName] = useState<ThemeName>(DEFAULT_THEME_NAME);
    const toggleTheme= () => {
        setThemeName(themeName === "light" ? "dark" : "light");
        localStorage.setItem(THEME_LOCALSTORAGE_KEY, themeName==="light" ? "dark" : "light");
        //테마가 전환하는 토글에서 저장

    };
    //기본값을 받아오는 부분
    //초기값을 받아오고 있다면 setThemeName을 사용해서 적용하고 받아오지 않으면 default적용
    useEffect(() => {
        const savedThemeName = localStorage.getItem(THEME_LOCALSTORAGE_KEY) as ThemeName;
        setThemeName(savedThemeName || DEFAULT_THEME_NAME);
    }, []);
    return (
        <ThemeContext.Provider value={{themeName, toggleTheme}}>
            <ThemeProvider theme={getTheme(themeName)}> {/*getTheme에서 리턴해주는 themeName이 다르게 됨*/}
            <GlobalStyle themeName={themeName}/>
            {children}</ThemeProvider>
            </ThemeContext.Provider>
    );
};
//원래 app에 있던 themeProvider와 globalStyle 둘 다 테마라 그냥 여기로 가져옴
//우리 프로젝트 테마는 이제 BookStoreThemeProvider에 의존하게 됨
//BookStoreThemeProvider는 themeName, toggleTheme을 가지고 있음,
//앱 전체에서 이 테마를 구독할 수 있고 ThemeProvider에서 제공하는 theme와 global theme도
//다 이쪽에 모여 있음