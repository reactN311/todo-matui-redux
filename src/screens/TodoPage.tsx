import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

import DialogTodo from "../components/Dialog";
import InputElement from "../components/Input/InputElement";
import TodoList from "../components/List";
import useStyles from "./todo.styles";

// let AddIconCustom = () => (<PlaylistAddIcon   style={{ fontSize: 40 }} />)
let dataDiag = {title:'Добавить собитые', isShow: false }

export const TodoPage: React.FC  = () => {
  const classes = useStyles()
  return (
    <div  className={classes.root}>
      {/* <CssBaseline /> */}
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth={false} className={classes.container}>
          <Grid container sm={12} spacing={1} justifyContent='center'  >
            <Grid item sm={12} md={12} lg={12} >
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
          <DialogTodo data={dataDiag} />
        </Container>
      </main>
    </div>
  );
}

export default TodoPage