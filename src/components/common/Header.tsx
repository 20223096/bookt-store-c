import {styled} from 'styled-components';
function Header() {
    return (
        <HeaderStyle>
            <h1>book store</h1>
        </HeaderStyle>
    )
}
const HeaderStyle = styled.header`
    background-color : ${({theme}) => theme.color.background} {/*js변수 표현식으로 테마 작성*/}
    h1 {
        color : ${({theme}) => theme.color.primary};
    }
`
export default Header;
//home의 body역할을 함