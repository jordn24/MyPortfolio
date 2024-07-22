import { Box } from "@mui/material";
import { motion } from "framer-motion";
import loadingDash from "../assets/images/loadingDash.png";

const InitialLoad = () => {
    return(
        <Box display={'flex'} margin={35} alignItems={'center'} justifyContent={'center'} width={'100%'}>
            <motion.img height={"100rem"} animate={{rotate: 360}} transition={{duration: 2, repeat: Infinity}} src={loadingDash} />
        </Box>
    )
}

export default InitialLoad;