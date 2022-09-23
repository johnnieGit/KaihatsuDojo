export const Header = () => {
  return (
    <div>
      <header className="w-100 fixed-top">
        <nav className="navbar navbar-dark navbar-expand bg-primary text-light py-0">
          <div className="container-fluid">
            <a className="navbar-brand d-flex align-items-center" href="/">
              <img src="/images/icon.ico" alt="Logo" width="64" height="64" className="d-inline-block align-text-top" />
              <span style={{ fontFamily: "Pacifico" }} className="text-reset">
                YOU-KNOW-WHO
              </span>
            </a>
          </div>
        </nav>
      </header>
      <div style={{ height: "80px" }}></div>
    </div>
  )
}
