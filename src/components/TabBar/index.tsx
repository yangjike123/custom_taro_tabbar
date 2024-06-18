import { View, Image, Text } from "@tarojs/components"
import { hideTabBar, switchTab } from "@tarojs/taro"
import { useEffect } from "react";
import './index.scss';
interface Props {
    currentPage: string;
    color?: string | '#B7B7B7';
    checkedColor?: string | '#3C8DFF';
    backgroundColor?: string | '#FFFFF';
    zIndex?: number | 1000;
}
interface TabBarItem {
    pagePath: string
    text: string
    iconPath: string
    selectedIconPath: string
}
export default ({ currentPage = '/pages/index/index', color = '#B7B7B7', checkedColor = '#3C8DFF', backgroundColor = '#FFFFF', zIndex = 1000 }: Props) => {
    const wordColor = color;
    const selectColor = checkedColor;
    const height = 150 / 2; // tabbar栏高度
    const tabbarList: TabBarItem[] = [
        {
            pagePath: '/pages/index/index',
            text: "首页",
            iconPath: require(`../../../static/tabbar_img/home_icon.png`),
            selectedIconPath: require('../../../static/tabbar_img/select_home_icon.png'),
        },
        {
            pagePath: '/pages/journey/index',
            text: '行程',
            iconPath: require('../../../static/tabbar_img/journey_icon.png'),
            selectedIconPath: require('../../../static/tabbar_img/select_journey_icon.png'),
        },
        {
            pagePath: '/pages/discover/index',
            text: '发现',
            iconPath: require('../../../static/tabbar_img/discover_icon.png'),
            selectedIconPath: require('../../../static/tabbar_img/select_discover_icon.png'),
        },
        {
            pagePath: '/pages/my/index',
            text: '我的',
            iconPath: require('../../../static/tabbar_img/my_icon.png'),
            selectedIconPath: require('../../../static/tabbar_img/select_my_icon.png'),
        }
    ];
   
    useEffect(() => {
        hideTabBar(); // 隐藏tabbar栏
    }, []);

    function onNav(url: string) {
        switchTab({ url });
    }

    return (
        <View style={{ height }}>
            <View className="tabbar_main" style={{ zIndex, backgroundColor, height }}>
                {tabbarList.map((item, index) => {
                    return (
                        <View key={index} className="tabbar_item" onClick={() => onNav(item.pagePath)}>
                            {
                                currentPage === item.pagePath ?
                                    <>
                                        <Image src={item.selectedIconPath} />
                                        <Text style={{ color: selectColor }}>{item.text}</Text>
                                    </> :
                                    <>
                                        <Image src={item.iconPath} />
                                        <Text style={{ color: wordColor }}>{item.text}</Text>
                                    </>
                            }
                        </View>
                    )
                })}
            </View>
        </View>
    )
}