import { Card, TitleWrap } from 'components/ui/Card';
import Container from 'components/ui/Container';
import Fork from 'components/ui/Icons/Fork';
import Star from 'components/ui/Icons/Star';
import { useCustomTheme } from 'providers/ThemeProvider';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';

const Projects = ({ data }: any) => {
  const theme = useCustomTheme();

  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {data &&
          data.map(({ node }: any) => (
            <Item
              key={node.id}
              as="a"
              href={node.url}
              target="_blank"
              rel="noopener noreferrer"
              theme={theme}
            >
              <Card theme={theme}>
                <Content>
                  <h4>{node.name}</h4>
                  <p>{node.description}</p>
                </Content>
                <TitleWrap>
                  <Stats theme={theme}>
                    <div>
                      <Star color={theme === 'light' ? '#000' : '#fff'} />
                      <span>{node.stargazers.totalCount}</span>
                    </div>
                    <div>
                      <Fork color={theme === 'light' ? '#000' : '#fff'} />
                      <span>{node.forkCount}</span>
                    </div>
                  </Stats>
                  <Stats theme={theme}>
                    <Languages>
                      {node.languages.nodes.map(({ id, name }: any) => (
                        <span key={id}>{name}</span>
                      ))}
                    </Languages>
                  </Stats>
                </TitleWrap>
              </Card>
            </Item>
          ))}
      </Grid>
    </Wrapper>
  );
};

export default Projects;
