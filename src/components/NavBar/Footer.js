import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import './NavBar.css'


export default function Footer() {
  return (
    <Container >
        <Typography color="black" align='center' sx={{m: 3, bottom: 0}}>
          © 2021 George Dilthey
        </Typography>
    </Container>
  )
}