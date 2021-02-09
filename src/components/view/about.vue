<template>
    <div id="about-container">
        <div class="header">
            <van-icon name="arrow-left" color="#fff" size="30" class="icon" @click="goback"/>
            <p>关于</p>
        </div>
        <img src="../../assets/slide1.png" alt="Logo" @click="egg">
        <div class="content" ref="content">
            <h1>Boss直拒</h1>
            <p>您身边的求职专家</p>
            <p>版本 0.5.0</p>
            <p>Yangbo@2021</p>
            <transition>
                <p v-show="show" class="hi">Yangbo & Yueying</p>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: "about",
        data(){
          return{
              from:this.$store.state.currentPosition,
              show:false,
              showi:0
          }
        },
        methods:{
            goback(){
                this.$router.push("/" + this.from + "/my");
            },
            egg(){
                if(this.showi >= 5){
                   this.addegg();
                }else{
                    this.$toast("还有"+(5-this.showi)+"次");
                    this.showi++;
                }
            },
            addegg(){
                this.show = true;
            }
        }
    }
</script>

<style lang="scss" scoped>
    #about-container{
        .header{
            height:50px;
            width:100%;
            background-color:#55cac4;
            display:flex;
            align-items:center;
            .icon{
                position:absolute;
                left:10px;
            }
            p{
                text-align:center;
                width:100%;
                font-size:18px;
                margin:0;
                color:#fff;
                font-weight:500;
            }
        }
        img{
            width:100%;
        }
        .content{
            text-align: center;
            h1{
                font-weight:100;
                margin:15px 0;
            }
            p{
                font-weight:100;
            }
            .show{
                transition:all 0.4s ease;
                display:block;

            }
            .fade-enter-active, .fade-leave-active {
                transition: opacity .5s;
            }
            .fade-enter, .fade-leave-to{
                opacity: 0;
            }
            .hi{
                font-size:18px;
                user-select: none;
            }
            .hi:active{
                transition:all 0.1s ease;
                font-size:20px;
                color:red;
            }
        }
    }
</style>
