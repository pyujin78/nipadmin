import React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import PaperBodyContent from '../../components/paper/PaperBodyContent'
import { OutlinedInput } from '@mui/material'

const theme = createTheme()

const bannerManagementBody = [
  {
    content: () => {
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem',
            width: '100%',
          }}
        >
          <article style={{ width: '30%' }}>배너 위치</article>
          <article style={{ width: '70%', display: 'flex' }}>
            <select
              style={{
                width: '160px',
                height: '38px',
                borderRadius: '12px',
                border: '1px solid #D9D9D9',
                textAlign: 'center',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
              name="token"
            >
              <option value="">선택</option>
              <option value="nip">???</option>
              <option value="???">???</option>
            </select>
          </article>
        </div>
      )
    },
  },
  {
    content: () => {
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem',
            width: '100%',
          }}
        >
          <article style={{ width: '30%' }}>노출 기간</article>
          <article style={{ width: '70%', display: 'flex' }}>
            <input
              type="date"
              id="start"
              name="trip-start"
              value="2022-02-02"
              min="2022-02-02"
              max="2022-03-03"
              style={{
                width: '430px',
                height: '40px',
                borderRadius: '12px',
                border: '1px solid #D9D9D9',
                textAlign: 'center',
              }}
            />
          </article>
        </div>
      )
    },
  },
  {
    content: () => {
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem',
          }}
        >
          <article style={{ width: '30%' }}>URL</article>
          <article style={{ width: '70%', display: 'flex' }}>
            <OutlinedInput
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
              sx={{
                width: '430px',
                height: '40px',
                borderRadius: '12px',
              }}
            />
          </article>
        </div>
      )
    },
  },
  {
    content: () => {
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem',
          }}
        >
          <article style={{ width: '30%' }}>PC 배너</article>
          <article style={{ width: '70%', display: 'flex' }}>
            <div
              style={{
                width: '430px',
                height: '40px',
                borderRadius: '12px',
                border: '1px solid #D9D9D9',
              }}
            />
            <button
              style={{
                width: '80px',
                height: '40px',
                borderRadius: '12px',
                border: '1px solid #004CE0',
                backgroundColor: 'white',
                color: '#004CE0',
                marginLeft: '8px',
                cursor: 'pointer',
              }}
            >
              추가
            </button>
          </article>
        </div>
      )
    },
  },
  {
    content: () => {
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem',
          }}
        >
          <article style={{ width: '30%' }}>모바일 배너</article>
          <article style={{ width: '70%', display: 'flex' }}>
            <div
              style={{
                width: '430px',
                height: '40px',
                borderRadius: '12px',
                border: '1px solid #D9D9D9',
              }}
            />
            <button
              style={{
                width: '80px',
                height: '40px',
                borderRadius: '12px',
                border: '1px solid #004CE0',
                backgroundColor: 'white',
                color: '#004CE0',
                marginLeft: '8px',
                cursor: 'pointer',
              }}
            >
              추가
            </button>
          </article>
        </div>
      )
    },
  },
]

const RegisterBanner = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Typography component="h1" variant="h5">
              배너 등록
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <PaperBodyContent fields={bannerManagementBody} />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                확인
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default RegisterBanner
