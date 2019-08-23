function theBeatlesPlay(musicians, instruments) {
   var playinst = [];
   var lit1;
   for (let occ=0; occ < musicians.length; occ++ ) {
     lit1 = musicians[occ] + ' plays ' + instruments[occ];
     playinst.push(lit1)
   }
   return playinst
}

function johnLennonFacts(facts) {
  var exclfacts = [];
  var occ = 0;
  var lit1;
  while (occ < facts.length) {
    lit1 = facts[occ] + "!!!";
    exclfacts.push(lit1);
    occ = occ + 1;
  }
  return exclfacts
}

function iLoveTheBeatles(int) {
  var lovtab = [];
  var lit1 = "I love the Beatles!";
  var occ = 0;
  var cnt = int;
  do {
    lovtab[occ] = lit1;
    occ = occ + 1;
    cnt = cnt + 1;
  }
  while (cnt < 15);
  return lovtab
}
