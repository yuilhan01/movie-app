import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import MovieDetail from './MovieDetail.tsx';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router';
// import { useParams } from 'react-router';
import Header from './Header.tsx';

// function MovieDetail() {
//   const { movieId } = useParams();
//   return <div>{movieId}映画詳細ページ</div>;
// }

const router = createBrowserRouter([
  { path: '/', Component: App },
  { path: '/movies/:id', Component: MovieDetail }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header>
      <RouterProvider router={router} />
    </Header>
  </StrictMode>
);

export default MovieDetail;
