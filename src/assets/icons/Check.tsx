import type { IconProps } from '@/types/components/iconProps'

export const Check: React.FC<IconProps> = props => {
  return (
    <svg
      fill="none"
      height="26"
      viewBox="0 0 32 26"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M31.1821 0.824813C31.8312 1.33959 31.9401 2.28308 31.4253 2.93215L14.1753 24.6822C13.9274 24.9947 13.5652 25.1956 13.1688 25.2405C12.7725 25.2854 12.3745 25.1706 12.063 24.9214L0.813013 15.9214C0.16612 15.4038 0.0612377 14.4599 0.578752 13.813C1.09627 13.1661 2.0402 13.0612 2.6871 13.5788L12.7608 21.6378L29.0748 1.06797C29.5896 0.418896 30.5331 0.310033 31.1821 0.824813Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}
