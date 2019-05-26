import React from 'react'
import windowSize from 'react-window-size';

const SvgComponent = ({windowWidth, children}) => (
  <div style = {{display: 'flex', flexDirection: "column", justifyContent: "center", marginTop: windowWidth < 1000 ? "1%" : "1%", maxHeight: windowWidth < 1000 ? "25%" : "25%", width: '100%'}}>
    <div style = {{height: "100%", alignSelf: "center", width: '100%'}} dangerouslySetInnerHTML={{__html: `
      <svg width = "80%" height = "100%" viewBox="0 0 432 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M231.77 0H200.228H0L30.0193 25.3035L0 50.607H200.228H231.77H432L401.98 25.3035L432 0H231.77Z" fill="#282828"/>
      </svg>

    `}}>
      
    </div>
    {children}
  </div>
)

export default windowSize(SvgComponent)
