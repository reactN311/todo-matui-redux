import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AlertDialogSlide from "./Dialog";
import {ITodo} from "../state/action-type";
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


export const InputElement: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const saveTodo = (todo: ITodo)=>{
    console.log(todo)
  }
  return (
    <div className={classes.root}>
      <AlertDialogSlide setData={saveTodo} />
    </div>
  )
}

export default InputElement
