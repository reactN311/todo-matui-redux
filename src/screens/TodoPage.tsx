import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import useStyles from "./todo.styles";
import InputElement from "../components/Input.element";
import CheckboxList from "../components/List";

export const TodoPage: React.FC  = () => {
  const classes = useStyles()
  return (
    <div  className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth={false} className={classes.container}>
          <Grid container spacing={3}  >
            <Grid item md={12} >
              <Paper className={classes.paper}>
                <InputElement />
                <CheckboxList />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default TodoPage