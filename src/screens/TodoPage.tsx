import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import InputElement from "../components/Input/InputElement";
import TodoList from "../components/List";
import useStyles from "./todo.styles";

export const TodoPage: React.FC  = () => {
  const classes = useStyles()
  return (
    <div  className={classes.root}>
      {/* <CssBaseline /> */}
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth={false} className={classes.container}>
          <Grid container md={12} spacing={1}  >
            <Grid item md={12} lg={12} >
              <Paper className={classes.paperHeader}>
                <InputElement  /> 
              </Paper>
            </Grid>
            <Grid item md={12} lg={12} >
              <Paper className={classes.paper}> 
                <TodoList />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default TodoPage