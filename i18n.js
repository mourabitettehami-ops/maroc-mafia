(function(){
// [Arabic, English, French]
var D=[
["تنقذ كل ليلة لاعبا واحدا، ويمكنك إنقاذ نفسك مرة واحدة فقط في اللعبة","You save one player each night, and you can save yourself only once in the game","Tu sauves un joueur chaque nuit, et tu peux te sauver toi-même une seule fois dans la partie"],
["الفيوز خلف الباب، به تُفتح البوابة الخضراء على يمين الممر","The fuse is behind the door; it opens the green gate on the right of the corridor","Le fusible est derrière la porte ; il ouvre le portail vert à droite du couloir"],
["من يأخذ أكثر الأصوات تكون له فرصة أخيرة للدفاع عن نفسه","Whoever gets the most votes has one last chance to defend himself","Celui qui a le plus de votes a une dernière chance de se défendre"],
["تفوزون إذا هرب الجميع، وتخسرون إذا أُمسك كل من بقي","You win if everyone escapes, and lose if everyone left is caught","Vous gagnez si tout le monde s’échappe, et vous perdez si tous ceux qui restent sont attrapés"],
["المضيف يدير اللعبة، فلا يغلق الصفحة أثناء اللعب","The host runs the game, so he must not close the page while playing","L’hôte gère la partie, il ne doit donc pas fermer la page pendant le jeu"],
["من ينشئ الغرفة هو المضيف ويرسل الرمز لأصدقائه","Whoever creates the room is the host and sends the code to his friends","Celui qui crée la salle est l’hôte et envoie le code à ses amis"],
["وتفوز المافيا عندما يتساوى عددها مع الباقين","The Mafia wins when their number equals the others","La Mafia gagne quand elle est aussi nombreuse que les autres"],
["حاولت المافيا القتل لكن الطبيب أنقذ الضحية","The Mafia tried to kill but the doctor saved the victim","La Mafia a tenté de tuer mais le médecin a sauvé la victime"],
["اهربوا من البيت المظلم قبل أن يمسككم الشبح","Escape the dark house before the ghost catches you","Échappez-vous de la maison sombre avant que le fantôme ne vous attrape"],
["ابحث عن المفتاح في الغرف لفتح الباب الخشبي","Find the key in the rooms to open the wooden door","Cherche la clé dans les pièces pour ouvrir la porte en bois"],
["الفيوز لتفتح البوابة الخضراء واهربوا كلكم","the fuse to open the green gate and escape together","le fusible pour ouvrir le portail vert et vous échapper tous ensemble"],
["وتظهر النتيجة بعد أن يصوّت كل اللاعبين","and the result appears after all players have voted","et le résultat s’affiche après que tous les joueurs ont voté"],
["المافيا تختار ضحية، الطبيب ينقذ لاعبا","The Mafia picks a victim, the doctor saves a player","La Mafia choisit une victime, le médecin sauve un joueur"],
["في الليل تتكلم المافيا فقط في قناتها","At night only the Mafia talk, in their own channel","La nuit, seule la Mafia parle, dans son canal"],
["لم يتفق الجميع على أحد، لم يخرج أحد","Nobody agreed on anyone, no one is out","Personne ne s’est mis d’accord, personne n’est éliminé"],
["يفوز المواطنون إذا خرجت كل المافيا","The citizens win if all the Mafia are out","Les citoyens gagnent si toute la Mafia est éliminée"],
["اقتل مع فريقك كل ليلة دون أن تُكشف","Kill with your team each night without being exposed","Tue avec ton équipe chaque nuit sans te faire découvrir"],
["إذا زاد الإعدام يخرج ويُكشف دوره","If execution gets more votes he is out and his role is revealed","Si l’exécution l’emporte, il est éliminé et son rôle est révélé"],
["اكتم نفسك عندما تموت أو في الليل","Mute yourself when you die or at night","Coupe ton micro quand tu meurs ou la nuit"],
["تتحقق كل ليلة هل لاعب من المافيا","Each night you check whether a player is Mafia","Chaque nuit, tu vérifies si un joueur est de la Mafia"],
["تم نسخ الدعوة، الصقها في واتساب","Invitation copied, paste it in WhatsApp","Invitation copiée, colle-la dans WhatsApp"],
["البيت مظلم، لا ترى إلا ما حولك","The house is dark, you only see what is around you","La maison est sombre, tu ne vois que ce qui t’entoure"],
["في انتظار المضيف ليبدأ اللعبة","Waiting for the host to start the game","En attente de l’hôte pour lancer la partie"],
["لا يمكنك إنقاذ نفسك مرة ثانية","you cannot save yourself again","tu ne peux plus te sauver toi-même"],
["يبدأ التصويت بعد انتهاء الوقت","Voting starts when time is up","Le vote commence à la fin du temps"],
["له فرصة أخيرة للدفاع عن نفسه","has one last chance to defend himself","a une dernière chance de se défendre"],
["ابحث في الغرف ثم افتح الباب","Search the rooms, then open the door","Cherche dans les pièces puis ouvre la porte"],
["تأكد من الإنترنت ومن قواعد","Check your internet and the rules of","Vérifie ta connexion et les règles de"],
["العب لعبة الهروب من الشبح","Play the ghost escape game","Joue au jeu d’évasion du fantôme"],
["الزعيم يظهر للمفتش بريئا","The boss appears innocent to the inspector","Le chef apparaît innocent aux yeux de l’inspecteur"],
["التعادل في التصويت الأول","A tie in the first vote","Une égalité au premier vote"],
["صوّت لمن تظنه من المافيا","Vote for whoever you think is Mafia","Vote pour celui que tu penses être de la Mafia"],
["يجب أن يلمسك صديق لينقذك","A friend must touch you to rescue you","Un ami doit te toucher pour te sauver"],
["العب مع أصدقائك أونلاين","Play online with your friends","Joue en ligne avec tes amis"],
["، والمفتش يتحقق من لاعب",", and the inspector checks a player",", et l’inspecteur vérifie un joueur"],
["ناقش وصوّت لكشف المافيا","Discuss and vote to expose the Mafia","Discute et vote pour démasquer la Mafia"],
["لا توجد غرفة بهذا الرمز","No room with this code","Aucune salle avec ce code"],
["تعال نلعبو مافيا مغربية","Come play Moroccan Mafia with us","Viens jouer à la Mafia marocaine avec nous"],
["دافع عن نفسك في الدردشة","Defend yourself in the chat","Défends-toi dans le chat"],
["أو أسرع إذا ضغط الجميع","or sooner if everyone presses","ou plus tôt si tout le monde appuie sur"],
["حرّك بإصبعك على الشاشة","Move with your finger on the screen","Déplace-toi avec ton doigt sur l’écran"],
["المضيف غير متصل حاليا","The host is not connected right now","L’hôte n’est pas connecté pour le moment"],
["اللعبة بدأت قبل دخولك","the game started before you joined","la partie a commencé avant ton arrivée"],
["ناقشوا من تشكّون فيه","Discuss who you suspect","Discutez de qui vous soupçonnez"],
["الآخرون يقررون مصيرك","The others are deciding your fate","Les autres décident de ton sort"],
["العودة للعبة المافيا","Back to the Mafia game","Retour au jeu de la Mafia"],
["المصباح يوسّع الرؤية","The flashlight widens your vision","La lampe élargit ta vision"],
["ونفسه مرة واحدة فقط","and himself only once","et lui-même une seule fois"],
["نتيجة الحكم النهائي","Final verdict result","Résultat du verdict final"],
["، ويحررك صديق بلمسك",", and a friend frees you by touching you",", et un ami te libère en te touchant"],
["تعال نهربو من الشبح","Come escape the ghost with us","Viens t’échapper du fantôme avec nous"],
["يبدأ بنقاش دقيقتين","starts with a two-minute discussion","commence par deux minutes de discussion"],
["، ثم يصوّت الباقون",", then the others vote",", puis les autres votent"],
["الأموات لا يتكلمون","The dead do not talk","Les morts ne parlent pas"],
["اكتب اسمك ورمزا من","Enter your name and a code of","Écris ton nom et un code de"],
["نتيجة تصويت النهار","Day vote result","Résultat du vote du jour"],
["، ثم يصوّت الجميع",", then everyone votes",", puis tout le monde vote"],
["المفتش يراك بريئا","The inspector sees you as innocent","L’inspecteur te voit innocent"],
["مرّت الليلة بسلام","The night passed peacefully","La nuit s’est passée en paix"],
["لديه أكثر الأصوات","has the most votes","a le plus de votes"],
["اختر من تتحقق منه","Choose who to check","Choisis qui vérifier"],
["هذه فرصتك الأخيرة","This is your last chance","C’est ta dernière chance"],
["المس صديقا مقيّدا","Touch a chained friend","Touche un ami enchaîné"],
["إذا أمسكك تُقيَّد","If he catches you, you are chained","S’il t’attrape, tu es enchaîné"],
["إنشاء غرفة جديدة","Create a new room","Créer une nouvelle salle"],
["أنت زعيم المافيا","You are the Mafia boss","Tu es le chef de la Mafia"],
["هذا الرمز مستعمل","This code is already used","Ce code est déjà utilisé"],
["لاعبين على الأقل","players minimum","joueurs minimum"],
["في انتظار الباقي","Waiting for the others","En attente des autres"],
["أنت جاهز للتصويت","You are ready to vote","Tu es prêt à voter"],
["أنا جاهز للتصويت","I am ready to vote","Je suis prêt à voter"],
["امتنع عن التصويت","Abstain from voting","S’abstenir de voter"],
["التصويت النهائي","Final vote","Vote final"],
["أنت خارج اللعبة","You are out of the game","Tu es hors du jeu"],
["الهروب من الشبح","Escape from the Ghost","Fuite du fantôme"],
["دخول غرفة صديق","Join a friend’s room","Rejoindre la salle d’un ami"],
["أحرف على الأقل","characters minimum","caractères minimum"],
["ليس من المافيا","is not Mafia","n’est pas de la Mafia"],
["زعيم المافيا،","Mafia boss,","chef de la Mafia,"],
["اختر رمزا آخر","Choose another code","Choisis un autre code"],
["فاز المواطنون","The citizens win","Les citoyens gagnent"],
["في الليل وكان","in the night and was","cette nuit et était"],
["إعدام أم عفو؟","Execute or pardon?","Exécuter ou gracier ?"],
["دعوة الأصدقاء","Invite friends","Inviter des amis"],
["الحكم النهائي","Final verdict","Verdict final"],
["نتيجة التحقيق","Investigation result","Résultat de l’enquête"],
["البوابة جاهزة","gate ready","portail prêt"],
["أنت تشاهد فقط","You are only watching","Tu regardes seulement"],
["انتظر الباقين","Wait for the others","Attends les autres"],
["العب مرة أخرى","Play again","Rejouer"],
["مافيا مغربية","Moroccan Mafia","Mafia marocaine"],
["قواعد اللعبة","Game rules","Règles du jeu"],
["زعيم المافيا","Mafia boss","Chef de la Mafia"],
["تعذر الاتصال","Connection failed","Connexion impossible"],
["فازت المافيا","The Mafia wins","La Mafia gagne"],
["انتهى النقاش","Discussion is over","La discussion est terminée"],
["ابدأ التصويت","Start voting","Commencez à voter"],
["انتظر الصباح","wait for morning","attends le matin"],
["اختر من تقتل","Choose who to kill","Choisis qui tuer"],
["اختر من تنقذ","Choose who to save","Choisis qui sauver"],
["اسمعوا دفاعه","Listen to his defense","Écoutez sa défense"],
["دافع عن نفسك","Defend yourself","Défends-toi"],
["قناة المافيا","Mafia channel","Canal de la Mafia"],
["لا أحد يتكلم","nobody talks","personne ne parle"],
["الشبح يطاردك","The ghost chases you","Le fantôme te poursuit"],
["أمسككم الشبح","The ghost caught you","Le fantôme vous a attrapés"],
["دقيقة واحدة","one minute","une minute"],
["ادخلوا كلكم","Everyone join","Entrez tous dans"],
["غادر اللعبة","left the game","a quitté la partie"],
["بدأت اللعبة","The game started","La partie a commencé"],
["ابدأ اللعبة","Start the game","Lancer la partie"],
["نقاش النهار","Day discussion","Discussion du jour"],
["فرصة الدفاع","Defense chance","Chance de défense"],
["أنهيت دفاعي","I finished my defense","J’ai terminé ma défense"],
["اسمع الدفاع","Listen to the defense","Écoute la défense"],
["اختر شخصيتك","Choose your character","Choisis ton personnage"],
["ابدأ الهروب","Start the escape","Lancer l’évasion"],
["الباب مفتوح","door open","porte ouverte"],
["هربتم جميعا","You all escaped","Vous vous êtes tous échappés"],
["أمسكك الشبح","The ghost caught you","Le fantôme t’a attrapé"],
["رمز الغرفة","Room code","Code de la salle"],
["غرفة صوتية","Voice room","Salon vocal"],
["اكتب رسالة","Write a message","Écris un message"],
["لم يتم ضبط","Setup missing for","Configuration manquante pour"],
["من الإعدام","from the execution","de l’exécution"],
["تم اختيارك","Your choice is made","Ton choix est fait"],
["من المافيا","is Mafia","est de la Mafia"],
["لعبة جديدة","New game","Nouvelle partie"],
["حلّ الليل","Night falls","La nuit tombe"],
["تابع بصمت","Watch in silence","Regarde en silence"],
["أو الأسهم","or the arrows","ou les flèches"],
["إعدام أو","Execute or","Exécuter ou"],
["راجع ملف","Check the file","Vérifie le fichier"],
["اللاعبون","Players","Joueurs"],
["أنت نائم","You are asleep","Tu dors"],
["هل يستحق","Does","Est-ce que"],
["الإعدام؟","deserve execution?","mérite l’exécution ?"],
["حسم الآن","Decide now","Trancher maintenant"],
["كيف تلعب","How to play","Comment jouer"],
["الدردشة","Chat","Chat"],
["الأدوار","Roles","Rôles"],
["مواطنون","Citizens","Citoyens"],
["امتنعوا","Abstained","Se sont abstenus"],
["التصويت","Voting","Vote"],
["مافيا،","Mafia,","Mafia,"],
["النهار","Day","Jour"],
["لا أحد","no one","personne"],
["الرابط","Link","Lien"],
["المضيف","Host","Hôte"],
["الليلة","Night","Nuit"],
["صوّتَّ","You voted","Tu as voté"],
["المتهم","Accused","Accusé"],
["للمضيف","for the host","pour l’hôte"],
["ما حدث","What happened","Ce qui s’est passé"],
["لاعبين","players","joueurs"],
["الأفضل","Best:","Idéal :"],
["لتنقذه","to rescue him","pour le sauver"],
["لاعبا","a player","un joueur"],
["إرسال","Send","Envoyer"],
["طبيب،","Doctor,","Médecin,"],
["مفتش،","Inspector,","Inspecteur,"],
["الليل","Night","Nuit"],
["للصوت","For voice","Pour la voix"],
["مافيا","Mafia","Mafia"],
["مواطن","Citizen","Citoyen"],
["أُعدم","was executed","a été exécuté"],
["إعدام","Execute","Exécuter"],
["فريقك","Your team","Ton équipe"],
["ثانية","sec","s"],
["مبروك","Congratulations","Félicitations"],
["اسمك","Your name","Ton nom"],
["مثلا","e.g.","ex."],
["يوسف","Youssef","Youssef"],
["جاهز","ready","prêt"],
["طبيب","Doctor","Médecin"],
["مفتش","Inspector","Inspecteur"],
["لاعب","Player","Joueur"],
["يلزم","Need","Il faut"],
["قُتل","was killed","a été tué"],
["وكان","and was","et était"],
["اضغط","tap","appuie"],
["صوّت","voted","a voté"],
["، خذ",", take",", prends"],
["هربت","You escaped","Tu t’es échappé"],
["إلى","to","à"],
["عفو","Pardon","Gracier"],
["نجا","survived","a survécu"],
["أنت","you","toi"],
["من","from","de"],
["حي","alive","vivant"]
];
var LG=[
[/^(\S+) بدأت اللعبة\. حلّ الليل\.\.\.$/,function(e){return e+' The game started. Night falls...'},function(e){return e+' La partie commence. La nuit tombe...'}],
[/^(\S+) قُتل (.+) في الليل وكان (.+)\.$/,function(e,a,r){return e+' '+a+' was killed in the night and was '+tr(r)+'.'},function(e,a,r){return e+' '+a+' a été tué cette nuit et était '+tr(r)+'.'}],
[/^(\S+) حاولت المافيا القتل لكن الطبيب أنقذ الضحية!$/,function(e){return e+' The Mafia tried to kill but the doctor saved the victim!'},function(e){return e+' La Mafia a tenté de tuer mais le médecin a sauvé la victime !'}],
[/^(\S+) مرّت الليلة بسلام\.$/,function(e){return e+' The night passed peacefully.'},function(e){return e+' La nuit s’est passée en paix.'}],
[/^(\S+) (.+) لديه أكثر الأصوات\. له فرصة أخيرة للدفاع عن نفسه!$/,function(e,a){return e+' '+a+' has the most votes. He has one last chance to defend himself!'},function(e,a){return e+' '+a+' a le plus de votes. Il a une dernière chance de se défendre !'}],
[/^(\S+) لم يتفق الجميع على أحد، لم يخرج أحد\.$/,function(e){return e+' Nobody agreed on anyone, no one is out.'},function(e){return e+' Personne ne s’est mis d’accord, personne n’est éliminé.'}],
[/^(\S+) التصويت النهائي: إعدام أم عفو؟$/,function(e){return e+' Final vote: execute or pardon?'},function(e){return e+' Vote final : exécuter ou gracier ?'}],
[/^(\S+) أُعدم (.+) وكان (.+)\.$/,function(e,a,r){return e+' '+a+' was executed and was '+tr(r)+'.'},function(e,a,r){return e+' '+a+' a été exécuté et était '+tr(r)+'.'}],
[/^(\S+) نجا (.+) من الإعدام!$/,function(e,a){return e+' '+a+' survived the execution!'},function(e,a){return e+' '+a+' a survécu à l’exécution !'}],
[/^(\S+) (.+) غادر اللعبة\.$/,function(e,a){return e+' '+a+' left the game.'},function(e,a){return e+' '+a+' a quitté la partie.'}],
[/^(\S+) فازت المافيا!$/,function(e){return e+' The Mafia wins!'},function(e){return e+' La Mafia gagne !'}],
[/^(\S+) فاز المواطنون!$/,function(e){return e+' The citizens win!'},function(e){return e+' Les citoyens gagnent !'}],
[/^(\S+) انتهى النقاش\. ابدأ التصويت!$/,function(e){return e+' Discussion is over. Start voting!'},function(e){return e+' La discussion est terminée. Place au vote !'}]
];
var L='ar';try{L=localStorage.getItem('lang')||'ar'}catch(e){}
if(L!=='en'&&L!=='fr')L='ar';
var LET='\\u0621-\\u065F';
function rx(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}
var R=D.slice().sort(function(a,b){return b[0].length-a[0].length}).map(function(d){
  var k=d[0],lead=/^[\u0621-\u065F]/.test(k),trail=/[\u0621-\u065F]$/.test(k);
  return [new RegExp((lead?'(^|[^'+LET+'])':'()')+rx(k)+(trail?'(?![' +LET+'])':''),'g'),d[1],d[2]];
});
var HAS=/[\u0621-\u065F]/;
window.tr=function(s){
  if(L==='ar'||!HAS.test(s))return s;
  var i=L==='en'?1:2;
  R.forEach(function(r){s=s.replace(r[0],function(m,p){return p+r[i]})});
  return s.replace(/،/g,',').replace(/؟/g,'?');
};
window.trLog=function(x){
  if(L==='ar')return x;
  var i=L==='en'?1:2;
  for(var j=0;j<LG.length;j++){var m=x.match(LG[j][0]);if(m)return LG[j][i].apply(null,m.slice(1))}
  return tr(x);
};
window.getLang=function(){return L};
if(typeof document==='undefined'||!document.querySelector)return;
var DT=document.title;
function walk(n){
  if(n.nodeType===3){if(n.__o===undefined)n.__o=n.nodeValue;n.nodeValue=tr(n.__o)}
  else if(n.nodeType===1&&!n.hasAttribute('data-nt')&&!/^(SCRIPT|STYLE)$/.test(n.tagName)){
    ['placeholder','title'].forEach(function(a){if(n.hasAttribute(a)){if(n['__'+a]===undefined)n['__'+a]=n.getAttribute(a);n.setAttribute(a,tr(n['__'+a]))}});
    n.childNodes.forEach(walk);
  }
}
function apply(){
  document.documentElement.lang=L;
  document.documentElement.dir=L==='ar'?'rtl':'ltr';
  document.title=tr(DT);
  walk(document.body);
  var b=document.querySelectorAll('#lgbar button');
  for(var i=0;i<b.length;i++)b[i].style.outline=b[i].getAttribute('data-l')===L?'2px solid #ffd43b':'none';
}
window.setLang=function(l){L=l;try{localStorage.setItem('lang',l)}catch(e){}apply();if(window.onLang)window.onLang()};
var w=document.querySelector('.wrap');
if(w){
  var bar=document.createElement('div');bar.id='lgbar';bar.setAttribute('data-nt','');
  bar.style.cssText='display:flex;gap:6px;justify-content:center;margin:0 0 8px;direction:ltr';
  [['ar','العربية'],['en','English'],['fr','Français']].forEach(function(x){
    var bt=document.createElement('button');bt.textContent=x[1];bt.setAttribute('data-l',x[0]);
    bt.style.cssText='min-height:32px;padding:2px 12px;font-size:13px;border-radius:10px;border:1px solid rgba(255,255,255,.35);background:rgba(255,255,255,.14);color:inherit;cursor:pointer';
    bt.onclick=function(){setLang(x[0])};bar.appendChild(bt);
  });
  w.insertBefore(bar,w.firstChild);
}
apply();
})();
