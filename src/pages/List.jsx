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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
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
const List = () => {
  const columns = ["id", "name", "email"];
  const [contactsList, setContactsList] = useState([]);
  const fetchContacts = async () => {
    try {
      const response = await getContacts();
      console.log(response);
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
              <TableCell style={{ fontWeight: "bold" }} key={item}>
                {item}
              </TableCell>
            ))}
            <TableCell>Action</TableCell>
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
                    >
                      Delete
                    </Button>
                  }{" "}
                  {
                    <Button
                      variant="contained"
                      onClick={() => console.log(item.id)}
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
