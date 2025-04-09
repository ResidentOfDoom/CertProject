import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { AddIcon, CreateIcon, DeleteIcon } from "components/mui";
import React, { useState } from "react";

const MINWIDTH = 150;
const WIDTH = "auto";

const CustomTable = ({
  columns,
  rows,
  handleAdd,
  handleDelete,
  handleUpdate,
  identifierField,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        width: "80%",
        overflow: "hidden",
        position: "relative",
        margin: "0px auto",
      }}
    >
      <Button
        sx={{ margin: "30px 10px" }}
        variant="contained"
        color="success"
        disableElevation
        onClick={handleAdd}
        endIcon={<AddIcon />}
      >
        ADD
      </Button>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.label}
                  align="center"
                  style={{ minWidth: MINWIDTH, width: WIDTH }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell style={{ minWidth: 10, width: 100 }} />
              <TableCell style={{ minWidth: 10, width: 100 }} />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.label];
                      return (
                        <TableCell key={column.label} align="center">
                          {value === "UPDATE" || value === "DELETE" ? (
                            <Button
                              variant="contained"
                              color={value === "UPDATE" ? "success" : "error"}
                              onClick={
                                value === "UPDATE" ? handleUpdate : handleDelete
                              }
                              startIcon={<CreateIcon />}
                            >
                              {value}
                            </Button>
                          ) : (
                            <>{value}</>
                          )}
                        </TableCell>
                      );
                    })}
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => handleUpdate(row[identifierField])}
                        startIcon={<CreateIcon />}
                      >
                        UPDATE
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleDelete(row[identifierField])}
                        startIcon={<DeleteIcon />}
                      >
                        DELETE
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default CustomTable;
