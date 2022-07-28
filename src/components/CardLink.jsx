import { Link } from '@mui/material';

const CardLink = ({ image, index }) => {
    return (
        <Link
            key={index}
            href={image}
            fontFamily="Gruppo"
            color='otherColors.lightestGray'>
            {image}
        </Link>
    );
}

export { CardLink };