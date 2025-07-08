<template>
  <blacknav></blacknav>
  <whitenav></whitenav>

  <div class="main">
    <div class="breadcrumbs">
      <div class="container">
        <span class="crumb">首页</span>
      <span class="sep">/</span>
      <span class="crumb">服务中心</span>
      <span class="sep">/</span>
      <span class="crumb">购物指南</span>
      <span class="sep">/</span>
      <span class="crumb">{{ currentBreadcrumb }}</span>
      </div>
    </div>
    <div class="container">
      <div class="left-nav">
        <div class="left-menu">
          <h3>购物指南</h3>
          <ul>
            <li :class="{ active: activeTab === 'delivery' }" @click="currentTab('delivery')">
              发货实效
            </li>
            <li :class="{ active: activeTab === 'cart' }" @click="currentTab('cart')">
              购物车常见问题和购物技巧
            </li>
            <li :class="{ active: activeTab === 'salestime' }" @click="currentTab('salestime')">
              销售时间
            </li>
            <li :class="{ active: activeTab === 'freeship' }" @click="currentTab('freeship')">
              包邮政策
            </li>
            <li :class="{ active: activeTab === 'payment' }" @click="currentTab('payment')">
              支付帮助
            </li>
            <li :class="{ active: activeTab === 'activity' }" @click="currentTab('activity')">
              活动相关
            </li>
            <li :class="{ active: activeTab === 'antifraud' }" @click="currentTab('antifraud')">
              防诈骗提示
            </li>
            <li :class="{ active: activeTab === 'contact' }">
              <router-link to="/Service" @click.native="handleContactClick">联系客服</router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="right-content">
        <!-- 判断发货时效/防诈骗提示 -->
        <div class="right-box" v-if="delivery || antifraud">
          <div class="title">
            {{ title }}
          </div>
          <div class="boxone" v-if="delivery">
            <div class="a">
              <p>亲爱的米粉，通常情况下您所购买的商品将参照订单支付顺序在48小时内发出，最快情况下我们的商品会在24小时内出库的。但是，针对下述情形的发货时效请以购买页面、订单显示为准：</p>
              <p>（1）以F码/购买资格购买的商品，以及虚拟商品或相关服务（包括实体电话卡等），无法保证在48小时内发出。</p>
              <p>（2）涉及众筹、预售、盲售、优先购、节能补贴等活动或预约配送、上门勘测（需预约配送发货，部分大尺寸商品因其大尺寸特性，需上门勘测）的商品，无法保证在48小时内发出。</p>
              <p>（3）通过小米商城，选择对应小米之家门店（包括直营店、专卖店、授权店，具体以页面显示门店为准）所下的订单（包括但不限于门店发货），该订单发货时间无法保证，请以门店店员告知或对应页面显示为准。</p>
              <p>（4）其他页面另有规定的，以另行规定为准。</p>
            </div>
            <div class="b">
              注：因受交通、天气、疫情或其他客观因素影响，发货及配送可能会有部分延迟，请您耐心等待。建议您登陆小米网（mi.com）
              /小米商城APP端/小米Lite微信小程序，到订单详情或者快递公司官网关注配送进度。由第三方商家负责发货的商品，如第三方商家不能按时发货，请您及时联系第三方商家进行处理。
            </div>
          </div>

          <div class="boxone" v-if="antifraud">
            <div class="c">
              <p>尊敬的小米用户：</p>
              <p>近期收到用户反馈，有不法分子冒充小米工作人员通过电话和短信形式联系小米用户进行诈骗，或者以刷单返现为名义让用户进行支付，为避免广大用户上当受骗遭受经济损失，请您关注以下信息:</p>
              <br>
            </div>
            <div class="d">
              <p>常见诈骗形式：</p>
            </div>
            <div class="c">
              <P>1、冒充小米客服打电话给受害者：抱歉，由于系统原因，您的小米产品订单要重新确认，请再次输入银行卡信息。</P>
              <P>2、以用户在小米公司活动中奖为名，要求交保证金，骗取钱财。</P>
              <P>3、发送短信恭喜中大奖，让用户前往伪装成小米官网的钓鱼网站凭验证码领取。但需要确认身份，请登录网页完善个人信息。当进入这个“钓鱼网站”，会在骗子的诱导下输入自己的信用卡信息。</P>
              <P>4、以刷单返现为名义，要求用户点击链接或扫描二维码进行支付</P>
              <br>
            </div>
            <div class="d">
              <p>温馨提示：</p>
            </div>
            <div class="c">
              <P>1、小米官方客服热线为950816，任何业务问题小米客服绝不会通过私人手机联系会员。如您接到可疑电话但无法判断是否属于诈骗，请务必致电小米官方客服电话950816咨询核实，以免上当受骗，遭受不必要损失。
              </P>
              <P>2、小米官方网站：www.mi.com，如有钓鱼网站伪装成小米官方网站，请您切勿轻信。如订单有任何问题，小米不会通过短信/QQ给您发送链接，且无需您提供个人银行卡信息（请尤其注意银行卡密码及验证码）。
              </P>
              <P>3、小米商城不存在任何形式刷单，请您切勿随意点击陌生人付款链接或二维码支付以免上当受骗。</P>
              <P>4、特别提醒消费者，有关小米的客服电话，请以小米网站公布的信息为准，谨防上当受骗。</P>
              <br>
              <p>如果您有任何疑问或不明之处，可拨打客服电话：950816 或者登录小米官网：www.mi.com 在线咨询相关信息！</p>
            </div>
          </div>
        </div>

        <!-- 购物车/销售时间/包邮政策等折叠面板 -->
        <div class="service-content" v-if="cart || salestime || freeship || payment || activity">
          <div class="collapse-panel" v-for="(item, index) in localItems" :key="index">
            <div class="collapse-header" @click="toggleCollapse(index)">
              <span>{{ item.title }}</span>
              <span class="collapse-icon">{{ openStates[index] ? '∧' : '∨' }}</span>
            </div>
            <div class="collapse-content" v-show="openStates[index]">
              <div class="con">
                <span style="font-size: 16px; white-space: pre-wrap">{{ item.content }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <myfooter></myfooter>
</template>

<script>
import { reactive, toRefs } from 'vue'
import blacknav from '../components/common/BlackNav.vue'
import whitenav from '../components/common/WhiteNav.vue'
import myfooter from '../components/common/MyFooter.vue'

export default {
  name: 'CollapsePanel',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      breadcrumbtitle:{
      delivery: '发货时效',
      cart: '购物车常见问题和购物技巧',
      salestime: '销售时间',
      freeship: '包邮政策',
      payment: '支付帮助',
      activity: '活动相关',
      antifraud: '防诈骗提示',
      contact: '联系客服'
    },
    currentBreadcrumb: '包邮政策' ,
      title: "包邮政策",
      delivery: false,
      antifraud: false,
      cart: false,
      salestime: false,
      freeship: true,
      payment: false,
      activity: false,
      activeTab:'freeship',
      // props初始化
      //localItems: [...this.items],
      // 折叠面板状态
      //openStates: this.items.map(() => false)
      localItems: [], // 初始为空
      openStates: [], // 初始为空
      
    };
  },
  //设为包邮政策为初始页面
  created(){
      this.setFreeshipData();
  },
  components: {
    blacknav,
    whitenav,
    myfooter
  },
  // 监听props.items变化
  watch: {
    items: {
      handler(newVal) {
        this.localItems = [...newVal];
        this.openStates = newVal.map(() => false); // 更新折叠状态
      },
      deep: true // 监听数组
    }
  },
  setup() {
    const state = reactive({})
    return { ...toRefs(state) }
  },
  methods: {
    setFreeshipData(){
      this.localItems = [
        
        {
          title: '为什么自营商品订单满69元还要支付快递费用？',
          content: '1.“满69元免邮费”是指实际支付金额超过69元。\n'
            + '2. 订单中是否有特殊商品需要单独支付邮费。\n'
            + '3. 虚拟商品（如安装服务）单独购买不承担运费；虚拟商品和其他商品一起购买时，不参与满69元即免邮的活动'
        },
        {
          title: '小米商城自营商品满多少元包邮？',
          content: '以您实际支付69元为基准包邮，活动期间除外，免邮价格随活动策略制定。特殊商品如体重秤、大家电等单独收取快递费用。'
        },
        {
          title: '第三方商家商品包邮政策',
          content: '1.第三方商家商品由第三方商家负责发货并自行提供配送服务。\n'
            + '2. 小米自营商品包邮政策不适用于第三方商家商品，第三方卖家商品请您直接联系商家详询配送方式及运费标准。\n'
        }
      ];
      this.openStates = this.localItems.map(() => false);
    },
    toggleCollapse(index) {
      // 控制折叠状态
      this.openStates[index] = !this.openStates[index];
    },
    currentTab(navTab) {
      // 重置所有状态
    this.delivery = false;
    this.antifraud = false;
    this.cart = false;
    this.salestime = false;
    this.freeship = false;
    this.payment = false;
    this.activity = false;
       this.currentBreadcrumb = this.breadcrumbtitle[navTab] || '';
      //更新activeTab
      this.activeTab = navTab; 
      // 根据不同更新
      switch (navTab) {
        case 'delivery':
          this.delivery = true;
          this.title = '什么时候发货/到货？';
          break;
          
        case 'antifraud':
          this.antifraud = true;
          this.title = '谨防假借小米公司名义的诈骗';
          break;
          
        case 'cart':
          this.cart = true;
          this.title = '购物车常见问题和购物技巧';
          this.localItems = [
            {
              title: '在结算页无法使用优惠券？',
              content: '可能参加活动人数较多，建议刷新网页尝试；有的品类券不支持别的品类商品，所以也不能使用，具体详情可参照优惠券使用详情。'
            },
            {
              title: '为什么购物车中显示有货，去结算时无货？',
              content: '1.可能您未设置查看下单地址中“配送至地区”，如果“结算页面设置的地区”和“购物车中的配送至地区”不同，有些商品在本地区无货，但别的地区还有货，建议去结算前请先核对页面右上角的“配送至地区”，看是否有货；\n'
                + '2. 当您加入购物车后未及时下单支付，可能被其他排队用户买走，则会出现下单时显示无货、商品失效或无法支付等情况，所以建议您选好商品确认收货信息无误后，尽快下单支付；\n'
                + '3. 小米商城订单，是否购买成功已订单支付后最终显示结果为准，未购买到的用户，建议您关注官网，参加下次活动。'
            }
          ];
          this.openStates = this.localItems.map(() => false); // 重置折叠状态
          break;
          
        case 'salestime':
          this.salestime = true;
          this.title = '销售时间';
          this.localItems = [
            {
              title: '缺货的产品什么时间能下单购买？',
              content: '小米商城的部分商品，当您选择的收货区域无货时，可以点选到货通知。开启到货通知功能后，产品开售前，小米商城APP会分批以PUSH的形式通知您。设置成功后支持取消。'
            },
            {
              title: '什么时候能购买小米商城活动的产品？',
              content: '登陆小米商城，选择您所喜爱的产品，点击“立即购买”之后，在商品详情页会有本产品的销售时间提示哦，预祝您买到自己心仪的产品。'
            },
            {
              title:'新品没买到下次什么时间可以购买？',
              content:'本次活动结束后，官网稍后会在产品界面显示下次购买时间，敬请关注。'
            }
          ];
          this.openStates = this.localItems.map(() => false);
          break;
          
        case 'freeship':
          this.freeship = true;
          this.title = '包邮政策';
          this.setFreeshipData();
          this.openStates = this.localItems.map(() => false);
          break;
          
        case 'payment':
          this.payment = true;
          this.title = '支付帮助';
          this.localItems = [
            {
              title: '支付超时后能不能再次选择支付？',
              content: '不好意思，订单支付超时后，系统会自动释放订单库存，建议您下单后直接支付。'

            },
            {
                title: '小米商城下单及支付时效是多久？',
              content: '1.您将商品添加到购物车后即可进行下单购买（若添加购物车后商品缺货，则会下单失败），为了您可购买到心仪的商品，建议您添加购物车后尽快下单；活动期间下单时效以活动细则为准。\n'
                + '2. 在线支付的订单以订单详情界面支付时间为准，过期后订单将会自动关闭，无法恢复，建议您尽快支付；活动期间下单时效以活动细则为准。\n'
            },
            {
                title:'小米商城下单及支付时效是多久？',
                content: '小米商城支持小米钱包，支付宝、微信等第三方平台支付，同时支持国内二十多家主流银行机构的储蓄卡、信用卡的网上付款。暂时不支持货到付款的支付方式，您购买的时候一定要注意哦，以免影响您的正常收货。\n'
                + '备注：\n'+'小米商城所支持的银行机构可能会有变动，以实际支付页面的信息为准。\n'+'小米商城暂时不支持货到付款业务，所以大家买到货到付款的产品有可能是假货，要提高警惕哦。'
                
            }
          ];
          this.openStates = this.localItems.map(() => false);
          break;
          
        case 'activity':
          this.activity = true;
          this.title = '活动相关';
          this.localItems = [
            {
              title:'小米商城显示预售活动是指什么？',
              content:'预售表示库存暂时无货，但厂商会尽快生产和供应，客户可以预订，一旦有货就会马上发货；预售商品的到货时间请以页面显示为准哦！'
            },
            {
              title:'活动赠送的产品可选吗？',
              content:'活动赠送的产品目前不支持用户自行选择，也不支持更换赠品哦，感谢您的理解。'
            },
            {
                title:'购买时的赠品退货时需要退回吗？',
                content:'若您购买的产品有赠品，退货时赠品需要一同退回哦。'
            },
            {
              title:'活动期间购买提示排队？',
              content:'若您在活动期间进行购买遇到排队的情况，可能是商城较为热门，购买用户较多，建议您耐心等待，或更换网络环境后尝试。'
            }
          ];
          this.openStates = this.localItems.map(() => false);
          break;
      }
    },
    handleContactClick(){
        this.currentTab('contact');
      }
  }
}
</script>

<style scoped>
/* 样式部分保持不变 */
.main {
  background-color: #f5f5f5;
  padding-bottom: 80px;
  overflow: hidden;
}

.breadcrumbs {
  height: 40px;
  font-size: 12px;
  line-height: 40px;
  background: #f5f5f5
}
.breadcrumbs .crumb {
  color: #757575;
  cursor: pointer;
  margin: 0 4px; 
}

.breadcrumbs .container .crumb:hover {
  color: #FF5500;
}
.breadcrumbs .sep {
  color: #757575;
  margin: 0 4px; 
}

a {
  color: #757575
}

a,
a:hover {
  text-decoration: none
}

a:hover {
  color: #ff6700
}

.container {
  width: 1226px;
  margin-right: auto;
  margin-left: auto
}
.left-nav {
  width: 234px;
  margin-left: 14px;
  float: left;
  min-height: 1px
}

.left-menu {
  background: #fff;
  padding: 36px 0;
}

.left-nav h3 {
  font-size: 16px;
  font-weight: 400;
  line-height: 52px;
  color: #212121;
  margin-block-start: 1em;
  margin-block-end: 1em;
  padding-inline-start: 40px;
}

.left-nav ul {
  display: block;
  list-style: none;
  padding-inline-start: 40px;
  unicode-bidi: isolate;
}

.left-nav li {
  font-size: 12px;
  font-weight: 400;
  line-height: 30px;
  color: #757575;
  margin: 0;
  padding: 0;
}

.left-nav li:hover {
  color: #FF5500;
  cursor: pointer;
}

.left-nav li.active {
  color: #FF5500;
  background-color: #fdfdfd;
}

.right-content {
  width: 78%;
  float: right;
  margin-left: 14px;
  min-height: 1px;
}

.right-box {
  padding-bottom: 50px;
  background: #fff;
  padding-top: 1px;
}

.right-content .title {
  color: #ff6700;
  border-bottom: none;
  padding-left: 48px;
  margin-top: 0;
  line-height: 70px;
  background-color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-size: 16px;
}

.right-content .boxone {
  background-color: #f9f9f9;
  padding: 29px 12px;
  margin: 0;
  line-height: 24px;
  font-size: 14px;
  overflow: hidden;
  display: block;
}

.right-content .boxone .a p {
  color: #333;
  padding: 5px 48px;
  margin: 0;
  font-size: 14px;
  line-height: 24px;
  overflow: hidden;
}

.right-content .boxone .b {
  color: #000000;
  font-weight: 600;
  font-size: 14px;
  padding: 32px 48px;
  margin: 0;
  line-height: 24px;
}

.right-content .boxone .c p {
  color: #333;
  font-size: 16px;
  line-height: 24px;
  margin: 5px 32px;
  font-weight: 350;
}

.right-content .boxone .d p {
  color: red;
  font-size: 16px;
  line-height: 24px;
  margin: 5px 32px;
  font-weight: 350;
}

.service-content {
  padding-bottom: 50px;
  background: #fff;
  padding-top: 1px;
}

.collapse-panel {
  border-radius: 4px;
  margin-bottom: 10px;
}

.collapse-header {
  padding: 12px 15px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding-left: 48px;
  margin-top: 0;
  line-height: 70px;
  background-color: #fff;
  cursor: pointer;
  font-size: 16px;
  color: #212121;
  border-bottom: 1px solid #efeded
}

.collapse-header:hover {
  color: #ff6700;
  border-bottom: none;
}

.collapse-icon {
  font-weight: bold;
  font-size: 1.2em;
}

.collapse-content {
  padding: 30px 20px 30px 40px;
  background-color: #fbfbfb;
}
</style>