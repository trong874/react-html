import { Html, Head, Main, NextScript } from 'next/document'

import * as Cookie from 'cookies-next';
import * as request from '@/utils/request';
import {InferGetServerSidePropsType} from "next";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css2?family=Itim&display=swap' rel='stylesheet' />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
