import { Box, Link } from '@mui/material';
import logo from '../../assets/Logo.png';

const HeaderLogo = () => {
    return (
        <Link href="/home">
            <Box
                component='img'
                src={logo}
                sx={{
                    width: { xs: 60, sm: 80, md: 90 },
                    m: 1
                }} />
        </Link>
    );
}

export { HeaderLogo };