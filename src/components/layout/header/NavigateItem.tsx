import { Typography } from '@/components/typography'
import { navigateItems } from './constants'

const NavigateItem = () => {
  return (
    <div className="flex space-x-6">
      {navigateItems.map((item) => {
        return (
          <div key={item.id}>
            <Typography
              size="lg"
              weight="bold"
              className="cursor-pointer hover:text-primary text-gray-700"
            >
              {item.title}
            </Typography>
          </div>
        )
      })}
    </div>
  )
}

export default NavigateItem
