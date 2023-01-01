
export default ({
  database: {
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "123456",
    database: "zrq_shop", //所用数据库
    port: 3306,
    connectionLimit: 10,
  },

  arc:{
    // yaml 配置文件
    yaml:{
      modules:"test/arc/modules",
      interface:"test/arc/interface",
      struct:"test/arc/struct"
    },
    // 生成 client-server 的路径
    generate:{
      server:"test/rpc/server/interface",
      client:"test/rpc/client/controller"
    }
  }
});