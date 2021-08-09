import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStylesInputEl = makeStyles((theme: Theme) =>
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
      fontSize: '2.5rem',
    },
  }),
)

export default useStylesInputEl
