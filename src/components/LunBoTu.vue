<template>
    <div class="big-img-main">
        <div class="main-content-a">
            <div class="lunbo-box">
                <!-- 轮播图片 -->
                <ul class="img-list">
                    <li  v-for="(item,index) in lunboimg" :key="index" v-bind:class="index==currentimgindex?'img-list-item active':'img-list-item'">
                        <img class="list-big-img" v-bind:src="item.src"/>
                    </li>
                </ul>
                <!-- 小圆点 -->
                <ul class="point-List">
                    <li  v-for="(item,index) in lunboimg" :key="index" v-bind:data-index="index" v-bind:class="index==currentimgindex?'point active':'point'" @click="goIndex(index)"></li>
                </ul>
                <!-- 导航箭头 -->
                <div id="go-Previous" class="arrow-left">
                    <img class="img-arrow-left-right" src="../assets/img/lunbotu-arrow/1.png" @click="goPrevious"/>
                </div>
                <div id="go-Next" class="arrow-right" v-on:click="goNext">
                    <img class="img-arrow-left-right" src="../assets/img/lunbotu-arrow/2.png" @click="goNext"/>
                </div>"
            </div>
            <div class="main-left-a">
                <div class="left-content">
                    <ul class="shopping-class-menu">
                        <li v-for="(item,index) in mainLeftContent" :key="index">
                            <div class="main-menu">
                                {{ item.name }}
                            </div>
                            <div class="main-arrow">
                                >
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="main-right-a">
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, computed, reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            msg: '',
            /* 轮播图左侧导航条内容 */
            mainLeftContent: [
                { name: '手机' },
                { name: '电视' },
                { name: '笔记本 平板' },
                { name: '出行 穿戴' },
                { name: '智能 路由器' },
                { name: '电源 配件' },
                { name: '健康 儿童' },
                { name: '耳机 音箱' }
            ],
            /* 轮播展示图片数组 */
            lunboimg: [
                {
                    id: 0,
                    src: '/src/assets/img/lunbo/1.png'
                },
                {
                    id: 1,
                    src: '/src/assets/img/lunbo/2.png'
                },
                {
                    id: 2,
                    src: '/src/assets/img/lunbo/3.png'
                },
                {
                    id: 3,
                    src: '/src/assets/img/lunbo/4.png'
                },
                {
                    id: 4,
                    src: '/src/assets/img/lunbo/5.png'
                },
                {
                    id: 5,
                    src: '/src/assets/img/lunbo/6.png'
                }
            ],
            //轮播图相关使用变量
            //定时器图片跳转参数
            time: 0,
            //表示当前活动状态的图片是第几张图片
            currentindex: 0
        })

        //重置为普通状态，即非当前显示图片
        var clearActive = () => {
            for (var i = 0; i < state.lunboimg.length; i++) {
                state.lunboimg[i].imgclassName = "img-list-item";
                state.lunboimg[i].pointclassName = "point";
            }
        }
        //跳转到指定图片
        const goIndex = (index) => {
            //clearActive();
            //state.lunboimg[index].imgclassName = "img-list-item active";
            //state.lunboimg[index].pointclassName = "point active";
            state.currentindex = index;
            state.time = 0;
        }
        //下一张
        const goNext = () => {
            if (state.currentindex < state.lunboimg.length-1) {
                state.currentindex++;
            } else {
                state.currentindex = 0;
            }
            goIndex(state.currentindex);
        }
        //上一张
        const goPrevious = () => {
            if (state.currentindex == 0) {
                state.currentindex = state.lunboimg.length - 1;
            } else {
                state.currentindex--;
            }
            goIndex(state.currentindex);

        }
        const currentimgindex = computed( () => {
            return state.currentindex;
        })

        //设置轮播定时器
        onMounted(() => {
            setInterval(() => {
                state.time++;
                if (state.time == 20) {
                    goNext();
                    state.time = 0;
                }
            }, 100)
        })

        return {
            ...toRefs(state),
            goIndex,
            goNext,
            goPrevious,
            currentimgindex,
        }
    }
}
</script>

<style scoped>

/* 分类导航、商品大图轮播图展示部分 */
.big-img-main {
    width: 100%;
    height: 460px;
    background-color: white;
}
div.main-content-a {
    position:relative;
    margin: 0 auto;
    width: 1226px;
    height: 100%;
}

/* 轮播图 */
.lunbo-box{
    position:absolute;
    top: 0;
    right: 0;
    width:1226px;
    height: 460px;
}
.img-list-item {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    color: white;
    font-size: 50px;
    opacity: 0;
    translate: all .8s;
}
.img-list-item.active {
    opacity: 1;
    z-index: 5;
}
ul.img-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
img.list-big-img {
    position:absolute;
    top: 0;
    left: 0;
    width:1226px;
    height: 460px;
    padding: 0;
    margin: 0;
    border: 0;
}
div.arrow-left{
    position: absolute;
    left: 240px;
    top: 220px;
    width: 30px;
    height: 50px;
    color:#AAA;
    font-weight: 800;
    z-index: 10;
}
div.arrow-right{
    position: absolute;
    right: 30px;
    top: 220px;
    width: 30px;
    height: 50px;
    color:#AAA;
    font-weight: 800;
    z-index: 10;
}
img.img-arrow-left-right{
    position: absolute;
    width: 30px;
    height:50px;
    cursor: pointer;
}
.point-List{
    padding-left: 0;
    list-style: none;
    position: absolute;
    right: 20px;
    bottom: 20px;
    z-index: 10;
}
/* 定义导航圆点样式 */
.point{
    width: 10px;
    height: 10px;
    background-color: rgba(0,0,0,0.4);
    border-radius: 50%;
    float: left;
    margin-right: 16px;
    border-style: solid;
    border-width: 2px;
    border-color: rgba(255,255,255, 0.6);
    cursor: pointer;
}
/* 定义活动导航圆点样式 */
.point.active{
    background-color: rgba(255,255,255,0.4);
}

/* 左菜单商品类别跳转链接区*/
div.main-left-a {
    position: absolute;
    top: 0;
    left :0;
    margin-left: 0;
    width: 240px;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    z-index: 10;
}
div.main-right {
    position: absolute;
    top: 0;
    margin-right: 0;
    right: 0;
    width: 1000px;
    height: 100%;
}
.shopping-class-menu {
    position: absolute;
    top: 15px;
    left: 0;
    padding-left: 0;
    width: 100%;
    height: 100%;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}
.shopping-class-menu li{
    width: 100%;
    height: 43px;
}
.main-menu{
    float: left;
    width: 180px;
    height: 100%;
    font-size: 15px;
    color:white;
    padding-left :30px;
    line-height: 43px;
}
.main-arrow{
    float: left;
    margin: 0px;
    padding: 0px;
    width: 30px;
    height: 100%;
    color:white;
    font-size: 20px;
    font-weight: 800;
    text-align: center;
    line-height: 43px;
}
.shopping-class-menu li:hover{
    background-color: #FF5500;
}
</style>