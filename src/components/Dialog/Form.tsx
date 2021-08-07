import React from 'react';

import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import { ITodo } from '../../state/action-type';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }),
);

interface IState {
  header: string;
  body: string;
  author: string;
}
interface IFormProp { 
  isOpen: boolean
  setData: (data: ITodo) => void; }

const randomId = () => {
  return Math.random().toString(36).substr(2,5)
}
const initState = {
  header: '',
  body: '',
  author: '',
}

const FormDialog: React.FC<IFormProp> = ({isOpen, setData}) => {
  const classes = useStyles();
  const [values, setValues] = React.useState<IState>(initState);

  React.useEffect(() => {
    if(isOpen) return
    setValues(initState)
  }, [isOpen])

  React.useEffect(() => {

    let newTodo: ITodo = {id: randomId(), header: values.header,
      author: values.author, body: values.body,
      selected: false, completed: false}

    setData(newTodo)
     
  }, [values])

   
  const handleChange =  (prop: keyof IState) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const nVal = {...values, [prop]: event.target.value } 
      setValues(nVal)
  } 

  return (
    <div className={classes.root}>
      <div>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="form-input__header">Header</InputLabel>
          <OutlinedInput
            id="form-input__header"
            value={values.header}
            onChange={handleChange('header')}
            startAdornment={<InputAdornment position="start">H</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="form-input__body">Body</InputLabel>
          <OutlinedInput
            id="form-input__body"
            value={values.body}
            onChange={handleChange('body')}
            startAdornment={<InputAdornment position="start">B</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="form-input__author">Author</InputLabel>
          <OutlinedInput
            id="form-input__author"
            value={values.author}
            onChange={handleChange('author')}
            startAdornment={<InputAdornment position="start">A</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
        
      </div>
    </div>)
}

export default FormDialog