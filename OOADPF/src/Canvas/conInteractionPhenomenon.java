package Canvas;

import java.util.ArrayList;

public class conInteractionPhenomenon implements phenomenon{
	boolean isConstraint = false;
	ArrayList<String> pList;
	
	public conInteractionPhenomenon(boolean isConstraint){
		pList= new ArrayList<String>();
		this.isConstraint=isConstraint;
	}
	public void addPhonomenon(String a){
		pList.add(a);
	}
	
	public void minusPhonomenon(String a) {
		int i =pList.indexOf(a);
		pList.remove(i);
	}
	
	public void changeConstraint(boolean isConstraint){
		this.isConstraint=isConstraint;
	}
	
	public ArrayList<String> getPlist(){
		return pList;
	}
	
	public boolean isempty() {
		return pList.isEmpty();
	}
}
