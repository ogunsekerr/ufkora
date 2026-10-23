// Local request validation only. Never sends an email or calls the provider.
import assert from 'node:assert/strict';
import {GET,POST} from '../api/contact.mjs';
let outbound=0;globalThis.fetch=async()=>{outbound++;throw Error('Network forbidden in contract test')};
const ready=await GET().json();assert.equal(typeof ready.ready,'boolean');
const req=(body,origin='https://ufkora.com',type='application/json')=>new Request('https://ufkora.com/api/contact',{method:'POST',headers:{origin,'content-type':type},body});
assert.equal((await POST(req('{}','https://other.test'))).status,403);
assert.equal((await POST(req('{}','https://ufkora.com','text/plain'))).status,415);
assert.equal((await POST(req('bad json'))).status,400);
assert.equal((await POST(req('x'.repeat(16001)))).status,413);
assert.equal((await POST(req('[]'))).status,400);
assert.equal((await POST(req(JSON.stringify({website:'bot'})))).status,400);
assert.equal((await POST(req(JSON.stringify({name:'A',email:'bad',message:'short'})))).status,400);
assert.equal(outbound,0);
console.log('PASS local contact readiness shape, origin/type/size/JSON/honeypot/field validation; zero outbound messages. Not a production provider test.');
