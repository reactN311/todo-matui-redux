import React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';

import {IStateForm, ITodo, ITodoState, TAction, TypeFormAction} from "../../state/action-type";
import { addTodoWith, completedTodo, delTodo, editTodo, showTodoForm } from '../../state/action-creaters';

import Button from '@material-ui/core/Button';
import Dialog  from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation'; 

import FormDialog from "./Form"; 
import { createStructuredSelector } from 'reselect';
import { dataFormSelector, showFormSelector, typeFormSelector } from '../../state/reselects'; 



const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const initState: IStateForm = {
  header: '',
  author: '',
  body: ''
}

interface DialogTodoProps {
  data: {
    title: string,
    isShow: boolean, 
  },
  dataForm?: IStateForm,
  datatypeForm?: TypeFormAction,
  showForm: boolean,
  showDiag: (show: boolean) => void
  addTodo: (todo: ITodo) => void 
}


const DialogNewAndEdit:React.FC<DialogTodoProps> =({data:{ title}, dataForm, showForm, showDiag,addTodo}: DialogTodoProps):JSX.Element => {
  const [open, setOpen] = React.useState(showForm); 
  const [formData, setFormData] = React.useState<IStateForm>(() => {
    return dataForm  ? dataForm : initState; 
  });

//  console.log('formData', formData);
 React.useEffect(() => {
   if(typeof showForm === 'undefined') return
   setOpen(showForm)
 },[showForm])

 React.useEffect(() => { 
   if(!open) setFormData(initState)
 },[open])
 

  // for stop re-render child' component
  const setTodo = (todo: IStateForm)=>{
    setFormData(todo)
  }
 
  const handleClose = () => {
    showDiag(false);
  }; 

  const handleSave = () => { 
    addTodo({...formData, id: Date.now().toString(), selected: false, completed: false})
    showDiag(false);

  }; 

  return (
    <div> 
      <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-todo"
      >
        <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-todo">
            <FormDialog isOpen={open} setData={setTodo} dataTodo={formData} />
          </DialogContentText>
        </DialogContent>
        <DialogActions >
          <Button onClick={handleClose} color="primary">
            <CancelPresentationIcon />
          </Button>
          <Button onClick={handleSave} color="primary" disabled={formData.header.trim().length < 3 } >  
            <PlaylistAddCheckIcon />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


const mapDispatchToProps = (dispatch: ThunkDispatch<ITodoState, TAction, any>) => {
  return { 
    addTodo: (todo: ITodo) => {
      dispatch(addTodoWith(todo))
    },
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
 
const mapStateToProps = createStructuredSelector ({
  dataForm: dataFormSelector,
  datatypeForm: typeFormSelector,
  showForm: showFormSelector,
});

const DialogComponent = connect(mapStateToProps, mapDispatchToProps)(DialogNewAndEdit)
export default  DialogComponent
 