package Canvas;

import java.util.ArrayList;

public class conInteractionPhenomenon implements phenomenon{
	boolean isConstraint = false;
	Arraylist<String> pList= null;
	
	public coninteractionPhenomenon(isConstraint){
		Arraylist<String> pList= new ArrayList<>();
		this.isConstraint=isConstraint;
	}
	puclic addPhonomenen(String a){
		pList.add(a);
	}
	
	public minusPhonomenen（String a){
		int i =pList.indexOf(a);
		pList.remove(i);
	}
	
	public changeConstraint(isConstraint){
		this.isConstraint=isConstraint;
	}
}
