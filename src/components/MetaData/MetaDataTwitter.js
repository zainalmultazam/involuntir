import React from 'react'
import { Helmet } from 'react-helmet'

const MetaDataTwitter = ({ judul, slug, detail, foto, UserName }) => {
  return (
    <Helmet>
      {/* twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@peduly_id" />
      <meta property="twitter:title" content={judul} />
      <meta property="twitter:image" content={foto} />
      <meta property="twitter:tile:image" content={foto} />
      <meta property="twitter:tile:image:alt" content={judul} />
      <meta property="twitter:cta" content="Donasi di Peduly" />
      <meta property="twitter:description" content={detail} />
      <meta property="twitter:label1" content="By" />
      <meta property="twitter:data1" content={UserName} />
      <meta property="twitter:tile:template:testing" content="3" />
      {/* <meta
          property="twitter:tile:info1:text"
          content={`By ${dataGalangDana.data.user[0].name}`}
        /> */}
    </Helmet>
  )
}

export default MetaDataTwitter
