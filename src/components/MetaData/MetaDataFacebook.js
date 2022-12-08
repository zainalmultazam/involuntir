import React from 'react'
import { Helmet } from 'react-helmet'

const MetaDataFacebook = ({ judul, url, detail, foto }) => {
  return (
    <Helmet>
      {/* facebook */}
      {/* <meta property='fb:app_id' content='' /> */}
      {/* <meta property='fb:pages' content='' /> */}
      {/* <meta property='og:locale' content='id_ID' /> */}
      {/* <meta property='og:locale:alternate' content='en_US' /> */}
      <meta property="og:site_name" content="peduly.com" />
      <meta property="og:type" content="peduly:campaign" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={judul} />
      <meta property="og:description" content={detail} />
      <meta property="og:image" content={foto} />
      <meta property="og:image:secure_url" content={foto} />
    </Helmet>
  )
}

export default MetaDataFacebook
