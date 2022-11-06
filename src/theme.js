import {createContext, useState, useMemo} from "react";
import {createTheme} from "@mui/material/styles";


// color design tokens
export const tokens = (mode) => ({
    ...(mode === "dark"
        ? {
                grey: {
                    '100': '#E0E0E0',
                    '200': '#C1C1C1',
                    '300': '#A3A3A3',
                    '400': '#848484',
                    '500': '#666666',
                    '600': '#474747',
                    '700': '#282828',
                    '800': '#0A0A0A',
                    '900': '#000000'
                },
                primary: {
                    '100': '#9FAED4',
                    '200': '#6A81BD',
                    '300': '#435B97',
                    '400': '#1D2842',
                    '500': '#141B2D',
                    '600': '#111726',
                    '700': '#0E131F',
                    '800': '#0B0E18',
                    '900': '#070A11'
                },
                greenAccent: {
                    '100': '#CCF1E7',
                    '200': '#ACE8D9',
                    '300': '#8CE0CA',
                    '400': '#6CD7BB',
                    '500': '#4CCEAC',
                    '600': '#31B190',
                    '700': '#24856C',
                    '800': '#185948',
                    '900': '#0C2D25'
                },
                redAccent: {
                    '100': '#F6D3D2',
                    '200': '#EFB2B0',
                    '300': '#E9918E',
                    '400': '#E2706C',
                    '500': '#DB4F4A',
                    '600': '#C62D27',
                    '700': '#97221E',
                    '800': '#681815',
                    '900': '#390D0B'
                },
                blueAccent: {
                    '100': '#FFFFFF',
                    '200': '#DEE0FE',
                    '300': '#B7BBFD',
                    '400': '#8F95FB',
                    '500': '#6870FA',
                    '600': '#323DF8',
                    '700': '#0814EA',
                    '800': '#060FB4',
                    '900': '#040B7D'
                }
            } : {
                grey: {
                    '900': '#000000',
                    '800': '#0A0A0A',
                    '700': '#282828',
                    '600': '#474747',
                    '500': '#666666',
                    '400': '#848484',
                    '300': '#A3A3A3',
                    '200': '#C1C1C1',
                    '100': '#E0E0E0'
                },
                primary: {
                    '900': '#070A11',
                    '800': '#0B0E18',
                    '700': '#0E131F',
                    '600': '#111726',
                    '500': '#141B2D',
                    '400': '#D6D8DC',
                    '300': '#435B97',
                    '200': '#6A81BD',
                    '100': '#9FAED4'
                },
                greenAccent: {
                    '900': '#0C2D25',
                    '800': '#185948',
                    '700': '#24856C',
                    '600': '#31B190',
                    '500': '#4CCEAC',
                    '400': '#6CD7BB',
                    '300': '#8CE0CA',
                    '200': '#ACE8D9',
                    '100': '#CCF1E7'
                },
                redAccent: {
                    '900': '#390D0B',
                    '800': '#681815',
                    '700': '#97221E',
                    '600': '#C62D27',
                    '500': '#DB4F4A',
                    '400': '#E2706C',
                    '300': '#E9918E',
                    '200': '#EFB2B0',
                    '100': '#F6D3D2'
                },
                blueAccent: {
                    '900': '#040B7D',
                    '800': '#060FB4',
                    '700': '#0814EA',
                    '600': '#323DF8',
                    '500': '#6870FA',
                    '400': '#8F95FB',
                    '300': '#B7BBFD',
                    '200': '#DEE0FE',
                    '100': '#FFFFFF'
                }

            }
    )
})

// mui theme settings

export const themeSettings = (mode) =>  {
    const colors = tokens(mode);

    return {
        palette:  {
            mode: mode,
            ...(mode === 'dark'
                ? {
                    primary: {
                        main: colors.primary[500]
                    },
                    secondary: {
                        main: colors.greenAccent[500]
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100]
                    },
                    background: {
                        default: colors.primary[500]
                    }
                } : {
                    primary: {
                        main: colors.primary[100]
                    },
                    secondary: {
                        main: colors.greenAccent[500]
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100]
                    },
                    background: {
                        default: "#fcfcfc"
                    }
                }
            )
        },
        typography: {
            fontFamily: ["Soruce Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 23
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14
            },
        }
    };
};


// contetx for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {}
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode =  useMemo(
        () => ({
            toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light"))
        })
    )
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

    return [theme, colorMode]
}

