"""Local source/contract checks; does not start browsers or deploy."""
import json,subprocess,re,sys
from pathlib import Path
root=Path(__file__).resolve().parents[1]
results=[]
def run(name,args,content=None):
 p=subprocess.run(args,cwd=root,input=content,text=True,capture_output=True)
 results.append({'check':name,'exit_code':p.returncode,'stdout':p.stdout.strip(),'stderr':p.stderr.strip()})
for p in sorted((root/'tests').glob('*')):
 if p.suffix in ['.cjs','.mjs']:run(p.relative_to(root).as_posix(),['node',str(p)])
tracked=subprocess.check_output(['git','ls-files'],cwd=root,text=True).splitlines()
for p in tracked:
 if p.endswith(('.js','.mjs','.cjs')) and not p.startswith('tests/'):
  run('syntax:'+p,['node','--check',p])
 elif p.endswith('.html'):
  for i,s in enumerate(re.findall(r'<script>([\s\S]*?)</script>',(root/p).read_text())):run('inline:'+p+':'+str(i),['node','--check'],s)
run('git diff whitespace',['git','diff','--check'])
report={'kind':'Local source and VM contract tests, not browser/device/performance or production checks','checks':results,'passed':sum(x['exit_code']==0 for x in results),'failed':sum(x['exit_code']!=0 for x in results)}
Path('/tmp/ufkora-release-checks.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
for x in results:
 if x['exit_code']!=0:print(x['check'],x['stderr'],x['stdout'])
print('Local checks:',report['passed'],'passed;',report['failed'],'failed; report /tmp/ufkora-release-checks.json')
sys.exit(bool(report['failed']))
