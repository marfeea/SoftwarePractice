const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm5s7e8/",
            name: "ssm5s7e8",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm5s7e8/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Android校园二手交易APP的设计与实现"
        } 
    }
}
export default base
