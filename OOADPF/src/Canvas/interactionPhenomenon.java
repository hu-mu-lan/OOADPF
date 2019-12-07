package Canvas;

import java.util.ArrayList;

public class interactionPhenomenon implements phenomenon{
	Arraylist<String> pList= null;
	
	public interactionPhenomenon(){
		Arraylist<String> pList= new ArrayList<>();
	}
	
	puclic addPhonomenen(String a){
		pList.add(a);
	}
	
	public minusPhonomenen（String a){
		int i =pList.indexOf(a);
		pList.remove(i);
	}
}
