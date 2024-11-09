export type ColorKey = "primary" | "background" | "secondary" | "third";
//이런 식으로 color key에 제한을 둘 수도 있음
export type ThemeName = "light" | "dark";

interface Theme {
    name : ThemeName;
    color : Record<ColorKey, string>;
        
        //레코드 방식 사용
        /*
        primary : string;
        background : string;
        secondary? : string;
        */
    
}
//테마를 타입으로 관리하는 게 좋음
export const light : Theme = {
    name : 'light',
    color : {
        primary : 'brown',
        background : 'lightgray',
        secondary : "blue", //두번째 컬러
        third : "green",
    },
};
//계속 값이 늘어날 수 있는데 계속 type에 추가하기 귀찮으니까 color부분을 바꿔줌
export const dark : Theme= {
    name : 'dark',
    color : {
        primary : 'coral',
        background : "midnightblue",
        secondary : "darkblue",
        third : "darkgreen",
    },
}
export const getTheme = (themeName : ThemeName) : Theme => {
    switch(themeName) {
        case "light":
            return light;
        case "dark":
            return dark;
    }
}