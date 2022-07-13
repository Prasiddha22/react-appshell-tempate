import { AppShell } from '@prasiddha/react-appshell'
import { useState } from 'react'
import React from 'react'

const ToggleSvg = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-align-justified'
      width='25'
      height='25'
      viewBox='0 0 24 24'
      stroke='#0F193A'
      strokeWidth='2'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <line x1='4' y1='6' x2='20' y2='6'></line>
      <line x1='4' y1='12' x2='20' y2='12'></line>
      <line x1='4' y1='18' x2='16' y2='18'></line>
    </svg>
  )
}

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true)
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1)

  const NavContent = () => {
    return (
      <div
        style={{
          display: 'flex',
          background: 'white',
          boxShadow: '0px 3px 6px #00000010',
          width: '100%',
        }}
      >
        <div
          style={{
            padding: '10px 10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <div
            onClick={() => {
              setSidebarOpen((prevState) => !prevState)
            }}
            style={{
              background: '#f8fafb',
              padding: 4,
              borderRadius: 4,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <ToggleSvg />
          </div>
          <p>Some Content over here</p>

          <img
            style={{ height: 35, width: 35, borderRadius: '50%' }}
            alt=''
            src='https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          />
        </div>
      </div>
    )
  }

  const SidebarHeader = () => {
    return (
      <div style={{ marginBottom: 20, padding: 20 }}>
        <p
          style={{
            color: '#2465EA',
            fontSize: '25px',
            fontWeight: 700,
            margin: 0,
            textAlign: 'left',
            marginBottom: 0,
          }}
        >
          Header
        </p>
        <p
          style={{
            color: '#707070',
            fontSize: '14px',
            margin: 0,
            textAlign: 'left',
          }}
        >
          Your subtitle goes here
        </p>
      </div>
    )
  }
  const SidebarContent = () => {
    return (
      <div style={{ marginBottom: 20, padding: 20 }}>
        {[...Array(5)].map((_, index) => {
          return (
            <div
              onMouseEnter={() => {
                setHoveredIndex(index)
              }}
              onMouseLeave={() => {
                setHoveredIndex(-1)
              }}
              key={index}
              style={{
                padding: '10px 10px',
                margin: '0 0 10px 0',
                borderRadius: '5px',
                border: '1px solid #00000010',
                cursor: 'pointer',
                background: hoveredIndex === index ? '#2465EA' : '#fff',
                boxShadow: hoveredIndex === index ? '0px 0px 5px #2465EA' : '',
                color: hoveredIndex === index ? '#fff' : '#2465EA',
              }}
            >
              <p style={{ margin: 0 }}>Sidebar Menu {index}</p>
            </div>
          )
        })}
      </div>
    )
  }
  const SidebarFooter = () => {
    return (
      <div
        style={{
          padding: 20,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <p
            style={{
              color: '#000000',
              fontSize: '20px',
              fontWeight: 700,
              margin: 0,
              textAlign: 'left',
              marginBottom: 0,
            }}
          >
            John Doe
          </p>
          <p
            style={{
              color: '#707070',
              fontSize: '14px',
              margin: 0,
              textAlign: 'left',
            }}
          >
            Software Developer
          </p>
        </div>
        <img
          style={{ height: 35, width: 35, borderRadius: '50%' }}
          alt=''
          src='https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        />
      </div>
    )
  }
  return (
    <AppShell
      sidebarOpen={sidebarOpen}
      sidebarBackgroundColor={'#f8fafb'}
      sidebarHeader={<SidebarHeader />}
      sidebarContent={<SidebarContent />}
      sidebarFooter={<SidebarFooter />}
      sidebarOpenedWidth={'300px'}
      sidebarClosedWidth={0}
      navbarContent={<NavContent />}
      navbarFullWidth={false}
    >
      {/* <AppPrimo /> */}
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id atque dolorem
      doloremque ullam repellendus assumenda ratione eveniet, vel blanditiis
      vitae repellat neque inventore quaerat. Aperiam doloribus autem nihil
      alias veritatis!
    </AppShell>
  )
}

export default App
