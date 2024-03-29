import logo from '../../assets/quiz-logo.png';
import { useStyles } from './HeaderStyles';

import { 
    Image,
    Text,
} from "@fluentui/react-components";

export default function Header() {
    const classes = useStyles();

    return (
        <header className={classes.header}>
            <Image 
                className={classes.headerImg}
                src={logo}
                alt="logo"
            />
            <Text as="h1" className={classes.headerText}>Quizmania</Text>
        </header>
    )
}