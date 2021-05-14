import {ICON_CONFIGURATION, ICON_TYPE_ADOBE} from "../../constants/social"

export default function SocialLink({type = ICON_TYPE_ADOBE, size = 35}) {
  const icon = ICON_CONFIGURATION[type];
  const IconComponent = icon.component;

  return (
    <a className="m-2 transform hover:rotate-12 transition-transform"
       href={icon.href}
       target={icon.target}
       title={icon.title}>
      <IconComponent width={size} fill={icon.color}/>
    </a>
  )
}
