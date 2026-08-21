const library=[
 {title:"Biblical Studies",folder:"biblical-studies",icon:"✧"},
 {title:"Theology",folder:"theology",icon:"✝"},
 {title:"Eschatology",folder:"prophecy-eschatology",icon:"⌛"},
 {title:"Essential Christianity",folder:"christian-life",icon:"♧"},
 {title:"Apologetics",folder:"apologetics",icon:"◈"},
 {title:"Topical Studies",folder:"topical-studies",icon:"❧"}
];
const papers={
 "christian-life":[
  {title:"My Greatest Failing: A Confession",file:"papers/my-greatest-failing.pdf"}
 ],
 "prophecy-eschatology":[
  {title:"Armageddon: Why Will the World Fight Against Jesus Christ?",file:"papers/armageddon-why-will-the-world-fight-against-jesus-christ.pdf.pdf"},
  {title:"Matthew 24 - Near and Far Fulfillment",file:"papers/Matthew 24 - Near and Far Fulfillment.pdf"}
 ]
};
const target=document.getElementById("library");
for(const category of library){
 const items=papers[category.folder]||[];
 const section=document.createElement("section");section.className="category";
 const icon=document.createElement("div");icon.className="icon";icon.textContent=category.icon;section.appendChild(icon);
 const heading=document.createElement("h2");heading.textContent=category.title;section.appendChild(heading);
 const rule=document.createElement("div");rule.className="cat-rule";section.appendChild(rule);
 if(items.length){const list=document.createElement("ul");list.className="paper-list";for(const paper of items){const li=document.createElement("li");const t=document.createElement("span");t.className="paper-title";t.textContent=paper.title;const a=document.createElement("a");a.href=paper.file;a.target="_blank";a.rel="noopener";a.className="paper-read";a.textContent="Read the Paper ↗";li.append(t,a);list.appendChild(li)}section.appendChild(list)}else{const e=document.createElement("div");e.className="empty";e.textContent="Papers will appear here as they are added.";section.appendChild(e)}
 target.appendChild(section);
}
