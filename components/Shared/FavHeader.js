import React from 'react';
import Head from "next/head";
const FavHeader = ({name}) => {
    return (
        <div>
            <Head>
        <title>{name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        </div>
    );
};

export default FavHeader;