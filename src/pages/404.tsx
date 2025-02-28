import { Box, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box>
      <Typography
        sx={{
          marginTop: 20,
          fontSize: "1.8rem",
          fontFamily: "Cascadia Code",
          fontWeight: "bold",
          color: "red",
        }}
      >
        Oops! Seems like this page doesn't exist.
      </Typography>
    </Box>
  );
};

export default NotFound;
