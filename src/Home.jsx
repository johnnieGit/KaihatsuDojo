import { useNavigate } from "react-router-dom"
import backgroundStyles from "./styles/backgroundMovement.module.scss"

const paddingTop = {
  paddingTop: "200px",
  paddingBottom: "290px",
}

// 最初に表示されている遷移元ページ
export const Home = () => {
  // 遷移用ボタンアクション
  const navigation = useNavigate()
  const onMovePage = () => {
    navigation("/Result")
  }

  return (
    <div className={backgroundStyles.wrapper} style={{ height: "100vh" }}>
      <div className={backgroundStyles.container}>
        <form>
          <div style={paddingTop}>
            <h1 style={{ color: "white" }}>元ページ</h1>
            <button onClick={onMovePage}>ガチャを回す（一回１万円！）</button>
          </div>
        </form>
      </div>
      <ul className={backgroundStyles.bgBubbles}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}
