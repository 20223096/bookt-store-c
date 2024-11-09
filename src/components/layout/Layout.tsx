import Footer from "../common/Footer";
import Header from "../common/Header";
interface LayoutProps {
    children : React.ReactNode;
    //React Node가 가장 큰 집합이고 그 안에 React Element, JSX Element집합이 있다.
    //
}
function Layout({children} : LayoutProps) {
    return (
        <>
        <Header />
        <main>{children}</main>
        <Footer />
        </>
    )
}
export default Layout;
//children을 이용해서 main안의 내용물 처리
//layout에서 유동적으로 바뀌는 값을 children을 이용해서  처리
