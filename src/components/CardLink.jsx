import { Link } from '@mui/material';

const CardLink = ({ image }) => {
    return (
        <Link
            href={image}
            fontFamily="Gruppo"
            color='otherColors.gray'
            fontWeight="bold">
            {image}
        </Link>
    );
}

export { CardLink };