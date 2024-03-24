import { InputHTMLAttributes } from "react"
import Image from "next/image"

import searchIcon from "@/images/search-icon.svg"

import { InputBase, InputLarge } from "./styles"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  iconType?: "search"
  iconPosition?: "left" | "right"
  variant?: "medium" | "large"
}

const INPUT_VARIANTS = {
  medium: InputBase,
  large: InputLarge,
}

const ICON_TYPES = {
  search: {
    src: searchIcon,
    alt: "search",
  },
}

const Input: React.FC<InputProps> = ({ iconType, iconPosition = "left", variant = "medium", ...rest }) => {
  const InputElement = INPUT_VARIANTS[variant] ?? InputBase
  const hasIcon = !!iconType
  const iconPositionIsLeft = iconPosition === "left"
  const icon = ICON_TYPES[iconType ?? "search"]

  return (
    <InputElement>
      {hasIcon && iconPositionIsLeft && <Image src={icon.src} alt={icon.alt} />}
      <input {...rest} />
      {hasIcon && !iconPositionIsLeft && <Image src={icon.src} alt={icon.alt} />}
    </InputElement>
  )
}

export default Input
