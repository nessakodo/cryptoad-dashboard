import { createTheme } from '@mui/material/styles';
import { green, red, yellow, orange } from '@mui/material/colors';

import components from './components';
import typography from './typography';

export default {
    
    //v5 override syntax
    dark: createTheme({
        spacing: 10,
        shape: {
            borderRadius: 7,
          }, 
        palette: {
            mode: 'dark',
            background: {
                default: '#16161C',
                paper: '#21212b',
              },
            text: {
                primary: '#fff',
                secondary: 'rgba(255, 255, 255, 0.7)',
            },
            primary: {
                main: '#04DDE3',
                light: "#95f4b0",
                dark: '#AB05F2',
                green: "#4D7C0F",
                red: "#9D174D",
                contrastText: "#F04CFD",
            },
            // primary: {
            //     main: '#04DDE3',
            //   secondary: '#AB05F2',
            //   },
            success: {
                main: 'rgb(111, 214, 145)',
                light: 'rgb(131, 231, 168)',
                dark: "#92e200",
                contrastText: 'rgb(235, 234, 239)',
            },
            warning: {
                main: 'rgb(242, 175, 87)',
                light: 'rgb(245, 205, 130)',
                dark: "#AB05F2",
                contrastText: 'rgb(235, 234, 239)',
            },
            error: {
                main: 'rgb(237, 103, 98)',
                light: '#AB05F2',
                dark: "#F04CFD",
                contrastText: 'rgb(235, 234, 239)',
            },
            info: {
                main: 'rgb(142, 221, 229)',
                light: '#AB05F2',
                dark: '#AB05F2',
                contrastText: 'rgb(235, 234, 239)',
            },
            customYellow: {
                dark: '#AB05F2',
                main: '#04DDE3',
                light: '#AB05F2',
            },
            divider: 'rgba(255, 255, 255, 0.12)',
        },
        typography: typography,
        components: components,
        position: "sticky",
        ellipsis: {
            maxWidth: 200, // percentage also works
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
    }),
    light: createTheme({
        spacing: 10,
        shape: {
            borderRadius: 7,
          },    
        palette: {
            mode: 'light',
            background: {
                paper: '#F3F4F6',
                default: '#F9FAFB',
            },
            text: {
                primary: 'rgb(30, 32, 34)',
                secondary: 'rgb(103, 119, 136)',
            },
            primary: {
                main: '#04DDE3',
                light: "#95f4b0",
                dark: '#AB05F2',
                green: "#4D7C0F",
                red: "#9D174D",
                contrastText: 'rgb(235, 234, 239)',
            },
            success: {
                main: '#84CC16',
                light: 'rgb(131, 231, 168)',
                dark: "#92e200",
                contrastText: 'rgb(235, 234, 239)',
            },
            warning: {
                main: 'rgb(242, 175, 87)',
                light: 'rgb(245, 205, 130)',
                dark: "#AB05F2",
                contrastText: 'rgb(235, 234, 239)',
            },
            error: {
                main: 'rgb(237, 103, 98)',
                light: '#AB05F2',
                dark: "#F04CFD",
                contrastText: 'rgb(235, 234, 239)',
            },
            info: {
                main: 'rgb(142, 221, 229)',
                light: 'rgb(183, 238, 242)',
                dark: 'rgb(92, 205, 219',
                contrastText: 'rgb(235, 234, 239)',
            },
            customYellow: {
                dark: yellow[800],
                main: 'rgb(250, 222, 101)',
                light: 'rgb(252, 237, 133)',
            },
            divider: 'rgba(0, 0, 0, 0.12)',
        },
        ellipsis: {
            maxWidth: 200, // percentage also works
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },

        typography: typography,
        components: components,
        position: "sticky",
        
    })
};