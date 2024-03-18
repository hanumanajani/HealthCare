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

function Medicine(props) {
    const [sno,setsno]=useState(1);
    const [medicine,setmedicine]=useState('');
    const [quantity,setquantity]=useState('');
    const [comment,setcomment]=useState('');
    const firebase =useFirebase();

    function Addmedicine(){
        firebase.paitenttreatmadicine(props.paitentname, props.date, sno, medicine, quantity, comment)
        setsno(sno+1);
        alert("done")
    }

    return (
        // <div >

          
        //     <table>
        //         <tr className='tablehead'>
        //             <th>s/no</th>
        //             <th >medicine</th>
        //             <th >quantity</th>
        //             <th >Comment</th>
        //             <th >Add-button</th>

        //         </tr>
        //         <tr className='tablehead'>
        //             <td className='rectangle1'>{sno}</td>
        //             <td><input className='rectangle1' onChange={(e)=>{setmedicine(e.target.value)}} placeholder='medicine'/></td>
        //             <td><input className='rectangle1' onChange={(e)=>{setquantity(e.target.value)}} placeholder='quantity'/></td>
        //             <td><input className='rectangle1' onChange={(e)=>{setcomment(e.target.value)}} placeholder='Comment'/></td>
        //             <td><button  onClick={()=>{Addmedicine()}} className='Addbtn'>ADD</button></td>
        //         </tr>
        //     </table>
        // </div>
        <TableContainer component={Paper}>


        <Table sx={{ minWidth: 600 }} size="small" aria-label="customized table">
            <TableHead>
                <StyledTableRow>
                    <StyledTableCell>s/no</StyledTableCell>
                    <StyledTableCell>medicine</StyledTableCell>
                    <StyledTableCell>quantity</StyledTableCell>
                    <StyledTableCell>Comment</StyledTableCell>
                    <StyledTableCell>Add-button</StyledTableCell>
                </StyledTableRow>
            </TableHead>
            <TableBody>
                <StyledTableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                    <StyledTableCell component="th" scope="row" >{sno}</StyledTableCell>
                    <StyledTableCell align="right" ><input onChange={(e) => { setmedicine(e.target.value) }} placeholder='medicine' /></StyledTableCell>
                    <StyledTableCell align="right" ><input onChange={(e) => { setquantity(e.target.value) }} placeholder='quantity' /></StyledTableCell>
                    <StyledTableCell align="right" ><input onChange={(e) => { setcomment(e.target.value) }} placeholder='Comment' /></StyledTableCell>
                    <StyledTableCell align="right"  ><button onClick={() => { Addmedicine() }} >ADD</button></StyledTableCell>
                </StyledTableRow>
            </TableBody>
        </Table>
    </TableContainer>
    )
}
export default Medicine;