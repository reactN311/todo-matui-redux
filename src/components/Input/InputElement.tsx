import React from 'react'; 
import { connect } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { createStructuredSelector } from 'reselect';

import { dataSelector } from '../../state/reselects';
import { ITodo, ITodoState, TAction } from '../../state/action-type';
import { completedTodo, delTodo, editTodo, showTodoForm } from '../../state/action-creaters';
  
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

import useStylesInputEl from './InputElement.styles';
// import { showDiagForm } from '../../state/actions';
  
interface InputElementProps {
  showDiag?: (show: boolean) => void
}

const InputElement: React.FC<InputElementProps> = ({showDiag}) => { 
  const classes = useStylesInputEl();
  // const dispatch = useDispatch()

  const showDiagS = () => {
    // console.log('show');
    if(!!showDiag) {  showDiag(true)}
  }

  return (
    <div className={classes.root} onClick={showDiagS} >
      <PlaylistAddIcon   style={{ fontSize: 40 }} /> 
    </div>
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

export default  connect(mapStateToProps, mapDispatchToProps)(InputElement) 


