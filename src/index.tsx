import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "sanitize.css"; //프로젝트는 index하위에 있음 그래서 전체에 적용됨

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//이렇게 app을 ThemeContext로 감싸면 app이 하위파일이 됨
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

