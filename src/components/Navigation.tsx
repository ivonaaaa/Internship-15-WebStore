import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography>Web Store</Typography>
          <Button color="inherit" component={Link} to="/add-product">
            Add New Product
          </Button>
          <Button color="inherit" component={Link} to="/">
            Products
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
