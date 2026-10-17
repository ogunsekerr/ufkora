(()=>{'use strict';const form=document.getElementById('contact-form');if(!form)return;
const status=document.getElementById('contact-status'),submit=form.querySelector('button[type=submit]'),help=document.getElementById('contact-help');
let direct=false,busy=false,requestId=crypto.randomUUID();
function values(){return{name:form.elements.namedItem('name').value.trim(),email:form.elements.namedItem('email').value.trim(),message:form.elements.namedItem('message').value.trim(),website:form.elements.namedItem('website').value,requestId};}
function message(){const v=values();return 'Ad: '+v.name+'\nE-posta: '+v.email+'\n\n'+v.message;}
function email(){const v=values();location.href='mailto:ogunsekerr@ufkora.com?subject='+encodeURIComponent('Ufkora — '+v.name)+'&body='+encodeURIComponent(message());status.textContent='E-posta uygulaman açıldığında Gönder düğmesine basarak mesajını iletebilirsin. Açılmazsa mesajını kopyalayıp ogunsekerr@ufkora.com adresine gönderebilirsin.';}
fetch('/api/contact',{headers:{Accept:'application/json'},cache:'no-store',signal:AbortSignal.timeout(5000)}).then(r=>r.ok?r.json():null).then(data=>{if(data?.ready){direct=true;submit.textContent='Mesajı gönder ↗';help.textContent='Mesajın Ogün’e iletilir. Yanıt verebilmemiz için e-posta adresini doğru yazdığından emin ol.';}}).catch(()=>{});
form.addEventListener('submit',async e=>{e.preventDefault();if(busy||!form.reportValidity())return;if(!direct){email();return;}
busy=true;submit.disabled=true;submit.textContent='Gönderiliyor…';form.setAttribute('aria-busy','true');status.textContent='';
try{const response=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(values()),signal:AbortSignal.timeout(15000)});const data=await response.json();if(!response.ok||data.ok!==true)throw Error(data.error||'Mesaj gönderilemedi. Lütfen tekrar dene.');status.textContent='Teşekkürler! Mesajın iletim için alındı.';form.reset();requestId=crypto.randomUUID();}
catch(error){status.textContent=error.name==='TimeoutError'?'Gönderim sonucu alınamadı. Mesajın kutuda duruyor; tekrar deneyebilirsin.':error.message||'Bağlantı kurulamadı. Mesajın kutuda duruyor; tekrar deneyebilirsin.';}
finally{busy=false;submit.disabled=false;submit.textContent='Mesajı gönder ↗';form.removeAttribute('aria-busy');}
});
document.getElementById('copy-message').addEventListener('click',async()=>{if(!form.reportValidity())return;try{await navigator.clipboard.writeText(message());status.textContent='Mesajın kopyalandı. E-posta uygulamana yapıştırıp ogunsekerr@ufkora.com adresine gönderebilirsin.';}catch{status.textContent='Kopyalama izni verilmedi. Mesajını kutudan seçip kopyalayabilirsin.';}});
})();