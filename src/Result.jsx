import { useNavigate } from "react-router-dom"
import Icon from "./images/ガキ大将.jpeg"
import { Rare } from "./result/rare"
import { Footer } from "./common/footer"
import backgroundStyles from "./styles/backgroundMovement_result.module.scss"

// 遷移先ページ
export const Result = () => {
  // 遷移用ボタンアクション
  const navigation = useNavigate()
  const onMovePage = () => {
    navigation("/Item")
  }

  const textCenter = {
    textAlign: "center",
  }

  const textTop = {
    paddingTop: "20px",
    color: "white",
    fontFamily: "Kosugi Maru",
    fontSize: "5em",
  }

  return (
    <div className={backgroundStyles.wrapper}>
      <div className={backgroundStyles.container}>
        <form>
          <h1 style={textTop}>結果発表</h1>
          <br></br>
          <h2
            style={{
              fontFamily: "Kosugi Maru",
              fontSize: "50px",
              textAlign: "center",
              marginTop: "-30px",
              color: "white",
            }}
          >
            You got it!
          </h2>
          <div style={{ textAlign: "center", paddingTop: "30px" }}>
            <Rare />
          </div>
          <figure style={textCenter}>
            <img src={Icon} width="550"></img>
          </figure>
          <br></br>
          <h3 style={{ color: "white" }}>母ちゃんの言うことは聞くガキ大将</h3>
          <button style={{ marginTop: "50px" }} onClick={onMovePage}>
            確認
          </button>
        </form>
        <Footer />
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
