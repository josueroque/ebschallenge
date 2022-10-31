import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { getContacts, deleteContacts } from "../services/apiService";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";

import { tableCellClasses } from "@mui/material/TableCell";
import Menu from "../components/Menu";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textAlign: "center",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const columns = ["Id", "Name", "Email"];
const List = () => {
  const [contactsList, setContactsList] = useState([]);
  const navigate = useNavigate();
  const fetchContacts = async () => {
    try {
      const response = await getContacts();
      setContactsList(response.data);
    } catch (error) {
      swal({
        title: "Error",
        text: "An error ocurred fetching the data",
        icon: "error",
      });
    }
  };

  const deleteContact = async (id) => {
    try {
      await deleteContacts(id);
      await fetchContacts();
      swal({ title: "Success", text: "Item deleted!", icon: "success" });
    } catch (error) {
      swal({
        title: "Error",
        text: "An error ocurred",
        icon: "error",
      });
    }
  };
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div>
      <Menu />
      <Table
        sx={{ maxWidth: 600 }}
        style={{ marginTop: "25px" }}
        align="center"
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            {columns.map((item) => (
              <TableCell
                align="center"
                style={{ fontWeight: "bold" }}
                key={item}
              >
                {item}
              </TableCell>
            ))}
            <TableCell align="center" style={{ fontWeight: "bold" }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contactsList.length > 0 &&
            contactsList.map((item) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell>{item.id}</StyledTableCell>
                <StyledTableCell>{item.name}</StyledTableCell>
                <StyledTableCell>{item.email}</StyledTableCell>
                <StyledTableCell>
                  {
                    <Button
                      variant="contained"
                      onClick={() => deleteContact(item.id)}
                      style={{ width: "100px" }}
                    >
                      Delete
                    </Button>
                  }{" "}
                  {
                    <Button
                      variant="contained"
                      onClick={() => navigate(`/edit/${item.id}`)}
                      style={{ width: "100px" }}
                    >
                      Edit
                    </Button>
                  }
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default List;
