import React, { useContext, useState } from 'react';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Layout from './components/layout/Layout';
import { GlobalStyle } from './style/global';
import {BookStoreThemeProvider, ThemeContext} from "./context/themeContext";
import {dark, getTheme, light, ThemeName} from "./style/theme"
import ThemeSwitcher from './components/header/ThemeSwticher';
import { ThemeProvider } from 'styled-components';
function App() {
    //const [themeName, setThemeName] = useState<ThemeName>("light");
    //=>이건 지역상탠데 전역상태로 바꿔주고 싶음
    //const {themeName, setThemeName} = useContext(ThemeContext);
    //app은 themeContext를 구독하는 입장임
    //themeName가져와서 제네릭으로 지정해줌

    return(
        <BookStoreThemeProvider>
            <ThemeSwitcher />
    {/*<ThemeSwitcher themeName={themeName} setThemeName={() => {}}/> */}
    <Layout>
        <Home />
    </Layout>
    </BookStoreThemeProvider>
)
}
//계속 바뀌는 컴포넌트를 효율적으로 제공
//근데 앱 입장에서 children이 props인게 좀 불편함
/*
return <Layout>
        <Home /> //children
        </Layout>
-> 이런 식으로 할 수 있음
그냥 home 컴포넌트 열고 닫고 그 안에 컴포넌트 넣어서 children으로 사용하거나 children을 props로 사용하거나

*/
export default App;

//state는 app이 가지고 있고 prop으로 themeSwitcher가 전달해줌,
//themeSwitcher에서 이 props는 버튼의 토글 기능을 제공