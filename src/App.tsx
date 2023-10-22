import { DetailPage } from './DetailPage';
import FeedPage from './FeedPage';
import Header from './Header';
import images from './data/images';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  console.log(images)
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path = '/' element={<FeedPage />} />
        <Route path = '/post/'>
          <Route path =':id' element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
