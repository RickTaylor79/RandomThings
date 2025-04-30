Content.makeFrontInterface(680, 800);

//Create & Populate Comboboxes

const var list1 = [1, 2, 3, 4, 5];
const var list2 = ["dog", "cat", "book", "car","bat", "plant"];
const var list3 = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l"];
const var list4 = ["Kick", "Snare", "Clap", "Cymbal","OHH", "CC", "Perc 1", "Perc 2"];

const var Menu =[];

for (i = 0; i < 6; i++)
{
    Menu[i] = Content.getComponent("Menu"+(i+1));

} 

Menu[0].set("items", list1.join("\n"));
Menu[1].set("items", list2.join("\n"));
Menu[2].set("items", list3.join("\n"));
Menu[3].set("items", list4.join("\n"));
Menu[4].set("items", list4.join("\n"));
Menu[5].set("items", list4.join("\n"));

//Randomise All
 
 const var Randoms = [Content.getComponent("random4"),
                      Content.getComponent("random3"),
                      Content.getComponent("random2"),
                      Content.getComponent("random1")];
 
 const var trig1 = Content.getComponent("trig1");
 const var trig2 = Content.getComponent("trig2");
 
 
 
 inline function onRandomAllControl(component, value)
 {
 		 for(s in Randoms)
 	    s.setValue(value);
 	     for(s in Randoms)
 	       s.changed();
 	       
 	       trig1.setValue(1);
 	       trig2.setValue(1);
 	       trig1.changed();
 	       trig2.changed();
 };
 
 Content.getComponent("RandomAll").setControlCallback(onRandomAllControl);
 

//RANDOM WITH LOCK

//Get UI Components

const var Lock =[];

for (i = 0; i < 9; i++)
{
    Lock[i] = Content.getComponent("Lock"+(i+1));

}  

const var Knob =[];

for (i = 0; i < 6; i++)
{
    Knob[i] = Content.getComponent("Knob"+(i+1));

}  

//Random buttons

inline function onrandom1Control(component, value)
{
	//check if locked

	local lockA = Lock[0].getValue();
	local lockB = Lock[1].getValue();
	local lockC = Lock[2].getValue();

if (value == 1)
{
		if (lockA == 0)
	{
		    Menu[0].setValue(Math.randInt(0, list1.length)+1);
  }
   
   if (lockB == 0)
   {
   	    Knob[0].setValue(Math.randInt(1, 5));	
       	
      }
      
      if (lockC == 0)
         {
         	    Knob[1].setValue(Math.randInt(-100, 1));
         	
            }
            
            }
};

Content.getComponent("random1").setControlCallback(onrandom1Control);

inline function onrandom2Control(component, value)
{
	local lockA = Lock[3].getValue();
	local lockB = Lock[4].getValue();
	local lockC = Lock[5].getValue();
	
	if (value == 1)
	
	{

		if (lockA == 0)
	{
		    Menu[1].setValue(Math.randInt(0, list2.length)+1);
  }
   
   if (lockB == 0)
   {
   	    Knob[2].setValue(Math.random());	
       	
      }
      
      if (lockC == 0)
       {
      
       	    Knob[3].setValue(Math.randInt(-100, 0));     	
      
            }  
            
    }              
};

Content.getComponent("random2").setControlCallback(onrandom2Control);

inline function onrandom3Control(component, value)
{
	local lockA = Lock[6].getValue();
	local lockB = Lock[7].getValue();
	local lockC = Lock[8].getValue();
	
	if (value == 1)

	{

	if (lockA == 0)
	{
		    Menu[2].setValue(Math.randInt(0, list3.length)+1);
  }
   
   if (lockB == 0)
   {
   	    Knob[4].setValue(Math.randInt(1, 4));	
       	
      }
      
      if (lockC == 0)
         {
         	    Knob[5].setValue(Math.randInt(-100, 0));
         	
            }
      }      
           
};

Content.getComponent("random3").setControlCallback(onrandom3Control);

///RANDOMISE IN RANGE

const var Knob9 = Content.getComponent("Knob9");
const var Minimum = Content.getComponent("Min");
const var Maximum = Content.getComponent("Mix");

inline function onrandom4Control(component, value)
{
	if (value == 1)
	
	{
	Knob9.setValue(Math.randInt(Minimum.getValue(), Maximum.getValue()+1));	
	}
};

Content.getComponent("random4").setControlCallback(onrandom4Control);

//COIN TOSS

//This hidden button selects between State 1 & State 2

inline function onGetValueButtonControl(component, value)
{
		if (value == 1)
	{
	Menu[5].setValue(Menu[3].getValue());
	Menu[5].changed();
	}
	
	if (value == 2)
		{
		Menu[5].setValue(Menu[4].getValue());
		Menu[5].changed();
		}
};

Content.getComponent("GetValueButton").setControlCallback(onGetValueButtonControl);

const var GetValueButton = Content.getComponent("GetValueButton");

//Randomise the hidden button

inline function onrandom5Control(component, value)
{
	if (value == 1)
	{

	GetValueButton.setValue(Math.randInt(1, 3));
	GetValueButton.changed();
	
	}
};


Content.getComponent("random5").setControlCallback(onrandom5Control);

//Get cables for mod based randomisers


const var rm = Engine.getGlobalRoutingManager();
const cable1 = rm.getCable("trig1");
cable1.setRange(0, 1);
const cable2 = rm.getCable("trig2");
cable2.setRange(0, 1);


//RANDOMISE ON TRIGGER

const var random6 = Content.getComponent("random6");
const var ValueSlider1 = Content.getComponent("ValueSlider1");

const var Tg3 = Content.getComponent("trig3");



//Randomise value

inline function onCb1(value)

 {
 	
 	if (value == 1){

	 random6.setValue(value);
 	 random6.changed();

 

 	 	}		
 	 
 	 	else{	

 	 	random6.setValue(value);
 	 	random6.changed();

 

 
 	 	} 
 };

cable1.registerCallback(onCb1, SyncNotification);


//connect button to trigger source



inline function onrandom6Control(component, value)
{
	ValueSlider1.setValue(Math.random());

if (value == 1){
	Tg3.setValue(Math.randInt(0, 2));
	Tg3.changed();
	}
	
	if (value == 0){
		Tg3.setValue(0);
		Tg3.changed();
		}
};

Content.getComponent("random6").setControlCallback(onrandom6Control);

inline function ontrig3Control(component, value)
{
	if (value == 1){
	
	 	 Synth.playNote(64, 127);
	
	 	 	}		
	 	 
	if (value == 0){	
	

	 	 	Engine.allNotesOff();
	
	 
	 	 	} 
};

Content.getComponent("trig3").setControlCallback(ontrig3Control);



//RANDOM TRIGGER WITH OFFSET



const var ValueSlider2 = Content.getComponent("ValueSlider2");

inline function onCb2(value)
 {
 	
 	if (value == 1){

	 ValueSlider2.setValue(value);
 	 ValueSlider2.changed();

 
 	 	}		
 	 
 	 	else{	

 	 	ValueSlider2.setValue(value);

 	 
 	 	} 
 };

cable2.registerCallback(onCb2, SyncNotification);

const var ScriptComboBox1 = Content.getComponent("ScriptComboBox1");

const var AudioLoopPlayer1 = Synth.getAudioSampleProcessor("Audio Loop Player1");
const slot1 = AudioLoopPlayer1.getAudioFile(0);
 
const var allList = [];
const var allIds = [];

const var AudioList = Engine.loadAudioFilesIntoPool();

allList.push("no file");
allIds.push("");

ScriptComboBox1.set("items", AudioList.join("\n"));

for(r in AudioList)
{
    allList.push(r.split("}")[1]);
    allIds.push(r);
}

 

const cable3 = rm.getCable("trig3");
cable3.setRange(1, AudioList.length);

inline function onCb3(value)
 {
 	
 	if (value == 1){

	 ScriptComboBox1.setValue(value);
 	 ScriptComboBox1.changed();
 
 	 	}		
 	 
 	 	else{	

 	 	ScriptComboBox1.setValue(value);
 	 	ScriptComboBox1.changed();
 	 
 	 	} 
 };

cable3.registerCallback(onCb3, SyncNotification);
 
inline function onScriptComboBox1Control(component, value)
{
	slot1.loadFile(ScriptComboBox1.getItemText());
};

Content.getComponent("ScriptComboBox1").setControlCallback(onScriptComboBox1Control);



function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 