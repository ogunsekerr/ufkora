import '../scripts/check-node-runtime.mjs';
import { createHash } from 'node:crypto';
const origins=new Set(['https://www.ufkora.com','https://ufkora.com']);
const json=(body,status=200)=>Response.json(body,{status,headers:{'Cache-Control':'no-store'}});
export function GET(){return json({ready:Boolean(process.env.RESEND_API_KEY)});}
export async function POST(request){
 if(!origins.has(request.headers.get('origin')))return json({error:'İstek kaynağı doğrulanamadı.'},403);
 if(!request.headers.get('content-type')?.startsWith('application/json'))return json({error:'Geçersiz istek.'},415);
 let data;
 try{const raw=await request.text();if(Buffer.byteLength(raw)>16000)return json({error:'Mesaj çok uzun.'},413);data=JSON.parse(raw);}catch{return json({error:'Mesaj okunamadı.'},400);}
 if(!data||typeof data!=='object'||Array.isArray(data))return json({error:'Geçersiz mesaj.'},400);
 if(data.website)return json({error:'Mesaj doğrulanamadı.'},400);
 const name=typeof data.name==='string'?data.name.trim():'',email=typeof data.email==='string'?data.email.trim():'',message=typeof data.message==='string'?data.message.trim():'';
 if(name.length<2||name.length>100||/[\r\n]/.test(name)||email.length>200||!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)||message.length<10||message.length>3000)return json({error:'Adını, geçerli bir e-posta adresini ve 10–3000 karakterlik mesajını kontrol et.'},400);
 if(!process.env.RESEND_API_KEY)return json({error:'Doğrudan gönderim şu an kullanılamıyor. E-posta seçeneğini kullanabilirsin.'},503);
 const requestId=typeof data.requestId==='string'&&/^[a-zA-Z0-9-]{16,80}$/.test(data.requestId)?data.requestId:null;
 if(!requestId)return json({error:'Lütfen sayfayı yenileyip tekrar dene.'},400);
 const key=createHash('sha256').update(JSON.stringify([requestId,name,email,message])).digest('hex');
 try{
 const sent=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:'Bearer '+process.env.RESEND_API_KEY,'Content-Type':'application/json','Idempotency-Key':'contact-'+key},body:JSON.stringify({from:'Ufkora İletişim <iletisim@bildirim.ufkora.com>',to:['ogunsekerr@ufkora.com'],reply_to:email,subject:'Ufkora: '+name,text:'Ufkora iletişim formundan yeni mesaj\n\nAd: '+name+'\nE-posta: '+email+'\n\n'+message}),signal:AbortSignal.timeout(10000)});
 const result=await sent.json().catch(()=>({}));
 if(!sent.ok||!result.id){console.error('Contact provider rejected request',{status:sent.status});return json({error:'Mesaj şu an gönderilemedi. Biraz sonra tekrar deneyebilir veya e-posta seçeneğini kullanabilirsin.'},502);}
 return json({ok:true});
 }catch{console.error('Contact provider unavailable');return json({error:'Gönderim sonucu alınamadı. Tekrar deneyebilirsin.'},502);}
}
