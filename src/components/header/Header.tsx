import useProgress from '@/hooks/useProgress';
import useScrollCounter from '@/hooks/useScrollCounter';
import Link from 'next/link';
import React from 'react';
import Logo from '../logo';
import {
  fixTruncate,
  HeaderContent,
  HeaderPadding,
  HeaderProgressBar,
  HeaderWrapper,
} from './Styles';
import HeaderTitle from './Title';
import { HeaderProps } from './types';

const headerVariants = {
  open: {
    height: 120,
    transition: { ease: 'easeInOut', duration: 0.3 },
  },
  collapsed: {
    height: 60,
    transition: { ease: 'easeInOut', duration: 0.3, delayChildren: 0.5 },
  },
};

const Header = (props: HeaderProps) => {
  const { title, offsetHeight = 120, showProgressBarOnMobile } = props;
  const reached = useScrollCounter(offsetHeight / 2);
  const readingProgress = useProgress();

  return (
    <>
      <HeaderWrapper
        initial='open'
        animate={reached ? 'collapsed' : 'open'}
        variants={headerVariants}
        css={{
          borderColor: reached
            ? 'var(--maximeheckel-border-color)'
            : 'transparent',
        }}
      >
        <div>
          <HeaderContent
            alignItems='center'
            justifyContent='space-between'
            className={fixTruncate()}
          >
            <div>
              <Link href='/'>
                <a
                  aria-label='Home'
                  aria-describedby='hometooltip'
                  data-testid='header-logo'
                >
                  <Logo alt='Logo' size={44} />
                </a>
              </Link>
              {title ? <HeaderTitle text={title} /> : null}
            </div>
          </HeaderContent>
        </div>
        {showProgressBarOnMobile ? (
          <HeaderProgressBar
            style={{
              scaleX: readingProgress,
            }}
          />
        ) : null}
      </HeaderWrapper>
      <HeaderPadding css={{ '--offsetHeight': `${offsetHeight}px` }} />
    </>
  );
};

export default Header;
