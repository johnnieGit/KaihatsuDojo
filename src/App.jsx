import { Header } from "./components/Header"
import { Background } from "./components/Background"
import { Footer } from "./components/Footer"
import { Home } from "./Home"
import { Result } from "./Result"
import { Item } from "./Item"
import "./styles/App.scss"

export const App = () => {
  return (
    <>
      <Header />
      <Background />
      <main style={{ minHeight: "100vh" }}>
        <div className="container text-light">
          <h1>Entry point here</h1>
        </div>
      </main>
      <Footer />
    </>
  )
}
