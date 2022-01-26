import React from 'react'
import Layout from '../../components/Layout/Layout'
import DirectorInfo from '../../components/DirectorInfo/DirectorInfo'

export default function Directors(props) {
  return (
    <div>
      <Layout user={props.user}>
        <div>
          <DirectorInfo />
        </div>
      </Layout>
    </div>
  )
}