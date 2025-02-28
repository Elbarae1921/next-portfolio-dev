import Link from 'next/link';
import Button from 'components/ui/Button';
import Container from 'components/ui/Container';
import Header from 'components/ui/theme/Header';
import { useCustomTheme } from 'providers/ThemeProvider';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

const Intro = () => {
  const theme = useCustomTheme();

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi There!</h1>
          <h4>I’m John and I’m a JAMStack engineer!</h4>
          <Link href="#contact">
            <Button as="a">Hire me</Button>
          </Link>
        </Details>
        <Thumbnail>
          <img
            src="assets/illustrations/dev.svg"
            alt="I’m John and I’m a JAMStack engineer!"
          />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};

export default Intro;
