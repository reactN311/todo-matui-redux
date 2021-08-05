import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";


import { v4 as uuIdv4 } from 'uuid';
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
import {ICompletedTodoAction, ITodo, TAction} from "../../state/action-type";
import { dataSelector} from '../../state/reselects';
import {completedTodo, delTodo} from "../../state/actions";
import {Dispatch} from "redux";

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
  completed: (id: number) => void
  delTodo: (id: number) => void
}

const ItemsList = ({todos, completed, delTodo}: ItemsListProps) => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });
  const classes = useStyles();


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setState({ ...state, [event.target.name]: event.target.checked });
    completed(parseInt(event.target.name))
  };

  const handleDelete = (event:any ) => {
    // setState({ ...state, [event.target.name]: event.target.checked });
    delTodo(parseInt(event.target.closest('.bnt-del').id))
    console.log(event.target.closest('.bnt-del').id)
  };


  return todos.length
    ?(
    <List className={classes.root}>
      {todos && todos.map((t:ITodo, index:number) => (
        <>
          <ListItem key={ uuIdv4() } alignItems="flex-start">
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={t.completed}
                onChange={handleChange}
                name={t.id.toString()}
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
            <div className={'bnt-del'} id={t.id.toString()} onClick={handleDelete} >
              <Avatar className={classes.pink}>
                <DeleteIcon  style={{fontSize: 'small'}} />
              </Avatar>
            </div>

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


const mapDispatchToProps = (dispatch: any) => {
  return {
    completed: (id: number) => {
      dispatch(completedTodo(id))
    },
    delTodo: (id: number) => {
      dispatch(delTodo(id))
    },
  }
}

const TodoList = connect(mapStateToProps, mapDispatchToProps)(ItemsList)
export default TodoList




