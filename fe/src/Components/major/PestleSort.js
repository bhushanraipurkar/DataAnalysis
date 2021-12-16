import * as React from 'react';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Skeleton from '@mui/material/Skeleton';

function PestleSort(props){

    const [data, setData] = useState([]);
  const [load, setLoad] = useState(5);
  const [complete, setComplete] = useState(false);

   const [resp , setResp] = useState("");

  

   useEffect(() => {
     const getAllData = async () => {
       await fetch(`/allcompanies/sortbypestle/${props.pestle}`)
         .then((retu) => retu.json())
         .then((allData) => {
           setData(allData);
           setComplete(true);
         })
     };
     getAllData();
   }, [props]);

   console.log(data);

   const Loadmore = () => {
     setLoad((prev) => prev + 5);
   }

    if (complete) {
     return (
       <div>
         {
           data.slice(0, load).map((i, num) => {
               return (
                 <>
                   <div>
                     <Card sx={{ maxWidth: 745, margin: '4%', boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
  
                       <CardContent>
                         <Typography gutterBottom variant="h5" component="div">
                           {i.title}
                         </Typography>
                         <Typography variant="body2" color="text.secondary">
                           <span style={{float:'right'}}>{i.added}</span><br/>
                           <h3> {i.insight}</h3>
                           <h2>Topic - {i.topic}</h2>
                           <h3>Sector - {i.sector}</h3>
                           <h3>Pestle - <span style={{backgroundColor:"yellow"}}> {i.pestle}</span></h3>
                           <h4>Country - {i.country} , <span style={{ color: "red" }}>{i.region}</span>, (source : {i.source})</h4>
                         </Typography>
                       </CardContent>
                       <CardActions>
  
                         <Button href={i.url} target="_blank" size="small">Learn More</Button>
                       </CardActions>
                     </Card>
                   </div>
                 </>
               )
            
           })
         }
  
         <div>
           <Button style={{ marginLeft: "40%", marginBottom: "10%" }} onClick={Loadmore} variant="outlined" color="error">Primary</Button>
         </div>
  
       </div>
     )
   } else {
     return (
       <Box sx={{ width: 700 , margin:'5%' }}>
       <Skeleton animation="wave" variant='h1' sx={{height: 250 , margin:5}} />
       <Skeleton animation="wave" variant='h1' sx={{height: 250 , margin:5}}/>
       <Skeleton animation="wave" variant='h1' sx={{height: 250 , margin:5}}/>
       <Skeleton animation="wave" variant='h1' sx={{height: 250 , margin:5}}/>
       <Skeleton animation="wave" variant='h1' sx={{height: 250 , margin:5}}/>
     </Box>
     );
    
   }
}

export default PestleSort
