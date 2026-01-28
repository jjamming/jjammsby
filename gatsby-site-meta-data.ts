export default {
  /**
   * basic Information
   */
  title: `jjamming.com`,
  description: `열심히 공부하고 꾸준히 기록하려 합니다.`,
  language: `ko`,
  siteUrl: `https://jjammsby.vercel.app/`,
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
    stack: ['Frontend', 'React', 'Typescript'],
    bio: {
      email: `ohj3694@naver.com`,
      residence: 'Seoul, South Korea',
      bachelorDegree: 'Hongik Univ. Computer Engineering (2020.03 ~ NOW)',
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
      title: 'Dev',
      category: 'featured-Dev',
    },
    {
      title: 'Project',
      category: 'featured-Project',
    },
    {
      title: 'Algorithm',
      category: 'featured-Algorithm',
    },
  ],

  /**
   * metadata for About Page
   */
  timestamps: [
    {
      category: 'Career',
      date: '2026.01.05 - NOW',
      en: 'miriDiH',
      kr: '미리디(인턴)',
      info: 'Frontend Development',
      link: '',
    },
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
      date: '2025.07 - 2025.08',
      en: 'SOFTEER',
      kr: 'HMG Softeer Bootcamp',
      info: '현대자동차 소프티어 부트캠프 FE 6th',
      link: '',
    },
    {
      category: 'Activity',
      date: '2024.09 - 2025.02',
      en: 'UMC',
      kr: 'University MakeUs Challenge',
      info: '대학생 연합 개발 동아리 Web 7th',
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
      title: 'StockPort',
      description: '국내 주식 백테스트 서비스',
      techStack: ['React', 'Typescript'],
      thumbnailUrl: 'stpt_thumbnail.png', // Path to your in the 'assets' folder
      links: {
        post: '',
        github: 'https://github.com/TeamStockPort/Frontend-StockPort',
        demo: '',
        googlePlay: '',
        appStore: '',
      },
    },
    {
      title: 'Gachita',
      description: '복지 인프라 연계 고령자 병원 이동 DRT 플랫폼',
      techStack: ['React', 'Typescript'],
      thumbnailUrl: 'gachita_thumbnail.png', // Path to your in the 'assets' folder
      links: {
        post: '',
        github: 'https://github.com/didyou88/Team5-HyFive',
        demo: '',
        googlePlay: '',
        appStore: '',
      },
    },
    {
      title: 'MemeSphere',
      description: '세상의 모든 밈코인을 한 곳에서, 밈스피어',
      techStack: ['React', 'Typescript'],
      thumbnailUrl: 'memesphere_thumbnail.png', // Path to your in the 'assets' folder
      links: {
        post: '',
        github: 'https://github.com/TeamMemeSphere/Frontend-MemeSphere',
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
