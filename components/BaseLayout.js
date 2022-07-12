import Link from 'next/link'
import Head from 'next/head'
import { Fragment } from 'react';

const BaseLayout = (props) => {
  const { children } = props;
    
  return(
    <Fragment>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content=""/>
        <title>Brassica</title>

        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Nunito" rel="stylesheet"/>
        <link rel="stylesheet" href="../assets/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="../assets/css/custom.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.6.1/font/bootstrap-icons.min.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.4/css/all.css"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
      </Head>

      <main>
          {children}
      </main>
      {/* <script src="https://use.fontawesome.com/12da6888e2.js"></script> */}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossOrigin="anonymous" async></script>
      {/* <script src="https://kit.fontawesome.com/a703993976.js" crossOrigin="anonymous"></script> */}
      {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossOrigin="anonymous"></script> */}
    </Fragment>
)}
export default BaseLayout
