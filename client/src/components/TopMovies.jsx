// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Row, Container, Col } from "react-bootstrap";
// import "./../styles/AllMovies.css";
// import { Link } from "react-router-dom";


// export default function TopMovies({ movies }) {
//     console.log(movies);
//         return (
//     <Container>
//       <Row>
//         {movies.map((movie , i) => movie.imDbRating).sort((x ,i) => (
//           <Col key={i} className="movieblock">
//             <Link
//               to={{
//                 pathname: `/movie/${movie._id}`,
//                 movieId: movie._id,
//               }}
//             >
//               <img
//                 src={movie.image}
//                 alt="movies"
//                 width="180px"
//                 height="270px"
//               />
//             </Link>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }
