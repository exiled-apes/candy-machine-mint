import mainBanner from '../images/main_banner_place_holder.png';
import secondaryBanner from '../images/secondry_banner_place_holder.png';
import logo from '../images/logo/logo.svg';
import nft1 from '../images/nft/nft_sample_1.png';
import teamMember1 from '../images/team/team_member_1.png';
import teamMember2 from '../images/team/team_member_2.png';
import twitterLogo from '../images/twitter/Logo white.svg';
import discordLogo from '../images/discord/icon_clyde_white_RGB.svg';

const Config = {
  navbar: {
    logo: logo
  },
  showcaseMain: {
    backGroundImage: mainBanner,
  },
  showcaseSecondary: {
    backGroundImage: secondaryBanner,
  },
  about: {
    name: 'NFT Name',
    image: nft1,
    text: 'About Text'
  },
  story: {
    title: 'Story Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  roadMap: [
    {
      textLeft: '10%',
      textRight: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum non consectetur a erat. Tristique nulla aliquet enim tortor at auctor urna.'
    },
    {
      textLeft: '30%',
      textRight: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis in eu mi bibendum neque. Egestas tellus rutrum tellus pellentesque eu.'
    },
    {
      textLeft: '100%',
      textRight: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit ut. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula.'
    }
  ],
  teamMembers: [
    {
      teamMemberImage: teamMember1,
      teamMemberName: "teamMember1",
      teamMemberLink: "#",
      teamMemberTitle: "Team Member 1",
      teamMemberDescription: "Founding Member 1"
    },
    {
      teamMemberImage: teamMember2,
      teamMemberName: "teamMember2",
      teamMemberLink: "#",
      teamMemberTitle: "Team Member 2",
      teamMemberDescription: "Founding Member 2"
    }
  ],
  footerLinks: [
    {
      image: twitterLogo,
      link: 'https://www.twitter.com'
    },
    {
      image: discordLogo,
      link: 'https://www.discord.com'
    }
  ],
  footerText: "All rights reserved",
};

export default Config;