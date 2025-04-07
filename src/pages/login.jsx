import { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  CssBaseline,
  Grid,
  Avatar,
  Divider,
  CircularProgress,
  Alert,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleIcon from "@mui/icons-material/Google";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Function to handle email/password login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!email.includes("@") || password.length < 6) {
      setError("Invalid email or password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setError("Login failed. Check your credentials and try again.");
    } finally {
      setLoading(false);
    }
  };

  // Function to handle Google login
  const handleGoogleSignIn = async () => {
    setError(null);
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google sign-in successful", result.user);
      navigate("/");
    } catch (error) {
      let errorMessage = "Sign-in failed. Please try again.";
      if (error.code === "auth/network-request-failed") {
        errorMessage = "Network error. Check your internet connection.";
      } else if (error.code) {
        errorMessage = error.message;
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "background.paper",
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        {/* Lock Icon */}
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>

        {/* Sign In Title */}
        <Typography
          component="h1"
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "text.primary",
            mb: 3,
          }}
        >
          Sign in
        </Typography>

        {/* Error Message */}
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        {/* Login Form */}
        <Box
          component="form"
          onSubmit={handleLogin}
          noValidate
          sx={{ mt: 1, width: "100%" }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              "& .MuiInputLabel-root": { color: "text.primary" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "divider" },
              },
            }}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              "& .MuiInputLabel-root": { color: "text.primary" },
              mb: 2,
            }}
          />

          {/* Sign In Button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            sx={{
              mt: 3,
              mb: 2,
              py: 1.5,
              fontSize: "1rem",
              fontWeight: 600,
              backgroundColor: "primary.main",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            {loading ? <CircularProgress size={24} /> : "SIGN IN"}
          </Button>

          <Divider sx={{ my: 2 }}>OR</Divider>

          {/* Google Sign In Button */}
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            onClick={handleGoogleSignIn}
            disabled={loading}
            sx={{
              mb: 2,
              py: 1.5,
              textTransform: "none",
              fontSize: "1rem",
              color: "#5f6368",
              borderColor: "#dadce0",
              "&:hover": {
                backgroundColor: "#f7f8f8",
                borderColor: "#d2e3fc",
              },
            }}
          >
            {loading ? <CircularProgress size={24} /> : "Continue with Google"}
          </Button>

          {/* Forgot Password & Sign Up Links */}
          <Grid container>
            <Grid item xs>
              <Link
                href="/forgot-password"
                variant="body2"
                sx={{
                  color: "text.secondary",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="/signup"
                variant="body2"
                sx={{
                  color: "primary.main",
                  fontWeight: 500,
                }}
              >
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
