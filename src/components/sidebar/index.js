import React from 'react'
import { sideBarContainer, Icon, closeIcon } from './sidebarElements'

const sideBar = () => {
  return (
    <sideBarContainer>
        <Icon>
            <closeIcon/>
        </Icon>
    </sideBarContainer>
  )
}

export default sideBar