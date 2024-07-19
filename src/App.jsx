import Header from './components/Header'
import './App.css'
import MainContainer from './components/MainContainer'
import { UserInfoProvider } from './components/other/UseInfoProvider'

function App() {
  return (
    <div className=' bg-black'>
      <UserInfoProvider>
        <Header/>
        <MainContainer />
      </UserInfoProvider>
    </div>
  )
}

export default App
