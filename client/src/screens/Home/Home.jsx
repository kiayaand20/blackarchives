import './Home.css'
import Layout from '../../components/Layout/Layout'
import {Link} from 'react-router-dom'

function Home(props) {
  return (
    <Layout user={props.user}>
      <div className='home'>
        <p className='title'>blackArchives</p>
        <p className='home-sentence'>Celebrating Black Film Directors and their bodies of work</p>
        <img src="https://res.cloudinary.com/kacloud20/image/upload/v1643054027/Project%204/Spike-Lee-1_ytbxxu.jpg"
          alt="spike-lee-home" width="350" height="250" className='spike-lee-home' />
        <img src="https://res.cloudinary.com/kacloud20/image/upload/v1643149629/Project%204/AvaDuVernay_GlamourUK_qt46qj.jpg"
          alt="ava-duv-home" width="280" height="400" className='ava-duv-home'/>
        <p className='home-sentence2'>Black cinema serves as an avenue for creative expression, cultural affirmation, and a reimagining of what freedom really means.
        Black Archives strives to showcase Black Directors and the gifts they bring to the world through film.</p>
        <div className='view-all'>
          <Link to="/directors">
            <button className='view-all-btn'>View All Directors</button>
            </Link>
          </div>
        <hr />
      </div>

      <div>
        <h1 className='article-title'>Articles</h1>
        
        <div className='films'>
         <a href="https://time.com/5932844/black-history-movies/"><img src='https://res.cloudinary.com/kacloud20/image/upload/c_scale,h_260,w_400/v1643433159/black-history-movies_mridqi.jpg'
          alt='black-history-films' /><p>Hollywood So Often Gets Black History Wrong-<br /> Black Filmmakers Are Setting the Record Straight</p></a> 
        </div>
      </div>
    </Layout>
  )
}

export default Home