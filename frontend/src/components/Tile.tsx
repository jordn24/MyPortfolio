import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import greenBg from "../assets/images/greenBg.png";

interface TileProps {
    label?: string;
    image?: string;
    alt: string;
    large?: boolean;
    backgroundColor?: string;
    url?: string;
    openInNewTab?: boolean;
}

const Tile: React.FC<TileProps> = ({
    label = "",
    image = greenBg,
    alt,
    large = false,
    backgroundColor = 'rgb(33, 149, 38)',
    url = "",
    openInNewTab = true
}) => {
    const imgHeight = label ? (large ? 415 : 175) : 189;
    const cardActionProps = url 
        ? { component: "a", href: url, target: openInNewTab ? "_blank" : "_self" }
        : {};

    return (
        <Card>
            <CardActionArea {...cardActionProps}>
                <CardMedia
                    component="img"
                    image={image}
                    alt={alt}
                    height={imgHeight}
                />
                <CardContent sx={{ backgroundColor }}>
                    <Typography color='white'>
                        {label}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Tile;
