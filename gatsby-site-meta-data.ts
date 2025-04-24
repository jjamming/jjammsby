export default {
  /**
   * basic Information
   */
  title: `jjamming.com`,
  description: `재민`,
  language: `ko`,
  siteUrl: `https://jjamming.com/`,
  ogImage: ``, // Path to your in the 'static' folder

  /**
   * comments setting
   */
  comments: {
    utterances: {
      repo: `jjamming/jjammsby`, //`danmin20/danmin-gatsby-blog`,
    },
  },

  /**
   * introduce yourself
   */
  author: {
    name: `유재민`,
    nickname: `재민`,
    stack: ['Frontend', 'React', 'Typescript', 'BlockChain'],
    bio: {
      email: `ohj3694@naver.com`,
      residence: 'Seoul, South Korea',
      bachelorDegree: 'Hongik Univ. Computer Engineering (2020.03 ~ ing)',
    },
    social: {
      github: `https://github.com/jjamming`,
      linkedIn: `https://www.linkedin.com/in/jjamming/`,
      // resume: `https://www.figma.com/file/dtkCl6G7G5DVe18DN2LWny/%EC%9D%B4%EC%A0%95%EB%AF%BC-%EC%9D%B4%EB%A0%A5%EC%84%9C?node-id=0%3A1`,
    },
    dropdown: {
      // tistory: 'https://danminblog.tistory.com/',
      // velog: 'https://velog.io/@danmin20',
      githubPage: 'https://jjamming.github.io',
    },
  },

  /**
   * definition of featured posts
   */
  featured: [
    {
      title: 'TypeScript',
      category: 'featured-TypeScript',
    },
    {
      title: 'React',
      category: 'featured-React',
    },
    {
      title: 'CodingTest',
      category: 'featured-CodingTest',
    },
  ],

  /**
   * metadata for About Page
   */
  timestamps: [
    // {
    //   category: 'Career',
    //   date: '2022.01.04 - NOW',
    //   en: 'A Corp.',
    //   kr: 'A 회사',
    //   info: 'A 팀',
    //   link: '',
    // },
    // {
    //   category: 'Career',
    //   date: '2021.01.04 - 2022.01.04',
    //   en: 'B Corp.',
    //   kr: 'B 회사',
    //   info: 'B 팀',
    //   link: '',
    // },
    {
      category: 'Activity',
      date: '2024.09 - 2025.02',
      en: 'UMC',
      kr: 'University MakeUs Challenge',
      info: '대학생 연합 개발 동아리',
      link: '',
    },
    {
      category: 'Activity',
      date: '2024.07 - 2024.08',
      en: 'IHHH',
      kr: 'Institute of Hongik, Hacking, Honor',
      info: '홍익대학교 보안 동아리',
      link: '',
    },
  ],

  /**
   * metadata for Playground Page
   */
  projects: [
    {
      title: 'Portfolio',
      description: '포트폴리오',
      techStack: ['React', 'Typescript'],
      thumbnailUrl: '', // Path to your in the 'assets' folder
      links: {
        post: '',
        github: '',
        demo: '',
        googlePlay: '',
        appStore: '',
      },
    },
  ],

  /**
   * metadata for Buy Me A Coffee
   */
  remittances: {
    toss: {
      qrCode: 'jam_toss_qr.svg', // Path to your in the 'assets' folder
    },
    kakaopay: {
      qrCode: 'jam_kakao_qr.svg', // Path to your in the 'assets' folder
    },
  },
};
