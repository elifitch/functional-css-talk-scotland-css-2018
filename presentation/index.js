/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';
import {
  BlockQuote,
  Cite,
  Quote,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  // Image,
  // Text,
  Notes,
} from 'spectacle';
import {
  Bounce,
  Fade,
  CallFn,
  DropIn,
  FromLeft,
  FromTop,
  Anticipation,
  FollowThrough,
  Letterwave,
  Squash,
  Stretch,
  FromTopSquashStretch,
  FromTopFollowThroughFun,
  FromTopFollowThroughSerious,
  FromTopSecondaryAction,
  BrandEnergetic,
  BrandCalm,
  Rumble,
  Stroke,
} from './components/anim/index';
import theme, { contentWidth } from './theme';
import Title from './components/title';
import SectionHeading from './components/section-heading';
import SlideHeading from './components/slide-heading';
import ListHeading from './components/list-heading';
import SubsectionHeading from './components/subsection-heading';
import LinkHeading from './components/link-heading';
import Pic from './components/pic';
import Vid from './components/vid';
import Footer from './components/footer';
import LoginModal from './components/login-modal';
import LogoRowSlide from './slides/logo-row-slide';
import EarthPointerSlide from './slides/earth-pointer-slide';
import DorsalVentralBrain from './slides/dorsal-ventral-brain';
import ProgressBarDemo from './slides/progress-bar-demo';
import BouncingBall from './components/bouncing-ball';
import PapyrusSlide from './slides/papyrus-slide';
import ThankYouSlide from './slides/thank-you-slide';
import Confetti from './components/confetti';

require('normalize.css');

// Aliases
const SH = SectionHeading;
const SSH = SubsectionHeading;
const H = SlideHeading;
const Annot = ({ children }) => <H size={6}>{children}</H>;
Annot.propTypes = PropTypes.node.isRequired;
const Hsmall = Annot;

export default class Presentation extends React.Component {
  constructor() {
    super();
    this.state = {
      showSocialPointer: false,
      enableConfetti: false,
      fireConfetti: false,
    };
    this.showSocialPoiner = this.showSocialPoiner.bind(this);
    this.hideSocialPoiner = this.hideSocialPoiner.bind(this);
    this.enableConfetti = this.enableConfetti.bind(this);
    this.shootConfetti = this.shootConfetti.bind(this);
    this.stopConfetti = this.stopConfetti.bind(this);
  }
  showSocialPoiner() {
    this.setState({ showSocialPointer: true });
  }
  hideSocialPoiner() {
    this.setState({ showSocialPointer: false });
  }

  enableConfetti() {
    this.setState({ enableConfetti: true });
  }
  shootConfetti() {
    if (this.state.enableConfetti) {
      this.setState({ fireConfetti: true });
    }
  }
  stopConfetti() {
    if (this.state.enableConfetti) {
      this.setState({ fireConfetti: false });
    }
  }

  render() {
    return (
      <div
        role="widget" // eslint-disable-line
        onMouseDown={this.shootConfetti}
        onMouseUp={this.stopConfetti}
      >
        <Deck
          transition={['slide']}
          transitionDuration={300}
          theme={theme}
          controls={false}
          bgColor="#ff00ff"
          contentWidth={contentWidth}
          contentHeight={1000}
          progress="bar"
        >
          <Slide >
            <Title lineHeight={1}>Functional CSS at Scale</Title>
            <Heading size={4} textColor="nearBlack">Clean &amp; Composable UI on a massive app</Heading>
          </Slide>

          <Slide>
            <H>Scaling CSS is <Bounce><Stroke>HARD</Stroke>.</Bounce></H>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide bgColor="transparent" onActive={this.enableConfetti}>
            <ThankYouSlide />
            <CallFn fn={this.shootConfetti} />
            <CallFn fn={this.stopConfetti} />
            <Fade><LinkHeading href="http://assets.eli.wtf/talks/animation-talk-fitc-2018">http://assets.eli.wtf/talks/animation-talk-fitc-2018</LinkHeading></Fade>
          </Slide>

        </Deck>
        {/* <Confetti
          shootConfetti={this.state.fireConfetti}
        /> */}
        <Footer
          showSocialPoiner={this.state.showSocialPointer}
        />
      </div>
    );
  }
}