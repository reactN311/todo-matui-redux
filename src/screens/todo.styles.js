import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginLeft: 0,
  },
  appBarSpacer: {
    ...theme.mixins.toolbar,
    minHeight: 34,
    maxHeight: 44,
    '@media (min-width: 600px)': {
      minHeight: 44,
    },
  },
  content: {
    flexGrow: 1,
    height: '92vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
    // overflow: 'hidden',
  },
  fixedHeight: {
    height: 240,
  },
}))

export default useStyles
