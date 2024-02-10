import React from 'react';
import Header from './compents/Header'
import Producers from './compents/Producers';

export default function Home() {
  return <>
    <Producers header={Header} />
  </>
}