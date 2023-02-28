import Head from 'next/head'
import React, { ReactNode } from 'react'

type Props = {children: ReactNode[]}

type Font = {
  name: string;
  style: string;
}

const defaultFonts: Font[] = [
{name: 'Helvetica', style: 'sans-serif'},
{name: 'Arial', style: 'sans-serif'},
{name: 'Arial Black', style: 'sans-serif'},
{name: 'Verdana', style: 'sans-serif'},
{name: 'Tahoma', style: 'sans-serif'},
{name: 'Trebuchet MS', style: 'sans-serif'},
{name: 'Impact', style: 'sans-serif'},
{name: 'Gill Sans', style: 'sans-serif'},
{name: 'Times New Roman', style: 'serif'},
{name: 'Georgia', style: 'serif'},
{name: 'Palatino', style: 'serif'},
{name: 'Baskerville', style: 'serif'},
{name: 'Andalé Mono', style: 'monospace'},
{name: 'Courier', style: 'monospace'},
{name: 'Lucida', style: 'monospace'},
{name: 'Monaco', style: 'monospace'},
{name: 'Bradley Hand', style: 'cursive'},
{name: 'Brush Script MT', style: 'cursive'},
{name: 'Luminari', style: 'fantasy'},
{name: 'Comic Sans MS', style: 'cursive'},
]

export const fonts: Font[] = [
  {name: 'Caveat', style: 'cursive'},
  {name: 'Covered By Your Grace', style: 'cursive'},
  {name: 'Dancing Script', style: 'cursive'},
  {name: 'Explora', style: 'cursive'},
  {name: 'Great Vibes', style: 'cursive'},
  {name: 'Indie Flower', style: 'cursive'},
  {name: 'Pacifico', style: 'cursive'},
  {name: 'Sacramento', style: 'cursive'},
  {name: 'Satisfy', style: 'cursive'},
  {name: 'Shadows Into Light', style: 'cursive'},
].concat(defaultFonts);

function UseFonts({children}: Props) {
  return <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Caveat&family=Covered+By+Your+Grace&family=Dancing+Script&family=Explora&family=Great+Vibes&family=Indie+Flower&family=Pacifico&family=Sacramento&family=Satisfy&family=Shadows+Into+Light&display=swap" rel="stylesheet" />
    </Head>
    {children}
  </>
}

export default UseFonts