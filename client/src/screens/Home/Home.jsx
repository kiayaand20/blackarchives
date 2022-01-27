import './Home.css'
import Layout from '../../components/Layout/Layout'
import {Link} from 'react-router-dom'

function Home(props) {
  return (
    <Layout user={props.user}>
      <div className='home'>
        <h1 className='title'>blackArchives</h1>
        <p className='home-sentence'>Celebrating Black Film Directors and their bodies of work.</p>
        <img src="https://res.cloudinary.com/kacloud20/image/upload/v1643054027/Project%204/Spike-Lee-1_ytbxxu.jpg"
          alt="spike-lee-home" width="350" height="250" className='spike-lee-home' />
        <img src="https://res.cloudinary.com/kacloud20/image/upload/v1643149629/Project%204/AvaDuVernay_GlamourUK_qt46qj.jpg"
          alt="ava-duv-home" width="280" height="400" className='ava-duv-home'/>
        <div className='view-all'>
          <Link to="/directors">
            <button className='view-all-btn'>View All Directors</button>
            </Link>
          </div>
        <hr />
        <h1 className='article-title'>Articles</h1>
      </div>
    </Layout>
  )
}

export default Home