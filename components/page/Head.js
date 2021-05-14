import {default as NextHead} from 'next/head'

export default function Head({title, description}) {
  return (
    <NextHead>
      <title>{title}</title>

      <meta name="description" content={description}/>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <meta httpEquiv="Content-Language" lang="en-us"/>

      <link rel="icon" href="/favicon.ico"/>
    </NextHead>
  )
}
