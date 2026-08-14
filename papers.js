const library=[
 {title:"Biblical Studies",folder:"biblical-studies",icon:"✧"},
 {title:"Theology",folder:"theology",icon:"✝"},
 {title:"Prophecy & Eschatology",folder:"prophecy-eschatology",icon:"⌛"},
 {title:"Christian Life",folder:"christian-life",icon:"♧"},
 {title:"Apologetics",folder:"apologetics",icon:"◈"},
 {title:"Poetry",folder:"poetry",icon:"❧"}
];
const papers={};
const target=document.getElementById("library");
for(const category of library){
 const items=papers[category.folder]||[];
 const section=document.createElement("section");section.className="category";
 const icon=document.createElement("div");icon.className="icon";icon.textContent=category.icon;section.appendChild(icon);
 const heading=document.createElement("h2");heading.textContent=category.title;section.appendChild(heading);
 const rule=document.createElement("div");rule.className="cat-rule";section.appendChild(rule);
 if(items.length){const list=document.createElement("ul");list.className="paper-list";for(const paper of items){const li=document.createElement("li");const a=document.createElement("a");a.href=paper.file;a.target="_blank";a.rel="noopener";const t=document.createElement("span");t.textContent=paper.title;const p=document.createElement("span");p.className="pdf";p.textContent="Read PDF ↗";a.append(t,p);li.appendChild(a);list.appendChild(li)}section.appendChild(list)}else{const e=document.createElement("div");e.className="empty";e.textContent="Papers will appear here as they are added.";section.appendChild(e)}
 target.appendChild(section);
}
