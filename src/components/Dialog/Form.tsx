import React from 'react';
 
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

import { IStateForm, ITodo } from '../../state/action-type';  
import useStylesForm from './Form.styles';
import { randomId } from './services';
  
const initState: IStateForm = {
  header: '',
  author: '',
  body: '',
}


const transData = (todo: ITodo): IStateForm => { 
  let d = {
    header: todo.header,
    author: todo.author,
    body: todo.body,
  }
  return d }  

interface IFormProp { 
  isOpen: boolean
  dataTodo?: IStateForm
  setData: (data: IStateForm) => void; }

  
const FormDialog: React.FC<IFormProp> = React.memo(({dataTodo, isOpen, setData}) => {
  const [values, setValues] = React.useState<IStateForm>(() => {
    return dataTodo  ?  dataTodo : initState; 
  });

  React.useEffect(() => {
    !isOpen  && setValues(initState)
  },[isOpen])

  const classes = useStylesForm();
  if(dataTodo){
    // console.log(dataTodo)
  }
 
  const handleChange =  (prop: keyof ITodo) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const nVal = {...values, [prop]: event.target.value }  
     setValues(nVal) 
     setData(nVal)
  } 

  return (
    <div className={classes.root}>
      <div>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="form-input__header">Header</InputLabel>
          <OutlinedInput
            id="form-input__header"
            value={values.header}
            // defaultValue={values.header}
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
})

export default FormDialog

 