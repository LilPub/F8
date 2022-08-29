import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom/client' // nạp thư viện react-dom

// Tạo component App
function App() {
    return (
        <div>
            <h1>Xin chào anh em F8!</h1>
            <h2>Tuyệt vời!!!</h2>
            <input type="text" placeholder="Nhập text vào đây"/>
            <button>Clickme</button>
        </div>
    )
}

// // Render component App vào #root element
// //render react 17
// ReactDOM.render(<App />, document.getElementById('root'))

//render react 18
const container = document.querySelector('#root')
const root = ReactDOM.createRoot(container)

root.render(<App />)

