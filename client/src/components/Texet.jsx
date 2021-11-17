// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Row, Container, Col, Pagination } from "react-bootstrap";
// import "./../styles/AllMovies.css";
// import { Link } from "react-router-dom";


// export default function AllMovies({ movies }) {
//   return (
//     <Container>
//       <Row>
//         {movies.map((movie, i) => movie.genreList.key.inclues(Drama)(
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
//       <Row>
//       <Pagination>
//         <Pagination.First />
//         <Pagination.Prev />
//         <Pagination.Item>{1}</Pagination.Item>
//         <Pagination.Ellipsis />

//         <Pagination.Item>{10}</Pagination.Item>
//         <Pagination.Item>{11}</Pagination.Item>
//         <Pagination.Item active>{12}</Pagination.Item>
//         <Pagination.Item>{13}</Pagination.Item>
//         <Pagination.Item disabled>{14}</Pagination.Item>

//         <Pagination.Ellipsis />
//         <Pagination.Item>{20}</Pagination.Item>
//         <Pagination.Next />
//         <Pagination.Last />
// </Pagination>
//       </Row>

//     </Container>
//   );
// }
