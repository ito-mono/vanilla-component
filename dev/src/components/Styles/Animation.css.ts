import { keyframes, style } from '@vanilla-extract/css';

export type AnimationProps = {
  animationDuration?: string;
  animationIterationCount?: string;
  animationDelay?: string;
  animationFillMode?: 'none' | 'forwards' | 'backwards' | 'both';
};

// 全体のデフォルト値
const defaultProps: AnimationProps = {
  animationDuration: '3s',
  animationIterationCount: '1',
  animationDelay: '0',
  animationFillMode: 'forwards',
};

/**
 * 点滅のアニメーション
 */
export function blinkingAnimation(props?: AnimationProps): string {
  // 個別のデフォルト値
  const uniqueProps: AnimationProps = {
    animationIterationCount: 'infinite',
  };
  const mergedProps = { ...defaultProps, ...uniqueProps, ...props };
  const keyframe = keyframes({
    '0%': { textShadow: '0 0 20px lightyellow' },
    '50%': { textShadow: '0 0 40px lightyellow' },
    '100%': { textShadow: '0 0 20px lightyellow' },
  });
  return style({
    animationName: keyframe,
    ...mergedProps,
  });
}

/**
 * 透明度のアニメーション
 */
export function opacityAnimation(props?: AnimationProps): string {
  const mergedProps = { ...defaultProps, ...props };
  const keyframe = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  });
  return style({
    animationName: keyframe,
    ...mergedProps,
  });
}

/**
 * 高さのアニメーション
 */
export function heightAnimation(props?: HeightAnimationProps): string {
  // 個別のデフォルト値
  const uniqueProps: HeightAnimationProps = {
    start: '0',
    end: '100%',
  };
  const mergedProps = { ...defaultProps, ...uniqueProps, ...props };
  const keyframe = keyframes({
    '0%': { maxHeight: mergedProps.start },
    '100%': { maxHeight: mergedProps.end },
  });
  return style({
    animationName: keyframe,
    ...mergedProps,
  });
}
type HeightAnimationProps = AnimationProps & { start?: string; end?: string };

/**
 * 任意のキーフレームを使用したアニメーション
 *
 * createAnimation({ keyframe: keyframes({ '0%': { opacity: 0 }, '100%': { opacity: 1 }})})
 */
export function createAnimation(props: createAnimationProps) {
  const mergedProps = { ...defaultProps, ...props };
  return style({
    animationName: mergedProps.keyframe,
    ...mergedProps,
  });
}
type createAnimationProps = AnimationProps & { keyframe: string };
