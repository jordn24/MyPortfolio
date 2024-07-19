import {Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';
import greenBg from "../assets/images/greenBg.png";

const Tile: React.FC<{label?: string, image?: string, alt: string, large?: boolean, backgroundColor?: string}> = 
    ({label = "", image = greenBg, alt, large = false, backgroundColor='rgb(0,0,0,0.1)'}) => {
    
    let imgHeight = 150;

    if(label === ""){
        imgHeight = 174
    }

    if(large){
        imgHeight = 365;
    }
    
    return (
        <Card sx={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '0', backgroundColor: 'rgb(37, 165, 42)'}}>
            <CardActionArea>
                <CardMedia
                component="img"
                image={image}
                alt={alt}
                height={imgHeight}
                />
                <CardContent sx={{backgroundColor: {backgroundColor}}}>     
                    <Typography color={'white'}>
                        {label}
                    </Typography>      
                </CardContent> 
            </ CardActionArea>
        </Card>
    )
}

export default Tile;