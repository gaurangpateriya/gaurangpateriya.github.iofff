import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



import './SideDrawer.css'

const useStyles = makeStyles({
  list: {
    width: '100%',
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    right: false,
  });

  const toggleDrawer = (side, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = (side) => (
    <div
      className='side-drawer-div'
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['OverView', 'Pages', 'Sections','Docs','Purchase Now'].map((text, index) => (

          <ListItem button style={{ color: 'white' }} key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );


  return (
    <Drawer open={props.open} onClose={() => props.toggleDrawer('right', false)} anchor="right" >
      {sideList('right')}
    </Drawer>
  );
}
