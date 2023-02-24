import React, { useState } from 'react'
import { HiBell, HiOutlineHome, HiOutlineCog, HiOutlineCalendar, HiOutlineChatAlt2, HiOutlineClipboardList, HiOutlineLogout, HiOutlineSearch, HiMenu } from "react-icons/hi"
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Btn, LinkBtn, NavLinkBtn } from './utilityconponents/buttons'


export function SideNav() {
  return (
    <div className=" hidden h-full sm:grid grid-rows-6 items-center  bg-zinc-800 bg-opacity-30 ">
      <div className="py-4 self-start">
        <h2 className="text-yellow-400 font-bold font-mono text-4xl text-left px-4 md:px-12 select-none hidden md:block"><Link to='/'>Doit</Link></h2>
        <h2 className="text-yellow-400 font-bold font-mono text-4xl text-center md:hidden select-none"><Link to='/'>D.</Link></h2>
      </div>
      <div className="p-2 md:p-6 text-left space-y-1 row-span-4 self-start" >
        <NavLinkBtn className={'flex items-center space-x-3 md:px-6 py-3 bg-transparent w-full hover:bg-yellow-500 hover:bg-opacity-10 '}
          link='/dashboard'
          style={({ isActive }) =>
            isActive ? { background: '#facc15', color: 'black' } : undefined
          } >
          <HiOutlineHome className='text-xl' />
          <span className="font-medium hidden md:block">Home</span>
        </NavLinkBtn>

        <NavLinkBtn className={'flex items-center space-x-3 md:px-6 py-3 bg-transparent w-full hover:bg-yellow-500 hover:bg-opacity-10 '}
          link='/dashboard/tasks'
          style={({ isActive }) =>
            isActive ? { background: '#facc15', color: 'black' } : undefined
          } >
          <HiOutlineClipboardList className='text-xl' />
          <span className="font-medium hidden md:block">My Tasks</span>
        </NavLinkBtn>

        <NavLinkBtn className={'flex items-center space-x-3 md:px-6 py-3 bg-transparent w-full hover:bg-yellow-500 hover:bg-opacity-10 '}
          link='/calendar'
          style={({ isActive }) =>
            isActive ? { background: '#facc15', color: 'black' } : undefined
          } >
          <HiOutlineCalendar className='text-xl' />
          <span className="font-medium hidden md:block">Calendar</span>
        </NavLinkBtn>

        <NavLinkBtn className={'flex items-center space-x-3 md:px-6 py-3 bg-transparent w-full hover:bg-yellow-500 hover:bg-opacity-10 '}
          link='/inbox'
          style={({ isActive }) =>
            isActive ? { background: '#facc15', color: 'black' } : undefined
          } >
          <HiOutlineChatAlt2 className='text-xl' />
          <span className="font-medium hidden md:block">Inbox</span>
        </NavLinkBtn>

        <NavLinkBtn className={'flex items-center space-x-3 md:px-6 py-3 bg-transparent w-full hover:bg-yellow-500 hover:bg-opacity-10 '}
          link='/settings'
          style={({ isActive }) =>
            isActive ? { background: '#facc15', color: 'black' } : undefined
          } >
          <HiOutlineCog className='text-xl' />
          <span className="font-medium hidden md:block">Settings</span>
        </NavLinkBtn>
      </div>
      <div className="p-2 md:px-4 self-end">
        <Btn type={'button'}
          className={"flex items-center space-x-3 md:px-8 py-3 bg-transparent justify-start w-full hover:bg-red-500 hover:bg-opacity-30"}>
          <HiOutlineLogout className='text-xl' />
          <span className="font-medium hidden md:block">Logout</span>
        </Btn>
      </div>
    </div>
  )
}


export function MenuNavHome() {
  return (
    <div className="grid grid-cols-3 py-2 px-2 md:px-8  items-center ">
      <div className=" sm:hidden flex col-span-2 space-x-1 items-center">
        <Btn type='button' className="p-2 bg-transparent hover:bg-yellow-400 hover:bg-opacity-20">
          <HiMenu className='text-xl' />
        </Btn>
        <span className='font-semibold text-yellow-400 text-2xl '>Doit</span>
      </div>
      <div className='hidden sm:block col-span-2 '>
        <p className='text-xl sm:text-2xl my-2'>👋 Welcome Anurag! </p>
      </div>
      <div className="inline-flex space-x-3 items-center justify-self-end ">
        <HiBell className='text-xl cursor-pointer' />
        <Avatar />
      </div>
      <div className="sm:hidden w-full col-span-3">
        <p className='text-xl sm:text-2xl my-2'>👋 Welcome Anurag! </p>
      </div>
    </div>
  )
}

export function MenuNav({pagetitle}) {
  return (
    <div className="grid grid-cols-3 py-3 px-2 md:px-8  items-center ">
      <div className=" flex  space-x-1 items-center">
        <Btn type='button' className="sm:hidden p-2 bg-transparent hover:bg-yellow-400 hover:bg-opacity-20">
          <HiMenu className='text-xl' />
        </Btn>
        <span className='font-light select-none  text-2xl '>{pagetitle}</span>
      </div>
      <div className="inline-flex col-span-2 space-x-3 items-center justify-self-end ">
        <div className="max-w-xs">
        <SearchBar />
        </div>
        <HiBell className='text-xl cursor-pointer' />
        <Avatar />
      </div>
    </div>
  )
}



export function SearchBar({ ...props }) {
  return (
    <div className="w-full">
      <div className="flex items-center space-x-2 rounded-lg  py-2 px-3 border border-transparent sm:bg-zinc-800 focus-within:border hover:bg-sky-400 hover:bg-opacity-10 ">
        <HiOutlineSearch className='text-xl ' />
        <input
          type="text"
          placeholder='search tasks here...'
          className='bg-transparent w-full outline-none hidden sm:block '
          {...props} />
      </div>
    </div>
  )
}

function Avatar({ imgUrl, ...props }) {
  return (
    <div className="rounded-full p-1 hover:bg-yellow-400 duration-200 hover:bg-opacity-80 ease-in  cursor-pointer">
      <img src={!imgUrl ? "https://tecdn.b-cdn.net/img/new/avatars/2.webp" : imgUrl} alt={"user"} className="rounded-full w-8" {...props} />
    </div>
  )
}