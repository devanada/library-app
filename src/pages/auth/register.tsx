import React, { useState, useEffect } from "react";

import Layout from "@/components/layout";

const Register = () => {
  const [count, setCount] = useState(0);

  /*
    componentDidMount, fungsi akan dijalankan sekali pada saat komponent telah di muat/render
    
    useEffect(() => {
        ...
    }, []);
    */
  //   useEffect(() => {
  //     document.title = `Count: ${count}`;
  //   }, []);

  /*
    componentDidMount & componentWillUpdate, fungsi akan dijalankan sekali pada saat komponent telah di muat/render, dan akan dijalankan kembali apabila nilai yang ada didalam dependency array berubah
    
    useEffect(() => {
        ...
    }, [state]);
    */
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  /**
   * Side effect akan selalu jalan pada saat pengguna berada di halaman/page tersebut sampai komponen tersebut dihancurkan/dihapus dari DOM (componentDidMount + componentWillUpdate + componentWillUnmount)
   *
   * useEffect(() => {
   *    ...
   *    return () => {}
   * })
   */

  return (
    <Layout>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </Layout>
  );
};

export default Register;
