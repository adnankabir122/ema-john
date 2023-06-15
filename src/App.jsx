import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";

const App = () => {
    return (
        <>
            <Header />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-9">
                        <Shop />
                    </div>
                    <div className="col-3">
                        <Cart />
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
