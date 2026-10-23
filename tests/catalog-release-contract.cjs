const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const ctx={window:{}};vm.runInNewContext(fs.readFileSync('catalog.js','utf8'),ctx);const items=ctx.window.UFKORA_CATALOG;
const issues=[],seen=new Set();for(const x of items){
 assert([4,5,6,7,8].includes(x.grade));assert(['Oyun','Laboratuvar','Çalışma bankası'].includes(x.type));assert(x.title&&x.topic&&x.desc);
 const u=new URL(x.url,'https://ufkora.test/');assert.equal(u.origin,'https://ufkora.test');assert(fs.existsSync('.'+u.pathname),x.url);assert(fs.existsSync(x.image),x.image);
 assert(!seen.has(x.grade+':'+x.url),'duplicate grade+route');seen.add(x.grade+':'+x.url);
 assert.deepEqual(Array.from(x.codes),Array.from(x.outcomes.map(o=>o.code)));
 if(!x.codes.length)issues.push({title:x.title,issue:'No official code in catalog; source verification pending; not invented'});
 if(u.pathname.endsWith('/kesif.html'))assert(['isik','kargo','cember'].includes(u.searchParams.get('oyun')));
 if(x.preview){assert(x.preview.goal&&x.preview.howTo&&x.preview.example);assert(x.preview.imageWidth>0&&x.preview.imageHeight>0)}
}
console.log(JSON.stringify({catalog_cards:items.length,unique_routes:new Set(items.map(x=>x.url)).size,grade_counts:Object.fromEntries([4,5,6,7,8].map(g=>[g,items.filter(x=>x.grade===g).length])),result:'PASS static catalog identity, files/images/query/code-outcome alignment',issues,scope:'No official curriculum attestation, HTTP/browser or gameplay verification'}));
