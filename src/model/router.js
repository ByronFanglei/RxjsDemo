// 封装路由类
class Routers {
  constructor(path, exact, component) {
    this.path = path;
    this.exact = exact;
    this.component = component;
  }
}


export default Routers
