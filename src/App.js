import * as React from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import {Breadcrumbs, Link, Typography} from "@mui/material"

function App() {
  return (
    <div>
      <Header />
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">Practice test</Typography>
      </Breadcrumbs>
      <div style={{ height: 600 }}>lorem</div>
      <Footer />
    </div>
  );
}

export default App;
