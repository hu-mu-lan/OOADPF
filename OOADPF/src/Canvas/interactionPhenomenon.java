package Canvas;

import java.util.ArrayList;

public class interactionPhenomenon implements phenomenon{
	Arraylist<String> pList= null;
	
	public interactionPhenomenon(){
		Arraylist<String> pList= new ArrayList<>();
	}
	
	public void addPhonomenen(String a){
		pList.add(a);
	}
	
	public void minusPhonomenen(String a){
		int i =pList.indexOf(a);
		pList.remove(i);
	}
}
