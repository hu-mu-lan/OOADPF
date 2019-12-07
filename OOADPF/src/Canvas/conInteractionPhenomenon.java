package Canvas;

import java.util.ArrayList;

public class conInteractionPhenomenon implements phenomenon{
	boolean isConstraint = false;
	Arraylist<String> pList= null;
	
	public coninteractionPhenomenon(isConstraint){
		Arraylist<String> pList= new ArrayList<>();
		this.isConstraint=isConstraint;
	}
	public void addPhonomenen(String a){
		pList.add(a);
	}
	
	public void minusPhonomenen(String a){
		int i =pList.indexOf(a);
		pList.remove(i);
	}
	
	public void changeConstraint(isConstraint){
		this.isConstraint=isConstraint;
	}
}
