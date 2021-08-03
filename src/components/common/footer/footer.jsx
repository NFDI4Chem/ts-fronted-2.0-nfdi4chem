import React from 'react';
import { Container, Grid, Box, Link } from '@material-ui/core';

import './Footer.css';

function Footer () {

  return (
    <Box px={{ xs : 3, sm : 10}} py={{ xs : 5, sm : 10}} bgcolor="#cccccc">
      <Container maxWidth="lg">
         <Grid container spacing = {5}>
           <Grid item xs = {12} sm={4}>
             <Box borderBottom={1}>About the Service</Box>
             <Box>
                <Link href="/" color="inherit">
                  Imprint
                </Link>
             </Box>
             <Box>
                <Link href="/" color="inherit">
                  Terms of Use
                </Link>
             </Box>
             <Box>
                <Link href="/" color="inherit">
                  Privacy Policy
                </Link>
             </Box>
           </Grid>
           <Grid item xs = {12} sm={4}>
             <Box borderBottom={1}>Maintainer</Box>
             <Box>
             <div class="frame-v">
                <img src= {"/img/TIB_Logo_en.png"} alt="TIB logo" width="250"/>    
              </div>
             </Box>
           </Grid>
           <Grid item xs = {12} sm={4}>
             <Box borderBottom={1}>Funding</Box>
             <Box>
                <Link href="/" color="inherit">
                  Imprint
                </Link>
             </Box>
           </Grid>
         </Grid>
      </Container>
    </Box>
  )

}

export default Footer;