/* eslint-disable react/no-unknown-property */
import {createIcon} from "@chakra-ui/icons"
import { chakra } from "@chakra-ui/react"

export const CreditIcon = createIcon({
  displayName: "CreditIcon",
  viewBox: "0 0 24 24",
  path: (
    <path
      fill="currentColor"
      d="M1.406 17.023a2.461 2.461 0 002.461 2.46h14.766a2.461 2.461 0 002.46-2.46v-6.768H1.407v6.768zm2.9-3.34a1.318 1.318 0 011.319-1.318h2.11a1.318 1.318 0 011.318 1.318v.879a1.318 1.318 0 01-1.319 1.318H5.625a1.318 1.318 0 01-1.318-1.318v-.879zM18.633 4.014H3.867a2.46 2.46 0 00-2.46 2.461v1.143h19.687V6.475a2.46 2.46 0 00-2.461-2.46z"
    />
  )
})

export const MastercardIcon = createIcon({
  displayName: "MastercardIcon",
  viewBox: "0 0 35 26",
  path: (
    <svg width="35" height="26" viewBox="0 0 35 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" width="27" height="18" rx="2" className="mastercard-logo-background" />
      <path d="M15.2017 4.81709H19.7983V13.0763H15.2017V4.81709Z" fill="#FF5F00" />
      <path
        d="M15.4936 8.94668C15.4936 7.26857 16.2815 5.78016 17.4927 4.81707C16.6026 4.11664 15.479 3.69346 14.2532 3.69346C11.3494 3.69346 9 6.04282 9 8.94668C9 11.8505 11.3494 14.1999 14.2532 14.1999C15.479 14.1999 16.6026 13.7767 17.4927 13.0763C16.2815 12.1278 15.4936 10.6248 15.4936 8.94668Z"
        fill="#EB001B"
      />
      <path
        d="M26 8.94668C26 11.8505 23.6506 14.1999 20.7468 14.1999C19.521 14.1999 18.3974 13.7767 17.5073 13.0763C18.733 12.1132 19.5064 10.6248 19.5064 8.94668C19.5064 7.26857 18.7184 5.78016 17.5073 4.81707C18.3974 4.11664 19.521 3.69346 20.7468 3.69346C23.6506 3.69346 26 6.05741 26 8.94668Z"
        fill="#F79E1B"
      />
      <rect x="4.5" y="0.5" width="26" height="17" rx="1.5" stroke="white" stroke-opacity="0.2" />
    </svg>
  )
})

export const VisaIcon = createIcon({
  displayName: "VisaIcon",
  viewBox: "0 0 27 18",
  path: (
    <svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="27" height="18" rx="2" className="visa-logo-background" />
      <path
        d="M16.6781 5.48601C15.187 5.48601 13.8545 6.25887 13.8545 7.68678C13.8545 9.32432 16.2177 9.43742 16.2177 10.2601C16.2177 10.6065 15.8208 10.9165 15.1428 10.9165C14.1806 10.9165 13.4614 10.4833 13.4614 10.4833L13.1537 11.9242C13.1537 11.9242 13.9822 12.2902 15.0821 12.2902C16.7123 12.2902 17.9951 11.4794 17.9951 10.027C17.9951 8.29668 15.622 8.18694 15.622 7.42337C15.622 7.15203 15.9479 6.85472 16.6239 6.85472C17.3867 6.85472 18.009 7.16982 18.009 7.16982L18.3102 5.77813C18.3102 5.77813 17.633 5.48601 16.6781 5.48601ZM3.03611 5.59104L3 5.80111C3 5.80111 3.6273 5.91591 4.19229 6.14493C4.91975 6.40754 4.97158 6.56041 5.09409 7.03524L6.42916 12.1819H8.21882L10.9759 5.59104H9.19037L7.41876 10.0722L6.69584 6.27376C6.62954 5.83903 6.29372 5.59104 5.88266 5.59104H3.03611ZM11.6939 5.59104L10.2932 12.1819H11.9959L13.3917 5.59104H11.6939ZM21.1904 5.59104C20.7798 5.59104 20.5623 5.81086 20.4026 6.19498L17.9081 12.1819H19.6937L20.0391 11.184H22.2144L22.4245 12.1819H24L22.6255 5.59104H21.1904ZM21.4226 7.37168L21.9519 9.84487H20.5339L21.4226 7.37168Z"
        className="visa-logo-foreground"
      />
      <rect x="0.5" y="0.5" width="26" height="17" rx="1.5" stroke="black" stroke-opacity="0.2" />
    </svg>
  )
})

export const DiscoverIcon = createIcon({
  displayName: "DiscoverIcon",
  viewBox: "0 0 27 18",
  path: (
    <svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="27" height="18" rx="2" className="discover-logo-background" />
      <path d="M27 12C27 12 20.9955 16.1424 10 18H27V12Z" fill="#F48120" />
      <path
        d="M3.05339 6.95041H2V10.6406H3.05339C3.61027 10.6406 4.01284 10.5064 4.36844 10.2179C4.79114 9.86903 5.03939 9.34569 5.03939 8.80222C5.03268 7.70858 4.22083 6.95041 3.05339 6.95041ZM3.89878 9.72813C3.67066 9.92941 3.38215 10.0233 2.91249 10.0233H2.71791V7.5811H2.91249C3.37544 7.5811 3.65724 7.66161 3.89878 7.87632C4.14703 8.09773 4.29464 8.43991 4.29464 8.79551C4.29464 9.15111 4.14703 9.50672 3.89878 9.72813Z"
        className="discover-logo-foreground"
      />
      <path d="M6.08603 6.95041H5.36812V10.6406H6.08603V6.95041Z" fill="white" />
      <path
        d="M7.84393 8.3661C7.41452 8.20508 7.28704 8.09773 7.28704 7.90315C7.28704 7.66832 7.51516 7.49387 7.8238 7.49387C8.0385 7.49387 8.21966 7.5811 8.40081 7.7958L8.77654 7.30601C8.46791 7.03763 8.09889 6.89673 7.68961 6.89673C7.03879 6.89673 6.53558 7.35297 6.53558 7.95683C6.53558 8.46675 6.77041 8.72841 7.44136 8.96996C7.72316 9.0706 7.86406 9.13769 7.93786 9.17795C8.07876 9.27188 8.15256 9.40607 8.15256 9.56039C8.15256 9.86231 7.91773 10.0837 7.59568 10.0837C7.25349 10.0837 6.97841 9.90928 6.81067 9.59394L6.34772 10.0435C6.67648 10.5333 7.07905 10.748 7.62252 10.748C8.36727 10.748 8.89731 10.2515 8.89731 9.53355C8.91073 8.93641 8.66248 8.66803 7.84393 8.3661Z"
        className="discover-logo-foreground"
      />
      <path
        d="M9.13222 8.80222C9.13222 9.88916 9.98432 10.7278 11.078 10.7278C11.3866 10.7278 11.655 10.6675 11.977 10.5131V9.66775C11.6885 9.95625 11.4336 10.0703 11.1115 10.0703C10.3869 10.0703 9.87026 9.54697 9.87026 8.79551C9.87026 8.08431 10.4003 7.52742 11.078 7.52742C11.4201 7.52742 11.6818 7.6482 11.977 7.94341V7.09802C11.6617 6.93699 11.4 6.8699 11.0914 6.8699C10.0112 6.8699 9.13222 7.72871 9.13222 8.80222Z"
        className="discover-logo-foreground"
      />
      <path
        d="M17.6934 9.43291L16.7071 6.95041H15.9221L17.4854 10.7345H17.8746L19.4647 6.95041H18.6864L17.6934 9.43291Z"
        className="discover-logo-foreground"
      />
      <path
        d="M19.7935 10.6406H21.8332V10.0166H20.5114V9.02363H21.7862V8.39965H20.5114V7.5811H21.8332V6.95041H19.7935V10.6406Z"
        className="discover-logo-foreground"
      />
      <path
        d="M24.6847 8.04404C24.6847 7.35296 24.2083 6.95711 23.3763 6.95711H22.3095V10.6473H23.0275V9.16452H23.1214L24.1144 10.6473H25L23.8393 9.09072C24.3828 8.97666 24.6847 8.60764 24.6847 8.04404ZM23.2354 8.6546H23.0275V7.53412H23.2489C23.6984 7.53412 23.9399 7.72199 23.9399 8.0843C23.9399 8.45332 23.6984 8.6546 23.2354 8.6546Z"
        className="discover-logo-foreground"
      />
      <path
        d="M14.1843 10.7748C15.27 10.7748 16.1501 9.89465 16.1501 8.80892C16.1501 7.7232 15.27 6.84305 14.1843 6.84305C13.0986 6.84305 12.2184 7.7232 12.2184 8.80892C12.2184 9.89465 13.0986 10.7748 14.1843 10.7748Z"
        fill="#F48120"
      />
      <rect x="0.5" y="0.5" width="26" height="17" rx="1.5" stroke="white" stroke-opacity="0.2" />
    </svg>
  )
})

export const AmericanExpressIcon = createIcon({
  displayName: "AmericanExpressIcon",
  viewBox: "0 0 27 18",
  path: (
    <svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="27" height="18" rx="2" className="amex-logo-background" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M26.74 13.35V15.306H24.256L23.338 14.232L22.384 15.306H15.328V9.588H13L15.91 3H18.742L19.426 4.494V3H22.942L23.53 4.566L24.106 3H26.74V3.92999H24.706L23.782 6.36601L23.536 7.02599L22.354 3.92999H20.32V8.72998L18.208 3.92999H16.57L14.446 8.72998H15.838L16.21 7.806H18.538L18.91 8.72998H20.32H21.544V5.604L21.538 4.97399L21.778 5.604L22.948 8.72998H24.112L25.288 5.604L25.516 4.98V8.72998H26.74V10.608L25.384 11.97L26.74 13.35ZM16.312 14.376V9.59397H20.32V10.632H17.536V11.472H20.266V12.504H17.536V13.338H20.32V14.376H16.312ZM26.368 14.376H24.778L23.326 12.816L21.868 14.376H20.32L22.558 11.994L20.32 9.59397H21.916L23.356 11.148L24.802 9.59397H26.368L24.124 11.976L26.368 14.376Z"
        className="amex-logo-foreground"
      />
      <path
        d="M17.374 4.95599L17.134 5.55601L16.636 6.76798H18.112L17.614 5.55601L17.374 4.95599Z"
        className="amex-logo-foreground"
      />
      <rect x="0.5" y="0.5" width="26" height="17" rx="1.5" stroke="black" stroke-opacity="0.2" />
    </svg>
  )
})

export const MyCommerceIcon = createIcon({
  displayName: "MyCommerceIcon",
  viewBox: "0 0 1259.2 328.32",
  defaultProps: {
    height: "80%",
    width: "auto",
    padding: 2
  },
  path: [
    <chakra.path
      key="1"
      className="my-commerce-icon_accent"
      d="m349.51,111.07h-60.82l-7.42,50.61c-2,13.66-14.7,23.11-28.36,21.11l-107.51-15.76c-13.66-2-23.11-14.7-21.11-28.36l4.05-27.6h-14.76c-4.32,0-7.52,4.02-6.56,8.23l22.58,110.81c.7,3.05,3.42,5.22,6.56,5.22h183.63c2.96,0,5.58-1.94,6.44-4.78l29.73-110.81c1.31-4.32-1.93-8.67-6.44-8.67Z"
    />,
    <chakra.path
      key="2"
      className="my-commerce-icon_primary"
      d="m294.44,71.86c4.01-27.32-14.9-52.72-42.22-56.72L169.44,3c-13.66-2-26.36,7.45-28.36,21.11l-12.75,86.97h160.36l5.75-39.22Z"
    />,
    <chakra.path
      key="3"
      className="my-commerce-icon_accent"
      d="m145.4,167.03l107.51,15.76c13.66,2,26.36-7.45,28.36-21.11l7.42-50.61h-160.36l-4.05,27.6c-2,13.66,7.45,26.36,21.11,28.36Z"
    />,
    <chakra.path
      key="4"
      className="my-commerce-icon_primary-alt"
      d="m145.4,167.03l107.51,15.76c13.66,2,26.36-7.45,28.36-21.11l7.42-50.61h-160.36l-4.05,27.6c-2,13.66,7.45,26.36,21.11,28.36Z"
    />,
    <chakra.circle
      key="5"
      className="my-commerce-icon_accent"
      cx="151.32"
      cy="299.87"
      r="27.89"
      transform="translate(-167.72 194.83) rotate(-45)"
    />,

    <chakra.circle
      key="6"
      className="my-commerce-icon_accent"
      cx="302.26"
      cy="299.87"
      r="27.89"
      transform="translate(-91.75 138.49) rotate(-22.5)"
    />,

    <chakra.path
      key="7"
      className="my-commerce-icon_dark"
      d="m108.58,221.58h193.68c4.53,0,8.49-3.04,9.66-7.42l32.8-122.64c.8-3,.17-6.21-1.73-8.67-1.89-2.46-4.82-3.91-7.93-3.91H81.09l-10.54-39.41c-.65-2.43-2.19-4.53-4.32-5.87L15.34,1.55C10.67-1.4,4.49,0,1.54,4.67-1.4,9.34,0,15.51,4.66,18.46l47.58,30.03,11.51,43.04,30.88,115.43-14.67,10.39c-2.65,1.88-4.22,4.92-4.22,8.16v28.95c0,5.52,4.48,10,10,10h37.17c-14.83,2.89-26.06,15.97-26.06,31.63,0,17.77,14.46,32.23,32.23,32.23s32.23-14.46,32.23-32.23c0-15.66-11.23-28.74-26.06-31.63h137.22c-14.83,2.89-26.06,15.97-26.06,31.63,0,17.77,14.46,32.23,32.23,32.23s32.23-14.46,32.23-32.23c0-15.66-11.23-28.74-26.06-31.63h40.79c5.52,0,10-4.48,10-10s-4.48-10-10-10H95.74v-13.78l12.84-9.09Zm32.74,74.5c0,6.75-5.49,12.23-12.23,12.23s-12.23-5.49-12.23-12.23,5.49-12.23,12.23-12.23,12.23,5.49,12.23,12.23Zm149.57,0c0,6.75-5.49,12.23-12.23,12.23s-12.23-5.49-12.23-12.23,5.49-12.23,12.23-12.23,12.23,5.49,12.23,12.23Zm31.14-197.15l-27.45,102.64H113.9l-27.46-102.64h235.59Z"
    />,
    <chakra.path
      key="8"
      className="my-commerce-icon_primary"
      d="m865,219.04c.05.82,1.04,1.16,1.61.57.34-.35.71-.66,1.12-.94,1.09-.74,2.41-1.11,3.95-1.11.8,0,1.52.09,2.16.27.64.18,1.19.46,1.65.84.36.28.68.62.96,1.01.28.39.52.84.72,1.34.28-.46.6-.89.96-1.29.36-.4.75-.74,1.17-1.02.54-.36,1.15-.64,1.82-.84.67-.2,1.41-.3,2.21-.3,1.04,0,2,.18,2.87.53.87.35,1.63.89,2.27,1.61.64.76,1.14,1.75,1.49,2.96.35,1.21.53,2.67.53,4.37v22.73c0,.51-.42.93-.93.93h-4.75c-.51,0-.93-.42-.93-.93v-22.79c0-.64-.07-1.19-.21-1.64-.14-.45-.34-.82-.6-1.1-.26-.26-.58-.45-.95-.57-.37-.12-.78-.18-1.22-.18s-.86.06-1.2.18c-.34.12-.64.29-.9.51-.24.2-.44.44-.6.71-.16.27-.28.58-.36.92v23.96c0,.51-.42.93-.93.93h-4.63c-.51,0-.93-.42-.93-.93v-22.82c0-.64-.07-1.19-.2-1.64s-.33-.81-.59-1.07c-.26-.26-.57-.45-.92-.57s-.75-.18-1.19-.18c-.48,0-.91.07-1.28.2-.37.13-.69.33-.95.59-.2.18-.38.39-.53.63s-.29.51-.41.81v24.05c0,.51-.42.93-.93.93h-4.75c-.51,0-.93-.42-.93-.93v-30.67c0-.51.42-.93.93-.93h4.44c.49,0,.9.38.93.88h0Zm53.06,30.2c-.01-.06-.03-.11-.04-.17-.15-.67-.95-.98-1.48-.54-.17.14-.34.27-.52.41-.63.47-1.34.88-2.12,1.22-.78.36-1.62.64-2.53.84-.9.2-1.87.3-2.92.3-1.68,0-3.22-.25-4.62-.74-1.39-.49-2.58-1.17-3.56-2.03-1-.84-1.78-1.86-2.33-3.05-.55-1.19-.83-2.48-.83-3.86,0-1.78.36-3.36,1.07-4.74.71-1.37,1.75-2.51,3.11-3.41,1.26-.84,2.82-1.48,4.68-1.92,1.85-.44,3.95-.66,6.3-.66h4.3c.51,0,.93-.42.93-.93v-1.26c0-.84-.15-1.6-.44-2.29-.29-.68-.71-1.27-1.25-1.77-.58-.5-1.29-.89-2.12-1.16s-1.79-.41-2.87-.41c-.98,0-1.84.12-2.57.36s-1.34.57-1.82.99c-.48.38-.84.85-1.07,1.4-.13.31-.22.63-.28.96-.08.46-.46.8-.92.8h-5.35c-.56,0-1.01-.5-.93-1.05.13-.93.41-1.83.85-2.71.6-1.2,1.48-2.26,2.65-3.19,1.12-.94,2.51-1.69,4.16-2.24,1.65-.55,3.54-.83,5.67-.83,1.9,0,3.68.24,5.34.71,1.65.47,3.08,1.17,4.29,2.09,1.2.92,2.14,2.09,2.83,3.5.68,1.41,1.02,3.04,1.02,4.89v14.46c0,1.46.1,2.78.32,3.95s.52,2.18.92,3.02v.51h-6.73c-.39,0-.74-.24-.88-.61-.1-.26-.18-.54-.25-.85Zm-5.59-4.07c.81-.24,1.55-.55,2.21-.93.66-.38,1.23-.81,1.71-1.29.42-.42.75-.85,1-1.29.08-.14.11-.3.11-.45v-4.84c0-.51-.42-.93-.93-.93h-3.7c-1.56,0-2.92.15-4.06.44s-2.06.71-2.74,1.25c-.6.46-1.05,1.01-1.34,1.65-.29.64-.44,1.36-.44,2.16,0,.66.12,1.28.36,1.85s.59,1.06,1.05,1.46c.46.4,1.03.72,1.71.95.68.23,1.48.35,2.41.35s1.82-.12,2.63-.36Zm48.17-27.36c.68.1,1.28.21,1.78.34.46.11.75.57.68,1.03l-.77,5.32c-.08.53-.58.88-1.11.78-.77-.15-1.54-.26-2.3-.35-1.07-.12-2.14-.18-3.2-.18-1.2,0-2.29.12-3.25.36s-1.81.61-2.56,1.11c-.8.48-1.48,1.09-2.04,1.83-.53.7-.97,1.49-1.34,2.38-.05.12-.07.25-.07.37v18.96c0,.51-.42.93-.93.93h-5.32c-.51,0-.93-.42-.93-.93v-30.67c0-.51.42-.93.93-.93h4.93c.49,0,.9.38.93.87l.24,3.64.03.75c1.32-1.82,2.91-3.26,4.77-4.3,1.85-1.04,3.9-1.56,6.15-1.56,1.16,0,2.29.08,3.38.24Zm18.36,22.83v9.13c0,.51-.42.93-.93.93h-5.35c-.51,0-.93-.42-.93-.93v-44.32c0-.51.42-.93.93-.93h5.35c.51,0,.93.42.93.93v23.82c0,.85,1.05,1.26,1.63.62l1.35-1.5,9.44-9.93c.18-.19.42-.29.68-.29h6.11c.82,0,1.24.97.68,1.57l-10.66,11.42c-.31.33-.34.84-.06,1.2l12.87,16.85c.47.61.03,1.5-.74,1.5h-6.54c-.3,0-.58-.14-.75-.38l-9.47-12.93c-.33-.45-.99-.51-1.39-.13l-2.85,2.7c-.19.18-.29.42-.29.68Zm38.26,9.46c-1.99-.8-3.7-1.91-5.13-3.34-1.42-1.4-2.52-3.06-3.29-4.98-.77-1.91-1.16-3.98-1.16-6.21v-1.23c0-2.55.4-4.85,1.2-6.92.8-2.06,1.9-3.83,3.31-5.29,1.4-1.46,3.03-2.59,4.89-3.38,1.85-.79,3.83-1.19,5.94-1.19,2.35,0,4.42.4,6.22,1.19,1.8.79,3.32,1.89,4.54,3.29,1.22,1.42,2.14,3.12,2.77,5.08.62,1.97.93,4.11.93,6.43v2.16c0,.51-.42.93-.93.93h-21.62v.15c.22,1.42.56,2.62,1.02,3.58.46.96,1.09,1.82,1.89,2.59.8.8,1.75,1.42,2.84,1.86,1.09.44,2.29.66,3.59.66,1.78,0,3.45-.35,4.99-1.04,1.25-.56,2.32-1.31,3.21-2.25.35-.37.95-.38,1.32-.03l2.55,2.47c.35.34.38.9.06,1.28-1.07,1.28-2.55,2.45-4.44,3.51-2.24,1.24-4.94,1.86-8.1,1.86-2.41,0-4.61-.4-6.6-1.2Zm2.89-26.14c-.87.37-1.65.9-2.33,1.58-.68.7-1.25,1.54-1.71,2.53-.31.67-.57,1.39-.77,2.17-.15.59.3,1.16.91,1.16h14.15s0-.48,0-.48c0-.94-.17-1.88-.51-2.81-.34-.93-.82-1.75-1.44-2.45-.6-.68-1.36-1.23-2.27-1.64-.91-.41-1.97-.62-3.17-.62-1.02,0-1.97.19-2.84.56Zm40.85-5.79h10.37c.51,0,.93.42.93.93v3.52c0,.51-.42.93-.93.93h-10.37c-.51,0-.93.42-.93.93v14.61c0,1.2.14,2.21.44,3.02s.7,1.45,1.22,1.91c.52.48,1.14.82,1.86,1.02.72.2,1.51.3,2.38.3.62,0,1.26-.03,1.92-.09s1.3-.14,1.92-.24c.6-.08,1.17-.18,1.7-.29.13-.03.26-.05.38-.08.52-.11,1.02.24,1.11.77l.53,3.33c.06.41-.14.81-.51.99s-.8.35-1.26.49c-.73.23-1.52.43-2.36.59s-1.72.29-2.63.38c-.91.09-1.82.14-2.72.14-1.64,0-3.15-.23-4.53-.68-1.37-.45-2.55-1.16-3.53-2.12-.98-.94-1.75-2.15-2.3-3.64-.55-1.48-.83-3.27-.83-5.35v-15.06c0-.51-.42-.93-.93-.93h-6.01c-.51,0-.93-.42-.93-.93v-3.52c0-.51.42-.93.93-.93h6.01c.51,0,.93-.42.93-.93v-6.07c0-.51.42-.93.93-.93h5.35c.51,0,.93.42.93.93v6.07c0,.51.42.93.93.93Zm22.58,0h4.82c.49,0,.89.37.93.86l.04.44c.06.76.95,1.13,1.53.63l.08-.06c.52-.44,1.08-.82,1.68-1.14.78-.42,1.64-.75,2.57-.98.93-.23,1.94-.35,3.02-.35,2.08,0,3.92.4,5.52,1.2,1.59.8,2.93,1.93,4.01,3.4,1.08,1.46,1.9,3.21,2.45,5.25.55,2.03.83,4.27.83,6.72v.63c0,2.35-.28,4.53-.83,6.55-.55,2.03-1.37,3.77-2.45,5.23-1.08,1.48-2.42,2.65-4,3.49-1.58.84-3.4,1.26-5.44,1.26-1.16,0-2.23-.12-3.2-.36s-1.87-.59-2.69-1.05c-.48-.28-.94-.6-1.38-.96-.44-.36-.85-.75-1.23-1.17v14.52c0,.51-.42.93-.93.93h-5.32c-.51,0-.93-.42-.93-.93v-43.18c0-.51.42-.93.93-.93Zm19.86,11.83c-.29-1.29-.74-2.42-1.34-3.38-.62-.96-1.41-1.72-2.38-2.29-.96-.56-2.12-.84-3.46-.84-.74,0-1.43.08-2.07.24-.64.16-1.21.39-1.71.69-.58.32-1.09.72-1.52,1.2-.38.42-.71.89-1.01,1.4-.08.14-.12.31-.12.47v13.97c0,.16.04.31.11.45.26.48.56.93.91,1.34.4.47.86.87,1.38,1.19.54.32,1.15.58,1.83.77.68.19,1.44.29,2.29.29,1.32,0,2.46-.29,3.41-.86.95-.57,1.74-1.35,2.36-2.33.6-1,1.04-2.15,1.32-3.44.28-1.29.42-2.66.42-4.1v-.63c0-1.46-.15-2.84-.44-4.13Zm35.01-24.55v38.37c0,.51.42.93.93.93h8c.51,0,.93.42.93.93v4.09c0,.51-.42.93-.93.93h-25.53c-.51,0-.93-.42-.93-.93v-4.09c0-.51.42-.93.93-.93h8.42c.51,0,.93-.42.93-.93v-32.38c0-.51-.42-.93-.93-.93h-8.42c-.51,0-.93-.42-.93-.93v-4.12c0-.51.42-.93.93-.93h15.67c.51,0,.93.42.93.93Zm38.29,43.79c-.01-.06-.03-.11-.04-.17-.15-.67-.95-.98-1.48-.54-.17.14-.34.27-.52.41-.63.47-1.34.88-2.12,1.22-.78.36-1.62.64-2.53.84-.9.2-1.87.3-2.92.3-1.68,0-3.22-.25-4.62-.74-1.39-.49-2.58-1.17-3.56-2.03-1-.84-1.78-1.86-2.33-3.05-.55-1.19-.83-2.48-.83-3.86,0-1.78.36-3.36,1.07-4.74.71-1.37,1.75-2.51,3.11-3.41,1.26-.84,2.82-1.48,4.68-1.92,1.85-.44,3.95-.66,6.3-.66h4.3c.51,0,.93-.42.93-.93v-1.26c0-.84-.15-1.6-.44-2.29-.29-.68-.71-1.27-1.25-1.77-.58-.5-1.29-.89-2.12-1.16s-1.79-.41-2.87-.41c-.98,0-1.84.12-2.57.36s-1.34.57-1.82.99c-.48.38-.84.85-1.07,1.4-.13.31-.22.63-.28.96-.08.46-.46.8-.92.8h-5.35c-.56,0-1.01-.5-.93-1.05.13-.93.41-1.83.85-2.71.6-1.2,1.48-2.26,2.65-3.19,1.12-.94,2.51-1.69,4.16-2.24,1.65-.55,3.54-.83,5.67-.83,1.9,0,3.68.24,5.34.71,1.65.47,3.08,1.17,4.29,2.09,1.2.92,2.14,2.09,2.83,3.5.68,1.41,1.02,3.04,1.02,4.89v14.46c0,1.46.1,2.78.32,3.95s.52,2.18.92,3.02v.51h-6.73c-.39,0-.74-.24-.88-.61-.1-.26-.18-.54-.25-.85Zm-5.59-4.07c.81-.24,1.55-.55,2.21-.93.66-.38,1.23-.81,1.71-1.29.42-.42.75-.85,1-1.29.08-.14.11-.3.11-.45v-4.84c0-.51-.42-.93-.93-.93h-3.7c-1.56,0-2.92.15-4.06.44s-2.06.71-2.74,1.25c-.6.46-1.05,1.01-1.34,1.65-.29.64-.44,1.36-.44,2.16,0,.66.12,1.28.36,1.85s.59,1.06,1.05,1.46c.46.4,1.03.72,1.71.95.68.23,1.48.35,2.41.35s1.82-.12,2.63-.36Zm39.06-.04c.83-.27,1.57-.66,2.21-1.16.62-.5,1.12-1.09,1.49-1.77.25-.45.41-.94.49-1.45.07-.46.45-.8.92-.8h4.93c.55,0,.99.48.93,1.04-.11,1.2-.46,2.34-1.03,3.43-.73,1.39-1.72,2.59-2.96,3.59-1.26,1.04-2.71,1.86-4.35,2.45-1.63.59-3.35.89-5.16.89-2.51,0-4.7-.44-6.57-1.31-1.87-.87-3.43-2.05-4.68-3.53-1.26-1.48-2.22-3.21-2.86-5.19-.64-1.97-.96-4.08-.96-6.33v-1.05c0-2.23.32-4.33.95-6.31s1.58-3.72,2.84-5.2c1.26-1.48,2.83-2.66,4.71-3.53s4.05-1.31,6.54-1.31c1.96,0,3.78.3,5.46.9,1.67.6,3.11,1.44,4.32,2.53s2.14,2.38,2.81,3.88c.54,1.22.86,2.53.95,3.95.04.55-.38,1.02-.93,1.02h-4.94c-.46,0-.86-.34-.92-.8-.07-.59-.22-1.16-.45-1.7-.33-.78-.8-1.46-1.4-2.04-.62-.58-1.36-1.04-2.21-1.38-.85-.34-1.77-.51-2.75-.51-1.5,0-2.75.31-3.74.92-.99.61-1.78,1.41-2.36,2.39-.62.98-1.06,2.1-1.31,3.37s-.38,2.55-.38,3.85v1.05c0,1.32.13,2.62.38,3.89s.68,2.39,1.28,3.35c.58,1,1.37,1.8,2.38,2.41,1,.6,2.26.9,3.76.9.9,0,1.77-.13,2.6-.41Zm28.77,4.98c-1.99-.8-3.7-1.91-5.13-3.34-1.42-1.4-2.52-3.06-3.29-4.98-.77-1.91-1.16-3.98-1.16-6.21v-1.23c0-2.55.4-4.85,1.2-6.92.8-2.06,1.9-3.83,3.31-5.29,1.4-1.46,3.03-2.59,4.89-3.38,1.85-.79,3.83-1.19,5.94-1.19,2.35,0,4.42.4,6.22,1.19,1.8.79,3.32,1.89,4.54,3.29,1.22,1.42,2.14,3.12,2.77,5.08.62,1.97.93,4.11.93,6.43v2.16c0,.51-.42.93-.93.93h-21.62v.15c.22,1.42.56,2.62,1.02,3.58.46.96,1.09,1.82,1.89,2.59.8.8,1.75,1.42,2.84,1.86,1.09.44,2.29.66,3.59.66,1.78,0,3.45-.35,4.99-1.04,1.25-.56,2.32-1.31,3.21-2.25.35-.37.95-.38,1.32-.03l2.55,2.47c.35.34.38.9.06,1.28-1.07,1.28-2.55,2.45-4.44,3.51-2.24,1.24-4.94,1.86-8.1,1.86-2.41,0-4.61-.4-6.6-1.2Zm2.89-26.14c-.87.37-1.65.9-2.33,1.58-.68.7-1.25,1.54-1.71,2.53-.31.67-.57,1.39-.77,2.17-.15.59.3,1.16.91,1.16h14.15s0-.48,0-.48c0-.94-.17-1.88-.51-2.81-.34-.93-.82-1.75-1.44-2.45-.6-.68-1.36-1.23-2.27-1.64-.91-.41-1.97-.62-3.17-.62-1.02,0-1.97.19-2.84.56Z"
    />,
    <chakra.path
      key="9"
      className="my-commerce-icon_dark"
      d="m470.06,110.11c.11,1.74,2.24,2.41,3.39,1.11.72-.82,1.52-1.54,2.38-2.18,2.3-1.71,5.09-2.56,8.38-2.56,1.6,0,3.04.19,4.3.57s2.36.97,3.29,1.77c.72.59,1.34,1.3,1.87,2.12l.05.08c.71,1.1,2.26,1.19,3.12.2.06-.07.12-.14.19-.21.74-.82,1.55-1.53,2.44-2.12,1.1-.76,2.34-1.35,3.73-1.77,1.39-.42,2.91-.63,4.56-.63,2.07,0,4,.38,5.79,1.14,1.79.76,3.36,1.96,4.71,3.61,1.31,1.69,2.33,3.85,3.07,6.49.74,2.64,1.11,5.85,1.11,9.65v46.91c0,1.07-.87,1.94-1.94,1.94h-12.13c-1.07,0-1.94-.87-1.94-1.94v-46.98c0-1.31-.14-2.38-.41-3.23-.27-.84-.64-1.52-1.11-2.02-.46-.46-1-.79-1.61-.98-.61-.19-1.23-.28-1.87-.28-.68,0-1.28.08-1.8.25-.47.15-.92.35-1.34.61-.1.06-.19.12-.28.19-.33.27-.62.56-.88.88-.3.36-.55.77-.76,1.23v50.33c0,1.07-.87,1.94-1.94,1.94h-11.62c-1.07,0-1.94-.87-1.94-1.94v-47.04c0-1.31-.13-2.38-.38-3.23s-.59-1.5-1.01-1.96c-.46-.46-.99-.79-1.58-.98-.59-.19-1.22-.28-1.9-.28-.76,0-1.44.13-2.03.38-.59.25-1.12.61-1.58,1.08-.34.34-.63.74-.89,1.2-.2.36-.38.74-.55,1.15-.1.24-.15.5-.15.76v48.93c0,1.07-.87,1.94-1.94,1.94h-12.13c-1.07,0-1.94-.87-1.94-1.94v-64.59c0-1.07.87-1.94,1.94-1.94h11.35c1.03,0,1.88.8,1.94,1.82l.03.55Zm73.11,93.44c-.75-.13-1.55-.29-2.4-.5-.99-.24-1.63-1.2-1.47-2.2l1.6-9.99c.16-.97,1.01-1.68,1.99-1.63.32.01.67.03,1.03.05,1.12.06,2.01.09,2.69.09,1.39,0,2.63-.43,3.7-1.3,1.08-.87,1.99-1.8,2.75-2.82.76-1.01,1.32-1.77,1.68-2.28s.79-1.22,1.3-2.15l3.6-6.69c.28-.53.31-1.16.07-1.71l-27.39-61.97c-.57-1.28.37-2.73,1.78-2.73h14.93c.8,0,1.52.49,1.81,1.24l15.17,38.79c.03.06.05.13.07.2l.3,1.1c.5,1.82,3.02,1.94,3.69.18l.47-1.25,15.15-39.01c.29-.75,1.01-1.24,1.81-1.24h15.12c1.4,0,2.34,1.44,1.78,2.73l-33.54,76c-.76,1.73-1.74,3.61-2.94,5.63-1.2,2.03-2.71,3.9-4.52,5.63-1.81,1.73-4.02,3.19-6.61,4.37-2.59,1.18-5.66,1.77-9.21,1.77-1.69,0-3.15-.11-4.4-.32Zm144.38-40.88c1.56-.51,2.93-1.22,4.11-2.15,1.18-.93,2.1-2.05,2.75-3.35.11-.22.21-.44.3-.67.9-2.29,3.23-3.7,5.7-3.7h4.42c4.23,0,7.16,4.27,5.59,8.2-.22.56-.48,1.12-.75,1.67-1.54,3.04-3.64,5.65-6.3,7.85-2.66,2.19-5.75,3.91-9.27,5.16s-7.25,1.87-11.17,1.87c-5.32,0-9.98-.9-13.99-2.69-4.01-1.79-7.34-4.25-10-7.37-2.7-3.12-4.74-6.78-6.11-10.98s-2.06-8.7-2.06-13.51v-1.9c0-4.81.67-9.31,2.03-13.51,1.35-4.2,3.38-7.86,6.08-10.98,2.7-3.12,6.04-5.59,10.03-7.4,3.99-1.81,8.62-2.72,13.89-2.72,4.22,0,8.12.63,11.71,1.9,3.58,1.27,6.69,3.04,9.3,5.32,2.57,2.32,4.58,5.12,6.01,8.38.5,1.15.92,2.35,1.23,3.6.95,3.75-1.97,7.38-5.84,7.38h-4.75c-2.56,0-4.93-1.59-5.69-4.04-.08-.26-.17-.51-.27-.77-.59-1.52-1.46-2.83-2.59-3.92-1.14-1.1-2.51-1.97-4.11-2.63-1.6-.65-3.35-.98-5.25-.98-2.79,0-5.08.57-6.9,1.71-1.81,1.14-3.25,2.66-4.3,4.56-1.1,1.9-1.87,4.07-2.31,6.52-.44,2.45-.66,4.98-.66,7.59v1.9c0,2.66.21,5.22.63,7.69.42,2.47,1.18,4.63,2.28,6.49,1.05,1.9,2.5,3.42,4.33,4.56,1.83,1.14,4.17,1.71,6.99,1.71,1.73,0,3.38-.25,4.94-.76Zm42.27-35.16c1.43-4.24,3.54-7.92,6.33-11.04,2.74-3.12,6.11-5.57,10.09-7.34,3.99-1.77,8.55-2.66,13.7-2.66s9.72.89,13.73,2.66c4.01,1.77,7.4,4.22,10.19,7.34,2.74,3.12,4.83,6.8,6.26,11.04s2.15,8.85,2.15,13.83v1.33c0,5.02-.72,9.65-2.15,13.89s-3.52,7.92-6.26,11.04c-2.74,3.12-6.12,5.56-10.13,7.31-4.01,1.75-8.57,2.63-13.67,2.63s-9.74-.88-13.76-2.63c-4.03-1.75-7.42-4.19-10.16-7.31-2.79-3.12-4.9-6.8-6.33-11.04-1.43-4.24-2.15-8.87-2.15-13.89v-1.33c0-4.98.72-9.59,2.15-13.83Zm16.26,23.23c.55,2.51,1.41,4.69,2.59,6.55,1.18,1.9,2.71,3.4,4.59,4.49,1.88,1.1,4.15,1.65,6.8,1.65s4.79-.55,6.65-1.65c1.86-1.1,3.38-2.59,4.56-4.49,1.14-1.86,1.98-4.04,2.53-6.55.55-2.51.82-5.2.82-8.07v-1.33c0-2.78-.27-5.42-.82-7.91-.55-2.49-1.39-4.68-2.53-6.58-1.18-1.9-2.7-3.4-4.56-4.49-1.86-1.1-4.11-1.65-6.77-1.65s-4.85.55-6.71,1.65c-1.86,1.1-3.38,2.59-4.56,4.49-1.18,1.9-2.05,4.09-2.59,6.58-.55,2.49-.82,5.13-.82,7.91v1.33c0,2.87.27,5.56.82,8.07Zm72.86-40.63c.11,1.74,2.24,2.41,3.39,1.11.72-.82,1.52-1.54,2.38-2.18,2.3-1.71,5.09-2.56,8.38-2.56,1.6,0,3.04.19,4.3.57s2.36.97,3.29,1.77c.72.59,1.34,1.3,1.87,2.12l.05.08c.71,1.1,2.26,1.19,3.12.2.06-.07.12-.14.19-.21.74-.82,1.55-1.53,2.44-2.12,1.1-.76,2.34-1.35,3.73-1.77,1.39-.42,2.91-.63,4.56-.63,2.07,0,4,.38,5.79,1.14,1.79.76,3.36,1.96,4.71,3.61,1.31,1.69,2.33,3.85,3.07,6.49.74,2.64,1.11,5.85,1.11,9.65v46.91c0,1.07-.87,1.94-1.94,1.94h-12.13c-1.07,0-1.94-.87-1.94-1.94v-46.98c0-1.31-.14-2.38-.41-3.23-.27-.84-.64-1.52-1.11-2.02-.46-.46-1-.79-1.61-.98-.61-.19-1.23-.28-1.87-.28-.68,0-1.28.08-1.8.25-.47.15-.92.35-1.34.61-.1.06-.19.12-.28.19-.33.27-.62.56-.88.88-.3.36-.55.77-.76,1.23v50.33c0,1.07-.87,1.94-1.94,1.94h-11.62c-1.07,0-1.94-.87-1.94-1.94v-47.04c0-1.31-.13-2.38-.38-3.23s-.59-1.5-1.01-1.96c-.46-.46-.99-.79-1.58-.98-.59-.19-1.22-.28-1.9-.28-.76,0-1.44.13-2.03.38-.59.25-1.12.61-1.58,1.08-.34.34-.63.74-.89,1.2-.2.36-.38.74-.55,1.15-.1.24-.15.5-.15.76v48.93c0,1.07-.87,1.94-1.94,1.94h-12.13c-1.07,0-1.94-.87-1.94-1.94v-64.59c0-1.07.87-1.94,1.94-1.94h11.35c1.03,0,1.88.8,1.94,1.82l.03.55Zm77.78,0c.11,1.74,2.24,2.41,3.39,1.11.72-.82,1.52-1.54,2.38-2.18,2.3-1.71,5.09-2.56,8.38-2.56,1.6,0,3.04.19,4.3.57s2.36.97,3.29,1.77c.72.59,1.34,1.3,1.87,2.12l.05.08c.71,1.1,2.26,1.19,3.12.2.06-.07.12-.14.19-.21.74-.82,1.55-1.53,2.44-2.12,1.1-.76,2.34-1.35,3.73-1.77,1.39-.42,2.91-.63,4.56-.63,2.07,0,4,.38,5.79,1.14,1.79.76,3.36,1.96,4.71,3.61,1.31,1.69,2.33,3.85,3.07,6.49.74,2.64,1.11,5.85,1.11,9.65v46.91c0,1.07-.87,1.94-1.94,1.94h-12.13c-1.07,0-1.94-.87-1.94-1.94v-46.98c0-1.31-.14-2.38-.41-3.23-.27-.84-.64-1.52-1.11-2.02-.46-.46-1-.79-1.61-.98-.61-.19-1.23-.28-1.87-.28-.68,0-1.28.08-1.8.25-.47.15-.92.35-1.34.61-.1.06-.19.12-.28.19-.33.27-.62.56-.88.88-.3.36-.55.77-.76,1.23v50.33c0,1.07-.87,1.94-1.94,1.94h-11.62c-1.07,0-1.94-.87-1.94-1.94v-47.04c0-1.31-.13-2.38-.38-3.23s-.59-1.5-1.01-1.96c-.46-.46-.99-.79-1.58-.98-.59-.19-1.22-.28-1.9-.28-.76,0-1.44.13-2.03.38-.59.25-1.12.61-1.58,1.08-.34.34-.63.74-.89,1.2-.2.36-.38.74-.55,1.15-.1.24-.15.5-.15.76v48.93c0,1.07-.87,1.94-1.94,1.94h-12.13c-1.07,0-1.94-.87-1.94-1.94v-64.59c0-1.07.87-1.94,1.94-1.94h11.35c1.03,0,1.88.8,1.94,1.82l.03.55Zm85.54,64.77c-4.3-1.73-8-4.09-11.08-7.09-3.08-2.95-5.45-6.44-7.12-10.47-1.67-4.03-2.5-8.34-2.5-12.94v-2.53c0-5.23.82-10.01,2.47-14.33,1.65-4.32,3.95-8.05,6.9-11.17,2.95-3.12,6.46-5.55,10.51-7.28,4.05-1.73,8.46-2.59,13.23-2.59s9.33.81,13.19,2.44c3.86,1.62,7.14,3.91,9.84,6.87,2.66,2.95,4.68,6.51,6.08,10.66,1.39,4.16,2.09,8.74,2.09,13.76v5.52c0,1.07-.87,1.94-1.94,1.94h-44.51v.19c.59,2.74,1.35,4.95,2.28,6.61.93,1.67,2.17,3.17,3.73,4.52,1.6,1.39,3.44,2.47,5.51,3.23,2.07.76,4.32,1.14,6.77,1.14,3.46,0,6.81-.65,10.06-1.96,2.56-1.03,4.73-2.46,6.53-4.3.79-.81,2.08-.83,2.85,0l6.2,6.7c.66.72.71,1.82.08,2.56-2.24,2.64-5.43,5.05-9.58,7.26-4.85,2.57-10.59,3.86-17.21,3.86-5.27,0-10.06-.87-14.37-2.59Zm6.83-53.13c-1.65.7-3.08,1.7-4.3,3.01-1.27,1.31-2.32,2.87-3.16,4.68-.53,1.13-.97,2.35-1.33,3.64-.34,1.22.61,2.43,1.88,2.43h26.41s0-1.39,0-1.39c0-1.86-.34-3.61-1.01-5.25-.68-1.65-1.6-3.08-2.79-4.3-1.18-1.18-2.63-2.12-4.33-2.82s-3.68-1.04-5.92-1.04c-1.98,0-3.8.35-5.44,1.04Zm108.63-14.75c.49.08.96.16,1.41.24,2.29.41,3.82,2.57,3.48,4.87l-1.35,9.13c-.35,2.37-2.57,4-4.93,3.62-.94-.15-1.89-.28-2.85-.39-2.43-.27-4.74-.41-6.93-.41s-4.33.2-6.17.6c-1.83.4-3.47,1-4.9,1.8-1.73.93-3.21,2.11-4.43,3.54-1.04,1.22-1.93,2.63-2.67,4.22-.25.55-.37,1.16-.37,1.76v35.91c0,2.38-1.93,4.31-4.31,4.31h-8.97c-2.38,0-4.31-1.93-4.31-4.31v-59.86c0-2.38,1.93-4.31,4.31-4.31h8.07c2.26,0,4.14,1.75,4.3,4l.41,5.68.13,1.52c2.79-3.88,6.12-6.93,10-9.14s8.12-3.32,12.72-3.32c2.66,0,5.12.18,7.37.54Zm56.48,55.66c1.56-.51,2.93-1.22,4.11-2.15,1.18-.93,2.1-2.05,2.75-3.35.22-.44.4-.89.53-1.36.53-1.83,2.3-3.01,4.2-3.01h7.99c2.7,0,4.82,2.47,4.24,5.11-.36,1.65-.93,3.24-1.7,4.76-1.54,3.04-3.64,5.65-6.3,7.85-2.66,2.19-5.75,3.91-9.27,5.16s-7.25,1.87-11.17,1.87c-5.32,0-9.98-.9-13.99-2.69-4.01-1.79-7.34-4.25-10-7.37-2.7-3.12-4.74-6.78-6.11-10.98s-2.06-8.7-2.06-13.51v-1.9c0-4.81.67-9.31,2.03-13.51,1.35-4.2,3.38-7.86,6.08-10.98,2.7-3.12,6.04-5.59,10.03-7.4,3.99-1.81,8.62-2.72,13.89-2.72,4.22,0,8.12.63,11.71,1.9,3.58,1.27,6.69,3.04,9.3,5.32,2.57,2.32,4.58,5.12,6.01,8.38.83,1.9,1.41,3.93,1.73,6.09.38,2.58-1.67,4.89-4.28,4.89h-8.03c-1.99,0-3.81-1.32-4.26-3.26-.12-.53-.28-1.04-.48-1.55-.59-1.52-1.46-2.83-2.59-3.92-1.14-1.1-2.51-1.97-4.11-2.63-1.6-.65-3.35-.98-5.25-.98-2.79,0-5.08.57-6.9,1.71-1.81,1.14-3.25,2.66-4.3,4.56-1.1,1.9-1.87,4.07-2.31,6.52-.44,2.45-.66,4.98-.66,7.59v1.9c0,2.66.21,5.22.63,7.69.42,2.47,1.18,4.63,2.28,6.49,1.05,1.9,2.5,3.42,4.33,4.56,1.83,1.14,4.17,1.71,6.99,1.71,1.73,0,3.38-.25,4.94-.76Zm61.39,12.21c-4.3-1.73-8-4.09-11.08-7.09-3.08-2.95-5.45-6.44-7.12-10.47-1.67-4.03-2.5-8.34-2.5-12.94v-2.53c0-5.23.82-10.01,2.47-14.33,1.65-4.32,3.95-8.05,6.9-11.17,2.95-3.12,6.46-5.55,10.51-7.28,4.05-1.73,8.46-2.59,13.23-2.59s9.33.81,13.19,2.44c3.86,1.62,7.14,3.91,9.84,6.87,2.66,2.95,4.68,6.51,6.08,10.66,1.39,4.16,2.09,8.74,2.09,13.76v5.52c0,1.07-.87,1.94-1.94,1.94h-44.51v.19c.59,2.74,1.35,4.95,2.28,6.61.93,1.67,2.17,3.17,3.73,4.52,1.6,1.39,3.44,2.47,5.51,3.23,2.07.76,4.32,1.14,6.77,1.14,3.46,0,6.81-.65,10.06-1.96,1.89-.76,3.57-1.74,5.04-2.94,1.78-1.45,4.37-1.33,5.93.36l4.61,4.97c.66.72.71,1.82.08,2.56-2.24,2.64-5.43,5.05-9.58,7.26-4.85,2.57-10.59,3.86-17.21,3.86-5.27,0-10.06-.87-14.37-2.59Zm6.83-53.13c-1.65.7-3.08,1.7-4.3,3.01-1.27,1.31-2.32,2.87-3.16,4.68,0,.02-.02.04-.03.05-1.3,2.81.86,6.02,3.96,6.02h23.03s0-1.39,0-1.39c0-1.86-.34-3.61-1.01-5.25-.68-1.65-1.6-3.08-2.79-4.3-1.18-1.18-2.63-2.12-4.33-2.82s-3.68-1.04-5.92-1.04c-1.98,0-3.8.35-5.44,1.04Z"
    />
  ]
})
