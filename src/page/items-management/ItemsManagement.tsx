import React from 'react'
import Title from '../dashboard/Title'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import Link from '@mui/material/Link'
import Paginating from '../../components/paginating/Paginating'
import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
} from '@mui/material'
import BasicDateRangePicker from '../../components/date-range/DateRangePicker'
import BasicTextFields from '../../components/input/search/BasicTextFields'
import ContainedButton from '../../components/input/button/ContainedButton'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import RegisterItem from '../../modals/register-item/RegisterItem'
import { Link as Router } from 'react-router-dom'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

function createData(
  id: number,
  role: string,
  title: string,
  itemNumber: string,
  owner: string,
  date: string,
  token: string,
  price: string,
  totalPrice: string,
  status: string,
  hide: string,
) {
  return {
    id,
    role,
    title,
    itemNumber,
    owner,
    date,
    token,
    price,
    totalPrice,
    status,
    hide,
  }
}

const rows = [
  createData(
    0,
    '경매',
    'aaaa',
    'qwertyu12',
    '동웅',
    '2022.02.04 - 2022.03.04',
    'etc',
    '234',
    '555',
    'sss',
    'off',
  ),
  createData(
    1,
    '일반',
    'bbbb',
    'qwertyu12',
    '동웅',
    '2022.02.04 - 2022.03.04',
    'etc',
    '234',
    '555',
    'sss',
    'off',
  ),
]

const ItemsManagement = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            아이템 등록
          </Typography>
          <RegisterItem />
        </Box>
      </Modal>

      <Title>아이템 등록 현황</Title>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <article
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <FormControl
            sx={{
              width: 150,
            }}
          >
            <InputLabel id="demo-simple-select-label">10개씩 보기</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem value={10}>10개씩</MenuItem>
              <MenuItem value={20}>20개씩</MenuItem>
              <MenuItem value={30}>30개씩</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="outlined"
            sx={{
              height: 55.1,
            }}
          >
            선택 숨김
          </Button>
          <Button
            variant="outlined"
            sx={{
              height: 55.1,
            }}
          >
            숨김 해제
          </Button>
          <BasicDateRangePicker dateState={value=>{console.log(value)}} />

          <article style={{ display: 'flex', alignItems: 'center' }}>
            <BasicTextFields label={'Search'} />
            <ContainedButton handleOpen={handleOpen} subject={'등록'} />
          </article>
        </article>

        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                  {...label}
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                />
              </TableCell>
              <TableCell>판매방식</TableCell>
              <TableCell>제목/아이템 번호</TableCell>
              <TableCell>게시자</TableCell>
              <TableCell>등록시간 - 종료시간</TableCell>
              <TableCell>결제토큰</TableCell>
              <TableCell>가격(최저 입찰가)</TableCell>
              <TableCell>최종가격</TableCell>
              <TableCell>상태</TableCell>
              <TableCell>숨김</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Checkbox
                    {...label}
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                  />
                </TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>
                  <Router
                    className="text-decorator-none"
                    style={{ color: 'blue' }}
                    to={`/item/${row.title}`}
                  >
                    {row.title}
                  </Router>
                  <article>{row.itemNumber}</article>
                </TableCell>
                <TableCell>{row.owner}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.token}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.totalPrice}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.hide}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Link
          color="primary"
          href="#"
          sx={{
            mt: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Paginating />
        </Link>
      </Paper>
    </>
  )
}
export default ItemsManagement
