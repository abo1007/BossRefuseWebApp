<template>
    <div id="vip-container">
        <bo-navbar text="急速招聘" @left-fun="goback"/>
        <p class="vip-text">研究表明<br>在本APP充值VIP容易以最低成本雇佣人才</p>
        <div id="map"></div>
        <div class="button-container">
            <button @click="openVIP">一键开通VIP(首月仅50元*)</button>
        </div>
        <div class="tips">
            <p>* 首月包月50元，按自然月计算，次月60元，以此类推</p>
            <p>* 可随时取消续费，由单位或个人出具相关证明使用中国邮政挂号信邮寄到本公司为您办理</p>
            <p>* 最终解释权由开发者所有</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "com_vip",
        data() {
            return {
                salaryData: [8000, 12000, 15000, 19000, 14000, 22000],
                salaryData2: [2000, 3000, 3500, 4000, 3600, 4300],
                nameData: ["2016", "2017", "2018", "2019", "2020", "2021"]

            }
        },
        methods: {
            goback() {
                this.$router.back();
            },
            openVIP() {

            },
            createEcharts() {
                let myChart = this.$echarts.init(document.getElementById('map'));
                myChart.setOption({
                    xAxis: {
                        type: 'category',
                        data: this.nameData
                    },
                    yAxis: {
                        type: 'value',
                        scale: true
                    },
                    grid: {
                        left: '4%',
                        right: '4%',
                        top: '5%',
                        bottom: '1%',
                        containLabel: true
                    },
                    legend: {data: ['普通用户成本', 'VIP用户成本']},
                    series: [
                        {
                            name: '普通用户成本',
                            type: 'line',
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            },
                            data: this.salaryData
                        },
                        {
                            name: 'VIP用户成本',
                            type: 'line',
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            },
                            data: this.salaryData2
                        }
                    ]
                })
            }
        },
        mounted() {
            this.createEcharts();
        }
    }
</script>

<style lang="scss" scoped>
    #vip-container {
        .button-container {
            display: flex;
            justify-content: center;
            padding: 20px 0;

            button {
                border-radius: 4px;
                border: none;
                background-color: #55cac4;
                color: #fff;
                width: 85%;
                font-size: 22px;
                padding: 5px 0;
            }
        }

        .vip-text {
            color: #ff0000;
            font-weight: bold;
            font-size: 20px;
            text-align: center;
        }

        #map {
            width: 100%;
            height: 260px;
        }

        .tips {

            p {
                color: #808080;
                width: 90%;
                margin: 0 auto;
                font-size: 10px;
            }
        }
    }
</style>
