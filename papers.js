const library=[
{title:"Biblical Studies",folder:"biblical-studies"},
{title:"Theology",folder:"theology"},
{title:"Prophecy & Eschatology",folder:"prophecy-eschatology"},
{title:"Christian Life",folder:"christian-life"},
{title:"Apologetics",folder:"apologetics"},
{title:"Poetry",folder:"poetry"}];
const papers={};
const target=document.getElementById("library");
for(const category of library){
 const items=papers[category.folder]||[];
 const section=document.createElement("section");section.className="category";
 const heading=document.createElement("h3");heading.textContent=category.title;section.appendChild(heading);
 const e=document.createElement("div");e.className="empty";
 e.textContent=items.length?"":"Papers will appear here as they are added.";
 if(items.length){const list=document.createElement("ul");list.className="paper-list";for(const paper of items){const li=document.createElement("li");const a=document.createElement("a");a.href=paper.file;a.target="_blank";a.rel="noopener";const t=document.createElement("span");t.textContent=paper.title;const p=document.createElement("span");p.className="pdf";p.textContent="Read PDF ↗";a.append(t,p);li.appendChild(a);list.appendChild(li)}section.appendChild(list)}else section.appendChild(e);
 target.appendChild(section);
}
