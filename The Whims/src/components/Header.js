import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
  Badge,
  Button,
  Container as ContainerFluid,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { CartState } from "../context/Context";
import "./styles.css";
import logo from '../assets/logo.png';

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  return (
    <Navbar style={{ backgroundColor: "purple", height: 80 }} className="fixed-top">
      <ContainerFluid fluid >
        <Navbar.Brand>
          <Link to="/" style={{ color: "white" }}>
            <img
              src={logo}
              alt="Logo"
              className="logo"
              style={{ width: 70, height: 70, marginRight: 10, borderRadius: 100 }}
            /><span>The Whims</span></Link>
        </Navbar.Brand>
        {useLocation().pathname.split("/")[1] !== "cart" && (
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              type="search"
              placeholder="Search a product..."
              className="m-auto"
              aria-label="Search"
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            />
          </Navbar.Text>
        )}
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="light">
              <FaShoppingCart fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 300, maxHeight: "50vh", overflowY: "auto", overflowX: "hidden" }}>
              {cart.length > 0 ? (
                <>
                  <Link to="/cart">
                    <Button variant="light" style={{ width: "95%", margin: "0 10px", marginBottom:"10px",backgroundColor:"purple",color:"white"}}>
                      Go To Cart
                    </Button>
                  </Link>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </ContainerFluid>
    </Navbar>
  );
};

export default Header;
