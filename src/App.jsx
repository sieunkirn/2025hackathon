import {Routes, Route, Navigate} from 'react-router-dom'
import StartPage from './components/pages/StartPage.jsx'
import UserInfoPage from './components/pages/UserInfoPage.jsx'
import AddressPage from './components/pages/AddressPage.jsx'
import FamilyInfoPage from './components/pages/FamilyInfoPage.jsx'
import HomePage from './components/pages/HomePage.jsx'
import MyPage from './components/pages/MyPage.jsx'
import WelfarePage from './components/pages/WelfarePage.jsx'
import ChatbotPage from "./components/pages/ChatbotPage.jsx";
import './styles/components.css'
import PolicyDetailPage from "./components/pages/PolicyDetailPage.jsx";

function App() {
    return (
        <div className="app-container">
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/info" element={<UserInfoPage />} />
                <Route path="/address" element={<AddressPage />} />
                <Route path="/family" element={<FamilyInfoPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/my" element={<MyPage />} />
                <Route path="/welfare" element={<WelfarePage />} />
                <Route path="/chatbot" element={<ChatbotPage />} />
                <Route path="/policy" element={<PolicyDetailPage />} />  {/*:id*/}
                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
        </div>
    )
}

export default App

//
// import { Routes, Route, Navigate } from 'react-router-dom'
// import { useApp } from './contexts/AppContext.jsx'
//
// import StartPage from './components/pages/StartPage.jsx'
// import UserInfoPage from './components/pages/UserInfoPage.jsx'
// import AddressPage from './components/pages/AddressPage.jsx'
// import FamilyInfoPage from './components/pages/FamilyInfoPage.jsx'
// import HomePage from './components/pages/HomePage.jsx'
// import MyPage from './components/pages/MyPage.jsx'
// import WelfarePage from './components/pages/WelfarePage.jsx'
// import ChatbotPage from './components/pages/ChatbotPage.jsx'
// import './styles/components.css'
//
// function GuardedRoute({ when, redirect, children }) {
//     return when ? children : <Navigate to={redirect} replace />
// }
//
// export default function App() {
//     const { userData } = useApp()
//
//     const hasUser = !!(userData?.name && userData?.gender && userData?.birthYear)
//     const hasAddress = !!(userData?.address?.full && userData?.address?.regionConfirmed)
//     const doneAll = !!userData?.isComplete
//
//     return (
//         <div className="app-container">
//             <Routes>
//                 {/* 최초 진입: 완료면 /home, 아니면 온보딩 시작 */}
//                 <Route path="/" element={<Navigate to={doneAll ? "/home" : "/info"} replace />} />
//
//                 {/* 온보딩 1단계: 기본 정보 */}
//                 <Route path="/info" element={<UserInfoPage />} />
//
//                 {/* 온보딩 2단계: 주소 (1단계 충족자만 접근) */}
//                 <Route
//                     path="/address"
//                     element={
//                         <GuardedRoute when={hasUser} redirect="/info">
//                             <AddressPage />
//                         </GuardedRoute>
//                     }
//                 />
//
//                 {/* 온보딩 3단계: 가족 구성 (2단계 충족자만 접근) */}
//                 <Route
//                     path="/family"
//                     element={
//                         <GuardedRoute when={hasUser && hasAddress} redirect={hasUser ? "/address" : "/info"}>
//                             <FamilyInfoPage />
//                         </GuardedRoute>
//                     }
//                 />
//
//                 {/* 메인 탭 */}
//                 <Route path="/home" element={<HomePage />} />
//                 <Route path="/my" element={<MyPage />} />
//                 <Route path="/welfare" element={<WelfarePage />} />
//                 <Route path="/chatbot" element={<ChatbotPage />} />
//
//                 {/* 기타 -> 루트 규칙 따르게 */}
//                 <Route path="*" element={<Navigate to="/" replace />} />
//             </Routes>
//         </div>
//     )
// }
