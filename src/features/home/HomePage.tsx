import { Box, Button, Grid2, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <Grid2 size={12}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            textAlign: "center",
            width: "100%",
            height: "650px",
            backgroundImage: "url(/images/hero1.jpg)",
            backgroundSize: "cover",
            borderRadius: "8px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          />
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to the Work Management System
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            To continue, please log in
          </Typography>
          <Button
            component={Link}
            to={"/login"}
            variant="contained"
            color="primary"
          >
            Log in
          </Button>
        </Box>
      </Grid2>
      <Grid2 container spacing={4}></Grid2>
    </>
  );
}
