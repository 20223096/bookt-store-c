import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

function ThemeSwitcher() {
    const {themeName, toggleTheme} = useContext(ThemeContext);

return <button onClick={() => toggleTheme()}>{themeName}</button>;
}

//본인의 상태 가지지 않고 Context에 의존해서 상태 바꿈
/*interface Props {
    themeName : ThemeName;
    setThemeName : (themeName : ThemeName) => void;
    //테마네임을 변경하면 외부로 set해주는 함수가필요
} //기존에는 props에서 정보 가져왔지만 이제는 context에서 가져오기
*/
/*
function ThemeSwitcher({themeName, setThemeName}: Props) {
    const toggleTheme = () =>{
        setThemeName(themeName === "light" ? "dark" : "light");
    }
    return <button onClick={toggleTheme}>{themeName}</button>
}
    */
export default ThemeSwitcher;