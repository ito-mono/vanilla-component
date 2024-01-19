import { keyframes, style } from '@vanilla-extract/css';

// 透明度のアニメーション
const opacity = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});
const opacityAnimation = style({
  animationName: opacity,
  animationDuration: '3s',
});

// 点滅のアニメーション
const blinking = keyframes({
  '0%': { textShadow: '0 0 20px lightyellow' },
  '50%': { textShadow: '0 0 40px lightyellow' },
  '100%': { textShadow: '0 0 20px lightyellow' },
});
const blinkingAnimation = style({
  animationName: blinking,
  animationDuration: '3s',
  animationIterationCount: 'infinite',
});

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
  textWrapper: style([opacityAnimation]),

  // テキストに適用するスタイル
  text: style([
    {
      fontSize: '2rem',
      color: 'white',
      textShadow: '0 0 30px lightyellow',
    },
    blinkingAnimation,
  ]),
};
