import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {submitLogin} from '../../redux/actionCreators'
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';

const theme = createTheme();

function SignIn({setSignInFalse, submitLogin, user, member}) {

  let [error, setError] = React.useState(null);

  const navigate = useNavigate()
	const path = useLocation().pathname
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const handleSubmit = (event) => {
      event.preventDefault();
      const mid = member ? member.mid : null
      submitLogin({email, password, mid})
    };

  React.useEffect(() => {
    if(user.email) {
      navigate('/account')
    }
  }, [user])

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange = {(e) => setEmail(e.target.value)}
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
              onChange = {(e) => setPassword(e.target.value)}
              error = {error}
              helperText = {error}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
              <Link href={path === '/signin' ? '/signup' : null} variant="body2">
                  <p onClick={setSignInFalse}>Don't have an account? Sign up!</p>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, {submitLogin})(SignIn);