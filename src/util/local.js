export default {
  // 获取对象
  getObj(key){
    let data = JSON.parse(localStorage.getItem(key));
    if(data){
      return data;
    }else{
      return {};
    }
  },
  // 获取任何数据（不加修饰）
  getAny(key){
    return localStorage.getItem(key)
  },
  // 修改属性
  updateObj(name,key,value){
    let data = JSON.parse(localStorage.getItem(name));
    if(JSON.stringify(data) !== "{}" && data !== null){
      data[key] = value;
      localStorage.setItem(name,JSON.stringify(data))
    }else{
      this.setObj(name,key,value);
    }
  },
  // 新设置属性
  setObj(name,key,value){
    let data = JSON.parse(localStorage.getItem(name));
    console.log(data)
    if(JSON.stringify(data) === "{}" || data == null){
      data = {};
      data[key] = value;
      localStorage.setItem(name,JSON.stringify(data))
    }else{
      this.updateObj(name,key,value);
    }
  }

}