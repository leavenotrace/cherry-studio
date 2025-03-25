import styled from 'styled-components'

const IconSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export function NutstoreIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <IconSpan>
      <svg
        {...props}
        width="16px"
        height="16px"
        viewBox="0 0 20 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <title>线性单坚果</title>
        <g id="线性单坚果" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path
            d="M10.1590439,0.886175571 C10.1753674,0.890326544 10.291709,0.910777855 10.428428,0.935202765 L10.6388345,0.973279488 C10.7074276,0.985937901 10.77116,0.998048871 10.8200766,1.00807156 C11.2437905,1.09488771 11.6662387,1.21011472 12.1133986,1.37210166 C13.2580363,1.78675499 14.3714894,2.43940777 15.4224927,3.39703693 L15.621,3.584 L15.6351722,3.57092562 C16.53166,2.76294504 17.6751418,2.31986999 18.4291849,2.58060734 L18.5580792,2.63399481 C18.9455012,2.81584984 19.2328582,3.16284846 19.437028,3.61729231 C19.5709871,3.91546021 19.6526725,4.21929758 19.6985752,4.50662941 C19.7148596,4.80478115 19.5904581,5.0358501 19.4098118,5.1582622 C19.3815042,5.17858714 19.3523426,5.19648783 19.3224017,5.21197531 C19.1152073,5.31915066 18.9086763,5.30466603 18.6939183,5.22086872 C18.6620576,5.20843687 18.6328325,5.19564599 18.6006654,5.18105502 C18.4394695,5.11546938 18.2846309,5.06753532 18.1365915,5.04232952 C17.7415971,4.96197402 17.3578102,5.06378907 17.051656,5.32621284 L17.046624,5.33098744 L17.1856424,5.55157847 C18.0964209,7.0577136 18.6880009,8.98631362 18.5914984,10.988329 L18.5672508,11.3423168 C18.518886,12.3590196 18.336046,13.2889191 17.9959883,14.1391815 C17.4227031,15.6418626 16.5311196,16.5912538 15.4105898,16.2529712 L15.278,16.207 C15.204042,16.2889459 15.1247235,16.3618831 15.0410669,16.4278107 L14.9126231,16.5212291 C13.2906651,17.9150353 10.9315401,19.0281897 7.99389616,19.2 L7.17106258,19.2 C3.43360072,19.2 1.02132454,17.63803 0.534391412,16.0333683 L0.513,15.954 L0.504265285,15.9449232 C-0.110228462,15.1972878 0.264421351,10.4760569 2.09599684,6.99794495 L2.22026541,6.76796973 C2.29571954,6.63016882 2.43695112,6.39220857 2.63659846,6.08729923 C2.9688861,5.57981633 3.34471126,5.07232148 3.75709487,4.59788661 C4.2749895,4.0020645 4.81413532,3.50121679 5.3386949,3.15177019 C5.36355777,3.12648036 5.4278064,3.07827062 5.50910569,3.02364741 L5.559,2.991 L5.5530361,2.96941337 C5.48899059,2.69876461 5.47862138,2.4784725 5.54146387,2.2521942 L5.58811106,2.11525813 C5.68308256,1.86409186 5.94349142,1.57994703 6.25873284,1.38755406 C6.58654657,1.18748816 7.23187921,0.95895859 7.69473739,0.883035787 C8.37505518,0.763266442 9.38159553,0.78076773 10.1590439,0.886175571 Z M6.59801776,3.85068129 C6.46732353,3.85068129 6.2240354,3.97828097 6.07844768,4.1001814 C5.59811888,4.42589962 5.12194443,4.87010868 4.65860433,5.40361803 C4.52372819,5.55892011 4.37448327,5.74624534 4.22515758,5.94252901 L4.04684241,6.18089332 C3.57610889,6.82012555 3.16307203,7.45661922 3.27592159,7.33459023 C1.39280393,10.7336939 1.18786427,14.1190682 1.66513528,15.5784041 C1.72944314,15.8645824 2.24255786,16.4352772 2.98506717,16.8902532 C4.03558482,17.5339627 5.43381914,17.9303112 7.15636912,17.9630362 L7.95282724,17.9633776 C10.5671194,17.8104156 12.6011819,16.8513512 14.1270746,15.5866906 L14.2005419,15.5269075 L14.2189125,15.5136158 C14.591184,15.2751975 14.6855045,14.9945722 14.5299888,14.3127204 C14.1480256,12.8500475 13.2023047,10.9705228 11.4802274,8.76564869 C10.6761315,7.73569508 9.84271439,6.77270459 8.9812637,5.88185595 C8.26651717,5.13999817 7.48191474,4.46126051 6.65303256,3.86947602 C6.6343697,3.85523851 6.62003281,3.85068129 6.59801776,3.85068129 Z M8.0520431,2.14478343 C7.34750556,2.24716005 6.81392621,2.48276912 6.75769294,2.58286729 C6.75315545,2.59094425 6.75172186,2.59912409 6.75788522,2.63367631 L6.761,2.653 C6.92447955,2.67441039 7.07755879,2.72514333 7.22081781,2.80306173 L7.36053304,2.88992896 C8.25106173,3.52400396 9.08393795,4.2496146 9.84209216,5.05104835 C10.7498631,5.98954517 11.620838,6.99715009 12.4127624,8.02643665 C14.2357617,10.3660968 15.255676,12.4067536 15.6810213,14.0171728 C15.7810435,14.3986973 15.8140553,14.7531702 15.7838468,15.0855202 L15.779624,15.1139874 L15.7923351,15.1170186 C16.0195271,15.1453183 16.2337261,14.9383655 16.4514,14.5090146 L16.5168229,14.3735502 C16.5998938,14.1934825 16.8522658,13.5389313 16.8131724,13.6336744 L16.800624,13.6629874 L16.8933423,13.4088509 C17.1021765,12.7846983 17.2487406,12.0003637 17.2861365,11.2776414 C17.4525549,9.34169753 16.8847303,7.51332101 15.9618076,5.9792161 C15.8725231,5.8278532 15.7620551,5.66138642 15.6942132,5.57820575 C14.7595226,4.31701776 13.5999579,3.42705248 12.3136888,2.84260842 C11.4827868,2.46507019 10.794487,2.2853603 10.1559862,2.18983638 C9.43796126,2.09113972 8.59553714,2.05880421 8.0520431,2.14478343 Z M16.4823653,4.32067121 L16.364,4.418 L16.393,4.454 L16.5100007,4.3621392 C17.0306065,3.97118443 17.6106194,3.7900296 18.1665334,3.88918284 L18.233,3.904 L18.2063581,3.87419362 C18.1376794,3.79892884 18.0675642,3.72412847 18.0165076,3.68190508 L17.972563,3.65173005 C17.800955,3.56958653 17.0606024,3.86572493 16.4823653,4.32067121 Z"
            id="形状结合"
            fill="currentColor"
            fillRule="nonzero"></path>
        </g>
      </svg>
    </IconSpan>
  )
}

export function FolderIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <IconSpan>
      <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" {...props}>
        <title>folder</title>
        <path
          d="M396.5,185.7l22.7,27.2a36.1,36.1,0,0,0,27.7,12.7H906.8c29.4,0,53.2,22.8,53.2,50.9V800.1c0,28.1-23.8,50.9-53.2,50.9H117.2C87.8,851,64,828.2,64,800.1V223.9c0-28.1,23.8-50.9,53.2-50.9H368.8A36.1,36.1,0,0,1,396.5,185.7Z"
          style={{ fill: '#9fddff' }}
        />
        <path
          d="M64,342.5V797.8c0,29.4,24,53.2,53.6,53.2H906.4c29.6,0,53.6-23.8,53.6-53.2V342.5Z"
          style={{ fill: '#74c6ff' }}
        />
      </svg>
    </IconSpan>
  )
}
