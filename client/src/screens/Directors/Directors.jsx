import React from 'react'
import Layout from '../../components/Layout/Layout'
import DirectorInfo from '../../components/DirectorInfo/DirectorInfo'
import './Directors.css'

export default function Directors() {
  return (
    <div>
      <Layout>
        <div className='all-directors'>
          <DirectorInfo />
        </div>
      </Layout>
    </div>
  )
}