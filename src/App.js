import { styled } from '@material-ui/core';
import React, { useEffect } from 'react'
import Front from './Front'
import { motion, useMotionValue, useTransform } from "framer-motion/dist/framer-motion";
import Aos from 'aos';

const Container = styled(motion.div)`
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

function App() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  useEffect(()=>{
    Aos.init({duration: 2000});
  }, []);

  return (
    <Container 
    style={{ x, y, rotateX, rotateY, z: 100 }}
    drag
    dragElastic={0.16}
    dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
    whileTap={{ cursor: "grabbing" }}
    >
    <Front/>
    </Container>
    
  )
}

export default App