import React from 'react';
import './N26Signup.css';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import PersonalInfo from './components/PersonalInfo';
import MobileNumber from './components/MobileNumber';
import EntryComponent from './components/EntryComponent';
import CreatePassword from './components/CreatePassword';
import CreateAccount from './components/CreateAccount';

const flowSequence = [
  { index: 0, name: '', component: <EntryComponent /> },

  { index: 1, name: 'Personal Information', component: <PersonalInfo /> },
  { index: 2, name: 'Mobile Phone Number', component: <MobileNumber /> },
  { index: 3, name: 'Create Account', component: <CreateAccount /> },
];

const renderActiveComponent = (activeComponentIndex, props) => {
  const flowSequences = [
    { index: 0, name: '', component: <EntryComponent details={{ ...props, index: 0 }} /> },
    { index: 1, name: 'Personal Information', component: <PersonalInfo details={{ ...props, index: 1 }} /> },
    { index: 2, name: 'Mobile Phone Number', component: <MobileNumber details={{ ...props, index: 2 }} /> },
    { index: 3, name: 'Create Account', component: <CreateAccount details={{ ...props, index: 4 }} /> },

  ];
  return flowSequences[activeComponentIndex].component;
};
const drawerWidth = 280;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    backgroundColor: 'white',
    boxShadow: 'none',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: { ...theme.mixins.toolbar, marginLeft: '100px', marginRight: 'auto ' },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    alignItems: 'center',
  },
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeComponentIndex, setActiveComponentIndex] = React.useState(0);
  const [completedComponentIndex, setCompletedComponentIndex] = React.useState(-1);
  const [userDetails, setUserDetails] = React.useState({
    firstName: '', LastName: '', email: '', dob: '', mobile: '', password: '',country:""
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const updateSequence = (details, completed) => {
    console.log('completed Detasils', details, 'completed index', completed);
    setUserDetails(details);
    setCompletedComponentIndex(completed);
    setActiveComponentIndex(activeComponentIndex + 1);
  };
  const backSequence = (current) => {
    setCompletedComponentIndex(current - 1);
    setActiveComponentIndex(current);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        {flowSequence.map((c, index) => (
          <ListItem key={c.index}>
            {
                index === 0 ? null
                  : index === activeComponentIndex ? <ListItemIcon><ArrowRightAltIcon /></ListItemIcon>
                    : (index <= completedComponentIndex ? <ListItemIcon><CheckCircleOutlineIcon /></ListItemIcon> : <ListItemIcon />)
              }

            <ListItemText primary={c.name}  style={(index === activeComponentIndex ||index <= completedComponentIndex)?{color:"rgba(0,0,0,0.9)",cursor:'pointer'}: {color:"rgba(0,0,0,0.4)"}}
            onClick={index <= completedComponentIndex? ()=> backSequence(index):null}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>

      {
                activeComponentIndex === 0 ? (
                  <AppBar position="fixed" className={classes.appBar}>
                    <svg height="30" className="header-logo" viewBox="50 0 1800 650" id="logo">
                      <path d="M302.29 179.3v315.58c0 27.93.65 44.83 1.95 61.07h-1.3c-6.83-18.6-14.88-34.9-26.89-56.12L89.41 179.3H4.11v461.3h66.46V325c0-27.94-.65-44.83-1.94-61.08H70c6.82 18.6 14.87 34.89 26.89 56.1L283.47 640.6h84.4V179.3zM1060.44 333.69c-55 0-94.27 25.44-114.12 63.1 0-89 31-166.47 104.7-166.47 46.84 0 65.43 26.95 75.36 71.14l68.22-13.65c-16-76.29-64.53-113.37-143.1-113.37-98.72 0-172.58 75.8-172.58 245.69 0 150.81 61.59 225.35 167.71 225.35 87.69 0 153.37-59.88 153.37-158.55 0-77.09-41.1-153.24-139.56-153.24zm-13.64 256.05c-54.42 0-92.1-50-98.62-116.39 16.53-56.63 53.18-84.84 96.52-84.84 55.71 0 87.14 41.14 87.14 99.63 0 62.78-35.84 101.6-85.04 101.6zM577.29 580.84c34.73-24 84.52-63.87 106.61-86 25.11-25.12 96.59-89.69 96.59-181.74 0-95.15-62-138.7-145.85-138.7-101.64.04-151.83 62.6-151.83 134.17a146.72 146.72 0 004.55 36.43l69.64 6.7a185.21 185.21 0 01-4.55-39.63c0-53.6 35.47-79.25 79.88-79.25 43.3 0 75.35 24.26 75.35 82.6 0 59.29-29 99.7-73.16 143.91C588.35 505.53 514.55 560.65 479 586v54.6h306.67v-59.76zM372 760.14v59.77H0v-59.77zM372 0v59.77H0V0z" />
                      <path d="M302.29 179.3v315.58c0 27.93.65 44.83 1.95 61.07h-1.3c-6.83-18.6-14.88-34.9-26.89-56.12L89.41 179.3H4.11v461.3h66.46V325c0-27.94-.65-44.83-1.94-61.08H70c6.82 18.6 14.87 34.89 26.89 56.1L283.47 640.6h84.4V179.3z" />
                    </svg>
                    <div className="progress-bar-div">
                      <div style={{ background: 'rgb(54, 161, 139)', width: `${20 * (activeComponentIndex)}%`, height: '100%' }} />

                    </div>
                  </AppBar>
                ) : (
                  <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar className={classes.appBar}>
                      <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={backSequence}
                        className={classes.menuButton}
                      >
                        <ArrowBackIcon style={{ fill: 'black' }} />
                      </IconButton>
                      <Typography
                        variant="h6"
                        noWrap
                        style={{
                          color: 'black', textAlign: 'center', alignSelf: 'center', marginLeft: 'auto', marginRight: 'auto',
                        }}
                      >
                        {flowSequence[activeComponentIndex].name}
                      </Typography>
                      <select type="button" className="lang-sel">
                        <option value="English">

                      EN

                        </option>

                        <option value="Deutsch">
                    DU

                        </option>

                        <option value="Francais">
                    FR
                        </option>

                        <option value="Espanol">
                  ES
                        </option>

                        <option value="Italiano">
                  IT
                        </option>
                      </select>
                    </Toolbar>
                    <div className="progress-bar-div">
                      <div style={{ background: 'rgb(54, 161, 139)', width: `${20 * (activeComponentIndex)}%`, height: '100%' }} />

                    </div>
                  </AppBar>
                )
            }


      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >

            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <div className="header-logo-div">

              <svg height="50" className="header-logo" viewBox="0 0 1200 819.91" id="logo">
                <path d="M302.29 179.3v315.58c0 27.93.65 44.83 1.95 61.07h-1.3c-6.83-18.6-14.88-34.9-26.89-56.12L89.41 179.3H4.11v461.3h66.46V325c0-27.94-.65-44.83-1.94-61.08H70c6.82 18.6 14.87 34.89 26.89 56.1L283.47 640.6h84.4V179.3zM1060.44 333.69c-55 0-94.27 25.44-114.12 63.1 0-89 31-166.47 104.7-166.47 46.84 0 65.43 26.95 75.36 71.14l68.22-13.65c-16-76.29-64.53-113.37-143.1-113.37-98.72 0-172.58 75.8-172.58 245.69 0 150.81 61.59 225.35 167.71 225.35 87.69 0 153.37-59.88 153.37-158.55 0-77.09-41.1-153.24-139.56-153.24zm-13.64 256.05c-54.42 0-92.1-50-98.62-116.39 16.53-56.63 53.18-84.84 96.52-84.84 55.71 0 87.14 41.14 87.14 99.63 0 62.78-35.84 101.6-85.04 101.6zM577.29 580.84c34.73-24 84.52-63.87 106.61-86 25.11-25.12 96.59-89.69 96.59-181.74 0-95.15-62-138.7-145.85-138.7-101.64.04-151.83 62.6-151.83 134.17a146.72 146.72 0 004.55 36.43l69.64 6.7a185.21 185.21 0 01-4.55-39.63c0-53.6 35.47-79.25 79.88-79.25 43.3 0 75.35 24.26 75.35 82.6 0 59.29-29 99.7-73.16 143.91C588.35 505.53 514.55 560.65 479 586v54.6h306.67v-59.76zM372 760.14v59.77H0v-59.77zM372 0v59.77H0V0z" />
                <path d="M302.29 179.3v315.58c0 27.93.65 44.83 1.95 61.07h-1.3c-6.83-18.6-14.88-34.9-26.89-56.12L89.41 179.3H4.11v461.3h66.46V325c0-27.94-.65-44.83-1.94-61.08H70c6.82 18.6 14.87 34.89 26.89 56.1L283.47 640.6h84.4V179.3z" />
              </svg>


            </div>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {
            renderActiveComponent(activeComponentIndex, { userDetails, updateSequence, backSequence })
        }
        {/* <MobileNumber /> */}
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any,
};

export default ResponsiveDrawer;
