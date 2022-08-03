import { Link } from '@mui/material';

const CardLink = ({ image }) => {
    return (
        <Link
            href={image}
            fontFamily="Gruppo"
            color='otherColors.lightestGray'>
            {image}
        </Link>
    );
}

export { CardLink };