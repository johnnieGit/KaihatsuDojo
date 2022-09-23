import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

export const Header = () => {
  const subMenu = {
    fontSize: "20px",
    marginRight: "3em",
    color: "#D8E3D7",
  }

  return (
    <div>
      <Navbar
        style={{
          backgroundColor: "#509898",
          borderBottom: "solid",
          borderBottomWidth: "3px",
          color: "#D8E3D7",
          width: "100%",
          margin: "0 auto",
          boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.1)",
        }}
        fixed="top"
      >
        <Container>
          <Nav>
            <Navbar.Brand href="/" style={{ marginRight: "3em", marginLeft: "0" }}>
              <div className="d-flex align-items-center">
                <img alt="logo" src="/images/icon.ico" width="80" height="80" className="d-inline-block align-top" />{" "}
                <span style={{ fontFamily: "Pacifico", fontWeight: "2000", fontSize: "25px", color: "#D8E3D7" }}>
                  YOU-KNOW-WHO
                </span>
              </div>
            </Navbar.Brand>
          </Nav>
          <Nav>
            <Nav.Link href="/" style={subMenu}>
              ガチャガチャ
            </Nav.Link>
            <Nav.Link href="/Item" style={subMenu}>
              アイテムボックス
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
