import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import searchIcon from "../assets/images/search-400.webp";
import tilePreview from "../assets/images/tile-thumbnail-400.webp";

const SidePreview: React.FC<{ side: "left" | "right" }> = ({ side }) => {
  const location = useLocation();
  const [content, setContent] = useState({ left: <></>, right: <></> });

  useEffect(() => {
    let LeftSideElement: JSX.Element = <></>;
    let RightSideElement: JSX.Element = <></>;

    switch (location.pathname) {
      case "/":
        LeftSideElement = (
          <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} height={"80%"}>
            <img
              src={searchIcon}
              height={40}
              width={40}
              style={{ backgroundColor: "rgb(92, 93, 93)", padding: 30 }}
            />
          </Box>
        );
        RightSideElement = (
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-end"}
            justifyContent={"space-evenly"}
            height={"100%"}
          >
            <img src={tilePreview} height={225} width={100} style={{ borderRadius: 3 }} />
            <img src={tilePreview} height={225} width={100} style={{ borderRadius: 3 }} />
            <img src={tilePreview} height={225} width={100} style={{ borderRadius: 3 }} />
          </Box>
        );
        break;
      case "/projects/python":
        LeftSideElement = (
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            justifyContent={"space-evenly"}
            height={"100%"}
          >
            <img src={tilePreview} height={225} width={100} style={{ borderRadius: 3 }} />
            <img src={tilePreview} height={225} width={100} style={{ borderRadius: 3 }} />
            <img src={tilePreview} height={225} width={100} style={{ borderRadius: 3 }} />
          </Box>
        );
        RightSideElement = <></>;
        break;
      default:
        LeftSideElement = (
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            justifyContent={"space-evenly"}
            height={"100%"}
          >
            <img src={tilePreview} height={225} width={100} style={{ borderRadius: 3 }} />
            <img src={tilePreview} height={225} width={100} style={{ borderRadius: 3 }} />
            <img src={tilePreview} height={225} width={100} style={{ borderRadius: 3 }} />
          </Box>
        );
        RightSideElement = (
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-end"}
            justifyContent={"space-evenly"}
            height={"100%"}
          >
            <img src={tilePreview} height={225} width={100} style={{ borderRadius: 3 }} />
            <img src={tilePreview} height={225} width={100} style={{ borderRadius: 3 }} />
            <img src={tilePreview} height={225} width={100} style={{ borderRadius: 3 }} />
          </Box>
        );
        break;
    }

    setContent({ left: LeftSideElement, right: RightSideElement });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5}}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          height: "100%",
          zIndex: -1,
        }}
        key={location.pathname}
      >
        {side === "left" ? content.left : content.right}
      </motion.div>
    </AnimatePresence>
  );
};

export default SidePreview;
