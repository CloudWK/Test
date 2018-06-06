function cDayFunc(){
    var newDateStr=$dp.cal.newdate['y']+"-"+$dp.cal.newdate['M']+"-"+$dp.cal.newdate['d'];
    var newDate=new Date(newDateStr).Format("yyyy-MM-dd");
    if(newDate!=new Date().Format("yyyy-MM-dd")){
        document.getElementById("confirm").disabled=true;
    }else{
        document.getElementById("confirm").disabled=false;
    }
}
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), // 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
        //无效的内容
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
var group=[{
    "header": "霾预报",
    "edit": true,
    "className": "mai",
    "data": {
        "05时值": "",
        "17时值": ""
    }
}, {
    "header": "紫外线预报",
    "edit": true,
    "className": "UV",
    "data": {
        "10时值": "",
        "16时值": ""
    }
}, {
    "header": "国家局预报",
    "edit": true,
    "className": "country",
    "data": {
        "PM25": "",
        "PM10": "",
        "NO2": "",
        "O3": ""
    }
}];
var periodData={
    "header": "分时段预报",
    "edit": true,
    "className": "period",
    "data": {
        "上半夜": {
            "PM25": "",
            "PM10": "",
            "NO2": "",
            "03-1h": "",
            "03-8h":""
        },
        "下半夜": {
            "PM25": "",
            "PM10": "",
            "NO2": "",
            "03-1h": "",
            "03-8h": ""
        },
        "上午": {
            "PM25": "",
            "PM10": "",
            "NO2": "",
            "03-1h": "",
            "03-8h": ""
        },
        "下午": {
            "PM25": "",
            "PM10": "",
            "NO2": "",
            "03-1h": "",
            "03-8h": ""
        }
    }
}

Vue.component("my-component", {
    template: "#template",
    props: {
        group: Object
    }
});
var vm = new Vue({
    el: "#app",
    data: {
        "date": new Date().Format("yyyy-MM-dd"),
        "groups": group,
        "periodData": periodData
    },
    mounted: function () {
        this.$nextTick(function () {
            this.init();
            //this.getData();
        });
    },
    methods: {
        init: function () {
            // var loginParams = getCookie('UserInfo');
            // var loginResult = eval('(' + loginParams + ')');
            // userName = loginResult['Alias'];
            // user = loginResult['UserName'];
            // document.getElementById("forecaster").innerText = userName;
            var bodyWidth = document.body.offsetWidth;
            var wrap = document.getElementsByClassName("wrap");
            var pageRightObj = document.getElementsByClassName("page-right")[0];
            var left = (bodyWidth - wrap[0].offsetWidth - pageRightObj.offsetWidth) / 2; //计算左边三个框的left值
            for (let i = 0; i < wrap.length; i++) {
                wrap[i].style.left = left + "px";
                wrap[i].style.opacity = 1;
            }
            var right = bodyWidth - (left + wrap[0].offsetWidth) - pageRightObj.offsetWidth;  //计算右边框的right值
            pageRightObj.style.right = right - 10 + "px";
            pageRightObj.style.opacity = 1;
        },
         getData: function () {
        //     //vm.periodData=periodData;
        //     //vm.groups=group;
        //     let time = document.getElementById("time").value;
        //     this.$http.post('Default.aspx/GetData', { time: time }).then(function (response) {
        //         let data = response.data.d.split("#");
        //         data.forEach(function (ele, i) {
        //             try{
        //                 var obj = eval('(' + ele + ')');
        //             }catch{}
        //             for (let key in obj) {
        //                 if (i == 3) {
        //                     vm.periodData.data = obj[key];
        //                     return;
        //                 }
        //                 vm.groups[i].data = obj[key];
        //             }
        //         });
        //     })
         },
         confirm: function () {
        //     if (!confirm("您是否确认数据无误？")) return;
        //     this.$http.post('Default.aspx/Confirm').then(function (response) {
        //         let data = response.data.d;
        //         if (data == "ok") {
        //             alert("已确认！");
        //         } else {
        //             alert("确认失败！");
        //         }
        //     })
         }
    }
});

