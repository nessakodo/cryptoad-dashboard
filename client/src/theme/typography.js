import image from "../assets/cryptoad.png"

const typography = {
    fontFamily: [
        'Wallpoet',
        'Orbitron',
      ].join(','),

    fontSize: 15,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
        // fontFamily: 'Orbitron',
        // background: 'radial-gradient(circle farthest-corner at center center,white,#111) no-repeat',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundImage: `url(${image})`,
        fontSize: '2rem',
        fontWeight: 300,
        lineHeight: 1.25,
        letterSpacing: 3,
    },
    h2: {
        fontFamily: 'Orbitron',
        fontSize: '1.75rem',
        fontWeight: 600,
        lineHeight: 1.25,
        letterSpacing: 2,
    },
    h3: {
        fontFamily: 'Orbitron',
        fontSize: '1.5rem',
        fontWeight: 600,
        lineHeight: 1.25,
        letterSpacing: 2,
    },
    h4: {
        fontFamily: 'Orbitron',
        fontSize: '1.125rem',
        fontWeight: 500,
        lineHeight: 1.25,
        letterSpacing: 1,
    },
    h5: {
        fontFamily: 'Orbitron',
        fontSize: '1.0625rem',
        fontWeight: 500,
        lineHeight: 1.25,
        letterSpacing: 1,
    },
    h6: {
        fontFamily: 'Orbitron',
        fontSize: '1rem',
        fontWeight: 500,
        lineHeight: 1.25,
        letterSpacing: 1,
    },
    overline: {
        fontFamily: 'Orbitron',
        fontWeight: 600,
        letterSpacing: 1,
    },
    button: {
        fontFamily: 'Orbitron',
        fontWeight: 600,
        letterSpacing: 1,
    },
};

export default typography;