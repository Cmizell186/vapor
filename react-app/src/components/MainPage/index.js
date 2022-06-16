import * as React from 'react';
import { get_all_games } from "../../store/game";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useRef  } from "react";
import GameSlider from "./GameSlider";
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './index.css'
import { Link } from 'react-router-dom';
import FreeBreakfastTwoToneIcon from '@mui/icons-material/FreeBreakfastTwoTone';
import CarCrashTwoToneIcon from '@mui/icons-material/CarCrashTwoTone';
import SportsHockeyTwoToneIcon from '@mui/icons-material/SportsHockeyTwoTone';
import VideogameAssetTwoToneIcon from '@mui/icons-material/VideogameAssetTwoTone';
import SportsEsportsTwoToneIcon from '@mui/icons-material/SportsEsportsTwoTone';
import VideogameAssetOffTwoToneIcon from '@mui/icons-material/VideogameAssetOffTwoTone';
import HoverGame from './HoverGame';



const Store = ({user}) => {

    const dispatch = useDispatch()
    const games = useSelector(state => Object.values(state.games))

    useEffect(() => {
      dispatch(get_all_games())
    }, [dispatch])

    class StyledTabProps {
        label = String;
      }

    const SteamTabs = styled(Tabs)({
        borderBottom: '0px',
        '& .MuiTabs-indicator': {
          backgroundColor: '#1890ff',
          height: "0px",
        },
      });

      const SteamTab = styled((props=StyledTabProps) => <Tab disableRipple {...props} />)(
        ({ theme }) => ({
          textTransform: 'none',
          minWidth: 0,
          [theme.breakpoints.up('sm')]: {
            minWidth: 0,
          },
          fontWeight: theme.typography.fontWeightRegular,
          marginRight: theme.spacing(1),
          marginBottom: theme.spacing(0),
          color: '#2f89bc',
          fontSize: "14px",
          padding: "2px 10px 20px 10px",
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
          fontFamily: [
            'Arial',
            '"Helvetica"',
            'sans-serif',
          ].join(','),
          '&:hover': {
            color: '#ffffff',
            opacity: 1,
          },
          '&.Mui-selected': {
            color: '#ffffff',
            backgroundColor: '#2a475e',
            fontWeight: theme.typography.fontWeightMedium,
          },
          '&.Mui-focusVisible': {
            backgroundColor: '#d1eaff',
          },
        }),
      );

    class TabPanelProps {
        children = React.ReactNode;
        index = Number;
        value = Number;
      }

    function TabPanel(props=TabPanelProps) {
        const { children, value, index, ...other } = props;

        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography component={'span'} variant={'body2'}>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }

      function a11yProps(index=Number) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

        const [value, setValue] = React.useState(0);

        const handleChange = (event=React.SyntheticEvent, newValue=Number) => {
          setValue(newValue);
        };


    return (
        <div id="main">
            <div id="header_content">
            <div id="jason_div_video">
            <video id="going_rogue_video" autoPlay={true} muted width="1140" loop>
                <source src="static/videos/webm_gr_page_bg_english.webm" type="video/webm" loop/>
                <source src="static/videos/webm_gr_page_bg_english.webm" type="video/mp4"/>
                Sorry, your browser doesn't support embedded videos.
            </video>
            </div>
            </div>
            <div id="main_page">
            <div id="main_page_content">
            <div id="sidebar_nav">
                <div id="sidebar_nav_list">
                        <div id="gift_cards"></div>
                        <div className='nav_links_main_page'><a href='https://github.com/bradsimpson213'>GIFT CARDS</a></div>
                        <div className='nav_links_main_page'>Now Available on Vapor</div>
                        <div className='nav_links_main_page'>BROWSE BY GENRE</div>
                        <div className='nav_links_main_page'><Link to='/freetoplay'><FreeBreakfastTwoToneIcon style={{height: "20px", width:"20px", paddingTop: "5px", paddingRight: "5px"}} />Free to Play</Link></div>
                        <div className='nav_links_main_page'><Link to='/action'><SportsEsportsTwoToneIcon style={{height: "20px", width:"20px", paddingTop: "5px", paddingRight: "5px"}}/>Action</Link></div>
                        <div className='nav_links_main_page'><Link to='/adventure'><VideogameAssetOffTwoToneIcon style={{height: "20px", width:"20px", paddingTop: "5px", paddingRight: "5px"}} />Adventure</Link></div>
                        <div className='nav_links_main_page'><Link to='/racing'><CarCrashTwoToneIcon style={{height: "20px", width:"20px", paddingTop: "5px", paddingRight: "5px"}} />Racing</Link></div>
                        <div className='nav_links_main_page'><Link to='/rpg'><VideogameAssetTwoToneIcon style={{height: "20px", width:"20px", paddingTop: "5px", paddingRight: "5px"}} />RPG</Link></div>
                        <div className='nav_links_main_page'><Link to='/sports'><SportsHockeyTwoToneIcon style={{height: "20px", width:"20px", paddingTop: "5px", paddingRight: "5px"}} />Sports</Link></div>
                        <Link to="/games/new">
                        <div id='game_creation_div'>
                          <h3>Developer ? {'\n'}
                          List your game here !</h3>
                        </div>
                        </Link>
                </div>
            </div>
        <div id="content">
        <div id="main_content">
            <div id="feature">
            FEATURED & RECOMMENDED
            </div>
        <GameSlider games={games} />
        <div id="future_specials_div">
        </div>
        <div id="console_wrap">
        <div id="vapor_deck_div">
        </div>
        <div id="vapor_index_div">
        </div>
        </div>
        <div id="game_list_content_container">
        <div id="game_list_content">
        <div id="game_list_left_container">
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <div id="game_list_tabs">
        <SteamTabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="inherit"

        >
          <SteamTab label="New Releases" {...a11yProps(0)} />
          <SteamTab label="Top Sellers" {...a11yProps(1)} />
          <SteamTab label="Specials" {...a11yProps(2)} />
        </SteamTabs>
        </div>
      </Box>
        <div id="game_list">
        <TabPanel value={value} index={0}>
        {games?.sort((game1, game2) => new Date(game2?.release_date) - new Date(game1?.release_date))
              ?.slice(0, 10)
              ?.map(game => (
            <Link key={game?.id} className='game_container_link' to={`/games/${game?.id}`}>
            <div id='game_container'>
            <div id='game_container_image'>
                <img alt='' src={game?.images[0]?.image} />
            </div>
            <div id='game_container_info'>
            <div id='game_container_title'>{game?.title}</div>
            <div id='game_container_price'>${game?.price}</div>
            <div id='game_container_platform'>
            <img id='platform' src='/static/images/vapor_logo_grey.png' alt='' />
            </div>
            <div id='game_container_tags'>{game?.tags.map(tag => tag.genres.title).join(", ")}</div>
            </div>
            </div>
            </Link>
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
      {games?.sort(() => Math.random() - Math.random())
            ?.slice(0, 10)
            ?.map(game => (
              <Link key={game?.id} className='game_container_link' to={`/games/${game?.id}`}>
            <div id='game_container'>
            <div id='game_container_image'>
                <img alt='' src={game?.images[0]?.image} />
            </div>
            <div id='game_container_info'>
            <div id='game_container_title'>{game?.title}</div>
            <div id='game_container_price'>${game?.price}</div>
            <div id='game_container_platform'>
            <img id='platform' src='/static/images/vapor_logo_grey.png' alt='' />
            </div>
            <div id='game_container_tags'>{game?.tags.map(tag => tag.genres.title).join(", ")}</div>
            </div>
            </div>
            </Link>
        ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
      {games?.slice(0, 10)
            ?.sort((game1, game2) => (game1.price) - (game2.price))
            ?.map(game => (
            <Link key={game?.id} className='game_container_link' to={`/games/${game?.id}`}>

            <div key={game?.id} id='game_container'>
            <div id='game_container_image'>
                <img alt='' src={game?.images[0]?.image} />
            </div>
            <div id='game_container_info'>
            <div id='game_container_title'>{game?.title}</div>
            <div id='game_container_price'>${game?.price}</div>
            <div id='game_container_platform'>
            <img id='platform' src='/static/images/vapor_logo_grey.png' alt='' />
            </div>

            <div id='game_container_tags'>{game?.tags.map(tag => tag.genres.title).join(", ")}</div>
            </div>
            </div>
            </Link>
        ))}
      </TabPanel>
        </div>
    </Box>
        </div>
        <div id="right_col_hover"></div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>

    )
}

export default Store;
