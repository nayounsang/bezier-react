import * as React from 'react'
import { SVGProps } from 'react'

function SvgHand(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.58 16.858A4.977 4.977 0 0 1 13.937 20h-.779a4.968 4.968 0 0 1-3.533-1.462l-5.5-5.495a.457.457 0 0 1-.136-.325c0-.072.017-.21.161-.354a.5.5 0 0 1 .715-.006l2.26 2.264A1.1 1.1 0 0 0 9 13.841V4.5a.5.5 0 0 1 1 0V12h2V3.504c0-.278.224-.504.5-.504s.5.226.5.504v8.497h2V4.504c0-.278.224-.504.5-.504s.5.226.5.504v7.497h2v-1.005l.007-3.526a.48.48 0 0 1 .48-.477c.281 0 .511.228.511.51L19 14.678c0 .748-.142 1.482-.42 2.18Zm2.418-9.355A2.513 2.513 0 0 0 18 5.043v-.539A2.506 2.506 0 0 0 15.5 2c-.315 0-.614.065-.892.171a2.492 2.492 0 0 0-2.108-1.17c-.888 0-1.665.468-2.108 1.17a2.474 2.474 0 0 0-.892-.17A2.503 2.503 0 0 0 7 4.5v7.165l-.719-.72a2.479 2.479 0 0 0-1.768-.735h-.005a2.524 2.524 0 0 0-1.798.765 2.447 2.447 0 0 0-.72 1.741c0 .66.256 1.277.721 1.742l5.5 5.494A6.957 6.957 0 0 0 13.158 22h.78a6.967 6.967 0 0 0 6.498-4.4A7.822 7.822 0 0 0 21 14.676l-.002-7.174Z"
      />
    </svg>
  )
}

export default SvgHand
