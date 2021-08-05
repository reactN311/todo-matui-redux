import React from 'react';
import clsx from 'clsx';
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

export default function InputAdornments() {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    amount: '',
    header: '',
    body: '',
    author: '',
  });

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [prop]: event.target.value});
  };

  // const handleClickShowPassword = () => {
  //   setValues({...values, showPassword: !values.showPassword});
  // };
  //
  // const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  // };
  return (
    <div className={classes.root}>
      <div>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="form-input__header">Amount</InputLabel>
          <OutlinedInput
            id="form-input__header"
            value={values.header}
            onChange={handleChange('header')}
            startAdornment={<InputAdornment position="start">h</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="form-input__author">Amount</InputLabel>
          <OutlinedInput
            id="form-input__author"
            value={values.author}
            onChange={handleChange('author')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="form-input__body">Amount</InputLabel>
          <OutlinedInput
            id="form-input__body"
            value={values.body}
            onChange={handleChange('body')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
      </div>
    </div>)
}