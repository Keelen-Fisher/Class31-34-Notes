import { Button } from '@mantine/core';
import { createStyles } from '@mantine/core';
import { useContext } from 'react';
import { ModeContext } from '../Context/Mode/functionMode';
import './styles.scss';

//  this could probably live in its own file
export const useStyles = createStyles((theme) => ({
  button: {
    // backgroundColor: theme.colors.teal[9],
    borderRadius: theme.radius.lg,

  },
}));


function Main() {
  const { classes } = useStyles();
  const { mode } = useContext(ModeContext);

   return (
    <>
    <Button
     variant="gradient" gradient={{ from: 'orange', to: 'red', deg: 90 }}
    className={classes.button}>
      CLICK ME! I DO NOTHING
    </Button>
    
    <ModeContext.Consumer>
          {
            ({ mode }) => {

              return <>
                <h2>ModeProvider Initial State</h2>
                <h3 data-testid='mode-test'>{mode} mode from context! </h3>
              </>
            }
          }
        </ModeContext.Consumer>
    </>
  );
}

export default Main
