/* Inline disclosure, not a modal: native details supplies its keyboard semantics. */
(()=>{'use strict';
 const drawer=document.getElementById('catalog-filters');
 const summary=drawer&&drawer.querySelector('summary');
 if(!drawer||!summary)return;
 const narrow=matchMedia('(max-width: 700px)');
 let mobileOpen=false,expectedToggle=null;
 function setOpen(open){
  if(drawer.open===open)return;
  expectedToggle=open;
  drawer.open=open;
 }
 function focusSummary(){summary.focus({preventScroll:true})}
 function applyViewport(){
  const hideFocusedControl=narrow.matches&&!mobileOpen&&drawer.contains(document.activeElement)&&document.activeElement!==summary;
  setOpen(narrow.matches?mobileOpen:true);
  if(hideFocusedControl)focusSummary();
 }
 drawer.addEventListener('toggle',()=>{
  // Ignore our own resize/startup state changes; remember the user's mobile choice.
  if(expectedToggle!==null&&drawer.open===expectedToggle){expectedToggle=null;return}
  expectedToggle=null;
  if(narrow.matches)mobileOpen=drawer.open;
  else if(!drawer.open)setOpen(true);
 });
 drawer.addEventListener('keydown',event=>{
  if(event.key!=='Escape'||event.defaultPrevented||!narrow.matches||!drawer.open)return;
  event.preventDefault();
  mobileOpen=false;
  setOpen(false);
  focusSummary();
 });
 if(narrow.addEventListener)narrow.addEventListener('change',applyViewport);
 else narrow.addListener(applyViewport);
 applyViewport();
})();
