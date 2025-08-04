import { 
  Container, 
  Paper, 
  Typography, 
  TextField, 
  Button, 
  Box,
  Link as MuiLink
} from '@mui/material'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            登入
          </Typography>
          
          <Box component="form" sx={{ mt: 2 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="電子郵件"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="密碼"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              登入
            </Button>
            
            <Box sx={{ textAlign: 'center' }}>
              <MuiLink component={Link} to="/register" variant="body2">
                還沒有帳號？立即註冊
              </MuiLink>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  )
}

export default LoginPage 