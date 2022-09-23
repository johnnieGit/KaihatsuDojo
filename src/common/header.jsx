import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export const Header = () => {

    const subMenu = {
        fontSize: "20px",
        marginRight: "3em",
        color: "#D8E3D7"
    };

    return(
        <div>
        <Navbar style={{ backgroundColor: "#509898", borderBottom: "solid", borderBottomWidth: "3px", color: "#D8E3D7", width: "100%", margin: "0 auto", boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.1)" }} fixed="top">
        <Container>
            <Nav>
                <Navbar.Brand href="#home" style={{ marginRight: "3em", marginLeft: "0" }}>
                    <img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    <span style={{ fontFamily: "Pacifico", fontWeight: "2000", fontSize: "25px", color: "#D8E3D7" }}>YOU-KNOW-WHO</span>
                </Navbar.Brand>
            </Nav>
            <Nav>
                <Nav.Link href="" style={subMenu}>ガチャガチャ</Nav.Link>
                <Nav.Link href="" style={subMenu}>アイテムボックス</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
        </div>
    );
};