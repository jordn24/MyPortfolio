import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { motion } from "framer-motion";
import greenBg from "../assets/images/greenBg.png";

interface TileProps {
    label?: string;
    image?: string;
    alt: string;
    large?: boolean;
    backgroundColor?: string;
    url?: string;
    openInNewTab?: boolean;
    onClick?: () => void;
}

const Tile: React.FC<TileProps> = ({
    label = "",
    image = greenBg,
    alt,
    large = false,
    backgroundColor = 'rgb(33, 149, 38)',
    url = "",
    openInNewTab = true,
    onClick = () => {}
}) => {

    const imgHeight = label ? (large ? 420 : 175) : 198;
    const cardActionProps = url 
        ? { component: "a", href: url, target: openInNewTab ? "_blank" : "_self" }
        : {};

    return (
        <motion.div
            whileHover={{ 
                scale: 1.1,
                zIndex: 10 
            }}
            whileTap={{
                scale: 0.9
            }}
            style={{position: 'relative'}}
        >
            <Card sx={{ maxWidth: '100%', overflow: 'hidden' }}>
                <CardActionArea {...cardActionProps} onClick={onClick}>
                    <CardMedia
                        component="img"
                        image={image}
                        alt={alt}
                        height={imgHeight}
                        sx={{
                            width: '100%',
                            height: {
                                md: large ? imgHeight - 215: imgHeight - 100,
                                lg: large ? imgHeight - 135 : imgHeight - 60,
                                xl: imgHeight
                            },
                            objectFit: 'cover'
                        }}
                    />
                    <CardContent sx={{ backgroundColor }}>
                        <Typography 
                            color='white'
                            sx={{
                                fontSize: {
                                    sm: 8,
                                    md: 10,
                                    xl: 20
                                }
                            }}
                            >
                            {label}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </motion.div>
    );
};

export default Tile;
