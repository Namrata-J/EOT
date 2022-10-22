import { Box, Link } from '@mui/material';
import eot from '../../assets/EOT.png';

const HeaderLogo = () => {
    return (
        <Link href="/home">
            <Box
                component='img'
                src={eot}
                sx={{
                    width: { xs: 50, md: 70 },
                    m: 1
                }} />
        </Link>
    );
}

export { HeaderLogo };