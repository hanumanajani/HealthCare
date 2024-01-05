import React, { useState } from 'react';
import { useFirebase } from '../context/Firebase';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


function Seetreatment(props) {
  const [data, setdata] = useState('Discription');
  const [medicine, setmedicine] = useState({})

 
 

  const firebase = useFirebase();
  function seeTreatment() {
    firebase.readTreatmentdetailsofpaitent(medicine, setmedicine, data, setdata, props.paitent, props.date);
    
    alert("hellooo")
    console.log(medicine); 
    // JSON.stringify(medicine)
  }
  const snoList=Object.keys(medicine).filter((key)=>key.startsWith(""));
   
  return (
    <div className='body'>
      {/* <h3 className='rectangle3'>treatment</h3> */}
      {/* <h4 className='rectangle2'>Paitent Name : {props.paitent}</h4> */}
      <div className='rectangle1'>{data}</div>
  
      <TableContainer component={Paper}>


        <Table sx={{ minWidth: 600 }} size="small" aria-label="a dense table">
            <TableHead>
                <StyledTableRow>
                    <StyledTableCell>s/no</StyledTableCell>
                    <StyledTableCell>medicine</StyledTableCell>
                    <StyledTableCell>quantity</StyledTableCell>
                    <StyledTableCell>Comment</StyledTableCell>
                   
                </StyledTableRow>
            </TableHead>
            <TableBody>
                 
        {
          snoList.map(sno => <StyledTableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

            <StyledTableCell    >{sno}</StyledTableCell>
            <StyledTableCell  >{medicine[sno].madicine}</StyledTableCell>
            <StyledTableCell>{medicine[sno].quantity}</StyledTableCell>
            <StyledTableCell >{medicine[sno].comment}</StyledTableCell>

            </StyledTableRow>)
        }
        </TableBody>
      </Table>
      </TableContainer>
      <button onClick={() => { seeTreatment() }} className='button1'>seeTreatment</button>


    </div>
  )
}
export default Seetreatment;