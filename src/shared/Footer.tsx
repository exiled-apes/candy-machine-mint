import discordIcon from '../media/discord-icon.svg'
import twitterIcon from '../media/twitter-icon.svg'

interface IProps {
  image: string,
  disclaimer: string,
  roadmapLink: string,
  faqLink: string
}
const Footer = ({image, disclaimer, roadmapLink, faqLink}: IProps) => {

  return (
    <div className='frow' style={{width: '60%', justifyContent: 'space-between', padding: '64px 0px'}}>
      <div className='flex-column'>
        <img src ={image} style={{width: '30px', paddingBottom: '12px'}}/>
        {disclaimer}
      </div>
      <div className='flex-column' style={{width: '15%'}}>
        <div className='frow' style={{justifyContent: 'flex-end',  paddingBottom: '12px'}}>
          <a>
            <img  src={discordIcon} style={{width: '20px', marginRight: '25px'}}/>
          </a>
          <a>
            <img src={twitterIcon} style={{width: '20px'}}/>
          </a>          
        </div>
        <div className='frow' style={{justifyContent: 'flex-end'}}>
          <a href={roadmapLink} style={{marginRight: '25px'}}>Roadmap</a>
          <a href={faqLink}>FAQ</a>
        </div>
      </div>
    </div>
  )

}

export default Footer