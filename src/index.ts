import { Context, Schema } from 'koishi'

export const name = 'urlencode-and-urldecode'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  ctx.command("url解码 <person:string>")
  .action(({session},person)=>{
    var encodeURI_url = person;
    try{
      const str1 = decodeURIComponent(encodeURI_url);
    if(encodeURI_url.localeCompare(str1) !== 0) {
      return "解码前："+person+"  =>  解码后："+str1;
  }
    else{
      return "格式不对哦~";
    }
    }
    catch(err) {
      return "不是文本中带‘%’的格式就对啦";
  }   
  });
ctx.command("url编码 <enperson:string>")
  .action(({session},enperson)=>{
    var decodeURI_url = enperson;
    return "编码前："+enperson+"  =>  编码后："+encodeURIComponent(decodeURI_url);
  })
}
