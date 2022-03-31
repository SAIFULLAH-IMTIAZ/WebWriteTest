import React, { useState } from 'react';
import './App.css';
import { Collapse, Divider, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import  ExpandLess from '@mui/material/Icon'
import ExpandMore from '@mui/material/Icon'
import FavoriteIcon from '@mui/material/Icon';
import ArrowForwardIcon from '@mui/material/Icon/'
import BasicCard from './card/card';


const data = [
  {
    img: "/images/image1.jpg",
    dis: "Lorem Ipsum",
    weth: "1.20 Weth",
    ends: "Ends in 01.34.45"
  },
  {
    img: "/images/image2.jpg",
    dis: "Dolor sit amet",
    weth: "0.21 Weth",
    ends: "Ends in 01.34.45"
  },
  {
    img: "/images/image3.jpg",
    dis: "Dignissim curabitu..",
    weth: "0.01 Weth",
    ends: "Ends in 56.44.45"
  },
  {
    img: "/images/image4.jpg",
    dis: "Amet pellentesq..",
    weth: "0.55 Weth",
    ends: "Ends in 01.34.45"
  },
  {
    img: "/images/image1-removebg-preview.png",
    dis: "Amet pellentesq..",
    weth: "0.55 Weth",
    ends: "Ends in 01.34.45"
  },
  {
    img: "/images/image2-removebg-preview.png",
    dis: "Amet pellentesq..",
    weth: "0.55 Weth",
    ends: "Ends in 01.34.45"
  },
  {
    img: "/images/image3-removebg-preview.png",
    dis: "Amet pellentesq..",
    weth: "0.55 Weth",
    ends: "Ends in 01.34.45"
  },
  {
    img: "/images/image4-removebg-preview.png",
    dis: "Amet pellentesq..",
    weth: "0.55 Weth",
    ends: "Ends in 01.34.45"
  },

]

function App() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const [openNewest, setOpenNewest] = useState(false);

  const handleClickNewest = () => {
    setOpenNewest(!openNewest);
  }


  return (
    <div className="App">
      <header className="App-header">
        <Typography className='logo'>Gaslur</Typography>
        <Typography className='home'>Home</Typography>
        <Typography className='myprofile'>My profile</Typography>
        <Typography className='activity'>activity</Typography>
        <Typography className='work'>how it works</Typography>
        <Typography className='create'><p className='createtext'>create</p></Typography>
        <Typography className='signtext' >Sign in</Typography>
      </header>
      <div className='banner'>
        <div>
        <p className='content'>Discover, collect,  and charity in extraordinary NFT marketplace</p>
        <p className='secondcontent'>In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus vestibulum nibh mi venenatis</p>
        <Typography className='explore'><p className='exploretext'>Explore</p></Typography>
        <Typography className='secondcreate'><p className='secondcreatetext'>Create</p></Typography>
        </div>
      </div>
      <div className='secondBanner'>
        <div className='secondBannerbg'/>
        <>
          <div className='icon'/>
          <p className='icontext'> Laura</p>
          <p className='icontextsecond'> 0.21 Weth</p>
          <p className='icontextthird'> WE ARE HERE</p>
          <div className='heartIcon'><FavoriteIcon color="success" /></div>
          <p className='number'> 25</p>
        </>
      </div>
      <div className='cardArea'>
          <p className='cardHeading'>Hot auctions </p> <ArrowForwardIcon style={{color: "#BCBCBC"}} fontSize='large'/> 
          <p className='cardView'>View all</p>

        <div className='card'>
          {
            data.map((item, index) => {
              if (index < 4) {
                return (
                
                  <BasicCard img={item.img} dis={item.dis} weth={item.weth} ends={item.ends} />
                )
              }
            } )
          }
          
        </div>
      </div>
      <div className='GeetingArea'>
        <p className='gettingStart'>Geeting Started</p>
        <p className='gettinfDis'>Eu, molestie commodo, enim pellentesque turpis integer sagittis</p>
        <div className='reatWallet'></div>
        <p className='reatWalletText'>Connect your wallet</p>
        <div className='rectUrna'></div>
        <p className='rectUrnaText'>Posuere urna, sit amet molestie leo</p>
        <div className='rectPretium'></div>
        <p className='rectPretiumText'>Semper pretium libero sed quam ac integer ut</p>
        <div className='rectVolutpat'></div>
        <p className='rectVolutpatText'>Lectus volutpat magna vitae in arcu</p>
      </div>
      <div className='secondCardsArea'>
          <p className='secondcardHeading'> Discover </p> 
          <p className='secondcardCat'>Categary</p>
          <div className='cheapest'>
          <List >
            <ListItemButton onClick={handleClick}>
              <ListItemText primary="Cheapest" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Expensive" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          </div>

          <div className='newest'>
          <List >
            <ListItemButton onClick={handleClickNewest}>
              <ListItemText primary="Newest" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openNewest} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Oldest" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          </div>

          <Typography className='filter'><p className='filtertext'>Filter</p></Typography>

        <div className='secondCards'>
          {
            data.map((item) => {
              return (
                <BasicCard img={item.img} dis={item.dis} weth={item.weth} ends={item.ends} />
              )
            } )
          }
        </div>
        <Typography className='loadmore'><p className='loadmoretext'>Load More</p></Typography>
      </div>
      <div>
        <div className='etiam'>
          <p >Etiam et id tincidunt faucibus mollis a sociis pretium fermentum quis magna faucibus lacus.</p>
        </div>
        <div>
          <p className='marketplace'>Marketplace</p>
          <p className='home'></p>
          <p className='activity'></p>
          <p className='discover'>Discover</p>
          <p className='learn'>Learn more</p>
        </div>
      </div>
      <Divider style={{background: "#BCBCBC"}} />
    </div>
  );
}

export default App;
