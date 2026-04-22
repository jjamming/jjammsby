import ReactRotatingText from 'react-rotating-text';

import { Author } from '@/src/type';

import BuyMeACoffee from '../BuyMeACoffee';
import Image from '../Image';
import * as S from './styled';

type MainBannerProps = {
  author: Author;
};

const MainBanner: React.FC<MainBannerProps> = ({ author }) => {
  const { stack, social, name } = author;

  return (
    <S.Wrapper>
      <S.IntroWrapper>
        <S.Title>
          안녕하세요!
          <br />
          <strong>
            <ReactRotatingText items={stack} />
          </strong>
          <span>를 좋아하는</span>
          <br />
          개발자 <strong>{name}</strong>
          입니다.
        </S.Title>
        <Image alt='thumbnail' src='' />
        <S.SocialWrapper>
          {Object.keys(social).map(
            (link, index) =>
              social[link as keyof typeof social] && (
                <S.SocialButton key={index} target='_blank' href={social[link as keyof typeof social]}>
                  {link}
                </S.SocialButton>
              ),
          )}
        </S.SocialWrapper>
      </S.IntroWrapper>

      <S.BuyMeACoffeeWrapper>
        <BuyMeACoffee />
      </S.BuyMeACoffeeWrapper>
    </S.Wrapper>
  );
};

export default MainBanner;
