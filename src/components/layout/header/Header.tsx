'use client'
import { Icon } from '@/components/icon'
import TextInput from '@/components/input/TextInput'
import Image from 'next/image'
import logo from 'public/assets/logo.svg'
import { useEffect, useState } from 'react'
import { Typography } from '../../typography'
import NavigateItem from './NavigateItem'

const Header = () => {
  const [showHeader, setShowHeader] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 120) {
        setShowHeader(true)
      } else {
        setShowHeader(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div
      className={`${
        showHeader ? 'fixed z-50 top-0 right-0 left-0' : ''
      } transition-all duration-300 opacity-100 bg-slate-200`}
    >
      <div className={`bg-neutral-800 px-[220px] py-2 lg:flex hidden`}>
        <div className="flex flex-1">
          <Typography className="text-white">
            We are open with limited hours and staff.
          </Typography>
        </div>
        <div className="flex items-center space-x-2">
          <Icon icon="location" className="text-white" />
          <Typography weight="bold" className="text-white">
            Store location
          </Typography>
        </div>
        <div className="flex items-center space-x-2 px-8">
          <Icon icon="phone" className="text-white" />
          <Typography weight="bold" className="text-white">
            0968497046
          </Typography>
        </div>
      </div>
      <div className="px-1 lg:px-[100px] 2xl:px-[200px] flex py-8  items-center z-40 shadow-2xl">
        <div className="w-[50px] md:w-[80px] lg:w-[100px]">
          <Image src={logo} alt={'logo'} className="bg-cover " />
        </div>

        <div className="pl-12 max-w hidden xl:block">
          <NavigateItem />
        </div>

        <div className="pl-[100px] ">
          <TextInput
            placeholder="Tìm kiếm sản phẩm"
            className="rounded-full focus:border-red-600 py-[6px] w-[300px]"
            icon="search"
          />
        </div>

        <div className="flex space-x-4 pl-[40px] justify-between items-center">
          <Icon
            icon="heart"
            size="28"
            className="cursor-pointer hover:text-red-500"
          />
          <Icon icon="cart" size="28" className="cursor-pointer" />
          <Icon icon="user" size="28" className="cursor-pointer" />

          <div>
            <Typography>Minh Mong Manh</Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
