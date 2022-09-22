import { useNavigate } from 'react-router-dom';
import { Footer } from "./common/footer";
import classes from "./backgroundMovement.module.scss";


const paddingTop = {
    paddingTop: "200px",
    paddingBottom: "290px"
};

// 最初に表示されている遷移元ページ
export const Home = () => {
    // 遷移用ボタンアクション
    const navigation = useNavigate()
    const onMovePage = () => {
      navigation("/Result");
    };
  
    return (
        <div className={classes.wrapper} style = {{height:"100vh"}}>
            <div className={classes.container}>
                <form>
                    <div style={paddingTop}>
                        <h1 style={{color: "white"}}>元ページ</h1>
                        <button onClick={onMovePage}>ガチャを回す（一回１万円！）</button>
                    </div>
                </form>
                <Footer />
            </div>
            <ul className={classes.bgBubbles}>
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
    );
  };