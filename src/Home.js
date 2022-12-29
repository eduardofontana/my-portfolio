import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './styles/Global.scss'

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}