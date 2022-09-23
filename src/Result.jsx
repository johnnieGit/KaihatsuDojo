import { useNavigate } from "react-router-dom"
import { Rare } from "./result/rare"

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
        <img src="/images/characters/1.jpg" width="550"></img>
      </figure>
      <br></br>
      <h3 style={{ color: "white" }}>母ちゃんの言うことは聞くガキ大将</h3>
      <button style={{ marginTop: "50px" }} onClick={onMovePage}>
        確認
      </button>
    </form>
  )
}
