import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from "./common/header";
import { Footer } from "./common/footer";
import { Home } from "./Home";
import { Result} from "./Result";
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
    return (
      <>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="result" element={<Result />} />
          </Routes>
        </BrowserRouter>
         {/* <Footer /> */}
      </>
    );
  };