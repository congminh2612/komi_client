import { Typography } from '@/components/typography'
import Image from 'next/image'
import logoAppStore from 'public/assets/app-store.png'
import logoGooglePlay from 'public/assets/google-play.png'
import logo from 'public/assets/logo-dark.png'
import { customerServiceItems, informationItems } from './constants'

const Footer = () => {
  return (
    <div className="bg-black py-[50px]">
      <div className="grid xl:grid-cols-4 xl:gap-4 md:grid-cols-2 md:gap-2 grid-cols-1 container mx-auto">
        <div className="flex flex-col space-y-8">
          <Image src={logo} alt="logo" width={150} />
          <Typography className="text-white ">
            Copyright © 2023 Minhtc2000 | Built with Komi by Minhtc2000.
          </Typography>
        </div>
        <div className="flex flex-col space-y-4">
          <Typography
            className="text-white cursor-pointer"
            variant="body"
            weight="bold"
          >
            Thông tin
          </Typography>
          {informationItems.map((item) => {
            return (
              <Typography
                key={item.id}
                className="text-white cursor-pointer hover:text-red-600"
              >
                {item.title}
              </Typography>
            )
          })}
        </div>
        <div className="flex flex-col space-y-4">
          <Typography
            className="text-white cursor-pointer"
            variant="body"
            weight="bold"
          >
            Dịch vụ khách hàng
          </Typography>
          {customerServiceItems?.map((item) => {
            return (
              <Typography
                key={item.id}
                className="text-white cursor-pointer hover:text-red-600"
              >
                {item.title}
              </Typography>
            )
          })}
        </div>
        <div>
          <Typography className="text-white " variant="body" weight="bold">
            Tải xuống ứng dụng
          </Typography>
          <Typography className="text-white pt-4">
            Download our App and get extra 15% Discount on your first Order..!
          </Typography>
          <div className="flex space-x-5 pt-6">
            <Image src={logoAppStore} alt="logo" />
            <Image src={logoGooglePlay} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
