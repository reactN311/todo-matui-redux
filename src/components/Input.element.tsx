import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import CheckboxList from "./List";

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
  const classes = useStyles();

  return (
    <div className={classes.root}>

      {/*<TextField*/}
      {/*  id="outlined-full-width"*/}
      {/*  label="Add todo"*/}
      {/*  style={ { margin: 8, width: '90%'  } }*/}
      {/*  placeholder=" read book"*/}
      {/*  helperText="Enter new todo for create"*/}
      {/*  fullWidth*/}
      {/*  margin="normal"*/}
      {/*  InputLabelProps={ { shrink: true } }*/}
      {/*  variant="outlined"*/}
      {/*  />*/}
      <AddIcon className={classes.iconPlus}  />


    </div>
  )

}

export default InputElement
