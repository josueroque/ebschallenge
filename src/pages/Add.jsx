import React, { useState } from "react";
import { TextField, FormControl, Typography, Button } from "@mui/material";
import Menu from "../components/Menu";
import { createContact } from "../services/apiService";
import swal from "sweetalert";
const Add = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createContact({ name, email });
      swal({ title: "success", icon: "success" });
    } catch (error) {
      swal({ title: "error", icon: "error" });
    }
  };
  return (
    <>
      <Menu />
      <div style={{ width: "50%", margin: "0 auto", marginTop: "20px" }}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h5" align="center">
            {" "}
            Add new Contact
          </Typography>
          <FormControl required fullWidth style={{ marginBottom: "20px" }}>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              label="Name"
            ></TextField>
          </FormControl>
          <FormControl required fullWidth style={{ marginBottom: "20px" }}>
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              label="Email"
            ></TextField>
          </FormControl>
          <div style={{ margin: "0 auto", textAlign: "center" }}>
            <Button
              variant="contained"
              align="center"
              type="submit"
              style={{ marginTop: "20px", textAlign: "center" }}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Add;
