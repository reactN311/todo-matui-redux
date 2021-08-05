import React from 'react';
import {connect} from "react-redux";

import { v4 as uuidv4 } from 'uuid';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import { green, pink } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';

import {ITodo } from "../../state/action-type";

import { dataSelector} from '../../state/reselects';
import {createStructuredSelector} from "reselect";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 800,
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
    pink: {
      color: theme.palette.getContrastText(pink[500]),
      backgroundColor: pink[500],
      width: 20,
      height: 20,
      marginTop: 15
    },
  }),
);

interface ItemsListProps {
  todos: ITodo[]
}

const ItemsList = ({todos}: ItemsListProps) => {
  const classes = useStyles();
  console.log(todos)
  return todos.length
    ?(
    <List className={classes.root}>
      {todos && todos.map((t:ITodo, index:number) => (
        <>
          <ListItem key={ uuidv4() } alignItems="flex-start">
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={true}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': 'labelId' }}
              />
            </ListItemIcon>
            <ListItemText
              primary={t.header}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {t.author}
                  </Typography>
                  --{t.body}
                </React.Fragment>
              }
            />
            <Avatar className={classes.pink}>
              <DeleteIcon style={{fontSize: 'small'}} />
            </Avatar>
          </ListItem>
          <Divider variant="inset" component="li" /></>
      ))}
    </List>
  )
    :(
      <div>loading...</div>
    )
}


const mapStateToProps = createStructuredSelector ({
  todos: dataSelector,
});

const TodoList = connect(mapStateToProps)(ItemsList)
export default TodoList




