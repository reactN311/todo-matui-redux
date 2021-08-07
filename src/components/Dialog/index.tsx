import React, { ReactChild, ReactChildren } from 'react';

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
// import AddIcon from "@material-ui/icons/Add";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

import FormDialog from "./Form";
import {ITodo} from "../../state/action-type"; 


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconPlus: {
      color: 'cadetblue',
      // marginTop: theme.spacing(1),
      // marginRight: theme.spacing(4),
      width: 40,
      fontSize: "2.0rem"
    }

  }),
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});



interface DialogTodoProps {
  data: {
    Custombutton: React.ElementType //React.ElementType<any>,
    title: string
    todo?: ITodo
  }
  setData: (todo: ITodo) => void
  saveData: (todo: boolean) => void
}



const DialogSlide:React.FC<DialogTodoProps> =({data:{Custombutton, title},setData, saveData}: DialogTodoProps):JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // const setDataForm = (data: ITodo) => {
  //   console.log('setDataForm', data);
  // };

  const handleSave = () => {
    saveData(true);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <Custombutton />
      </Button>
      <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-todo">
            <FormDialog isOpen={open} setData={setData} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            <CancelPresentationIcon />
          </Button>
          <Button onClick={handleSave} color="primary">
            <PlaylistAddCheckIcon />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default  DialogSlide