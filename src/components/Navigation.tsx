import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#b3caf1",
      }}
    >
      <Container>
        <Toolbar sx={{ display: "flex", gap: 2 }}>
          <Typography
            sx={{
              fontSize: "1.4rem",
              fontFamily: "Cascadia Code",
              fontWeight: "bold",
            }}
          >
            Web Store
          </Typography>
          <Typography
            sx={{
              fontSize: "1.5rem",
              paddingX: "20px",
            }}
          >
            |
          </Typography>
          <Button
            color="inherit"
            component={Link}
            to="/add-product"
            sx={{
              fontFamily: '"Cascadia Code", monospace',
              "&:hover": {
                backgroundColor: "#e3caf1",
              },
            }}
          >
            Add New Product
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              fontFamily: '"Cascadia Code", monospace',
              "&:hover": {
                backgroundColor: "#e3caf1",
              },
            }}
          >
            Products
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
