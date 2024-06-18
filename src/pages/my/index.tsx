import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import TabBar from '@/components/TabBar'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      个人信息
      <TabBar currentPage='/pages/my/index' />
    </View>
  )
}
