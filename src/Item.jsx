export const Item = () => {
  const textTop = {
    paddingTop: "20px",
    color: "white",
    fontFamily: "Kosugi Maru",
    fontSize: "5em",
  }

  return (
    <>
      <h1 style={textTop}>アイテムボックス</h1>
      <div class="main col-12 text-center">
        <div class="">
          <h3>選択中：パソコンくん</h3>
          <img src="logo192.png" class="rounded mx-auto d-block" alt="..."></img>
          <p>説明文ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー</p>
        </div>
      </div>

      <div class="container">
        <div class="row gy-3">
          <div class="col-md-4">
            <div class="card text-center">
              <div class="card-body">
                <h5 class="card-title">アイテム名：　ポテトくん</h5>
                <img src="logo192.png" class="rounded mx-auto d-block" alt="..."></img>
                <a href="#" class="btn btn-primary">
                  詳細
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card text-center">
              <div class="card-body">
                <h5 class="card-title">アイテム名：　サラダちゃん</h5>
                <img src="logo192.png" class="rounded mx-auto d-block" alt="..."></img>
                <a href="#" class="btn btn-primary">
                  詳細
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card text-center">
              <div class="card-body">
                <h5 class="card-title">アイテム名：　チョコちゃん</h5>
                <img src="logo192.png" class="rounded mx-auto d-block" alt="..."></img>
                <a href="#" class="btn btn-primary">
                  詳細
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card text-center">
              <div class="card-body">
                <h5 class="card-title">アイテム名：　バーガーくん</h5>
                <img src="logo192.png" class="rounded mx-auto d-block" alt="..."></img>
                <a href="#" class="btn btn-primary">
                  詳細
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
