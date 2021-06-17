import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Bee from './Bee';
import PagingFile from './PagingFile';
import { Container, makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import TablePaginationDemo from './pfc'
import { List } from '@material-ui/core';
import Header from './Header';
import { Divider } from '@material-ui/core';


const useStyles = makeStyles({
  app: {
    display: 'flex',
    marginRight: '2px',
    marginTop: '2px',
  },
  pff:
  {
    position: 'center',
    display: 'flex',

  }
})


function App() {
  const classes = useStyles();

  const [pages, setPages] = useState(1)
  const [adata, setAdata] = useState([])
  const [numofpages, setnumofPages] = useState(1)

  const fetchFunction = async () => {
    const data = await axios.get(`https://reqres.in/api/users?page=${pages}`);
    console.log(data)
    setAdata(data.data.data);
    setPages(data.data.page)
    setnumofPages(data.data.total_pages)

  }
  useEffect(() => {
    fetchFunction();
  }, [pages])



  return (<>
    <Header />
    <Divider />
    <Container >
      <Grid item xs={12} >

        <Grid container >

          {
            adata.map((cval) => {
              return <Bee key={cval.id} id={cval.id} email={cval.email} avatar={cval.avatar} first_name={cval.first_name} last_name={cval.last_name} />
            })

          }
        </Grid>


      </Grid>
    </Container>
    <PagingFile setPages={setPages} numofPages={numofpages} className={classes.pff} />

  </>);
}

export default App;
