import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import TabBar from '@/components/TabBar';
import './index.scss'

export default function Index() {

  useLoad(() => {
  })

  return (
    <View className='index'>
      <Text>首页</Text>
      <TabBar currentPage='/pages/index/index' />
    </View>
  )
}
