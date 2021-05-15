// import React from 'react';
// import tesla from './Img/tesla.png';
// import { TweenMax, Power3, TimelineLite } from 'gsap';
// // import scrollTrigger from 'gsap/ScrollTrigger';
// import { useEffect } from 'react';
// // import main from '../Tesla/main.css';

// function Nav_bar() {
//   useEffect(() => {
//     let tl = new TimelineLite({ delay: 0.5 });

//     tl.from('.list', { duration: '1', opacity: '80%', y: '-200%' })
//       .from('.li1', {
//         duration: '.2',
//         opacity: '30%',
//         x: '100%',
//         ease: Power3.easeInOut,
//       })
//       .from('.li2', {
//         duration: '.2',
//         opacity: '30%',
//         x: '100%',
//         ease: Power3.easeInOut,
//       })
//       .from('.li3', {
//         duration: '.2',
//         opacity: '30%',
//         x: '100%',
//         ease: Power3.easeInOut,
//       })
//       .from('.li4', {
//         duration: '.2',
//         opacity: '30%',
//         x: '100%',
//         ease: Power3.easeInOut,
//       })
//       .from('.li5', {
//         duration: '.2',
//         opacity: '30%',
//         x: '100%',
//         ease: Power3.easeInOut,
//       })
//       .from('.li6', {
//         duration: '.2',
//         opacity: '30%',
//         x: '100%',
//         ease: Power3.easeInOut,
//       })
//       .from('.png1', { duration: '1', opacity: '0%', x: '100px' })
//       .from('.png2', { duration: '1', opacity: '0%', x: '-100px' });
//   });

//   return (
//     <>
//       <div className="list">
//         <ul style={{ listStyleType: 'none' }}>
//           <li className="li1" style={{ float: 'left' }}>
//             <a href="#" style={{ textDecoration: 'none', color: 'lightgrey' }}>
//               MODEL X
//             </a>
//           </li>

//           <li className="li2" style={{ float: 'left' }}>
//             <a href="#" style={{ textDecoration: 'none', color: 'lightgrey' }}>
//               MODEL Y
//             </a>
//           </li>

//           <li className="li3" style={{ float: 'left' }}>
//             <a href="#" style={{ textDecoration: 'none', color: 'lightgrey' }}>
//               MODEL S
//             </a>
//           </li>

//           <li className="li4" style={{ float: 'left' }}>
//             <a href="#" style={{ textDecoration: 'none', color: 'lightgrey' }}>
//               MODEL 3
//             </a>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }
// export default Nav_bar;
