import './Home.css'
import Layout from '../../components/Layout/Layout'
import {Link} from 'react-router-dom'

function Home(props) {
  return (
    <Layout user={props.user}>
      <div>
        <p className='title'>blackArchives</p>
        <p className='home-sentence'>Celebrating Black Film Directors and their bodies of work</p>
        <img src="https://res.cloudinary.com/kacloud20/image/upload/v1643054027/Project%204/Spike-Lee-1_ytbxxu.jpg"
          alt="spike-lee-home" width="350" height="250" className='spike-lee-home' />
        <img src="https://res.cloudinary.com/kacloud20/image/upload/v1643149629/Project%204/AvaDuVernay_GlamourUK_qt46qj.jpg"
          alt="ava-duv-home" width="280" height="400" className='ava-duv-home'/>
        <img src="https://res.cloudinary.com/kacloud20/image/upload/v1643467089/MSDPANT_EC003_ej0in3.webp"
          alt="peebles-home" width="350" height="250" className='peebles-home' />
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
          <div className='article-1'>
          <img src='https://res.cloudinary.com/kacloud20/image/upload/c_scale,h_260,w_400/v1643433159/black-history-movies_mridqi.jpg'
            alt='black-history-films' height='300' width='450' /> 
          <p>Hollywood So Often Gets Black History Wrong-<br /> Black Filmmakers Are Setting the Record Straight</p>
          <a href="https://time.com/5932844/black-history-movies/">
            <p>Read More</p>
            </a>
          </div>
          
          <div className='article-2'>
          <img src='https://res.cloudinary.com/kacloud20/image/upload/v1643468289/africanamerican_collage-h_2018_t8oxqn.webp'
            alt='black-history-films' height='300' width="450" /> 
          <p>15 Up-and-Coming Black Directors Directors <br /> Set to Shape the Future of Hollywood</p>
          <a href="https://time.com/5932844/black-history-movies/">
            <p>Read More</p>
            </a>
          </div>
          
        </div>
      </div>
    </Layout>
  )
}

export default Home