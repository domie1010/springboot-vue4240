const base = {
    get() {
        return {
            url : "http://localhost:8080/wangshangjuweihuibanlixitong/",
            name: "wangshangjuweihuibanlixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/wangshangjuweihuibanlixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "网上村委会业务办理系统"
        } 
    }
}
export default base
