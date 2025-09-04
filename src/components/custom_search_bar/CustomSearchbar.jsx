import React from "react";
import { Debounce } from "../../utils/helpers/CommonHelper";

function CustomSearchbar({ onChange }) {
  const onChangeUserInput = (e) => {
    console.log(e.target.value);
    onChange(e.target.value);
  };
  function outer() {
    let count = 0;
    return function inner() {
      count++;
      return count;
    };
  }
  let outfunc = outer();
  console.log(outfunc());
  console.log(outfunc());
  console.log(outfunc());
  console.log(outfunc());
  console.log(outfunc());

  // function a() {
  //   console.log("a executed");
  //   return function b() {
  //     console.log("b executed");
  //     return function c() {
  //       console.log("c executed");
  //       return function d() {
  //         console.log("d executed");
  //       };
  //     };
  //   };
  // }
  // a()()()()
  // function a(a) {
  //     console.log("a executed");
  //     return function b(b) {
  //       console.log("b executed");
  //       return function c(c) {
  //         console.log("c executed");
  //         return function d(d) {
  //           console.log(a+b+c+d);
  //         };
  //       };
  //     };
  //   }
  //   a(1)(2)(3)(4)
  // let a = Promise.resolve("Sucessfully executed");
  // let b = Promise.reject("Sucessfully executed");
  // Promise.allSettled([a,b]).then((respose)=>{
  //   console.log(respose)
  // }).catch((error)=>{
  //   console.log(error)
  // })

  return (
    <div>
      <input onChange={Debounce(onChangeUserInput, 10000)} />
    </div>
  );
}

export default CustomSearchbar;
