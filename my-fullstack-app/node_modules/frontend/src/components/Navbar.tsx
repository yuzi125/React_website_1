import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Avatar
} from '@mui/material'
import { Link } from 'react-router-dom'
import { 
  Home, 
  Person, 
  Work, 
  School, 
  Code, 
  EmojiEvents,
  ContactMail 
} from '@mui/icons-material'

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: '#1976d2' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
          <Avatar
            sx={{ width: 40, height: 40, mr: 2 }}
            src="/assets/img/profile.jpg"
            alt="吳宥謙"
          />
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 'bold',
              color: 'white'
            }}
          >
            吳宥謙 | 前端工程師
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Button 
            color="inherit" 
            component={Link} 
            to="/"
            startIcon={<Home />}
            sx={{ '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
          >
            首頁
          </Button>
          
          <Button 
            color="inherit" 
            onClick={() => scrollToSection('about')}
            startIcon={<Person />}
            sx={{ '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
          >
            關於我
          </Button>

          <Button 
            color="inherit" 
            onClick={() => scrollToSection('experience')}
            startIcon={<Work />}
            sx={{ '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
          >
            工作經驗
          </Button>

          <Button 
            color="inherit" 
            onClick={() => scrollToSection('education')}
            startIcon={<School />}
            sx={{ '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
          >
            學歷
          </Button>

          <Button 
            color="inherit" 
            onClick={() => scrollToSection('skills')}
            startIcon={<Code />}
            sx={{ '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
          >
            技能
          </Button>

          <Button 
            color="inherit" 
            onClick={() => scrollToSection('awards')}
            startIcon={<EmojiEvents />}
            sx={{ '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
          >
            獎項
          </Button>

          <Button 
            color="inherit" 
            href="mailto:yuzi1257@gmail.com"
            startIcon={<ContactMail />}
            sx={{ 
              ml: 2,
              bgcolor: 'rgba(255,255,255,0.1)',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
              borderRadius: 2
            }}
          >
            聯繫我
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar 