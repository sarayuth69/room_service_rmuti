import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from "../../component/Card/Card";
import GridComponent from "../../component/Grid/Grid";
import InputSearch from "../../component/InputSearch/InputSearch";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GroupSharpIcon from '@material-ui/icons/GroupSharp';
import TransferWithinAStationSharpIcon from '@material-ui/icons/TransferWithinAStationSharp';
import BuildSharpIcon from '@material-ui/icons/BuildSharp';
function Home() {
  return (
    <div>
      <InputSearch />

      <h1>หน้าแรก</h1>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Card Text='จำนวนสมาชิกทั้งหมด' Num='50' Unit='คน' Icon={<GroupSharpIcon />} />
        </Grid>
        <Grid item xs={3} >
          <Card Text='จำนวนผู้ใช้งาน' Num='50' Unit='คน' Icon={<AccountCircleIcon />} />
        </Grid>
        <Grid item xs={3} >
          <Card Text='สถานะ' Num='50' Unit='%' Icon={<TransferWithinAStationSharpIcon />} />
        </Grid>
        <Grid item xs={3} >
          <Card Text='การแจ้งซ่อม' Num='18' Icon={<BuildSharpIcon />} />
        </Grid>
      </Grid>
      <br></br>
      <h1>ข่าวประชาสัมพันธ์</h1>
      <GridComponent />
    </div>
  )
}

export default Home
