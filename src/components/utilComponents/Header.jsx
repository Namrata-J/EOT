import * as headerComp from "../headerComponents/";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
        <headerComp.HeaderContainer>
            <headerComp.HeaderIconBtn>
                <MenuIcon fontSize='inherit' />
            </headerComp.HeaderIconBtn>
            <headerComp.HeaderLogo />
        </headerComp.HeaderContainer>
    );
}

export { Header };