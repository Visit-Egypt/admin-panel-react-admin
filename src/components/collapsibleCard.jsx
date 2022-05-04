// in src/users.js
import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Collapse,
  Paper,
  Grid,
  IconButton,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { useEffect } from "react";

export default function CollapsibleCard(props) {
  let [IsCollabsed, setIsCollabsed] = useState(true);
  let [IsAnimating, setIsAnimating] = useState(false);



  return (
    <Card
      elevation={2}
      sx={{ width: "100%", padding: "20px 0 20px 0", margin: "20px 0 0 0" }}
    >
      <CardHeader
        title={props.title}
        action={
          <IconButton
            aria-label="settings"
            onClick={() => {
              setIsAnimating(true);
              setIsCollabsed(!IsCollabsed);
            }}
            sx={{
              transform: `rotate(${IsCollabsed ? '0' : '180deg'})`,
            }}
          >
            <KeyboardArrowDownIcon />
          </IconButton>
        }
      />

      <Collapse
        in={!IsCollabsed}
        onAnimationEnd={() => {
          setIsAnimating(false);
        }}
      >
        <CardContent>
          {/* make sure the content isn't removed before the animation end */}
          {(!IsCollabsed || IsAnimating) && props.children}
        </CardContent>
      </Collapse>
    </Card>
  );
}
