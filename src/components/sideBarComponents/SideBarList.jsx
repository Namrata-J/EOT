import { sideBarLinks } from "../../constants/sideBarLinks";
import { Link } from "react-router-dom";
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from '@mui/material';

const SideBarList = () => {
    return (
        <nav>
            <List
                sx={{
                    '& .MuiListItemButton-root:hover': {
                        '& .MuiListItemIcon-root': {
                            color: 'otherColors.lightPurple',
                        },
                    }
                }}>
                {
                    sideBarLinks.map((path, index) =>
                        <Link key={index} to={path.pathLink} style={{ textDecoration: 'none' }} >
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon
                                        sx={{
                                            minWidth: {
                                                sm: '46px',
                                                lg: '56px'
                                            }
                                        }}>{path.pathIcon}</ListItemIcon>
                                    <ListItemText
                                        disableTypography
                                        primary={
                                            <Typography
                                                type="body1"
                                                sx={{
                                                    color: 'otherColors.lightGray',
                                                    fontSize: { sm: '0.9rem', md: '1rem' }
                                                }}>
                                                {path.pathName}
                                            </Typography>}
                                    />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    )
                }
            </List>
        </nav>
    );
}

export { SideBarList };

