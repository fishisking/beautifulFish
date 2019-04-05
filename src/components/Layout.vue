<template>
    <div class="layout">
        <Layout>
            <my-header></my-header>
            <Layout :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem to="/">Home</BreadcrumbItem>
                    <BreadcrumbItem v-for="(item,index) in breadlist" :key="index">{{item}}</BreadcrumbItem>	                       
                </Breadcrumb>
                <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
                    <Layout>
                        <Sider hide-trigger :style="{background: '#fff'}">
                            <Menu active-name="1-1" theme="light" width="auto" :open-names="['1']">
                                <Submenu name="1">
                                    <template slot="title">
                                        <Icon type="ios-people"></Icon>
                                        Users
                                    </template>
                                    <MenuItem name="1-1" :to="option11">New Users</MenuItem>
                                    <MenuItem name="1-2" :to="option12">Active Users</MenuItem>
                                </Submenu>
                                <Submenu name="2">
                                    <template slot="title">
                                        <Icon type="ios-keypad"></Icon>
                                        Activity
                                    </template>
                                    <MenuItem name="2-1">Option 1</MenuItem>
                                    <MenuItem name="2-2">Option 2</MenuItem>
                                </Submenu>
                                <Submenu name="3">
                                    <template slot="title">
                                        <Icon type="ios-stats"></Icon>
                                         Analysis
                                    </template>
                                    <MenuItem name="3-1">Option 1</MenuItem>
                                    <MenuItem name="3-2">Option 2</MenuItem>
                                </Submenu>
                            </Menu>
                        </Sider>
                        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                            <router-view />
                        </Content>
                    </Layout>
                </Content>
            </Layout>
          	<my-footer></my-footer>  
        </Layout>
    </div>
</div>
</template>
<script>
import MyFooter from '@/components/Footer'
import MyHeader from '@/components/Header'
export default {
	components:{
		MyFooter,
		MyHeader
	},
	data(){
          return{
            option11:'/users/newusers',
            option12:'/users/activeusers',
          }
    },
    computed:{
    	breadlist(){
    		const path=this.$route.name
    		const result=path.split("/")
    		return result;
    	}
    }
}
</script>
<style>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 75px;
    height: 40px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 10px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
</style>