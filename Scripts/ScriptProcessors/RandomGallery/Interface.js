Content.makeFrontInterface(800, 800);

const var list1 = [1, 2, 3, 4, 5];
const var list2 = ["dog", "cat", "book", "car","bat", "plant"];
const var list3 = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l"];

const var ComboBox1 = Content.getComponent("ComboBox1");
const var ComboBox2 = Content.getComponent("ComboBox2");
const var ComboBox3 = Content.getComponent("ComboBox3");

ComboBox1.set("items", list1.join("\n"));
ComboBox2.set("items", list2.join("\n"));
ComboBox3.set("items", list3.join("\n"));

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

inline function onrandom1Control(component, value)
{
	local lockA = Lock[0].getValue();
	local lockB = Lock[1].getValue();
	local lockC = Lock[2].getValue();


		if (lockA == 0)
	{
		    ComboBox1.setValue(Math.randInt(0, list1.length)+1);
  }
   
   if (lockB == 0)
   {
   	    Knob[0].setValue(Math.randInt(1, 5));	
       	
      }
      
      if (lockC == 0)
         {
         	    Knob[1].setValue(Math.randInt(-100, 1));
         	
            }
};

Content.getComponent("random1").setControlCallback(onrandom1Control);

inline function onrandom2Control(component, value)
{
	local lockA = Lock[3].getValue();
	local lockB = Lock[4].getValue();
	local lockC = Lock[5].getValue();

		if (lockA == 0)
	{
		    ComboBox2.setValue(Math.randInt(0, list2.length)+1);
  }
   
   if (lockB == 0)
   {
   	    Knob[2].setValue(Math.random());	
       	
      }
      
      if (lockC == 0)
       {
      
       	    Knob[3].setValue(Math.randInt(-100, 0));     	
      
            }        
};

Content.getComponent("random2").setControlCallback(onrandom2Control);

inline function onrandom3Control(component, value)
{
	local lockA = Lock[6].getValue();
	local lockB = Lock[7].getValue();
	local lockC = Lock[8].getValue();

	if (lockA == 0)
	{
		    ComboBox3.setValue(Math.randInt(0, list3.length)+1);
  }
   
   if (lockB == 0)
   {
   	    Knob[4].setValue(Math.randInt(1, 4));	
       	
      }
      
      if (lockC == 0)
         {
         	    Knob[5].setValue(Math.randInt(-100, 0));
         	
            }
};

Content.getComponent("random3").setControlCallback(onrandom3Control);

const var Knob9 = Content.getComponent("Knob9");
const var Minimum = Content.getComponent("Min");
const var Maximum = Content.getComponent("Mix");

inline function onrandom4Control(component, value)
{
	
	Knob9.setValue(Math.randInt(Minimum.getValue(), Maximum.getValue()+1));	
};

Content.getComponent("random4").setControlCallback(onrandom4Control);


inline function onMin1Control(component, value)
{
	//Add your custom logic here...
};

Content.getComponent("Min1").setControlCallback(onMin1Control);


const var Randoms = [Content.getComponent("random4"),
                     Content.getComponent("random3"),
                     Content.getComponent("random2"),
                     Content.getComponent("random1")];


inline function onRandomAllControl(component, value)
{
	//	 for(s in Randoms)
	  //    s.setValue(value);
	     for(s in Randoms)
	       s.changed();
};

Content.getComponent("RandomAll").setControlCallback(onRandomAllControl);

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
 