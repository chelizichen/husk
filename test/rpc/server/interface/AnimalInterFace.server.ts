import { RpcServerController,Register, Inject } from "../../../..";
import { AnimalService } from "../service/AniamalService";

/**
 * @description 用于编写 Animal 接口的配置文件
 */
@RpcServerController("AnimalInterFace")
class AnimalInterFace {
    
    @Inject(AnimalService)
    AnimalService!:AnimalService

    @Register("hello")
    async hello(name:string,age:string,value:string):Promise<{message:string,test:string}>{
        console.log("hello 远端方法被调用");
        
        console.log(name);
        console.log(age);
        console.log(value);

        console.log('this.AnimalService',this.AnimalService.hello());
        
        return {
            message:"hello hello",
            test:"1221"
        }
    }

    

    @Register("jump")
    async jump(type:string,address:string,value:string):Promise<{message:string}>{
        console.log("type",type);
        console.log("address",address);
        console.log("value",value);
        
        return {
            message:"hello world"
        }
    }

    
}



export{
    AnimalInterFace
}