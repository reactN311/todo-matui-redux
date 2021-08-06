import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog  from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import InputAdornments from "./Form";
import AddIcon from "@material-ui/icons/Add";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
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
  setData: (todo: ITodo) => void
}

const initState = {
  id: 0 ,
  header: 'Brunch this weekend?',
  author: 'Mark',
  body: 'I\'ll be in your neighborhood doing errands this…',
  selected: false,
  completed: false,
}

const AlertDialogSlide:React.FC<DialogTodoProps> =({setData}: DialogTodoProps):JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const [todo, setTodo] = React.useState(initState);
  const classes = useStyles();


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setData({
      id: '1000' ,
      header: 'Brunch this weekend?',
      author: 'Mark',
      body: 'I\'ll be in your neighborhood doing errands this…',
      selected: false,
      completed: false,
    });
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <AddIcon className={classes.iconPlus}  />
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Add new todo?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-todo">
            <InputAdornments  />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default  AlertDialogSlide