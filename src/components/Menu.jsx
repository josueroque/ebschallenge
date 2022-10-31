import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link
        to="/list"
        style={{ textDecoration: "none", margin: "10px", fontWeight: "bolder" }}
      >
        Contacts List
      </Link>
      <Link
        to="/add"
        style={{ textDecoration: "none", margin: "10px", fontWeight: "bolder" }}
      >
        Add Contact
      </Link>
    </div>
  );
};

export default Menu;
