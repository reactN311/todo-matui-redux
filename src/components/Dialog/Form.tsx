import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

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

interface State {
  amount: string;
  header: string;
  body: string;
  author: string;
}

const InputAdornments: React.FC = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    amount: '',
    header: '',
    body: '',
    author: '',
  });

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [prop]: event.target.value});
    console.log(event.target.value)
  };

  console.log(values)
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
          <InputLabel htmlFor="form-input__author">Author</InputLabel>
          <OutlinedInput
            id="form-input__author"
            value={values.author}
            onChange={handleChange('author')}
            startAdornment={<InputAdornment position="start">A</InputAdornment>}
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
      </div>
    </div>)
}

export default InputAdornments