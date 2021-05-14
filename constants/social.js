import AdobeIcon from "../components/icons/adobe.svg"
import LinkedInIcon from "../components/icons/linkedin.svg"
import OutlookIcon from "../components/icons/outlook.svg"

export const ICON_TYPE_ADOBE = 'adobe'
export const ICON_TYPE_LINKEDIN = 'linkedin'
export const ICON_TYPE_OUTLOOK = 'outlook'

const ICON_CONFIGURATION = {};

ICON_CONFIGURATION[ICON_TYPE_ADOBE] = {
  component: AdobeIcon,
  color: "#FF0000",
  title: "Magento Marketplace",
  href: "https://marketplace.magento.com/partner/vasileuski_dzmitry",
  target: "_blank",
}

ICON_CONFIGURATION[ICON_TYPE_LINKEDIN] = {
  component: LinkedInIcon,
  color: "#0A66C2",
  title: "LinkedIn",
  href: "https://www.linkedin.com/in/vasileuski-dzmitry",
  target: "_blank",
}

ICON_CONFIGURATION[ICON_TYPE_OUTLOOK] = {
  component: OutlookIcon,
  color: "#0078D4",
  title: "Mail",
  href: "mailto:vasileuski_dzmitry@outlook.com",
  target: "_self",
}

export {ICON_CONFIGURATION}
