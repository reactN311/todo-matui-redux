import React from 'react';
import {connect} from "react-redux";
import { ThunkDispatch } from "redux-thunk";
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
import EditIcon from '@material-ui/icons/Edit';

import { ITodo, TAction, ITodoState} from "../../state/action-type";
import { dataSelector} from '../../state/reselects';
import {completedTodo, delTodo, editTodo, showTodoForm} from "../../state/action-creaters";

// import EditDialogTodo from "../Dialog";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // width: '100%',
      // maxWidth: 800,
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
    },
    green: {
      color: theme.palette.getContrastText(green[500]),
      backgroundColor: green[500],
      width: 20,
      height: 20, 
    },
  }),
);

// const initState: ITodo = {
//   id: '0' ,
//   header: 'Brunch this weekend?',
//   author: 'Mark',
//   body: 'I\'ll be in your neighborhood doing errands this…',
//   selected: false,
//   completed: false,
// }

interface ItemsListProps {
  todos: { [key: string]: ITodo },
  completed: (id: string) => void,
  delTodo: (id: string) => void,
  editTodo: (todo: ITodo) => void,
  showDiag?: (show: boolean) => void
}

const ItemsList: React.FC<ItemsListProps> = ({todos, completed, delTodo, editTodo, showDiag}: ItemsListProps) => {
  // const [formData, setFormData] = React.useState(initState);
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    completed(event.target.name)
  };

  const handleDelete = (event: any ) => {
    let t = event.target.closest('.bnt-del');
    delTodo(t.id)
  };

  const showDiagS = () => {
    console.log('show');
    if(!!showDiag) {console.log('show'); showDiag(true)}
  }
    
  // const handleEdit = (event:any ) => {
  //   // delTodo(event.target.closest('.bnt-edit').id)
  //   console.log(event.target.closest('.bnt-edit'))
  // };

  // const setTodo = React.useCallback((todo: ITodo)=>{
  //   // empty implementation 
  //   console.log('List',todo)
  // },[])

  // const saveTodoToStore = React.useCallback((todo: boolean)=>{
  //   // empty implementation 
  // },[])

  // let EditIconCustom = () => (<EditIcon  style={{fontSize: 'small' }} />)
  // let dataDiag = {Custombutton: EditIconCustom, title:'Редактировать собитые' }

  return Object.keys(todos).length
    ?(
    <List className={classes.root}>
      {Object.keys(todos).map((t:string) => (
        <React.Fragment key={t}>
          <ListItem component={'li'} key={ uuIdv4() } alignItems="center" selected={todos[t].selected} >
            <ListItemIcon>
              <Checkbox edge="start" checked={todos[t].completed}
                onChange={handleChange} name={todos[t].id.toString()}
                tabIndex={-1} disableRipple
                inputProps={{ 'aria-labelledby': 'labelId' }}
              />
            </ListItemIcon>
            <ListItemText 
              style={{borderBottom: todos[t].completed ? '1px solid #4CAF52': '1px solid grey'}}
              primary={todos[t].header}
              secondary={
                <React.Fragment>
                  <Typography component="span" variant="inherit"
                    className={classes.inline} color={todos[t].completed ? "error" : "textPrimary"}
                  >
                    {todos[t].author}
                  </Typography>
                  --{todos[t].body}
                </React.Fragment>
              }
            />
            <div  onClick={showDiagS}  className='bnt-edit' id={todos[t].id} style={{ margin: 5}} >
              <Avatar className={classes.green}> 
                <EditIcon  style={{fontSize: '1rem' }} />
              </Avatar>
            </div> 
            <div className='bnt-del' id={todos[t].id} onClick={handleDelete} style={{ margin: 5, cursor: 'pointer'}} >
              <Avatar className={classes.pink}>
                <DeleteIcon  style={{fontSize: '1rem' }} />
              </Avatar>
            </div>
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
  )
    :(
      <div style={{minWidth: "90%", minHeight: 200}} >No todos...</div>
    )
}

const mapStateToProps = createStructuredSelector ({
  todos: dataSelector,
});


const mapDispatchToProps = (dispatch: ThunkDispatch<ITodoState, TAction, any>) => {
  return {
    completed: (id: string) => {
      dispatch(completedTodo(id))
    },
    delTodo: (id: string) => {
      dispatch(delTodo(id))
    },
    editTodo: (todo: ITodo) => {
      dispatch(editTodo(todo))
    },
    showDiag: (show: boolean) => {
      dispatch(showTodoForm(show))
    },
  }
}

const TodoList = connect(mapStateToProps, mapDispatchToProps)(ItemsList)
export default TodoList




