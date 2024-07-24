import { Helmet } from 'react-helmet-async'

const MetaData = ({title, subtitle, content}) => {
  return (
    <Helmet>
        <title>
            {`${title} - Lamona Realtors`}
        </title>
        <meta name={subtitle} content={content} />
    </Helmet>
  )
}

export default MetaData