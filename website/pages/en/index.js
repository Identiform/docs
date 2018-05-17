const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')
const MarkdownBlock = CompLibrary.MarkdownBlock
const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

const siteConfig = require(process.cwd() + '/siteConfig.js')

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + '/' + (language ? language + '/' : '') + doc
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page
}

class Button extends React.Component {
  render () {
    return (
      <div className='pluginWrapper buttonWrapper'>
        <a className='button' href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self'
}

const SplashContainer = props => (
  <div className='homeContainer'>
    <div className='homeSplashFade'>
      <div className='wrapper homeWrapper'>{props.children}</div>
    </div>
  </div>
)

const Logo = props => (
  <div className='projectLogo'>
    <img src={props.img_src} />
  </div>
)

const ProjectTitle = props => (
  <h2 className='projectTitle'>
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
)

const PromoSection = props => (
  <div className='section promoSection'>
    <div className='promoRow'>
      <div className='pluginRowBlock'>{props.children}</div>
    </div>
  </div>
)

class HomeSplash extends React.Component {
  render () {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <div className='inner'>
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('Factory.html', language)}>Contract reference</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align='center' contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout='fourColumn'>
    {[
      {
        content: 'ERC20 compatible',
        imageAlign: 'top',
        title: 'ERC20'
      },
      {
        content: 'Users are incentivized with tokens and service buyers burn tokens thus increasing value of tokens.',
        imageAlign: 'top',
        title: 'Cyclic Model'
      },
      {
        content: 'One registration for the whole network.',
        imageAlign: 'top',
        title: 'One sign-on'
      },
      {
        content: 'Secure KYC/ AML/ Reputation system',
        imageAlign: 'top',
        title: 'KYC/ Reputation system'
      }
    ]}
  </Block>
)

class Index extends React.Component {
  render () {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className='mainContainer'>
          <Features />
        </div>
      </div>
    );
  }
}

module.exports = Index
