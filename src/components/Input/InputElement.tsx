import React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';

import {ITodo, ITodoState, TAction} from "../../state/action-type";
import { addTodoWith } from '../../state/action-creaters';

import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AddIcon from "@material-ui/icons/Add";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

import DialogTodo from "../Dialog";

const useStyles = makeStyles((theme: Theme) =>
createStyles({
    root: {
      display: 'flex',
      flexWrap: 'nowrap',
      alignSelf: 'flex-end',

    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
    iconPlus: {
      color: 'cadetblue',
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(4),
      width: 40,
      fontSize: "2.5rem"
    }

  }),
);

const initState: ITodo = {
  id: '0' ,
  header: 'Brunch this weekend?',
  author: 'Mark',
  body: 'I\'ll be in your neighborhood doing errands this…',
  selected: false,
  completed: false,
}
interface InputElProps {
  addTodo: (todo: ITodo) => void
}

export const InputElement: React.FC<InputElProps> = ({addTodo}:InputElProps) => {
  // const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState(initState);

  const classes = useStyles();

  const setTodo = (todo: ITodo)=>{
    setFormData(todo)
  }

  const saveTodo = (todo: boolean)=>{
    if(todo && formData.id !== '0'){
      addTodo(formData)
      setFormData(initState)
      console.log(formData);
      
    }
  }

  let AddIconCustom = () => (<PlaylistAddIcon   style={{ fontSize: 40 }} />)
  let dataDiag = {Custombutton:AddIconCustom, title:'Добавить собитые' }

  return (
    <div className={classes.root}>
      <DialogTodo data={dataDiag} saveData={saveTodo} setData={setTodo} />
    </div>
  )
}


const mapDispatchToProps = (dispatch: ThunkDispatch<ITodoState, TAction, any>) => {
  return { 
    addTodo: (todo: ITodo) => {
      dispatch(addTodoWith(todo))
    },
  }
}

const TodoList = connect(null, mapDispatchToProps)(InputElement)

export default TodoList
