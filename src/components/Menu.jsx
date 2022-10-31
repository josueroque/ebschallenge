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
      <Link to="/list" style={{ textDecoration: "none", margin: "10px" }}>
        Contacts List
      </Link>
      <Link to="/contact" style={{ textDecoration: "none", margin: "10px" }}>
        Add Contact
      </Link>
      <Link
        to="/contact/:id"
        style={{ textDecoration: "none", margin: "10px" }}
      >
        Edit Contact
      </Link>
    </div>
  );
};

export default Menu;
