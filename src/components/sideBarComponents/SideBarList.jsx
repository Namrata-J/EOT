import { sideBarLinks } from "../../constants/sideBarLinks";
import {
    List,
    Link,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
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
                        <Link key={index} href={path.pathLink}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{path.pathIcon}</ListItemIcon>
                                    <ListItemText primary={path.pathName} />
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

