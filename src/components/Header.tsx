import logo from '../assets/quiz-logo.png';

import { 
    Image,
    Text,
    makeStyles,
    shorthands 
} from "@fluentui/react-components";

const useStyles = makeStyles({
    header: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        ...shorthands.margin("1rem")
    },
    headerText: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: '2.5rem',
        letterSpacing: '0.6rem',
        ...shorthands.margin('1rem'),
        ...shorthands.padding('1rem'),
        textTransform: 'uppercase',
        backgroundImage: 'linear-gradient(90deg, #e781fb 40%, #8e76fa 60%)',
        backgroundClip: 'text',
        color: 'transparent'
    },
    headerImg: {
        width: "3rem",
        height: "3rem",
        filter: "drop-shadow(0 0 4px rgba(0, 0, 0, 0.6))"
    }
})

export default function Header() {
    const classes = useStyles();

    return (
        <header className={classes.header}>
            <Image 
                className={classes.headerImg}
                src={logo}
                alt="logo"
            />
            <Text as="h1" className={classes.headerText}>Quizomania</Text>
        </header>
    )
}