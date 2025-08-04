import { Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'

import { useAuthStore } from '@/store/authStore'
import Navbar from '@/components/Navbar'
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import ProfilePage from '@/pages/ProfilePage'
import PostsPage from '@/pages/PostsPage'
import CreatePostPage from '@/pages/CreatePostPage'
import ProtectedRoute from '@/components/ProtectedRoute'

function App() {
  const { user, isLoading } = useAuthStore()

  if (isLoading) {
    return (
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        載入中...
      </Container>
    )
  }

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          {/* Protected Routes */}
          <Route path="/profile" element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } />
          <Route path="/posts/create" element={
            <ProtectedRoute>
              <CreatePostPage />
            </ProtectedRoute>
          } />
        </Routes>
      </Container>
    </div>
  )
}

export default App 