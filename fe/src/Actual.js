import *as React from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import Kard from './Components/major/Card';
import FormHelperText from '@mui/material/FormHelperText';
import BarGraph from './Components/major/BarGraph';
import Select from '@mui/material/Select';
import Progress from './Components/major/progress';
import { pestle, countries } from "./Components/minor/data";
import PestleSort from './Components/major/PestleSort';
import DoubleSort from './Components/major/doubleSort';




const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));





function Actual(props) {

  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const [Environmental, setEnvironmental] = useState(0);
  const [Industries, setIndustries] = useState(0);
  const [Economic, setEconomic] = useState(0);
  const [Political, setPolitical] = useState(0);
  const [Technological, setTechnological] = useState(0);
  const [nan, setnan] = useState(0);
  const [Organization, setOrganization] = useState(0);
  const [Healthcare, setHealthcare] = useState(0);
  const [Social, setSocial] = useState(0);
  const [Lifestyles, setLifestyles] = useState(0);
  const [render, setRender] = useState(1);
  const [pest, setPest] = useState("");


  const [USA, setUSA] = useState(0);
  const [India, setIndia] = useState(0);
  const [Germany, setGermany] = useState(0);
  const [Mexico, setMexico] = useState(0);
  const [Russia, setRussia] = useState(0);
  const [SaudiArab, setSaudiArab] = useState(0);
  const [SouthAfrica, setSouthAfrica] = useState(0);
  const [UnitedKingdom, setUnitedKingdom] = useState(0);
  const [Brazil, setBrazil] = useState(0);
  const [Canada, setCanada] = useState(0);
  const [Japan, setJapan] = useState(0);
  const [China, setChina] = useState(0);


  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const [countr, setCountr] = React.useState('');

  const handleChange = (event) => {
    setCountr(event.target.value);
  };

  const [pestl, setPestl] = React.useState('');

  const handleChange1 = (event) => {
    setPestl(event.target.value);
  };

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;




  const prevOpen = React.useRef(open);
  // React.useEffect(() => {
  //   if (prevOpen.current === true && open === false) {
  //     anchorRef.current.focus();
  //   }

  //   prevOpen.current = open;
  // }, [open]);
  const anchorRef = React.useRef(null);



  useEffect(() => {
    fetch("/allcompanies/count/Environmental")
      .then((response) => response.json())
      .then((data) => {
        setEnvironmental(data.num);
      });

    fetch("/allcompanies/count/Industries")
      .then((response) => response.json())
      .then((data) => {
        setIndustries(data.num);
      });

    fetch("/allcompanies/count/Economic")
      .then((response) => response.json())
      .then((data) => {
        setEconomic(data.num);
      });

    fetch("/allcompanies/count/Political")
      .then((response) => response.json())
      .then((data) => {
        setPolitical(data.num);
      });

    fetch("/allcompanies/count/Technological")
      .then((response) => response.json())
      .then((data) => {
        setTechnological(data.num);
      });

    fetch("/allcompanies/count/Unknown")
      .then((response) => response.json())
      .then((data) => {
        setnan(data.num);
      });

    fetch("/allcompanies/count/Organization")
      .then((response) => response.json())
      .then((data) => {
        setOrganization(data.num);
      });

    fetch("/allcompanies/count/Healthcare")
      .then((response) => response.json())
      .then((data) => {
        setHealthcare(data.num);
      });

    ; fetch("/allcompanies/count/Social")
      .then((response) => response.json())
      .then((data) => {
        setSocial(data.num);
      });

    fetch("/allcompanies/count/Lifestyles")
      .then((response) => response.json())
      .then((data) => {
        setLifestyles(data.num);
      });

  }, []);


  useEffect(() => {
    fetch("/allcompanies/count/country/United States of America")
      .then((response) => response.json())
      .then((data) => {
        setUSA(data.num);
      });
    fetch("/allcompanies/count/country/India")
      .then((response) => response.json())
      .then((data) => {
        setIndia(data.num);
      });
    fetch("/allcompanies/count/country/Germany")
      .then((response) => response.json())
      .then((data) => {
        setGermany(data.num);
      });
    fetch("/allcompanies/count/country/Mexico")
      .then((response) => response.json())
      .then((data) => {
        setMexico(data.num);
      });
    fetch("/allcompanies/count/country/Russia")
      .then((response) => response.json())
      .then((data) => {
        setRussia(data.num);
      });
    fetch("/allcompanies/count/country/Saudi Arabia")
      .then((response) => response.json())
      .then((data) => {
        setSaudiArab(data.num);
      });
    fetch("/allcompanies/count/country/South Africa")
      .then((response) => response.json())
      .then((data) => {
        setSouthAfrica(data.num);
      });
    fetch("/allcompanies/count/country/United Kingdom")
      .then((response) => response.json())
      .then((data) => {
        setUnitedKingdom(data.num);
      });
    fetch("/allcompanies/count/country/Brazil")
      .then((response) => response.json())
      .then((data) => {
        setBrazil(data.num);
      });
    fetch("/allcompanies/count/country/Canada")
      .then((response) => response.json())
      .then((data) => {
        setCanada(data.num);
      });
    fetch("/allcompanies/count/country/Japan")
      .then((response) => response.json())
      .then((data) => {
        setJapan(data.num);
      });
    fetch("/allcompanies/count/country/China")
      .then((response) => response.json())
      .then((data) => {
        setChina(data.num);
      });
  })

  const pestleSort = (val) => {
    setPest(val);
    setRender(2);
  }


  const [data, setData] = useState([]);
  const [load, setLoad] = useState(5);
  const [complete, setComplete] = useState(false);

  const [resp, setResp] = useState("");



  useEffect(() => {
    const getAllData = async () => {
      await fetch(`/allcompanies/sortbypestle/${pest}`)
        .then((retu) => retu.json())
        .then((allData) => {
          setData(allData);
          setComplete(true);
        })
    };
    getAllData();
  }, []);

  const Loadmore = () => {
    setLoad((prev) => prev + 5);
  }




  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <Box sx={{ textAlign: 'center', pt: 1, }} className='header'>
        <Button variant="contained" color="success" style={{ marginBottom: "1%" }} onClick={toggleDrawer(true)}>Filter</Button>
      </Box>
      <div className='container'>
        <Grid container style={{ position: "relative" }}>
          <Grid item xs={7} style={{ marginTop: "3%" }}>
            {/* <Kard/> */}
            {(() => {
              if (render === 1) return <Kard />
              else if (render === 2) return (
                <>

                  <PestleSort pestle={pest} />


                </>
              );
              else return (
                <>
                  <DoubleSort country={countr} pestle={pestl} />;
                  <h2 style={{ textAlign: "center" }}>No More 🙌</h2>
                </>
              )
            })()
            }
          </Grid>

          
          <Grid item xs={5} style={{ paddingTop: "5%"}}>

            <BarGraph Environmental={Environmental} Industries={Industries} Economic={Economic} Political={Political} Technological={Technological} nan={nan} Organization={Organization} Healthcare={Healthcare} Social={Social} Lifestyles={Lifestyles}
              name1="Environmental"
              name2="Industries"
              name3="Economic"
              name4="Political"
              name5="Technological"
              name6="Unknown"
              name7="Organization"
              name8="Healthcare"
              name9="Social"
              name10="Lifestyles" />

            <Grid container>
              <Grid item sx={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginRight: "2%", borderRadius: "20px" }}>
                <Progress one={USA} two={India} three={Germany} fn="USA" sn="India" tn="Germany" dark="#248f24" light="#99e699" />
              </Grid>
              <Grid item sx={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: "20px" }}>
                <Progress one={Mexico} two={Russia} three={SaudiArab} fn="Mexico" sn="Russia" tn="Saudi Arabia" dark="#e600e6" light="#ffb3ff" />
              </Grid>
            </Grid>

            <Grid container sx={{ marginTop: '5%' }}>
              <Grid item sx={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginRight: "2%", borderRadius: "20px" }}>
                <Progress one={SouthAfrica} two={UnitedKingdom} three={Brazil} fn="South Africa" sn="united Kingdom" tn="Brazil" dark="#e600e6" light="#ffb3ff" />
              </Grid>
              <Grid item sx={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: "20px" }} >
                <Progress one={Canada} two={Japan} three={China} fn="Canada" sn="Japan" tn="China" dark="#e600e6" light="#ffb3ff" />
              </Grid>
            </Grid>

          </Grid>
          
        </Grid>
      </div>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: 'text.secondary' }}>Features</Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
          <div>

            <Grid container>
              <Grid item xs={3}>
                <h4>Sort by Pestle</h4>
                <Paper>
                  <MenuList>
                    {/* sort by pestle */}
                    {pestle.map((i, num) => {
                      return (

                        <MenuItem onClick={() => pestleSort(i)}>{i}</MenuItem>

                      )
                    })}

                  </MenuList>
                </Paper>
              </Grid>
              <Grid item xs={6}>


                <FormControl sx={{ m: 1, minWidth: 120, marginLeft: "5%" }}>
                  <Select
                    value={countr}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >

                    {
                      countries.map((j, num1) => {
                        return (
                          <MenuItem key={num1} value={j}>{j}</MenuItem>
                        )
                      })
                    }

                  </Select>
                  <FormHelperText>select Country</FormHelperText>
                </FormControl>



                <FormControl sx={{ m: 1, minWidth: 120, marginLeft: "5%" }}>
                  <Select
                    value={pestl}
                    onChange={handleChange1}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >

                    {
                      pestle.map((i, num) => {
                        return (
                          <MenuItem key={num} value={i}>{i}</MenuItem>
                        )
                      })
                    }

                  </Select>
                  <FormHelperText>Select Pestle</FormHelperText>
                </FormControl>

                <Button variant="contained" size="large" color='success' sx={{ margin: "2%" }} onClick={(e) => { setRender(3); toggleDrawer(false) }}>
                  Search
                </Button><br/>


                <FormControl sx={{ m: 1, minWidth: 120, marginLeft: "5%" }}>
                  <Select
                  disabled
                  value="pending"
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                  </Select>
                  <FormHelperText>select </FormHelperText>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120, marginLeft: "5%" }}>
                  <Select
                  disabled
                  value="pending"
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                  </Select>
                  <FormHelperText>select </FormHelperText>
                </FormControl>
                <Button disabled variant="contained" size="large" color='success' sx={{ margin: "2%" }} >
                  Update Soon
                </Button><br/>

                
                


              </Grid>
              <Grid item xs={3}>
                    <h1 style={{fontSize:"55px", marginTop:"20%"}}>Black<span style={{color:'gray'}}>Coffer</span></h1>
              </Grid>
            </Grid>
          </div>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}



Actual.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


export default Actual;
