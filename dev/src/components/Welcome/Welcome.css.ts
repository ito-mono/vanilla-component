import { keyframes, style } from '@vanilla-extract/css';
import {
  blinkingAnimation,
  createAnimation,
  opacityAnimation,
} from '@/components/Styles/Animation.css';

export const styles = {
  // 画面全体を覆うコンテナに適用するスタイル
  container: style({
    width: '100vw',
    height: '100vh',
    backgroundColor: '#1d1d1d',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }),

  // テキストを覆うコンテナに適用するスタイル
  textWrapper: style([opacityAnimation()]),

  // テキストに適用するスタイル
  text: style([
    {
      fontSize: '3rem',
      color: 'white',
      textShadow: '0 0 30px lightyellow',
    },
    blinkingAnimation(),
  ]),

  // リンクのコンテナに適用するスタイル
  linksWrapper: style([
    {
      display: 'flex',
      height: '20rem',
      maxHeight: '0',
      opacity: 0,
    },
    createAnimation({
      keyframe: keyframes({
        '0%': { opacity: 0, maxHeight: '0' },
        '40%': { opacity: 0, maxHeight: '20rem' },
        '100%': { opacity: 1, maxHeight: '20rem' },
      }),
      animationDelay: '2s',
      animationDuration: '5s',
    }),
  ]),
};
