import discordIcon from '../media/discord-icon.png'
import twitterIcon from '../media/twitter-icon.png'

interface IProps {
  image: string,
  disclaimer: string,
  roadmapLink: string,
  faqLink: string
}
const Footer = ({image, disclaimer, roadmapLink, faqLink}: IProps) => {

  return (
    <div className='frow' style={{width: '60%', justifyContent: 'space-between'}}>
      <div className='flex-column'>
        <img src ={image} style={{width: '30px'}}/>
        {disclaimer}
      </div>
      <div className='flex-column' style={{width: '20%'}}>
        <div className='frow' style={{justifyContent: 'space-between'}}>
          <a>
            <img src={discordIcon} style={{width: '30px'}}/>
          </a>
          <a>
            <img src={twitterIcon} style={{width: '30px'}}/>
          </a>          
        </div>
        <div className='frow' style={{justifyContent: 'space-between'}}>
          <a href={roadmapLink}>Roadmap</a>
          <a href={faqLink}>FAQ</a>
        </div>
      </div>
    </div>
  )

}

export default Footer