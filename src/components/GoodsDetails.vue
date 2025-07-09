<template>
    <div class="kuang-zuiwaiceng">
        <div class="details-top">
            <div class="details-neirongqu">
                <div class="details-neirongqu">
                    <div class="details-top-left">
                        <p class="xilienameda">{{ ShangPinData.leibiexiliename }}</p>
                        <p class="line-a">|</p>
                        <p class="xilienamexiao">{{ ShangPinData.shoujixiliename }}</p>
                    </div>
                    <div class="details-top-right">
                        <p class="gocanshuye">概述页</p>
                        <p class="line-b">|</p>
                        <p class="gocanshuye">参数页</p>
                        <p class="line-b">|</p>
                        <p class="gocanshuye">F码通道</p>
                        <p class="line-b">|</p>
                        <p class="gocanshuye">咨询客服</p>
                        <p class="line-b">|</p>
                        <p class="gocanshuye">用户评价</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="details-neirongqu">
            <div class="details-bottom-left">
                <div class="shouji-img-box">
                    <img class="shouji-img-big" :src=ShangPinData.infoIMgsrc />
                </div>
            </div>
            <div class="details-bottom-right">
                <div class="shoujidetails">
                    <div class="xiliemingbig">{{ ShangPinData.leibiexiliename }}</div>
                    <div class="liangdian-b">
                        <span class="liangdian-text" v-for="(item, index) in ShangPinData.liangdian" :key="index">{{
                            ShangPinData.liangdian[index] }} | </span>
                    </div>
                    <div class="xiaomiziying">小米自营</div>
                    <p class="jiage-text-a">{{ shangpinjiage }}元</p>
                </div>
                <div class="zengpin-a">
                    <p class="zengpin-btn">赠品</p>
                    <p class="zengpin-text" v-for="(item, index) in ShangPinData.zengpin" :key="index">
                        {{ item.tiaojian }} ，赠价值
                        {{ item.zengpinjiage }} 元
                        {{ item.zengpinname }}，
                        {{ item.jiezhishijian }}
                    </p>
                </div>
                <div class="weizhi">
                    <div class="weizhi-left">
                        <div class="weizhi-img-box"></div>
                    </div>
                    <div class="weizhi-right">
                        <div class="weizhi-right-top">
                            <p class="weizhi-text">北京市</p>
                            <p class="weizhi-text">海淀区</p>
                            <p class="weizhi-text">清河街道</p>
                            <p class="weizhi-text-red">修改</p>
                        </div>
                        <div class="weizhi-right-bottom">
                            <p class="weizhi-text-red">有现货</p>
                        </div>
                    </div>
                </div>
                <div class="select-peizhi-box">
                    <div class="select-title">选择产品</div>
                    <div class="select-btn-box">
                        <div v-for="(item, index) in ShangPinData.xinghao" :key="index"
                            @click="changSelectedXingHao(index)"
                            v-bind:class="index == currentxinghao ? 'select-btn selected' : 'select-btn'">{{ item.name
                            }}</div>
                    </div>
                </div>
                <div class="select-peizhi-box">
                    <div class="select-title">选择版本</div>
                    <div class="select-btn-box">
                        <div v-for="(item, index) in ShangPinData.peizhi" :key="index"
                            @click="changSelectedPeiZhi(index)"
                            v-bind:class="index == currentpeizhi ? 'select-btn selected' : 'select-btn'">{{ item.name }}
                        </div>
                    </div>
                </div>
                <div class="select-peizhi-box">
                    <div class="select-title">选择颜色</div>
                    <div class="select-btn-box">
                        <div v-for="(item, index) in ShangPinData.color" :key="index" @click="changSelectedColor(index)"
                            v-bind:class="index == currentcolor ? 'select-btn selected' : 'select-btn'">{{ item.name }}
                        </div>
                    </div>
                </div>
                <div class="select-peizhi-box">
                    <div class="select-baohu-top">
                        <div class="select-title">选择小米提供的意外保护</div>
                        <div class="select-title-red">了解意外保护 ></div>
                    </div>
                    <div class="baohu-xiangmu-box">
                        <div v-for="(item, index) in ShangPinData.yiwaibaoxian" :key="index"
                            @click="changSelectedYiWaiBaoXian(index)" class="baohu-bottom"
                            v-bind:class="{ 'selected': index == currentyiwaibaoxian }">
                            <div class="select-baohu-bottom-left">
                                <!--                                <div v-bind:class="index==currentyiwaibaoxian?'select-baohu-point selected':'select-baohu-point'">></div>-->
                                <div class="select-baohu-point"
                                    v-bind:class="{ 'selected': index == currentyiwaibaoxian }">>
                                </div>
                                <div class="baohu-icon"></div>
                            </div>
                            <div class="select-baohu-bottom-right">
                                <div class="baohu-bottom-right-left">
                                    <div class="baohu-content-textrow">
                                        <div class="baohu-text-a">{{ item.name }}</div>
                                        <div class="baohu-text-b">{{ item.info }}</div>
                                    </div>
                                    <div class="baohu-text-c">{{ item.infodetails }}</div>
                                    <div class="baohu-content-textrow">
                                        <div class="fang-point"
                                            v-bind:class="{ 'selected': index == currentyiwaibaoxian }">>
                                        </div>
                                        <p class="baohu-text-d">我已阅读</p>
                                        <p class="baohu-text-e">服务条款</p>
                                        <p class="line-d">|</p>
                                        <p class="baohu-text-e">常见问题</p>
                                    </div>
                                </div>
                                <div class="baohu-bottom-right-right">
                                    <p class="baohujiage">{{ item.jiage }}元</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="select-peizhi-box">
                    <div class="select-baohu-top">
                        <div class="select-title">选择小米提供的延长保修</div>
                        <div class="select-title-red">了解延长保修 ></div>
                    </div>
                    <div class="baohu-xiangmu-box">
                        <div v-for="(item, index) in ShangPinData.yanchangbaoxian" :key="index"
                            @click="changSelectedYanChangBaoXian(index)"
                            v-bind:class="index == currentyanchangbaoxian ? 'baohu-bottom selected' : 'baohu-bottom'">
                            <div class="select-baohu-bottom-left">
                                <div
                                    v-bind:class="index == currentyanchangbaoxian ? 'select-baohu-point selected' : 'select-baohu-point'">
                                    ></div>
                                <div class="baohu-icon"></div>
                            </div>
                            <div class="select-baohu-bottom-right">
                                <div class="baohu-bottom-right-left">
                                    <div class="baohu-content-textrow">
                                        <div class="baohu-text-a">{{ item.name }}</div>
                                        <div class="baohu-text-b">{{ item.info }}</div>
                                    </div>
                                    <div class="baohu-text-c">{{ item.infodetails }}</div>
                                    <div class="baohu-content-textrow">
                                        <div
                                            v-bind:class="index == currentyanchangbaoxian ? 'fang-point selected' : 'fang-point'">
                                            ></div>
                                        <p class="baohu-text-d">我已阅读</p>
                                        <p class="baohu-text-e">服务条款</p>
                                        <p class="line-d">|</p>
                                        <p class="baohu-text-e">常见问题</p>
                                    </div>
                                </div>
                                <div class="baohu-bottom-right-right">
                                    <p class="baohujiage">{{ item.jiage }}元</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="select-peizhi-box">
                    <div class="select-baohu-top">
                        <div class="select-title">选择小米提供的云空间服务</div>
                        <div class="select-title-red">了解云服务 ></div>
                    </div>
                    <div class="baohu-xiangmu-box">
                        <div v-for="(item, index) in ShangPinData.yunserve" :key="index"
                            @click="changSelectedYunServe(index)"
                            v-bind:class="index == currentyunserve ? 'baohu-bottom selected' : 'baohu-bottom'">
                            <div class="select-baohu-bottom-left">
                                <div
                                    v-bind:class="index == currentyunserve ? 'select-baohu-point selected' : 'select-baohu-point'">
                                    ></div>
                                <div class="baohu-icon"></div>
                            </div>
                            <div class="select-baohu-bottom-right">
                                <div class="baohu-bottom-right-left">
                                    <div class="baohu-content-textrow">
                                        <div class="baohu-text-a">{{ item.name }}</div>
                                        <div class="baohu-text-b">{{ item.info }}</div>
                                    </div>
                                    <div class="baohu-text-c">{{ item.infodetails }}</div>
                                    <div class="baohu-content-textrow">
                                        <div
                                            v-bind:class="index == currentyunserve ? 'fang-point selected' : 'fang-point'">
                                            >
                                        </div>
                                        <p class="baohu-text-d">我已阅读</p>
                                        <p class="baohu-text-e">服务条款</p>
                                        <p class="line-d">|</p>
                                        <p class="baohu-text-e">常见问题</p>
                                    </div>
                                </div>
                                <div class="baohu-bottom-right-right">
                                    <p class="baohujiage">{{ item.jiage }}元</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="heji-box">
                    <div class="yonghuselected">
                        <p class="selected-name">{{ selectedshangpininfo }}</p>
                        <p class="selected-jiage">{{ shangpintotal }}元</p>
                    </div>
                    <div class="yonghuselected" v-if="selectedyiwaibaoxianname">
                        <p class="selected-name">{{ selectedyiwaibaoxianname }}</p>
                        <p class="selected-jiage">{{ selectedyiwaibaoxianjiage }}元</p>
                    </div>
                    <div class="yonghuselected" v-if="selectedyanchangbaoxianname">
                        <p class="selected-name">{{ selectedyanchangbaoxianname }}</p>
                        <p class="selected-jiage">{{ selectedyanchangbaoxianjiage }}元</p>
                    </div>
                    <div class="yonghuselected" v-if="selectedyunservename">
                        <p class="selected-name">{{ selectedyunservename }}</p>
                        <p class="selected-jiage">{{ selectedyunservejiage }}元</p>
                    </div>
                </div>
                <div class="show-total-box">
                    <p class="selected-name-total">总计：</p>
                    <p class="selected-jiage-total">{{ total }}元</p>
                </div>
                <div class="tocart-box">
                    <div class="tocart-btn">
                        <div class="jiarugouwuche" @click="gomycart()">加入购物车</div>
                        <div class="shoucang-box">
                            <div class="xin-img-box"></div>
                            <p class="xihuan">喜欢</p>
                        </div>
                    </div>
                    <div class="yuan-box">
                        <div class="yuan-img-box"></div>
                        <p class="yuan-text">小米自营</p>
                        <div class="yuan-img-box"></div>
                        <p class="yuan-text">小米发货</p>
                        <div class="yuan-img-box"></div>
                        <p class="yuan-text">7天无理由退货</p>
                        <div class="yuan-img-box"></div>
                        <p class="yuan-text">运费说明</p>
                        <div class="yuan-img-box"></div>
                        <p class="yuan-text">企业信息</p>
                        <div class="yuan-img-box"></div>
                        <p class="yuan-text">7天价格保护</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { onMounted, computed, reactive, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getCurrentInstance } from 'vue'
import useCartStore from '@/stores/cartstore.js';
//import { useUserStore } from '@/stores/userstore';
export default {
    setup() {
        //先导入
        const router = useRouter()
        const cartstore = useCartStore()
        //const userStore = useUserStore();
        const { proxy } = getCurrentInstance()
        const route = useRoute()
        const state = reactive({
            id: 0,
            shangpin: {},
            xinghao: {},
            peizhi: {},
            color: {},
            shangpinmoney: 0,
            yiwaibaoxian: {},
            yanchangbaoxian: {},
            yunserve: {},
            total: 0,
            selectedshangpian: {
                shangpinid: 0,               //选择的是哪个商品
                data: {                      //具体的是配置信息对应id
                    xinghaoid: 0,
                    peizhiid: 0,
                    colorid: 0,
                    yiwaibaoxianid: 0,
                    yanchangbaoxianid: 0,
                    yunserveid: 0
                }
            }

        })
        // 定义当前型号、配置、颜色、意外保险、延保、云服务对应的选中方法
        const changSelectedXingHao = (index) => {
            if (state.xinghao.id - 1 == index) {
                state.xinghao = state.shangpin.xinghao[0];
            } else {
                state.xinghao = state.shangpin.xinghao[index];
            }
        }
        const changSelectedPeiZhi = (index) => {
            if (state.peizhi.id - 1 == index) {
                state.peizhi = state.shangpin.peizhi[0];
            } else {
                state.peizhi = state.shangpin.peizhi[index];
            }
        }
        const changSelectedColor = (index) => {
            if (state.color.id - 1 == index) {
                state.color = state.shangpin.color[0];
            } else {
                state.color = state.shangpin.color[index];
            }
        }
        const changSelectedYiWaiBaoXian = (index) => {
            if (state.yiwaibaoxian.id - 1 == index) {
                state.yiwaibaoxian = {};
            } else {
                state.yiwaibaoxian = state.shangpin.yiwaibaoxian[index];
            }
        }
        const changSelectedYanChangBaoXian = (index) => {
            if (state.yanchangbaoxian.id - 1 == index) {
                state.yanchangbaoxian = {};
            } else {
                state.yanchangbaoxian = state.shangpin.yanchangbaoxian[index];
            }
        }
        const changSelectedYunServe = (index) => {
            if (state.yunserve.id - 1 == index) {
                state.yunserve = {};
            } else {
                state.yunserve = state.shangpin.yunserve[index];
            }
        }
        // //购物车部分
        // const gomycart = () => {
        //     // if (!userStore.isLoggedIn) {
        //     //     alert("请先登录！");
        //     //     router.push("/login");
        //     //     return;
        //     // }
        //     state.selectedshangpian.shangpinid = state.id;
        //     state.selectedshangpian.data.xinghaoid = state.xinghao.id;
        //     state.selectedshangpian.data.peizhiid = state.peizhi.id;
        //     state.selectedshangpian.data.colorid = state.color.id;
        //     state.selectedshangpian.data.yiwaibaoxianid = state.yiwaibaoxian.id;
        //     state.selectedshangpian.data.yanchangbaoxianid = state.yanchangbaoxian.id;
        //     state.selectedshangpian.data.yunserveid = state.yunserve.id;
        //     //添加完整商品信息
        //     state.selectedshangpian.shangpinInfo = {
        //         name: state.shangpin.name,
        //         price: state.total,
        //         xinghao: state.xinghao.name,
        //         peizhi: state.peizhi.name,
        //         color: state.color.name,
        //         image: state.shangpin.infoIMgsrc,
        //         yanchangbaoxian: state.yanchangbaoxian.name || '无',
        //         yiwaibaoxian: state.yiwaibaoxian.name || "无",
        //         yunserve: state.yunserve.name || "无",
        //     };

        //     cartstore.addShangPinInCart(state.selectedshangpian);
        //     cartstore.getShangPinsInCart.length;
        //     router.push({
        //         path: '/mycart',
        //     })


        // }
        const gomycart = () => {
            state.selectedshangpian.shangpinid = state.id;
            state.selectedshangpian.data.xinghaoid = state.xinghao.id;
            state.selectedshangpian.data.peizhiid = state.peizhi.id;
            state.selectedshangpian.data.colorid = state.color.id;
            state.selectedshangpian.data.yiwaibaoxianid = state.yiwaibaoxian.id;
            state.selectedshangpian.data.yanchangbaoxianid = state.yanchangbaoxian.id;
            state.selectedshangpian.data.yunserveid = state.yunserve.id;
            //添加完整商品信息
            state.selectedshangpian.shangpinInfo = {
                name: state.shangpin.name,
                price: state.total,
                xinghao: state.xinghao.name,
                peizhi: state.peizhi.name,
                color: state.color.name,
                image: state.shangpin.infoIMgsrc,
                yanchangbaoxian: state.yanchangbaoxian.name || '无',
                yiwaibaoxian: state.yiwaibaoxian.name || "无",
                yunserve: state.yunserve.name || "无",
            };
            cartstore.addShangPinInCart(state.selectedshangpian);
            cartstore.getShangPinsInCart.length;
            router.push({
                path: '/mycart',
            })
        }
        //保护内部变量
        const ShangPinData = computed(() => {
            return state.shangpin;
        })
        //定义商品总价格的计算属性
        const shangpinjiage = computed(() => {
            state.shangpinmoney = state.xinghao.jiage + state.peizhi.jiage + state.color.jiage;
            return state.shangpinmoney;
        })
        //定义型号的计算属性
        const currentxinghao = computed(() => {
            return state.xinghao.id - 1;
        })
        //定义配置的计算属性
        const currentpeizhi = computed(() => {
            return state.peizhi.id - 1;
        })
        //定义颜色的计算属性
        const currentcolor = computed(() => {
            return state.color.id - 1;
        })
        //定义意外保险的计算属性
        const currentyiwaibaoxian = computed(() => {
            return state.yiwaibaoxian.id - 1;
        })
        //定义延长保险的计算属性
        const currentyanchangbaoxian = computed(() => {
            return state.yanchangbaoxian.id - 1;
        })
        //定义云服务的计算属性
        const currentyunserve = computed(() => {
            return state.yunserve.id - 1;
        })
        //用于显示型号、配置、颜色、意外保险、延保、云服务对应的选中信息
        const selected = computed(() => {
            return state.xinghao.name + state.peizhi.name + state.color.name;
        })
        const selectedyiwaibaoxianname = computed(() => {
            return state.yiwaibaoxian.name;
        })
        const selectedyiwaibaoxianjiage = computed(() => {
            return state.yiwaibaoxian.jiage;
        })
        const selectedyanchangbaoxianname = computed(() => {
            return state.yanchangbaoxian.name;
        })
        const selectedyanchangbaoxianjiage = computed(() => {
            return state.yanchangbaoxian.jiage;
        })
        const selectedyunservename = computed(() => {
            return state.yunserve.name;
        })
        const selectedyunservejiage = computed(() => {
            return state.yunserve.jiage;
        })
        // 定义总价格计算属性
        const shangpintotal = computed(() => {
            state.total = state.xinghao.jiage + state.peizhi.jiage + state.color.jiage;
            if (state.yiwaibaoxian.id > 0) {
                state.total += state.yiwaibaoxian.jiage;
            }
            if (state.yanchangbaoxian.id > 0) {
                state.total += state.yanchangbaoxian.jiage;
            }

            if (state.yunserve.id > 0) {
                state.total += state.yunserve.jiage;
            }
            return state.total;
        })




        onMounted(() => {
            state.id = route.query.id;
            //console.log(state.id);//传值测试
            state.shangpin = proxy.$malldata[state.id];
            state.shangpinmoney = state.shangpin.luojijiage;
            state.xinghao = state.shangpin.xinghao[0];
            state.peizhi = state.shangpin.peizhi[0];
            state.color = state.shangpin.color[0];
        })
        return {
            ...toRefs(state),
            //导出计算属性
            ShangPinData,
            currentxinghao,
            currentpeizhi,
            currentcolor,
            shangpinjiage,
            currentyiwaibaoxian,
            currentyanchangbaoxian,
            currentyunserve,
            selectedyiwaibaoxianname,
            selectedyiwaibaoxianjiage,
            selectedyanchangbaoxianname,
            selectedyanchangbaoxianjiage,
            selectedyunservename,
            selectedyunservejiage,
            shangpintotal,

            //导出方法
            changSelectedXingHao,
            changSelectedColor,
            changSelectedPeiZhi,
            changSelectedYiWaiBaoXian,
            changSelectedYanChangBaoXian,
            changSelectedYunServe,
            gomycart,
        }
    }
}
</script>

<style>
.kuang-zuiwaiceng {
    width: 100%;
    /* 宽度满屏 */
    height: 100%;
    /* 让高度岁内容多少改变 */
    display: flex;
    /* 设置其为弹性布局 */
    flex-direction: column;
    /* 设置其内元素上下摆放 */
    justify-content: center;
    /* 设置其内元素水平居中 */
}

.details-top {
    width: 100%;
    /* 宽度满屏 */
    height: 60px;
    /* 让高度为60px */
    border-top: 1px solid #ccc;
    /* 设置上边框样式 */
    border-bottom: 1px solid #ccc;
    /* 设置下边框样式 */
    box-shadow: 0px 3px 5px 3px #ececec;
    /* 设置四边阴影样式 */
    display: flex;
    /* 设置其为弹性布局 */
    justify-content: center;
    /* 设置其内元素水平居中 */
}

.details-neirongqu {
    margin: 0 auto;
    width: 1240px;
    display: flex;
    justify-content: space-between;
}

.details-bottom-left {
    margin: 0;
    width: 50%;
    display: flex;
    justify-content: flex-start;
}

.details-bottom-right {
    margin: 0;
    width: 50%;
    display: flex;
    flex-direction: column;
}

.details-top-left {
    margin: 0;
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.xilienameda {
    font-size: 18px;
    font-weight: 500;
    color: #424242;
}

.line-a {
    margin-left: 10px;
    margin-right: 10px;
    font-size: 12px;
    font-weight: 400;
    color: #616161;
}

.xilienamexiao {
    font-size: 12px;
    font-weight: 400;
    color: #616161;
}

.xilienamexiao:hover {
    color: #ff6700;
}

.details-top-right {
    margin: 0;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.gocanshuye {
    font-size: 14px;
    font-weight: 400;
    color: #616161;
}

.line-b {
    margin-left: 10px;
    margin-right: 10px;
    font-size: 14px;
    font-weight: 400;
    color: #616161;
}

.gocanshuye:hover {
    color: #ff6700;
}

.shouji-img-box {
    margin-top: 20px;
    margin-left: 10px;
    width: 560px;
    height: 560px;
}

.shouji-img-big {
    width: 560px;
    height: 560px;
}

.shoujidetails {
    margin-top: 40px;
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
}

.xiliemingbig {
    width: 100%;
    height: 50px;
    font-size: 24px;
    font-weight: 400;
    color: #212121;
    text-align: left;
}

.liangdian-b {
    width: 100%;
    height: 30px;
    font-size: 14px;
    font-weight: 400;
    color: #b0b0b0;
    display: flex;
    justify-content: flex-start;

}

.xiaomiziying {
    width: 100%;
    height: 30px;
    font-size: 14px;
    font-weight: 400;
    color: #ff6700;
    text-align: left;
}

.jiage-text-a {
    width: 100%;
    height: 20px;
    font-size: 18px;
    line-height: 1;
    color: #ff6700;
    text-align: left;
}

.zengpin-a {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}

.zengpin-btn {
    width: 80px;
    height: 24px;
    background-color: #ff6700;
    text-align: center;
    color: #ffffff;
}

.zengpin-text {
    margin-left: 10px;
    font-size: 14px;
    font-weight: 400;
    color: #212121;
}

.weizhi {
    margin-top: 20px;
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #e0e0e0;
    background-color: #fafafa;
    display: flex;
    flex-wrap: nowrap;
    align-content: center;
}

.weizhi-left {
    width: 50px;
    height: 100%;
}

.weizhi-img-box {
    margin-top: 30px;
    margin-left: 25px;
    width: 13px;
    height: 20px;
    background-image: url("../assets/img/details/dingwei.png");
    background-size: 100% 100%;
}

.weizhi-right {
    margin-left: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;

}

.weizhi-right-top {
    margin-top: 15px;
    width: 100%;
    height: 20px;
    display: flex;
    flex-direction: row;
}

.weizhi-right-bottom {
    width: 100%;
    height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}

.weizhi-text {
    margin-right: 15px;
    font-weight: 500;
    font-size: 14px;
    color: #333333;
}

.weizhi-text-red {
    margin-right: 15px;
    font-weight: 500;
    font-size: 14px;
    color: #FF6700;
}

.select-peizhi-box {
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.select-title {
    margin-bottom: 10px;
    width: 100%;
    height: 30px;
    font-size: 18px;
    color: #212121;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.select-btn-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.select-btn {
    margin-top: 6px;
    margin-bottom: 6px;
    width: 49%;
    height: 42px;
    text-align: center;
    line-height: 42px;
    font-size: 16px;
    color: #616161;
    border: 1px solid #e0e0e0;
}

.select-btn:hover {
    border: 1px solid #FF6700;
}

.select-btn.selected {
    border: 1px solid #FF6700;
}

.select-baohu-top {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.select-title-red {
    width: 50%;
    font-size: 14px;
    color: #FF6700;
    display: flex;
    justify-content: flex-end;
}

.baohu-xiangmu-box {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.baohu-bottom {
    width: 100%;
    height: 140px;
    display: flex;
    flex-direction: row;
    border: 1px solid #e0e0e0;
}

.baohu-bottom.selected {
    width: 100%;
    height: 140px;
    display: flex;
    flex-direction: row;
    border: 1px solid #FF6700;
}

.select-baohu-bottom-left {
    width: 20%;
    display: flex;
    flex-direction: row;
}

.select-baohu-point {
    margin-top: 50px;
    margin-left: 30px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid #b0b0b0;
    font-style: normal;
    line-height: 12px;
    color: #ffffff;
    font-size: 12px;
    text-align: center;
    vertical-align: middle;
}

.select-baohu-point:hover {
    cursor: pointer;
}

.select-baohu-point.selected {
    border: 1px solid #FF6700;
    background-color: #FF6700;
}

.baohu-icon {
    margin-top: 30px;
    margin-left: 20px;
    width: 50px;
    height: 50px;
    background-image: url("../assets/img/details/baoxian.png");
    background-size: 100% 100%;
}

.select-baohu-bottom-right {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.baohu-bottom-right-left {
    width: 80%;
    display: flex;
    flex-direction: column;
}

.baohu-content-textrow {
    margin-top: 5px;
    width: 100%;
    display: flex;
    justify-content: start;
}

.baohu-text-a {
    margin-top: 25px;
    font-size: 20px;
    font-weight: 700;
    color: #212121;
    text-align: left;
}

.baohu-text-b {
    margin-top: 25px;
    margin-left: 15px;
    font-style: normal;
    height: 20px;
    font-size: 14px;
    background: #ff6700;
    display: inline-block;
    padding: 2px 6px;
    border-radius: 20px;
    color: #fff;
}

.baohu-text-c {
    margin-top: 5px;
    text-align: left;
    font-size: 14px;
    height: 18px;
    color: #b0b0b0;
}

.baohu-text-d {
    margin-top: 5px;
    font-size: 14px;
    color: #424242;
}

.baohu-text-e {
    margin-top: 5px;
    margin-left: 7px;
    font-size: 14px;
    height: 18px;
    color: #ff6700;
}

.line-d {
    margin-top: 7px;
    margin-left: 7px;
    font-size: 14px;
    height: 18px;
    font-weight: 400;
    color: #ff6700;
}

.fang-point {
    margin-top: 7px;
    margin-right: 10px;
    width: 12px;
    height: 12px;
    text-align: center;
    border: 1px solid #b0b0b0;
    font-style: normal;
    line-height: 12px;
    color: white;
    font-size: 12px;
}

.fang-point:hover {
    cursor: pointer;
}

.fang-point.selected {
    border: 1px solid #FF6700;
    background-color: #FF6700;
}

.baohu-bottom-right-right {
    width: 15%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.baohujiage {
    margin-top: 100px;
    font-size: 14px;
    height: 20px;
    color: #424242;
}

.heji-box {
    margin-top: 30px;
    padding-top: 20px;
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-content: stretch;
    border: 1px solid #fafafa;
    background-color: #fafafa;
}

.yonghuselected {
    width: 100%;
    height: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.selected-name {
    margin-left: 30px;
    width: 80%;
    height: 30px;
    font-size: 14px;
    line-height: 30px;
    color: #424242;
    text-align: left;
}

.selected-jiage {
    margin-right: 30px;
    width: 20%;
    height: 30px;
    font-size: 14px;
    line-height: 30px;
    color: #424242;
    text-align: right;
}

.show-total-box {
    margin-bottom: 20px;
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: flex-start;
    align-content: stretch;
    border: 1px solid #fafafa;
    background-color: #fafafa;
}

.selected-name-total,
.selected-jiage-total {
    margin-left: 30px;
    font-size: 24px;
    line-height: 24px;
    font-weight: 600;
    color: #FF6700;
}

.tocart-box {
    margin-top: 10px;
    width: 100%;
    height: 160px;
    display: flex;
    flex-direction: column;
}

.tocart-btn {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
}

.jiarugouwuche {
    width: 300px;
    height: 50px;
    background-color: #FF6700;
    font-size: 16px;
    font-weight: 500;
    line-height: 50px;
    text-align: center;
    color: #ffffff;
}

.shoucang-box {
    margin-left: 10px;
    width: 150px;
    height: 50px;
    background-color: #b0b0b0;
    font-size: 16px;
    font-weight: 500;
    line-height: 50px;
    text-align: center;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in;
}

.xin-img-box {
    width: 20px;
    height: 18px;
    background-image: url("../assets/img/details/xinxing-white.png");
    background-size: 100% 100%;
    transition: all 0.2s ease-in;
}

.xihuan {
    margin-left: 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 50px;
}

.jiarugouwuche:hover {
    background-color: #e7534b;
    cursor: pointer;
    transition: all 0.2s ease-in;
}

.shoucang-box:hover {
    background-color: #616161;
    transition: all 0.2s ease-in;
    cursor: pointer;
}

.yuan-box {
    margin-top: 10px;
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
}

.yuan-img-box {
    width: 20px;
    height: 20px;
    background-image: url("../assets/img/details/yuan1.png");
    background-size: 100% 100%;
}

.yuan-text {
    margin-left: 3px;
    margin-right: 10px;
    font-size: 14px;
    height: 40px;
    font-weight: 400;
    line-height: 40px;
    color: #b0b0b0;
}
</style>