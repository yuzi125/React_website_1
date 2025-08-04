import { 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  Grid, 
  Button,
  Container,
  Avatar,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper
} from '@mui/material'
import { 
  Email, 
  GitHub, 
  School, 
  Work, 
  Code, 
  EmojiEvents,
  LocationOn,
  CalendarToday
} from '@mui/icons-material'

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        {/* Hero Section - About Me */}
        <Paper 
          id="about"
          elevation={3} 
          sx={{ p: 4, mb: 4, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
              <Avatar
                sx={{ 
                  width: 200, 
                  height: 200, 
                  mx: 'auto',
                  border: '4px solid white',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
                }}
                src="/assets/img/profile.jpg"
                alt="吳宥謙"
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                吳 <span style={{ color: '#FFD700' }}>宥謙</span>
              </Typography>
              <Typography variant="h5" sx={{ mb: 2, fontStyle: 'italic' }}>
                "持續學習，精益求精，以技術創新改變世界。"
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem' }}>
                我專注於網頁前端技術的開發，擅長使用 HTML、CSS、JavaScript，以及現代的前端框架如 React、VUE。
                我對用戶界面設計（UI/UX）充滿熱情，並且總是致力於打造既美觀又易用的網站和應用程式。
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  startIcon={<Email />}
                  sx={{ bgcolor: 'rgba(255,255,255,0.2)', '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' } }}
                  href="mailto:yuzi1257@gmail.com"
                >
                  yuzi1257@gmail.com
                </Button>
                <Button
                  variant="contained"
                  startIcon={<GitHub />}
                  sx={{ bgcolor: 'rgba(255,255,255,0.2)', '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' } }}
                  href="https://github.com/yuzi125/"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Experience Section */}
        <Card id="experience" sx={{ mb: 4 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Work sx={{ mr: 2 }} />
              工作經驗
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Card variant="outlined" sx={{ p: 3, mb: 3 }}>
                  <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} md={3}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Avatar
                          sx={{ width: 80, height: 80, mx: 'auto', mb: 1 }}
                          src="/assets/img/台塑.jpg"
                          alt="台塑"
                        />
                        <Typography variant="caption" color="text.secondary">
                          台塑企業
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                      <Typography variant="h6" gutterBottom>科技助教</Typography>
                      <Typography variant="subtitle1" color="primary" gutterBottom>
                        臺灣塑膠工業股份有限公司
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        塑膠製品製造業 500人以上
                      </Typography>
                      <Typography variant="body2">
                        協助同學學習語音及神經網路相關程式(HMM,CNN,LSTM)，並幫忙除錯。
                        規劃專題流程，並完成專題以及報告內容。
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <Chip 
                        icon={<CalendarToday />}
                        label="2023/2~2024/6" 
                        color="primary" 
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                </Card>

                <Card variant="outlined" sx={{ p: 3 }}>
                  <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} md={3}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Avatar
                          sx={{ width: 80, height: 80, mx: 'auto', mb: 1 }}
                          src="/assets/img/高雄大學icon.png"
                          alt="高雄大學"
                        />
                        <Typography variant="caption" color="text.secondary">
                          高雄大學
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                      <Typography variant="h6" gutterBottom>助教老師</Typography>
                      <Typography variant="subtitle1" color="primary" gutterBottom>
                        高雄大學科技助教
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        大專校院教育事業 30~100人
                      </Typography>
                      <Typography variant="body2">
                        協助學生進行語音與神經網路相關程式碼(HMM,CNN,LSTM)撰寫，
                        以及協助學生做專題投稿期刊論文。
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <Chip 
                        icon={<CalendarToday />}
                        label="2022/9~2024/6" 
                        color="primary" 
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Education Section */}
        <Card id="education" sx={{ mb: 4 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <School sx={{ mr: 2 }} />
              學歷
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Card variant="outlined" sx={{ p: 3, height: '100%' }}>
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <Avatar
                      sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
                      src="/assets/img/高雄大學.jpg"
                      alt="高雄大學"
                    />
                  </Box>
                  <Typography variant="h6" gutterBottom align="center">
                    國立高雄大學
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom align="center">
                    資訊工程學系
                  </Typography>
                  <Typography variant="body1" align="center" sx={{ mb: 2 }}>
                    碩士畢業
                  </Typography>
                  <Chip 
                    icon={<CalendarToday />}
                    label="2022/9~2024/6" 
                    color="primary" 
                    sx={{ mx: 'auto', display: 'block', width: 'fit-content' }}
                  />
                </Card>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Card variant="outlined" sx={{ p: 3, height: '100%' }}>
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <Avatar
                      sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
                      src="/assets/img/淡江大學.jpg"
                      alt="淡江大學"
                    />
                  </Box>
                  <Typography variant="h6" gutterBottom align="center">
                    淡江大學
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom align="center">
                    資訊工程學系
                  </Typography>
                  <Typography variant="body1" align="center" sx={{ mb: 2 }}>
                    學士畢業
                  </Typography>
                  <Chip 
                    icon={<CalendarToday />}
                    label="2018/9~2021/6" 
                    color="primary" 
                    sx={{ mx: 'auto', display: 'block', width: 'fit-content' }}
                  />
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card id="skills" sx={{ mb: 4 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Code sx={{ mr: 2 }} />
              專長技能
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom color="primary">
                  程式語言
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                  {['Python', 'C++', 'JavaScript', 'TypeScript'].map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Box>

                <Typography variant="h6" gutterBottom color="primary">
                  前端技術
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                  {['HTML5', 'CSS3', 'React', 'Node.js', 'Bootstrap'].map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      color="secondary"
                      variant="outlined"
                    />
                  ))}
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom color="primary">
                  開發工具
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                  {['Git', 'GitHub', 'VS Code', 'Docker'].map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      color="success"
                      variant="outlined"
                    />
                  ))}
                </Box>

                <Typography variant="h6" gutterBottom color="primary">
                  語言能力
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemIcon>
                      <LocationOn color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="英文：TOEIC 580 分" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <LocationOn color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="日文：JLPT N3" />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Awards Section */}
        <Card id="awards" sx={{ mb: 4 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <EmojiEvents sx={{ mr: 2 }} />
              獎狀及榮譽
            </Typography>
            
            <List>
              {[
                '佳作 - 2021 資訊週',
                '參與 - AI CUP 2023 春季賽【多模態病理嗓音分類競賽】',
                '佳作 - 智慧感測聯網創新應用競賽 智慧視覺組',
                'TAAI 2023第28屆人工智慧與應用研討會 - 發布期刊論文'
              ].map((award, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <EmojiEvents color="warning" />
                  </ListItemIcon>
                  <ListItemText 
                    primary={award}
                    sx={{ 
                      '& .MuiListItemText-primary': { 
                        fontWeight: index === 3 ? 'bold' : 'normal' 
                      } 
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4, 
            textAlign: 'center', 
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            color: 'white'
          }}
        >
          <Typography variant="h5" gutterBottom>
            歡迎聯繫我！
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            如果您對我的技能和經驗感興趣，歡迎透過以下方式與我聯繫
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              startIcon={<Email />}
              href="mailto:yuzi1257@gmail.com"
              sx={{ bgcolor: 'rgba(255,255,255,0.2)', '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' } }}
            >
              發送郵件
            </Button>
            <Button
              variant="contained"
              startIcon={<GitHub />}
              href="https://github.com/yuzi125/"
              target="_blank"
              sx={{ bgcolor: 'rgba(255,255,255,0.2)', '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' } }}
            >
              查看作品
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  )
}

export default HomePage 