export type AnimationProps = {
    animationDuration?: string;
    animationIterationCount?: string;
    animationDelay?: string;
    animationFillMode?: 'none' | 'forwards' | 'backwards' | 'both';
};
/**
 * 点滅のアニメーション
 */
export declare function blinkingAnimation(props?: AnimationProps): string;
/**
 * 透明度のアニメーション
 */
export declare function opacityAnimation(props?: AnimationProps): string;
/**
 * 高さのアニメーション
 */
export declare function heightAnimation(props?: HeightAnimationProps): string;
type HeightAnimationProps = AnimationProps & {
    start?: string;
    end?: string;
};
/**
 * 任意のキーフレームを使用したアニメーション
 *
 * createAnimation({ keyframe: keyframes({ '0%': { opacity: 0 }, '100%': { opacity: 1 }})})
 */
export declare function createAnimation(props: createAnimationProps): string;
type createAnimationProps = AnimationProps & {
    keyframe: string;
};
export {};
