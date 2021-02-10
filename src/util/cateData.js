// 工作分类数据
export default {
    optionsData : [
        {
            text: '技术',
            value: 1,
            children: [
                { text: 'Java工程师', value:101 },
                { text: '前端工程师', value:102 },
                { text: 'PHP工程师', value:103 },
                { text: '算法工程师', value:104 },
                { text: '测试工程师', value:105 },
                { text: '全栈工程师', value:106 }
            ],
        },
        {
            text: '产品',
            value: 2,
            children: [
                { text: '产品经理', value:201 },
                { text: '游戏策划', value:202 },
                { text: '电商产品经理', value:203 },
                { text: '产品专员', value:204 },
                { text: '产品VP', value:205 }
            ],
        },
        {
            text: '设计',
            value: 3,
            children: [
                { text: 'UI设计师', value:301 },
                { text: '平面设计', value:302 },
                { text: '室内设计', value:303 },
                { text: '视觉设计', value:304 },
                { text: '工业设计', value:305 }
            ],
        },
        {
            text: '运营',
            value: 4,
            children: [
                { text: '电商运营', value:401 },
                { text: '新媒体运营', value:402 },
                { text: '客服专员', value:403 },
                { text: '网站编辑', value:404 },
                { text: '产品运营', value:405 }
            ],
        },
        {
            text: '市场',
            value: 5,
            children: [
                { text: '市场营销', value:501 },
                { text: '网络营销', value:502 },
                { text: '品牌公关', value:503 },
                { text: '广告策划', value:504 },
                { text: 'SEO/SEM', value:505 }
            ],
        },
        {
            text: '其他',
            value: 6,
            children: [
                { text: '其他', value:600 }
            ],
        },
    ],
    smallData:[
        { text: 'Java工程师', value:101, base:5000 },
        { text: '前端工程师', value:102, base:4000 },
        { text: 'PHP工程师', value:103, base:4000 },
        { text: '算法工程师', value:104, base:5000 },
        { text: '测试工程师', value:105, base:3500 },
        { text: '全栈工程师', value:106, base:5000 },

        { text: '产品经理', value:201, base:3000 },
        { text: '游戏策划', value:202, base:3200 },
        { text: '电商产品经理', value:203, base:3000 },
        { text: '产品专员', value:204, base:3000 },
        { text: '产品VP', value:205, base:4000 },

        { text: 'UI设计师', value:301, base:3500 },
        { text: '平面设计', value:302, base:2800 },
        { text: '室内设计', value:303, base:3200 },
        { text: '视觉设计', value:304, base:4000 },
        { text: '工业设计', value:305, base:4000 },

        { text: '电商运营', value:401, base:3000 },
        { text: '新媒体运营', value:402, base:3500 },
        { text: '客服专员', value:403, base:2500 },
        { text: '网站编辑', value:404, base:3000 },
        { text: '产品运营', value:405, base:3200 },

        { text: '市场营销', value:501, base:3000 },
        { text: '网络营销', value:502, base:3000 },
        { text: '品牌公关', value:503, base:3000 },
        { text: '广告策划', value:504, base:3000 },
        { text: 'SEO/SEM', value:505, base:3000 },

        { text: '其他', value:600, base:3000 }
    ],
    // 通过分类id获得类目名字
    getCateName(id){
        for (let i=0;i<this.smallData.length;i++){
            if(this.smallData[i].value == id){
                return this.smallData[i].text;
            }
        }
    }
}
