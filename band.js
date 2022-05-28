console.log("band connected")

/// scroll snapping za members
let members = document.getElementById("members");
let cooldown = 0;
document.addEventListener("scroll",()=> {
    if(scrollY > 450 && scrollY < 600 && cooldown == 0){
        let y = members.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({top: y, behavior: 'smooth'});
        cooldown = 1;
        setTimeout(()=>{cooldown = 0}, 5000)
    }
    console.log(scrollY)
})





/// promjena videa i teksta za player
let naslov = document.getElementById("naslov");
let tekst = document.getElementById("tekst");
let video = document.getElementById("video");


function promjeni(ime){
    switch (ime){
        case 1:
            naslov.innerHTML = "Kill 'em";
            tekst.innerHTML = "Keep your distance from me is all I got to say<br>cuz one day time will come when you will have to pay<br>Putting yourself over others is a greedy deed<br>You should go to trial for betraying your own creed<br>I have witnessed many times a creation of insanity<br>Depiction represented is one of inhumanity<br>Sitting on a ticking bomb is something of a habit<br>Just like this great show is thanks to Black Sabbath<br><br><strong>KILL EM<br>Toxic waste,<br>That shouldn't exist,<br>Now let's see...Who's on the list</strong><br><br>Now the time has fucking come for you to fuckin jump<br>Or run the fuck away from all of us like Forrest Gump<br>Your opinions are trash, your moment is a flash<br>Leave this toxic planet and let us fucking Thrash<br>Think you are esthetic?, we think you're just pathetic<br>The dilusion tells me that you think you're a prophet<br>Climb up to the throne made by sweat and tears<br>Get brainwashed and succom to your fears<br><br>KILL EM<br>Toxic waste,<br>That shouldn't exist,<br>Now let's see...Who's on the list<br><br>Nearing  the end of this under planned story<br>The conclusion shows us that there is no fuckin glory<br>No more will we need to show that you are  irrelevant<br>To us you're a joke like this exausted country's president<br>Now your stupid face has a ol stupid grim<br>When you stand infront of them put down your fucking chin<br>Dont u dare look into their blackened eyes<br>Take off and throw away your fucking disguise<br><br>KILL EM<br>Toxic waste,<br>That shouldn't exist,<br>Now let's see...Who's on the list<br><br>***<br><br>GET FUCKING TRASHED";
            naslov.scrollIntoView({behavior: "smooth", block:"center"});
        break;
        case 2:
            naslov.innerHTML = "Lightbringer";
            tekst.innerHTML = "Making money from your filthy lies<br>Fear the poor with their demise <br>Prejudice, shit it runs in generations<br>Stating pedophilia and rape accusations<br><br>False prosperity and fake liberation<br>Slowly destroying every fucking nation<br>Don't trust that shit it will ruin your life <br>Fuck the curch and fuck the christ <br><br>Lightbringer<br>He told the truth<br>Lightbringer<br>About the church<br><br>Lightbringer<br>He told the truth<br>Lightbringer<br>About the church<br><br>The bible is nothing more than fucking fairytales<br>They all need some bigger rusty nails<br>The priests are all fucking greedy<br>Fuck you and your damned sanity <br><br>Religion is a scam, religion is a crime<br>They'll do anything to get to your dime. <br>We wont shut up, cuz we ain't  fucking weak. <br>Fuck the church, they can suck our dick. <br><br>Lightbringer<br>He told the truth<br>Lightbringer<br>About the church<br><br>Lightbringer<br>He told the truth<br>Lightbringer<br>About the church";
            naslov.scrollIntoView({behavior: "smooth", block:"center"});
        break;
        case 3:
            naslov.innerHTML = "Princess of Hell";
            tekst.innerHTML = "Apocalypse never stood still<br>Minions always performing its will<br>Money and power it wields like a sword<br>It shines in your eyes and snatches your soul<br><br>One find a suitable host<br>Two get his deepest desire<br>Three turn him on what he loves most<br>Four rebirth him in hellfire<br><br>Beelzebub the lord of the flies<br>Anonymous army gives you disguise<br>Power in numbers and mob mentality <br>All stand to prove his immortality<br><br>Its seven heads and ten horns leading the legions of hell<br>Eating the newborn there on its bed and planting one of his own<br>Seeing his might you tremble in fear bidding your weakness fairwell<br>Trading blows with god himself he'll see you trough to your trone<br>Stop... when you hear my name<br><br>Azazel marking your skin<br>His power will grow with your every sin<br>You're feeling his brimstone boiling within<br>Gowing his might for our imminent win<br><br>One tally an army for him<br>Two corrupt the core of their being<br>Three slaughter man at a whim<br>Four the sound of his trumpet shall ring<br><br>Belial whose trumpet shall blow<br>Lucifer ruler of kingdoms below<br>Leviathan the god of the sea<br>Driving insane the ones who can see<br><br>Its seven heads and ten horns leading the legions of hell<br>Eating the newborn there on its bed and planting one of his own<br>Seeing his might you tremble in fear bidding your weakness fairwell<br>Trading blows with god himself he'll see you trough to your trone<br>Stop... when you hear my name";
            naslov.scrollIntoView({behavior: "smooth", block:"center"});
        break;
        case 4:
            naslov.innerHTML = "Thrash All Night";
            tekst.innerHTML = "I can see you all tonight,<br>Lookin for fun am i right ?<br>Stand with beers wipe them tears,<br>For the party forget the fears,<br><br>Start a pit, run in it,<br>Kuz its hot as fuck tonight,<br>Break a head, break a leg,<br>For your life you must fight,<br><br>Thrash all night (×4)<br><br>My existance was and is a lie,<br>Never stopped what passed me by,<br>Science, Life, Earth and rees,<br>Fucks my life in her 30's,<br><br>Now im here to change all that,<br>Apprentice in my habitat,<br>We are here to change the scene,<br>Weren't stopped by quarantine,<br><br>Thrash all night (x4)<br><br>***<br><br>Fighting,<br>The Battle,<br>To win,<br>Against the,<br>Pozers,<br>In this,<br>Crowd,<br>That we shall kill<br><br>All the fakers fuck right out,<br>This aint the place for your clout,<br>All the others just headbang,<br>Or prepare your neck to hang,<br><br>Hides in a shadows like a crow,<br>But can't escape a hammer hrow,<br>I stand here with my band,<br>You stand there without your gang,<br><br>Thrash all night (×4)<br><br>Your opinions just mean hit,<br>Cuz u a little hypocrite,<br>Now say that I ain't kind,<br>I'll just add that i don't mind,<br><br>Thrash all night (x2)<br><br>What do we do ?<br>THRASH ALL FUCKING NIGHT";
            naslov.scrollIntoView({behavior: "smooth", block:"center"});
        break;
        case 5:
            naslov.innerHTML = "Run or Rip";
            tekst.innerHTML = "Merciless bombing destroying the streets<br>Ground is shaking with terrorised screams<br>Shattered glass tears into your flesh<br>What once was a city is now turned to ash<br>***<br>Motherless children are taken away<br>Beaten to death while their bodies are frail<br>Women molested inside their own home<br>Units of soldiers will ravage their holes<br><br>'92<br>Hell's domain<br>When balkans asked which god shall reign <br><br>Civilians escaping trough underground tunnels<br>Gasping for air they keep to their struggle<br>Snipers await where they see the light<br>A dead barren wasteland is their final sight<br>***<br>Eight thousand dead, seventy two buried <br>Three hundred are still awaiting their jury<br>Justice not served, their voices not heard<br>For crimes you committed forever you'll burn<br><br>'92<br>Hell's domain<br>When balkans asked which god shall reign <br><br>Standing over your neighbor's fresh corpse<br>A knife in your hand, his gut full of holes<br>Religious extremist, you sealed his faith<br>He celebrates christmas two weeks too late<br>***<br>Fight for beliefs lasts to this day<br>Eternal damnation the price they will pay<br>Delusional help presented by the police <br>Your only option is to run or r.i.p.";
            naslov.scrollIntoView({behavior: "smooth", block:"center"});
        break;
        case 6:
            naslov.innerHTML = "End of Jesus";
            tekst.innerHTML = "Earth's on fire, doom is coming down <br>Ground is black and the sky is brown<br>Sulfur fires are burnung our homes<br>Threatening humans with nuclear bombs.<br><br>Your praying wont do us any good<br>Mass shooting is in our neighborhood<br>He wont help you even if you cry<br>Soo offer your soul for the devil to buy<br><br>Hell is on the earth<br>The end of jesus<br>Wait for his rebirth<br>The end of jesus<br>Your false belief<br>The end of jesus <br>The end is near<br>The end of jesus<br><br>Thoughts of burning hell shatter you<br>There is a cell waiting for you too <br>Awaiting your faith, salvation is none<br>Everything here must be undone <br><br>His came to save us, where is he now<br>Lucifer is here, time for you to bow<br>Sitting on his throne, give him his crown<br>Waiting for your God? Dont be a clown.<br><br>Hell is on the earth<br>The end of jesus<br>Wait for his rebirth<br>The end of jesus<br>Your false belief<br>The end of jesus <br>The end is near<br>The end of jesus";
            naslov.scrollIntoView({behavior: "smooth", block:"center"});
        break;
        case 7:
            naslov.innerHTML = "Undergrount Pitbulls";
            tekst.innerHTML = "Beware of the streets when you walk alone,<br>Hiding in shadows like a clan of ghosts,<br>They will kill just for a piece of bone,<br>So dangerous and strong like a Corleone,<br><br>They don't have mercy, they dont have sympathy,<br>All for the pride they stand for,<br>They run, search, protect, smell, hunt and kill,<br>They will find the one who has to pay the bill,<br><br>Like a mafia, gentleman<br>Pitbulls on the street, beware of them,<br>Your corpse will be filled, with holes<br>When you hear a noise, run<br>Underground pitbulls<br><br>A gang of yours is no match,<br>When knives come out your pride is gone,<br>A good kill for them is a nice catch,<br>Better run, better ide,<br>Your life with them is a goodbye,<br><br>Hunter on your back and a killer on the track,<br>You're getting scared from being thrown way,<br>No mercy, no sympathy, eliminate the human being,<br>They will search, they will find, its a kill for a pathetic mind,<br><br>Like a mafia, gentleman<br>Pitbulls on the street, beware of them,<br>Your corpse will be filled, with holes<br>When you hear a noise, run<br>Underground pitbulls<br><br>Be there when the ventriloquist comes,<br>He will control your life and the rest,<br>Thy life is a miserable vaste of time,<br>Thy are toxic and annoying like a pest,<br><br>They don't have mercy, they dont have sympathy,<br>All for the pride they stand for,<br>Now you run, smell, hunt and kill cuz you think its cool<br>Still watch out for the nderground Pitbull";
            naslov.scrollIntoView({behavior: "smooth", block:"center"});
        break;
        case 8:
            naslov.innerHTML = "Prodigy";
            tekst.innerHTML = "Choice you took, was your future,<br>Not knowing what it will give,<br>Started tuning his beautiful creation,<br>That was the life that e will live,<br><br>Now he goes to play along,<br>Then at 16 he has a bond,<br>Gettin on the scene with Quiet fuckin Riot,<br>Now sees he right and wrong.<br><br>For once in a lifetime,<br>We see a player like you,<br>A generation wiped out,<br>Now you're resting with he rew<br><br>In later years there was a mistake,<br>It was the only risk he had to take,<br>79' was the golden and special year,<br>It as hen with Ozzy he had a beer,<br><br>Now he's with The Prince of Darkness,<br>A player as rare as The Loch Ness Monster,<br>His future oreseen as a movie ending,<br>But his carrer was just beginning,<br><br>For once in a lifetime,<br>We see a player like you,<br>A eneration wiped out,<br>Now you're resting with the crew";
            naslov.scrollIntoView({behavior: "smooth", block:"center"});
        break;
        case 9:
            naslov.innerHTML = "Soceital Scum";
            tekst.innerHTML = "Trow your hands in circles,<br>whip 'em 'roud<br>like a fucking poser <br><br>We don't need no fucking proof, <br>we'll look at you <br>and easily expose you<br><br>Talk about how much you drink<br>while youre on your first beer<br>you show off<br><br>Thinking that you're all the shit, <br>you piss me off <br>And make me wanna trow up<br>***<br>Run the fuck away<br>We are here to slay<br>Your body shakes with fear<br>You know the end is near<br>***<br>Muscle spasms<br>rip your nails off, <br>pain<br><br>Give it all<br>for a needle<br>in your vein<br><br>Manic screaming,<br>gums bleeding, <br>panik<br><br>Next to us <br>you're fucking<br>pathetic<br>***<br>Run the fuck away<br>We are here to slay<br>Your body shakes with fear<br>You know the end is near<br>***<br>Won't you come down<br>Get fixed up again<br>You're withering down<br>You're seeing the end";
            naslov.scrollIntoView({behavior: "smooth", block:"center"});
        break;
        case 10:
            naslov.innerHTML = "Reign of god";
            tekst.innerHTML = "God's in jail for crimes against humanity<br>stories left, he is nowhere to be found<br>Many shed their blood for his stupidity<br>Scarring on our children so profound<br><br>Pastoring us down a path of genocide<br>Even if your book says give them love<br>Army of his children standing side by side<br>He doesn't stop them with a peacefull dove<br><br>Alas,<br>His war Begins!<br>Run for The chance<br>to live on! Alas, <br>Reign of God!<br><br>To ascend the trone he said he'll give us peace<br>But so far he's given us just war<br>Men will turn on men to fight for their beliefs<br>Why do they fight if there's only one?<br> <br>All of us are sinners that's what they believe <br>But sinners killing sinners ist wrong? <br>So they kill each other for his dignity <br>But never notice they sing the same song<br><br>Alas,<br>His war Begins!<br>Run for The chance<br>to live on! Alas, <br>Reign of God!";
            naslov.scrollIntoView({behavior: "smooth", block:"center"});
        break;
        case 11:
            naslov.innerHTML = "The Pit";
            tekst.innerHTML = "Thunder, eardrums blown<br>It isn't lightning it's our fuckin show<br>A pit has opened to swallow you whole<br>Your blood is boiling, you're out of control <br><br>Fire, I'm burnin' up<br>Im off on a rampage I'll never stop<br>If you're in my way you're looking to die <br>The moshpit has opened, heads will fly<br><br>So come at me<br>I know you're full of shit<br>And if you're not<br>Jump in the pit<br><br>Jump in the pit x4<br><br>Blood, on the floor<br>My finger's broken, only count to four<br>Coming at you with incredible force<br>Giving your head and your neck a divorce<br><br>Murder, is going down<br>Your head hits my body, you hit the ground<br>Get trampled down in a metal stampede <br>Your soul leaves your body as you start to bleed<br><br>So come at me<br>I know you're full of shit<br>And if you're not<br>Jump in the pit<br><br>Jump in the pit x4";
            naslov.scrollIntoView({behavior: "smooth", block:"center"});
        break;
        case 12:
            naslov.innerHTML = "Drink";
            tekst.innerHTML = "Wasted rumbling trough the street<br>Barely standing on my feet<br>Couldn't feel the cold, i almost froze<br>But that's the life i chose<br><br>A rusty crew up in the corner<br>Beer's the only thing we order<br>We don't care 'bout what you think<br>We just want to drink<br><br>Drink<br>When you go out<br>Drink<br>Till you black out<br>Drink<br>Till you trow up<br>We're never gonna stop<br><br>So you want to drink with us?<br>Buy a round and come right up<br>We'll be getting one right back<br>We're not tough to crack<br><br>If you're at odds with everyone<br>Come right up and sit on down<br>We'll be fast to take you in<br>If you're down to sin<br><br>Drink<br>When you go out<br>Drink<br>Till you black out<br>Drink<br>Till you trow up<br>We're never gonna stop<br><br>Drink x16";
            naslov.scrollIntoView({behavior: "smooth", block:"center"});
        break;

    }
}