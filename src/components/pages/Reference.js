import React from "react";
// import Header from "../Header";
// import Layout from "../Layout";
// import WrapTitle from "../basics/WrapTitle";
// import Footer from "../Footer";
// import { Link } from "react-router-dom";

// function ReferText({ alpha, attr, desc }) {
//   return (
//     <li>
//       <Link to="/">
//         <span className="alpha">{alpha}</span>
//         <span className="attr">{attr}</span>
//         <span className="desc">{desc}</span>
//       </Link>
//     </li>
//   );
// }

// const referAttr = [
//   {
//     alpha: "A",
//     attr: "align-content",
//     desc: "align-content 속성은 콘텐츠의 상하관계 정렬 상태를 정의합니다.",
//   },
//   {
//     alpha: "A",
//     attr: "align-items",
//     desc: "align-items 속성은 콘텐츠 내부의 정렬 상태를 정의합니다.",
//   },
//   {
//     alpha: "A",
//     attr: "align-self",
//     desc: "align-self 속성은 콘텐츠 요소의 정렬 상태를 정의합니다.",
//   },
// ];

// function Reference() {
//   return (
//     <div id="wrap" className="light">
//       <Header info="none" />
//       <Layout>
//         <section id="referCont">
//           <div className="container">
//             <WrapTitle text={["html", "reference"]} />
//             <div className="refer-cont">
//               <div className="refer-table">
//                 <h3>CSS Reference</h3>
//                 <ul>
//                   {referAttr.map((text) => (
//                     <ReferText
//                       key={text.attr}
//                       alpha={text.alpha}
//                       attr={text.attr}
//                       desc={text.desc}
//                     />
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>
//       </Layout>
//       <Footer />
//     </div>
//   );
// }

class Reference extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Now Loading" : "Complete"}</div>;
  }
}

export default Reference;
