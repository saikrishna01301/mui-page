import Sidebar from './Components/Sidebar.component';
import Navbar from './Components/Navbar.component';
import Feed from './Components/Feed.component';
import Rightbar from './Components/Rightbar.component';
import { Box, Stack } from '@mui/material';


function App() {
  
  return (
    <Box>
      <Navbar/>
      <Stack  direction="row" spacing={2} justifyContent={'space-between'}>
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </Stack>
    </Box>
  );
}

export default App;
