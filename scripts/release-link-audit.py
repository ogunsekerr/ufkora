"""Static local-link audit. Does not execute JS or make network/device claims."""
import json,subprocess,posixpath
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
root=Path(__file__).resolve().parents[1]
tracked=set(subprocess.check_output(['git','ls-files'],cwd=root,text=True).splitlines())
class Page(HTMLParser):
 def __init__(self,s):
  super().__init__();self.refs=[];self.ids=set();self.feed(s)
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if a.get('id'):self.ids.add(a['id'])
  for key in ['href','src','poster','action']:
   if a.get(key) and not (tag=='base'):self.refs.append((tag,key,a[key]))
pages={p:Page((root/p).read_text()) for p in sorted(tracked) if p.endswith('.html')}
errors=[];fragments=[];external=set();count=0
for p,page in pages.items():
 for tag,key,ref in page.refs:
  u=urlsplit(ref)
  if u.scheme or u.netloc:
   if u.scheme in ['http','https']:external.add(ref)
   continue
  if not u.path and not u.fragment:continue
  path=unquote(u.path)
  target=posixpath.normpath(path.lstrip('/') if path.startswith('/') else posixpath.join(posixpath.dirname(p),path)) if path else p
  if path.endswith('/') or target=='.':target=posixpath.join(target,'index.html').lstrip('./')
  count+=1
  if target not in tracked:errors.append({'page':p,'ref':ref,'missing':target})
  elif u.fragment and target in pages and unquote(u.fragment) not in pages[target].ids:fragments.append({'page':p,'ref':ref,'target':target,'note':'May be created by JS; review required'})
report={'html_files':len(pages),'internal_refs':count,'missing_files':errors,'unresolved_fragments':fragments,'external_urls_not_checked':sorted(external),'scope':'Static attributes only; dynamic links are separately tested from catalog/renderer; no network test.'}
print(json.dumps(report,ensure_ascii=False,indent=2))
