import { Box, Button, Typography } from "@mui/material";
import NotFoundIcon from "../assets/images/404Icon-400.webp";

const ErrorGrid: React.FC = () => {
    return (
        <Box display='flex' height={600} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} marginBottom={10}>
            <img src={NotFoundIcon} height={300} width={300}/>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} color={'white'} bgcolor={'grey'} borderRadius={2} padding={2} margin={2}>
                <Typography variant="h5">This page dosen't exist!</Typography>
                <Typography variant="h5">Click the home button to go back.</Typography>
            </Box>
        </Box>
    )
}

export default ErrorGrid;