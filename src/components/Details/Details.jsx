import React from 'react';
import { Card, CardHeader, CardContent, Typography, styled, CardActionArea } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import Aos from 'aos';
import useStyles from './styles';
import useTransactions from '../../useTransactions';
import { motion, useMotionValue, useTransform } from "framer-motion/dist/framer-motion";

const CardContainer = styled(motion.div)`
  width: 285px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #FFFF00;
  position: relative;
  cursor: grab;
`;
const Dnute = styled(motion.div)`
width: auto;
height: 190px;
z-index: 99;
user-select: none;
margin-right: 3em;
margin-top: 4em;

`;



export default function DetailsCard({ title, subheader }){
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (

   
    <Dnute
        style={{ x, y, rotateX, rotateY, z: 100000 }}
        drag
        dragElastic={0.12}
        whileTap={{ cursor: "grabbing" }}
        >
    <Card data-aos="fade-down" className={title === 'Income' ? classes.income : classes.expense}>
     
    <CardContainer
    style={{ x, y, rotateX, rotateY, z: 100 }}
    drag
    dragElastic={0.16}
    dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
    whileTap={{ cursor: "grabbing" }}
    >
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography variant="h5">₹{total}</Typography>
        <Doughnut data={chartData} />  
      </CardContent> 
      </CardContainer>
      
    </Card>
    </Dnute>
  
  );
};

/*<Dnute
        style={{ x, y, rotateX, rotateY, z: 100000 }}
        drag
        dragElastic={0.12}
        whileTap={{ cursor: "grabbing" }}
        ></Dnute>*/